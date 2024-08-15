import { eventHandler } from "vinxi/http";
import { render } from "svelte/server";
import { compile } from "svelte/compiler";
import Film from '../Film.svelte'

export default eventHandler(async (event) => {
  const id = `film-creation`
  const { js, metadata } = compile('../Film.svelte', {
    generate: "client",
    runes: true,
  })
  console.log("metadata", metadata)
  console.log('js', js)
  const { body, head } = render(Film)
  console.log('body', body)
  console.log('head', head)
  const template = `
    <template id=${id}>
      <script type="module">
      ${js.code}
      </script>
      ${body}
    </template>
  `;
  const response = new Response(template, {
    headers: { 'content-type': 'text/html' },
  })
  event.respondWith(response)
})
