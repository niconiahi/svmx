<script>
  let name = $state("nico");
  function changeName() {
    name = "jose";
  }
  document.body.addEventListener("htmx:afterSwap", function (event) {
    console.log("event", event);
    console.log("htmx swap event happened");
    if (event.target.id == "film-list") {
      const template = document.querySelector("#film-creation");
      const clone = template.content.cloneNode(true);
      const list = document.querySelector("#film-list");
      list.appendChild(clone);
    }
  });
</script>

<main>
  <h1>{name}</h1>
  <button onclick={changeName}>change name</button>
  <form action="/clock" method="post">
    <button>execute</button>
  </form>
  <div>
    <h1>Film List</h1>
    <ul id="film-list"></ul>
  </div>
  <form
    hx-post="/add-film/"
    hx-target="#film-list"
    hx-swap="beforeend"
    hx-indicator="#pending"
  >
    <div>
      <label for="film-title">Title</label>
      <input type="text" name="title" id="film-title" />
    </div>
    <div>
      <label for="film-director">Director</label>
      <input type="text" name="director" id="film-director" />
    </div>
    <span class="htmx-indicator" id="pending" role="status" aria-hidden="true">
      Saving film
    </span>
    <button type="submit">Submit</button>
  </form>
</main>
