## favo02.dev

Simple typography-driven, minimalist design personal website.

## Structure

**Stack:** Astro 5, vanilla CSS, GitHub GraphQL API, Content Collections (MDX)

```
src/
├── content/         # Blog posts (MDX)
├── components/      # Astro components
├── layouts/         # Base and prose layouts
├── pages/           # Routes
├── services/        # GitHub API service
└── styles/          # Global CSS design system
```

## Environment Variables

- `GITHUB_TOKEN`: GitHub Personal Access Token for GraphQL API

For blog comments and reactions (see [Comments Setup (Giscus)](#comments-setup-giscus) for setup instructions):

- `PUBLIC_GISCUS_REPO`: The discussion host GitHub repository (e.g., `username/repo`).
- `PUBLIC_GISCUS_REPO_ID`: The unique ID of the target repository.
- `PUBLIC_GISCUS_CATEGORY`: The repository Discussion category (e.g., `Announcements`).
- `PUBLIC_GISCUS_CATEGORY_ID`: The unique ID of the Discussion category.

> [!NOTE]
> `GITHUB_TOKEN` is not strictly required, but highly recommended.
>
> A fallback is implemented using REST API. Some repositories are entirely missed (academic and contributions), less properties are retrieved.

## Development & Deployment

Dev:

```bash
npm install
npm run dev
```

Deploy:

```bash
docker compose build
docker compose up -d
```

### Astro Environment Variable Handling

- **Security Boundary:** Astro (using Vite) separates private environment variables.
  Only variables prefixed with `PUBLIC_` are exposed to client-side/frontend JavaScript and bundled into the browser-facing code.

- **Client-Side Access:** Because Giscus executes in the user's browser, its configuration variables are prefixed with `PUBLIC_` (`PUBLIC_GISCUS_*`) to safely expose them to the frontend iframe initialization script.

- **Server-Only Access:** Since `GITHUB_TOKEN` is not prefixed with `PUBLIC_`, it is treated as a private server-side variable.
  It is only accessible in code that runs exclusively on the server (e.g., Astro frontmatter and API endpoints).
  It is never bundled into the client-side browser code.

### Docker & Runtime Configuration

- **Multi-Stage Build Security:** During the image build phase (`docker compose build`), `GITHUB_TOKEN` is passed via `ARG` to support any build-time data fetching.
  In the final production runtime stage, `ENV GITHUB_TOKEN=""` is explicitly declared.
  This prevents secret leakage by ensuring private keys are not permanently baked into the published image layers.

- **Runtime Injection:** When starting the container, the actual token is injected at runtime via `docker-compose.yml` (reading from the host's `.env` file).
  This runtime value overrides the default empty string, allowing the running Node.js server to query the GitHub GraphQL API when the in-memory cache expires.

### Comments Setup (Giscus)

The comments section on blog posts is powered by [Giscus](https://giscus.app/), which uses GitHub Discussions as a backend database and authentication provider.

- **Authentication:** Commenters log in using their GitHub account.
- **Storage**: Comments are stored as replies to a matching GitHub Discussion thread under the repository.
  The discussion name is the page slug (e.g. blog/2026-03-22-article-title).
- **Theme toggle:** A listener is attached to automatically change theme.
- **View Transitions Ready:** A listener is attached to `astro:after-swap` to ensure the comments iframe loads correctly during dynamic page swaps.

Setup Instructions:

1. Make sure the repository that hosts the discussion is **public** on GitHub.
2. Enable **Discussions** in the repository settings tab on GitHub.
3. Install the [Giscus GitHub App](https://github.com/apps/giscus) and grant it access to the repository.
4. Create a Discussion Category (recommended of type **Announcement** so visitors can only create threads via the site).
5. Visit [giscus.app](https://giscus.app/), fill in the repository and category details, and copy the generated credentials into `.env` file.
