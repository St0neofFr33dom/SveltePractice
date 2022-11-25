<script>
    import PokemonBaseStats from "./PokemonBaseStats.svelte";
    import PokemonTypes from "./PokemonTypes.svelte";
    import capitalise from "../../funcs/capitalise";
    import dbTypeColours from "../../data/typeColours";
    export let data

    function getcolour(type, colourObject){
        return colourObject[type]
    }
</script>


<div class="infoScreen">
    <h2>{capitalise(data.name)}</h2>
    <PokemonBaseStats stats={data.stats}/>
    <PokemonTypes types={data.types} />
    <div class="dimensions">
        <div class="tab">
            <h3>Avg. Height:</h3>
            <h3>{data.height / 10}m</h3>
        </div>
        <div class="tab">
            <h3>Avg. Weight:</h3>
            <h3>{data.weight / 10}kg</h3>
        </div>
    </div>
</div>


<style>
    .infoScreen{
        width:50%;
        height:100%;
        display: flex;
        flex-wrap: wrap;
    }
    .dimensions{
        display: flex;
        flex-direction: column;
    }
    .tab{
        display: flex;
        gap: 0.5em
    }
    
</style>