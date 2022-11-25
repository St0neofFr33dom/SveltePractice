<script>
 export let types

import dbTypeColours from "../../data/typeColours";

function getcolour(type, colourObject){
        return colourObject[type]
    }
</script>

<div class="types-display">
    <h2>Types</h2>
    <div class="types">
        {#each types as type}
            <h3 class="type" style={`background-color: ${getcolour(type.type.name,dbTypeColours)}`}>{type.type.name}</h3>
        {/each}
    </div>
</div>

<style>
    .types-display{
        width: 40%;
        text-align: center;
        align-items: center;
    }
    .types{
        display: flex;
        flex-direction: row;
    }
    .type{
        padding: 0.5em;
        margin: 0.5em;
        border-radius: 50%;
        width:45%;
    }
</style>