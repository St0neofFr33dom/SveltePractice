<script>
    export let heroImage
</script>

<div>
    <img src={heroImage.url} alt={heroImage.alt} title={heroImage.alt}/>
</div>

<style>
    img{
        width:50%;
        height: auto;
        }
</style>