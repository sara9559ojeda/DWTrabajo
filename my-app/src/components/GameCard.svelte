<script>
  import { createEventDispatcher } from 'svelte';
  export let game;
  
  const dispatch = createEventDispatcher();

  function agregarFavorito() {
    if (!game || !game.id) {
      console.error('Game object is invalid:', game);
      return;
    }
    
    dispatch('favorite', {
      id: game.id,
      name: game.name,
      img: game.img,
      description: game.description
    });
  }
</script>

{#if game}
  <div class="card h-100 shadow-sm">
    <img src={game.img || '/images/default.jpg'} class="card-img-top" alt={game.name || 'Game'}>
    <div class="card-body">
      <h5 class="card-title">{game.name || 'Sin nombre'}</h5>
      <p class="card-text">{game.description || 'Sin descripción'}</p>
      <button class="btn btn-outline-primary w-100" on:click={agregarFavorito}>
        Agregar a favoritos
      </button>
    </div>
  </div>
{:else}
  <div class="card h-100 shadow-sm">
    <div class="card-body">
      <p class="text-muted">Error: Juego no válido</p>
    </div>
  </div>
{/if}