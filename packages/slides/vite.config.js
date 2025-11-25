import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  base: '/conventional-changelog/',
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "slides.md",
          dest: ".",
        },
        {
          src: "assets/*",
          dest: "assets",
        },
      ],
    }),
  ],
});
