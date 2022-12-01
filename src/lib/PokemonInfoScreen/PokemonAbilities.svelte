<script>
    export let abilities
    let fetchedData = "Ability Description"

    async function fetchData(url){
        let response = await fetch(url)
        let data = await response.json()
        console.log(data)
        let abilityText = data["effect_entries"].filter((entry)=>{
            if (entry.language.name === "en"){
                return true
            } else {return false}
        })
        console.log(abilityText)
        fetchedData = abilityText[0]["short_effect"]
        return
    }
</script>

<div class="container">
    {#each abilities as ability}
        <div class="block">
            <h3>{ability.ability.name}</h3>
            <button on:click={()=>{fetchData(ability.ability.url)}}>Details</button>
        </div>
    {/each}
    <p>{fetchedData}</p>
</div>

<style>
    .container{
        max-width: 30%
    }
    .block{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        gap: 1rem;
    }
    .block > button{
        height: 1.5rem;
        font-size: 1rem;
    }
    .block > h3{
        margin: 0;
        padding: 0;
        font-size: 1rem;
    }
</style>