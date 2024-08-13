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
  ],
});
