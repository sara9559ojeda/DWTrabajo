<script>
    import { onMount } from "svelte";
    import { goto } from '$app/navigation';
    
    let favorite = [];

    onMount(() => {
        loadFavorites();
    });

    function loadFavorites() {
        try {
            const data = localStorage.getItem('favoritos');
            if (data) {
                favorite = JSON.parse(data);
                // Filtrar elementos null o undefined
                favorite = favorite.filter(f => f && f.id);
            }
        } catch (e) {
            console.error('Error loading favorites from localStorage:', e);
            favorite = [];
        }
    }

    function removeFavorite(id) {
        if (!id) {
            console.error('Invalid id for removal:', id);
            return;
        }
        
        favorite = favorite.filter(game => game && game.id !== id);
        saveToLocalStorage();
        alert('Juego eliminado de favoritos');
    }

    function saveToLocalStorage() {
        try {
            localStorage.setItem('favoritos', JSON.stringify(favorite));
        } catch (e) {
            console.error('Error saving to localStorage:', e);
        }
    }

    function clearAllFavorites() {
        if (confirm('¿Estás seguro de que quieres eliminar todos los favoritos?')) {
            favorite = [];
            saveToLocalStorage();
        }
    }
</script>

<div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h2>Mis Juegos Favoritos</h2>
        <div>
            {#if favorite.length > 0}
                <button class="btn btn-outline-danger me-2" on:click={clearAllFavorites}>
                    Limpiar todos
                </button>
                <button class="btn btn-secondary" on:click={() => goto('/catalog')}>
                Volver al catálogo
            </button>
            {/if}
            
        </div>
    </div>

    {#if favorite.length > 0}
        <div class="row g-4">
            {#each favorite as f}
                {#if f && f.id}
                    <div class="col-md-4">
                        <div class="card h-100 shadow-sm">
                            <img 
                                src={f.img || '/images/default.jpg'} 
                                class="card-img-top" 
                                alt={f.name || 'Game'}
                                style="height: 200px; object-fit: cover;"
                            >
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">{f.name || 'Sin nombre'}</h5>
                                <p class="card-text flex-grow-1">{f.description || 'Sin descripción'}</p>
                                <button 
                                    class="btn btn-outline-danger mt-auto" 
                                    on:click={() => removeFavorite(f.id)}
                                >
                                    <i class="bi bi-heart-fill"></i>
                                    Quitar de favoritos
                                </button>
                            </div>
                        </div>
                    </div>
                {/if}
            {/each}
        </div>
        
        <div class="mt-4 text-center">
            <p class="text-muted">Total de favoritos: {favorite.length}</p>
        </div>
    {:else}
        <div class="text-center py-5">
            <div class="mb-4">
                <i class="bi bi-heart fs-1 text-muted"></i>
            </div>
            <h4 class="text-muted">No tienes juegos favoritos</h4>
            <p class="text-muted">Explora nuestro catálogo y agrega juegos a tu lista de favoritos</p>
            <button class="btn btn-primary mt-3" on:click={() => goto('/catalog')}>
                Explorar catálogo
            </button>
        </div>
    {/if}
</div>