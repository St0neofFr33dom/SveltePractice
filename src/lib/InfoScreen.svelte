<script>
    import capitalise from "../funcs/capitalise";
    export let data
</script>


<div class="infoScreen">
    <h2>{capitalise(data.name)}</h2>
    <div class="statsScreen">
        {#each data.stats as statBlock}
        <div class="statBlock">
            <div style="width:50%">{statBlock.stat.name}</div>
            <div style="width:50%">{statBlock.base_stat}</div>
        </div>
        {/each}
    </div>
</div>


<style>
    .infoScreen{
        width:50%;
        height:100%;

    }
    .statBlock{
        display:flex;
        text-align: center;
        gap: 1em;
        border: 1px black solid
    }
</style>