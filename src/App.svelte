<script>
  import HeroImage from "./lib/HeroImage.svelte";
  import PokemonList from "./lib/PokemonList.svelte";
  import SearchForm from "./lib/SearchForm.svelte"

  let dataList
  let individualData 
  let defaultImage = {url: "https://purepng.com/public/uploads/large/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-17015278259020osdb.png", alt: "Pokeball"}
  $: fetchedImage = (individualData) ? {url: individualData.sprites.other.home.front_default, alt:individualData.name} : {}
  // async function fetchData(){
  //   let response = await fetch("https://pokeapi.co/api/v2/pokemon/sunkern")
  //   data = await response.json()
  //   return
  // }
</script>

<main>
  <h1>Pokemon App</h1>
  {#if !dataList}
  <HeroImage heroImage={defaultImage} />
  {:else}
  <div>
    <PokemonList dataList={dataList} bind:individualData={individualData}/>
    <HeroImage heroImage={fetchedImage} />
  </div>
  {/if}
  <SearchForm bind:dataList={dataList} />
</main>

<style>

</style>
