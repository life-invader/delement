import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import mainPage from "./src/pages/index/index";
import aboutPage from "./src/pages/about/index";
import contactsPage from "./src/pages/contacts/index";

const pages = [
  {
    name: "index",
    content: mainPage(),
  },
  {
    name: "about",
    content: aboutPage(),
  },
  {
    name: "contacts",
    content: contactsPage(),
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
});
