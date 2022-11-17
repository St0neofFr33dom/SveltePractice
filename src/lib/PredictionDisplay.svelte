<script>
import autoComplete from "../funcs/autoComplete";

 export let searchValue
 export let arraySelection
 export let searchCategory
 export let focused

 let currentFocus = 0
 $: predictedArray = (searchValue.length > 1) ? autoComplete(searchValue,arraySelection[searchCategory]) : []

 function handleClick(e){
    searchValue = e.target.innerText
    focused = false
 }

</script>

<div class="predictions">
    {#if focused && searchValue.length > 1}
    {#each predictedArray as suggestion}
        <div class="suggestion" on:click={handleClick}>{suggestion}</div>
    {/each}
{/if}
</div>

<style>
.predictions{
        width:100%;
        height: 10em;
        overflow-y: scroll;
        border: 1px black solid;
}
.suggestion{
    width: 100%;
    height: 20%;
}
.suggestion:hover{
    background-color: cadetblue;
    color:brown;
    cursor: pointer;
}
</style>