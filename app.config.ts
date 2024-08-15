import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { createApp } from "vinxi";

export default createApp({
  routers: [
    {
      name: "public",
      type: "static",
      dir: "./public",
      base: "/",
    },
    {
      name: "client",
      type: "spa",
      handler: "./index.html",
      base: "/",
      plugins: () => [
        svelte({
          preprocess: [
            vitePreprocess(),
          ]
        }),
      ],
    },
    {
      name: "clock",
      type: "http",
      handler: "./src/handlers/clock.ts",
      base: "/clock",
    },
    {
      name: "add-film",
      type: "http",
      handler: "./src/handlers/add-film.ts",
      base: "/add-film",
      plugins: () => [
        svelte({
          preprocess: [
            vitePreprocess(),
          ]
        }),
      ],
    },
  ],
});
