<script>
    import PokemonBaseStats from "./PokemonBaseStats.svelte";
    import capitalise from "../funcs/capitalise";
    import dbTypeColours from "../data/typeColours";
    export let data

    function getcolour(type, colourObject){
        return colourObject[type]
    }
</script>


<div class="infoScreen">
    <h2>{capitalise(data.name)}</h2>
    <PokemonBaseStats stats={data.stats}/>
    <div class="types-display">
        <h2>Types</h2>
        <div class="types">
            {#each data.types as type}
                <h3 class="type" style={`background-color: ${getcolour(type.type.name,dbTypeColours)}`}>{type.type.name}</h3>
            {/each}
        </div>
    </div>
</div>


<style>
    .infoScreen{
        width:50%;
        height:100%;

    }
    .types-display{
        width: 30%;
        text-align: center;
        align-items: center;
    }
    .types{
        display: flex;
        flex-direction: row;
    }
    .type{
        padding: 0.5em;
        border-radius: 50%;
    }
    
</style>