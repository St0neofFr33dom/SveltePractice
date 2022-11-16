<script>
  import HeroImage from "./lib/HeroImage.svelte";
  import SearchForm from "./lib/SearchForm.svelte"
  let data 
  $: fetchedImage = {url: (data) ? data.sprites.other.home.front_default : "https://purepng.com/public/uploads/large/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-17015278259020osdb.png", alt: (data) ? data.name : "Pokeball"}
  async function fetchData(){
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/sunkern")
    data = await response.json()
    return
  }
</script>

<main>
  <h1>Pokemon App</h1>
  <HeroImage heroImage={fetchedImage} />
  <button on:click={fetchData}>Get</button>
  <SearchForm />
</main>

<style>

</style>
