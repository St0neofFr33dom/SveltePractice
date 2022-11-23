<script>
    export let stats
    import capitalise from "../funcs/capitalise";

    function setTab(string){
        if(string.includes("special")){
            let splitString = string.split("-")
           let shortenedString = capitalise(splitString[1])
           let tab = "Sp." + shortenedString
           return tab
        }
        return capitalise(string)
    }
</script>

<div class="statsScreen">
    <h2>Base Stats</h2>
    {#each stats as statBlock}
    <div class="statBlock">
        <div style="width:50%">{setTab(statBlock.stat.name)}</div>
        <div style="width:50%">{statBlock.base_stat}</div>
    </div>
    {/each}
</div>

<style>
    .statsScreen{
        width:35%
    }
 .statBlock{
        display:flex;
        text-align: center;
        gap: 1em;
        border: 1px black solid;
    }
</style>