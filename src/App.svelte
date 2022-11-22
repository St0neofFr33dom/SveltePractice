<script>
  import HeroImage from "./lib/HeroImage.svelte";
  import PokemonList from "./lib/PokemonList.svelte";
  import SearchForm from "./lib/SearchForm.svelte";
  import InfoScreen from "./lib/InfoScreen.svelte"

  let dataList;
  let individualData;
  let defaultImage = {
    url: "https://purepng.com/public/uploads/large/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-17015278259020osdb.png",
    alt: "Pokeball",
  };
  $: fetchedImage = individualData
    ? {
        url: individualData.sprites.other.home.front_default,
        alt: individualData.name,
      }
    : {};
  // async function fetchData(){
  //   let response = await fetch("https://pokeapi.co/api/v2/pokemon/sunkern")
  //   data = await response.json()
  //   return
  // }
</script>

<main>
  <h1>Pokemon App</h1>
  <div class="selection">
    <SearchForm bind:dataList />
    <PokemonList {dataList} bind:individualData />
  </div>
  <div class="info-panel">
    {#if !individualData}
      <HeroImage heroImage={defaultImage} />
    {:else}
      <HeroImage heroImage={fetchedImage} />
      <InfoScreen data={individualData}/>
    {/if}
  </div>
</main>

<style>
  main{
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap:3em;
  }
  .selection {
    display: flex;
    width: 80vw;
    height: 30vh
  }
  .info-panel{
    display: flex;
    width: 80vw;
  }
</style>
