<script>

  import Router from "svelte-spa-router"
  import Home from "./routes/Home.svelte"; 
  import NotFound from "./routes/NotFound.svelte";
  // @ts-ignore
  import Results from "./routes/Results.svelte";

 

  let routes = {
    "/":Home,
    "/results/:id": Results,
    "*": NotFound
  }
</script>

<main>

  <Router {routes} />

  
</main>
