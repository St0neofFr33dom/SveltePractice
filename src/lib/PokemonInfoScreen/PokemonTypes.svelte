<script>
 export let types

import dbTypeColours from "../../data/typeColours";
import capitalise from "../../funcs/capitalise";

function getcolour(type, colourObject){
        return colourObject[type]
    }
</script>

<div class="types-display">
    <h2>Types</h2>
    <div class="types">
        {#each types as type}
            <h3 class="type" style={`background-color: ${getcolour(type.type.name,dbTypeColours)}`}>{capitalise(type.type.name)}</h3>
        {/each}
    </div>
</div>

<style>
    .types-display{
        width: fit-content;
        padding: 0 0.25rem;
        text-align: center;
        align-items: center;
        border: black solid 1px;
    }
    .types{
        display: flex;
        flex-direction: column;
    }
    .type{
        border-radius: 20%;
        width:80%;
        padding: 0.2rem;
        margin: 0.2rem;
    }
</style>