<script>
    let types = ["normal","grass","fire","water","electricity","flying","bug","poison","rock","ground","fighting","psychic","ghost","ice","dragon","dark","steel","fairy"]
</script>

<div>

</div>
    <select name="types" id="types">
        {#each types as type}
        <option value={type}>{type.toUpperCase()}</option>
        {/each}
    </select>
<style>

</style>