/**
 * GitHub GraphQL service for fetching repository data.
 * Uses a single GraphQL query to get all repos from multiple accounts
 * with languages, avoiding the REST API rate limit issues.
 *
 * Caching strategy:
 * - Build-time: fetches once and caches to a JSON file
 * - Runtime: server endpoint with in-memory TTL cache (1 hour)
 */

export interface GitHubRepo {
  name: string
  fullName: string
  description: string | null
  url: string
  homepageUrl: string | null
  stargazerCount: number
  forkCount: number
  isArchived: boolean
  isFork: boolean
  pushedAt: string
  createdAt: string
  lastCommitAt: string
  primaryLanguage: {
    name: string
    color: string
  } | null
  languages: {
    name: string
    color: string
  }[]
  topics: string[]
  owner: string
  source: "personal" | "academic"
}

// Repos to ignore (can be customized)
const IGNORED_REPOS: string[] = [
  // Add repo names to ignore here
  // e.g., "Favo02", ".github"
]

// Users to fetch from
const GITHUB_USERS = [
  { login: "Favo02", source: "personal" as const },
  { login: "Favo02-unimi", source: "academic" as const },
]

// Featured repos (displayed prominently at the top)
export const FEATURED_REPOS: string[] = [
  "workspaces-by-open-apps",
  "cess-advisor",
  "homelab",
  "recommendation-system",
]

// Highlighted repos (visually accented inside the list — edit to taste)
export const HIGHLIGHTED_REPOS: string[] = [
  "typst-notes-template",
  "advent-of-code",
  "dotfiles",
  "homelab",
]

const GRAPHQL_QUERY = `
query($login: String!, $first: Int!) {
  repositoryOwner(login: $login) {
    repositories(first: $first, orderBy: {field: PUSHED_AT, direction: DESC}) {
      nodes {
        name
        nameWithOwner
        description
        url
        homepageUrl
        stargazerCount
        forkCount
        isArchived
        isFork
        pushedAt
        createdAt
        primaryLanguage {
          name
          color
        }
        languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
          nodes {
            name
            color
          }
        }
        repositoryTopics(first: 10) {
          nodes {
            topic {
              name
            }
          }
        }
        defaultBranchRef {
          target {
            ... on Commit {
              committedDate
            }
          }
        }
      }
    }
  }
}
`

interface GraphQLResponse {
  data: {
    repositoryOwner: {
      repositories: {
        nodes: Array<{
          name: string
          nameWithOwner: string
          description: string | null
          url: string
          homepageUrl: string | null
          stargazerCount: number
          forkCount: number
          isArchived: boolean
          isFork: boolean
          pushedAt: string
          createdAt: string
          primaryLanguage: { name: string; color: string } | null
          languages: { nodes: Array<{ name: string; color: string }> }
          repositoryTopics: { nodes: Array<{ topic: { name: string } }> }
          defaultBranchRef: {
            target: {
              committedDate: string
            } | null
          } | null
        }>
      }
    }
  }
  errors?: Array<{ message: string }>
}

async function fetchUserReposGraphQL(
  login: string,
  source: "personal" | "academic",
  token: string,
): Promise<GitHubRepo[]> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers,
    body: JSON.stringify({
      query: GRAPHQL_QUERY,
      variables: { login, first: 100 },
    }),
  })

  if (!response.ok) {
    console.error(
      `GitHub GraphQL API error for ${login}: ${response.status} ${response.statusText}`,
    )
    return []
  }

  const json = (await response.json()) as GraphQLResponse

  if (json.errors) {
    console.error(`GitHub GraphQL errors for ${login}:`, json.errors)
    return []
  }

  return json.data.repositoryOwner.repositories.nodes
    .filter((repo) => !IGNORED_REPOS.includes(repo.name))
    .map((repo) => ({
      name: repo.name,
      fullName: repo.nameWithOwner,
      description: repo.description,
      url: repo.url,
      homepageUrl: repo.homepageUrl,
      stargazerCount: repo.stargazerCount,
      forkCount: repo.forkCount,
      isArchived: repo.isArchived,
      isFork: repo.isFork,
      pushedAt: repo.pushedAt,
      createdAt: repo.createdAt,
      lastCommitAt:
        repo.defaultBranchRef?.target?.committedDate || repo.pushedAt,
      primaryLanguage: repo.primaryLanguage,
      languages: repo.languages.nodes,
      topics: repo.repositoryTopics.nodes.map((t) => t.topic.name),
      owner: login,
      source,
    }))
}

