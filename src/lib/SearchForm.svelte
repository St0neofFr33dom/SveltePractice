<script>
    import capitalise from "../funcs/capitalise.js"
    import autoComplete from "../funcs/autoComplete.js"
    import pokemonArray from "../data/pokemon.js"
    import abilityArray from "../data/abilities.js"
    import moveArray from "../data/moves.js"

    let baseURL = "https://pokeapi.co/api/v2/"
    let searchTerm = ["pokemon","type","ability","move"]
    let searchCategory = searchTerm[0]
    let typeArray = ["normal","grass","fire","water","electricity","flying","bug","poison","rock","ground","fighting","psychic","ghost","ice","dragon","dark","steel","fairy"]
    let searchValue = ""
    let arraySelection = {pokemon:pokemonArray,ability:abilityArray,type:typeArray,move:moveArray}
    $: predictedArray = (searchValue.length > 1) ? autoComplete(searchValue,arraySelection[searchCategory]) : []
    $: fullUrl = baseURL+searchCategory+searchValue

    function handleChange(){
        searchValue = ""
    }
</script>

<div class="searchForm">
    <div>
        <label for="searchTerms">Search By:</label>
        <select bind:value={searchCategory} name="searchTerms" id="searchTerms" on:change={handleChange}>
            {#each searchTerm as term}
                <option value={term}>{capitalise(term)}</option>
            {/each}
        </select>
    </div>
    <div>
        <label for="searchBar">{capitalise(searchCategory)}:</label>
        <div class="barAndAutoComplete">
            <input id="searchBar" bind:value={searchValue}/>
            {#if searchValue.length > 1}
            {#each predictedArray as suggestion}
                <div>{suggestion}</div>
            {/each}
        {/if}
        </div>
    </div>
    <button on:click={()=>{
        console.log(searchValue)
        console.log(predictedArray)}
    }>Test</button>
</div>

<style>
    .searchForm{
        display:flex;
        flex-direction: column;
        padding: 1em;
        gap: 1em;
        border: black 2px solid;
    }
    .barAndAutoComplete{
        display:flex;
        flex-direction: column;
    }
</style>