<script>
    import dbTypeColours from "../data/typeColours";
 export let data

 $: backgroundColour = data.types.length > 1 ? `radial-gradient(${dbTypeColours[data.types[0].type.name]},${dbTypeColours[data.types[1].type.name]})` : dbTypeColours[data.types[0].type.name]
</script>

<div style={`background:${backgroundColour}`} class="pokemon-card">
    <h3 >{data.name}</h3>
    <img src={data["sprites"]["other"]["official-artwork"]["front_default"]} alt={data.name}/>
</div>

<style>

</style>