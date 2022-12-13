<script>
    import PokemonBaseStats from "./PokemonBaseStats.svelte";
    import PokemonTypes from "./PokemonTypes.svelte";
    import capitalise from "../../funcs/capitalise";
    import PokemonAbilities from "./PokemonAbilities.svelte";
    export let data

    $: url = data["sprites"]["other"]["home"]["front_default"]
</script>


<div class="pokeDex">
    <div class="picture">
        <h2>{capitalise(data.name)}</h2>
        <img src={url} alt={data.name} title={data.name}/>
    </div>
    <div class="infoScreen">
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
        <PokemonAbilities abilities={data.abilities}/>
    </div>
</div>


<style>
    .pokeDex{
        width:100%;
        height:100%;
        display: flex;
        flex-direction: row;
    }
    .infoScreen{
        width:70%;
        height:100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
        border: black solid 1px;
    }
    .picture {
        width: 30%;
        height: 100%;
        background-color: aquamarine;
        border: solid 1px black;
    }
    .picture > h2{
        padding: 0;
        margin: 0;
    }
    .picture > img{
        width: 100%;
        padding: 1rem 0;
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