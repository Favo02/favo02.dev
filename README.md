# favo02.dev v2

Personal website, rebuilt from scratch with a typography-driven, minimalist design.

**Stack:** Astro 5, vanilla CSS, GitHub GraphQL API, Content Collections (MDX)

## Development

```bash
npm install
npm run dev
```

## Environment Variables

| Variable       | Description                                  | Required                |
| :------------- | :------------------------------------------- | :---------------------- |
| `GITHUB_TOKEN` | GitHub Personal Access Token for GraphQL API | Yes (for projects page) |

Create a `.env` file:

```
GITHUB_TOKEN=ghp_your_token_here
```

## Deployment

```bash
docker compose build
docker compose up -d
```

## Structure

```
src/
├── content/         # Blog posts (MDX), devlog entries (MD)
├── components/      # Astro components
├── layouts/         # Base and prose layouts
├── pages/           # Routes
├── services/        # GitHub API service
└── styles/          # Global CSS design system
```

## License

[Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)
