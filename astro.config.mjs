// @ts-check
import { defineConfig } from "astro/config"

import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import node from "@astrojs/node"

// https://astro.build/config
export default defineConfig({
  site: "https://favo02.dev",
  output: "server",
  integrations: [mdx(), sitemap()],
  adapter: node({
    mode: "standalone",
  }),
  // Blog is served under blog.favo02.dev subdomain.
  // The same Astro app handles both domains — the reverse proxy
  // (nginx) routes blog.favo02.dev to /blog/* paths.
  // No redirect needed here; nginx handles the routing.
})
