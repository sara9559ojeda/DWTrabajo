<script>
    import { onMount } from "svelte";
	import { on } from "svelte/events";
    let favorite = [];

    onMount(() => {
        const data = localStorage.getItem('favoritos');
        if (data) {
            favorite = JSON.parse(data);
        }
    });
</script>
<div class="container mt-5">
    <h2 class="mb-4">mis productos favoritos</h2>

    {#if favorite.length > 0}
        <div class="row g-4">
            {#each favorite as f}
                <div class="col-md-4">
                    <div class="card h-100 shadow-sm">
                        <img src={f.img} class="card-img-top" alt={f.name}>
                        <div class="card-body">
                            <h5 class="card-title">{f.name}</h5>
                            <p class="card-text">{f.description}</p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    {:else}
        <p>No hay productos favoritos.</p>
    {/if}
</div>