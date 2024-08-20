import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";


export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    remix({
      ssr: false,
      ignoredRouteFiles: ["**/*.css"],
    }),
    tsconfigPaths(),
    vanillaExtractPlugin(),
  ],
});
