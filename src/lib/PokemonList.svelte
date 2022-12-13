<script>
  export let dataList = {category:"blank"};
  export let individualData;

  async function getRequest(e) {
    let url = e.target.dataset.url;
    let response = await fetch(url);
    let data = await response.json();
    return (individualData = data);
  }

  $: if (dataList.category === "pokemon") {
    individualData = dataList.payload;
  }
</script>


<div class="pokemonList">
  {#if dataList.category === "type"}
    {#each dataList.payload.pokemon as entry}
      <div data-url={entry.pokemon.url} on:click={getRequest} class="result">
        {entry.pokemon.name}
      </div>
    {/each}
  {:else if dataList.category === "ability"}
    {#each dataList.payload.pokemon as entry}
      <div data-url={entry.pokemon.url} on:click={getRequest} class="result">
        {entry.pokemon.name}
      </div>
    {/each}
  {:else if dataList.category === "move"}
    {#each dataList.payload["learned_by_pokemon"] as entry}
      <div data-url={entry.url} on:click={getRequest} class="result">{entry.name}</div>
    {/each}
  {:else if dataList.category === "pokemon"}
    <div class="result">{individualData.name}</div>
  {:else}
  <div>Who's that pokemon?</div>
  {/if}
</div>

<style>
    .pokemonList{
        overflow-y: scroll;
        height: 100%;
        width:30%;
        border: 1px black solid;
    }
    .result{
      font-size: 1.5rem;
      padding: 0.5rem
    }
    .result:hover{
      cursor: pointer;
      background-color: cadetblue;
      color: brown;
    }
</style>
