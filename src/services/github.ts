/**
 * GitHub GraphQL service for fetching repository data.
 * Uses a single GraphQL query to get all repos from the Favo02 account.
 * Favo02 is a member of Favo02-unimi org, so org repos are included automatically.
 * Categorization is based on the actual fullName owner, not the fetch account.
 *
 * Caching strategy:
 * - Runtime: server endpoint with in-memory TTL cache (24 hours)
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
}

// Repos to ignore (can be customized)
const IGNORED_REPOS: string[] = [
  // Add repo names to ignore here
  // e.g., "Favo02", ".github"
]

// Single account to fetch from.
// All contributions are included too.
export const FETCH_LOGIN = "Favo02"

// Maps GitHub owner login (lower-case) → section.
// fullName owner not in this map → contributions.
export const OWNER_SECTIONS: Record<string, "personal" | "academic"> = {
  favo02: "personal",
  "favo02-unimi": "academic",
}

// Featured repos (displayed prominently at the top)
export const FEATURED_REPOS: string[] = [
  "workspaces-by-open-apps",
  "homelab",
  "recommendation-system",
]

// Highlighted repos (visually accented inside the list — edit to taste)
export const HIGHLIGHTED_REPOS: string[] = [
  "cess-advisor",
  "competitive-programming",
  "algorithms-for-massive-datasets",
  "algoritmi-e-complessita",
  "statistica-e-analisi-dei-dati",
  "linguaggi-di-programmazione",
  "rusty-ex",
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

async function fetchReposGraphQL(token: string): Promise<GitHubRepo[]> {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: GRAPHQL_QUERY,
      variables: { login: FETCH_LOGIN, first: 100 },
    }),
  })

  if (!response.ok) {
    console.error(
      `GitHub GraphQL API error: ${response.status} ${response.statusText}`,
    )
    return []
  }

  const json = (await response.json()) as GraphQLResponse

  if (json.errors) {
    console.error("GitHub GraphQL errors:", json.errors)
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
      owner: repo.nameWithOwner.split("/")[0],
    }))
}

// REST API fallback (no auth required, but rate-limited to 60 req/hour)
// NOTE: REST /users/{login}/repos only returns repos owned by the user,
// so Favo02-unimi org repos will not appear in the fallback path.
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

async function fetchReposREST(): Promise<GitHubRepo[]> {
  const response = await fetch(
    `https://api.github.com/users/${FETCH_LOGIN}/repos?per_page=100&sort=pushed&type=all`,
    { headers: { Accept: "application/vnd.github.v3+json" } },
  )

  if (!response.ok) {
    console.error(
      `GitHub REST API error: ${response.status} ${response.statusText}`,
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
      owner: repo.full_name.split("/")[0],
    }))
}

export async function fetchAllRepos(token?: string): Promise<GitHubRepo[]> {
  let repos: GitHubRepo[]

  if (token) {
    repos = await fetchReposGraphQL(token)
  } else {
    console.warn(
      "No GITHUB_TOKEN set — using REST API fallback (rate-limited, org repos may be missing)",
    )
    repos = await fetchReposREST()
  }

  // Sort by most recent commit
  repos.sort(
    (a, b) =>
      new Date(b.lastCommitAt).getTime() - new Date(a.lastCommitAt).getTime(),
  )

  return repos
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
  // Extract actual GitHub owner from fullName ("owner/repo")
  const ownerOf = (r: GitHubRepo) => r.fullName.split("/")[0].toLowerCase()

  // A repo is "own" if its fullName owner maps to a known section and it's not a fork.
  // Forks + repos from unlisted owners → contributions.
  const isOwnRepo = (r: GitHubRepo) => ownerOf(r) in OWNER_SECTIONS && !r.isFork

  // Keep the order defined by FEATURED_REPOS const
  const featured = FEATURED_REPOS.map((name) =>
    repos.find((r) => r.name === name),
  ).filter((r): r is GitHubRepo => !!r)

  const personal = repos.filter(
    (r) =>
      ownerOf(r) === "favo02" && !r.isFork && !FEATURED_REPOS.includes(r.name),
  )

  const academic = repos.filter(
    (r) =>
      ownerOf(r) === "favo02-unimi" &&
      !r.isFork &&
      !FEATURED_REPOS.includes(r.name),
  )

  // Forks + repos from other owners = contributions
  const contributions = repos.filter(
    (r) => !isOwnRepo(r) && !FEATURED_REPOS.includes(r.name),
  )

  return { featured, personal, academic, contributions }
}

/** Returns true when the repo should be visually highlighted in the list. */
export function isHighlighted(repoName: string): boolean {
  return HIGHLIGHTED_REPOS.includes(repoName)
}
