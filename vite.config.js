import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import mainPage from "./src/pages/index/index";
import cartPage from "./src/pages/cart/index";
import catalogPage from "./src/pages/catalog/index";

const pages = [
  {
    name: "index",
    content: mainPage(),
  },
  {
    name: "catalog",
    content: catalogPage(),
  },
  {
    name: "cart",
    content: cartPage(),
  },
];

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      entry: "src/app/main.js",
      pages: pages.map(({ name, content }) => {
        return {
          filename: `${name}.html`,
          template: `${name}.html`,
          injectOptions: {
            data: {
              injectScript: content,
            },
          },
        };
      }),
    }),
  ],
  build: {
    target: "esnext",
  },
});
