<script>
    import capitalise from "../funcs/capitalise.js"
    let baseURL = "https://pokeapi.co/api/v2/"
    let searchTerm = ["pokemon","type","ability","move"]
    let searchCategory = searchTerm[0]
    let types = ["normal","grass","fire","water","electricity","flying","bug","poison","rock","ground","fighting","psychic","ghost","ice","dragon","dark","steel","fairy"]
    let searchValue = ""
    $: fullUrl = baseURL+searchCategory+searchValue
</script>

<div class="searchForm">
    <div>
        <label for="searchTerms">Search By:</label>
        <select bind:value={searchCategory} name="searchTerms" id="searchTerms">
            {#each searchTerm as term}
                <option value={term}>{capitalise(term)}</option>
            {/each}
        </select>
    </div>
    <div>
        <label for="searchBar">{capitalise(searchCategory)}:</label>
        {#if searchCategory === "type"}
        <select bind:value={searchValue} name="types" id="types">
            {#each types as type}
                <option value={type}>{capitalise(type)}</option>
            {/each}
        </select>
        {:else}
        <input id="searchBar" bind:value={searchValue}/>
        {/if}
    </div>
    <button on:click={()=>{console.log(searchCategory)}}>Test</button>
</div>

<style>
    .searchForm{
        display:flex;
        flex-direction: column;
        padding: 1em;
        gap: 1em;
        border: black 2px solid;
    }
</style>