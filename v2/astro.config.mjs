// @ts-check
import { defineConfig } from "astro/config"

import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import node from "@astrojs/node"
import rehypeExternalLinks from "rehype-external-links"
import { unified } from "@astrojs/markdown-remark"

// https://astro.build/config
export default defineConfig({
  site: "https://favo02.dev",
  output: "server",
  markdown: {
    processor: unified({
      rehypePlugins: [
        [
          rehypeExternalLinks,
          {
            target: "_blank",
            rel: ["noopener", "noreferrer"],
            // Only open external links in a new tab
            // keep internal links (site-relative or anchor) internal
            test: (node) => {
              const href = node.properties?.href
              if (typeof href !== "string") return false
              return !href.startsWith("/") && !href.startsWith("#")
            },
          },
        ],
      ],
    }),
  },
  integrations: [mdx(), sitemap()],
  adapter: node({
    mode: "standalone",
  }),
})
