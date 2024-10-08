import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";
import { copyFileSync } from "node:fs";
import { join } from "node:path";
import babel from "vite-plugin-babel";

const ReactCompilerConfig = {
  // sources: (filename: string) => {
  //   return filename.indexOf('app') !== -1;
  // },
};

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    remix({
      ssr: false,
      ignoredRouteFiles: ["**/*.css"],
      // https://github.com/brookslybrand/remix-gh-pages
      // thank you brookslybrand & sergiodxa
      buildEnd(args) {
        if (!args.viteConfig.isProduction) return;

        // When deploying to GitHub Pages, if you navigate from / to another
        // route and refresh the tab, it will show the default GH Pages 404
        // page. This happens because GH Pages is not configured to send all
        // traffic to the index.html where we can load our client-side JS.
        // To fix this, we can create a 404.html file that contains the same
        // content as index.html. This way, when the user refreshes the page,
        // GH Pages will serve our 404.html and everything will work as
        //expected.
        const buildPath = args.viteConfig.build.outDir;
        copyFileSync(
          join(buildPath, "index.html"),
          join(buildPath, "404.html"),
        );
      },
    }),
    babel({
      filter: /\.[jt]sx?$/,
      babelConfig: {
        presets: ["@babel/preset-typescript"], // if you use TypeScript
        plugins: [
          ["babel-plugin-react-compiler", ReactCompilerConfig],
        ],
      },
    }),
    tsconfigPaths(),
    vanillaExtractPlugin(),
  ],
});
