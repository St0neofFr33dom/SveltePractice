<script>
 export let dataList
 export let individualData

$: if(dataList.category === "pokemon"){
    individualData = dataList.payload
}
</script>

<div>
    <div>
        {#if dataList.category === "type"}
            {#each dataList.payload.pokemon as entry}
                <div data-url={entry.pokemon.url}>{entry.pokemon.name}</div>
            {/each}
        {:else if dataList.category === "ability"}
            {#each dataList.payload.pokemon as entry}
                <div data-url={entry.pokemon.url}>{entry.pokemon.name}</div>
            {/each}
        {:else if dataList.category === "move"}
            {#each dataList.payload["learned_by_pokemon"] as entry}
                <div data-url={entry.url}>{entry.name}</div>
            {/each}
        {:else if dataList.category ==="pokemon"}
            <div>{individualData.name}</div>
        {/if}
    </div>
    <button on:click={()=>{console.log(dataList)}}>Log</button>
</div>

<style>

</style>