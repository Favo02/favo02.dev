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

- **Server-Only Access:** Since `GITHUB_TOKEN` is not prefixed with `PUBLIC_`, it is treated as a private server-side variable.
  It is only accessible in code that runs exclusively on the server (e.g., Astro frontmatter and API endpoints).
  It is never bundled into the client-side browser code.

### Docker & Runtime Configuration

- **Multi-Stage Build Security:** During the image build phase (`docker compose build`), `GITHUB_TOKEN` is passed via `ARG` to support any build-time data fetching.
  In the final production runtime stage, `ENV GITHUB_TOKEN=""` is explicitly declared.
  This prevents secret leakage by ensuring private keys are not permanently baked into the published image layers.

- **Runtime Injection:** When starting the container, the actual token is injected at runtime via `docker-compose.yml` (reading from the host's `.env` file).
  This runtime value overrides the default empty string, allowing the running Node.js server to query the GitHub GraphQL API when the in-memory cache expires.
