# Multi-stage build for Astro SSR with Node adapter
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .

# Build argument for GitHub token (used at build time for fetching repos)
ARG GITHUB_TOKEN=""
ENV GITHUB_TOKEN=${GITHUB_TOKEN}

RUN npm run build

# Production stage
FROM node:22-alpine AS runtime

WORKDIR /app

# Copy built output
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./

# Runtime env
ENV HOST=0.0.0.0
ENV PORT=4321
ENV GITHUB_TOKEN=""

EXPOSE 4321

CMD ["node", "dist/server/entry.mjs"]