// REST API fallback (no auth required, but rate-limited to 60 req/hour)
interface RestRepo {
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  forks_count: number
  archived: boolean
  fork: boolean
  pushed_at: string
  created_at: string
  language: string | null
  topics: string[]
}

async function fetchUserReposREST(
  login: string,
  source: "personal" | "academic",
): Promise<GitHubRepo[]> {
  const response = await fetch(
    `https://api.github.com/users/${login}/repos?per_page=100&sort=pushed`,
    { headers: { Accept: "application/vnd.github.v3+json" } },
  )

  if (!response.ok) {
    console.error(
      `GitHub REST API error for ${login}: ${response.status} ${response.statusText}`,
    )
    return []
  }

  const repos = (await response.json()) as RestRepo[]

  return repos
    .filter((repo) => !IGNORED_REPOS.includes(repo.name))
    .map((repo) => ({
      name: repo.name,
      fullName: repo.full_name,
      description: repo.description,
      url: repo.html_url,
      homepageUrl: repo.homepage,
      stargazerCount: repo.stargazers_count,
      forkCount: repo.forks_count,
      isArchived: repo.archived,
      isFork: repo.fork,
      pushedAt: repo.pushed_at,
      createdAt: repo.created_at,
      lastCommitAt: repo.pushed_at,
      primaryLanguage: repo.language
        ? { name: repo.language, color: "#888" }
        : null,
      languages: repo.language ? [{ name: repo.language, color: "#888" }] : [],
      topics: repo.topics || [],
      owner: login,
      source,
    }))
}

export async function fetchAllRepos(token?: string): Promise<GitHubRepo[]> {
  const useGraphQL = !!token

  const results = await Promise.all(
    GITHUB_USERS.map(({ login, source }) =>
      useGraphQL
        ? fetchUserReposGraphQL(login, source, token)
        : fetchUserReposREST(login, source),
    ),
  )

  if (!useGraphQL) {
    console.warn(
      "No GITHUB_TOKEN set — using REST API fallback (rate-limited to 60 req/hour)",
    )
  }

  const allRepos = results.flat()

  // Sort by most recent commit
  allRepos.sort(
    (a, b) =>
      new Date(b.lastCommitAt).getTime() - new Date(a.lastCommitAt).getTime(),
  )

  return allRepos
}

// --- Caching ---

// In-memory cache for server endpoint
let cachedData: { repos: GitHubRepo[]; timestamp: number } | null = null
const CACHE_TTL_MS = 24 * 60 * 60 * 1000 // 24 hours

export async function getCachedRepos(): Promise<GitHubRepo[]> {
  const now = Date.now()

  if (cachedData && now - cachedData.timestamp < CACHE_TTL_MS) {
    return cachedData.repos
  }

  const token = import.meta.env.GITHUB_TOKEN
  const repos = await fetchAllRepos(token)

  cachedData = { repos, timestamp: now }

  return repos
}

// Categorize repos
export function categorizeRepos(repos: GitHubRepo[]) {
  // Keep the order defined by FEATURED_REPOS const
  const featured = FEATURED_REPOS.map((name) =>
    repos.find((r) => r.name === name),
  ).filter((r): r is GitHubRepo => !!r)

  const personal = repos.filter(
    (r) => r.source === "personal" && !FEATURED_REPOS.includes(r.name),
  )
  const academic = repos.filter(
    (r) => r.source === "academic" && !FEATURED_REPOS.includes(r.name),
  )

  return { featured, personal, academic }
}

/** Returns true when the repo should be visually highlighted in the list. */
export function isHighlighted(repoName: string): boolean {
  return HIGHLIGHTED_REPOS.includes(repoName)
}
