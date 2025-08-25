<script>
  import GameCard from '../../components/GameCard.svelte';
  export let data;
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  
  let gamesSale = data.gamesSale;
  let favorite = [];

  onMount(() => {
    const savedFavorites = localStorage.getItem('favoritos');
        favorite = JSON.parse(savedFavorites);
  });

  function handleFavorite(event) {
    const game = event.detail;
    
    if (!game || !game.id) {
      console.error('Game object is invalid:', game);
      return;
    }

    const existingGame = favorite.find(f => f && f.id === game.id);
    
    if (!existingGame) {
      favorite = [...favorite, game]; 
      saveInLocalStorage();
      alert(`${game.name || 'Juego'} agregado a favoritos`);
    } else {
      alert(`${game.name || 'Juego'} ya está en favoritos`);
    }
  }

  function deleteFavorite(id) {
    if (!id) {
      console.error('Invalid id for deletion:', id);
      return;
    }
    
    favorite = favorite.filter(game => game && game.id !== id);
    saveInLocalStorage();
    alert(`Juego eliminado de favoritos`);
  }

  function saveInLocalStorage() {
    try {
      localStorage.setItem('favoritos', JSON.stringify(favorite));
    } catch (e) {
      console.error('Error saving to localStorage:', e);
    }
  }
</script>

<div class="container mt-4">
  <h2>Catálogo de juegos</h2>
  <div class="row g-4">
    {#each gamesSale as game}
      {#if game && game.id}
        <div class="col-md-4">
          <GameCard {game} on:favorite={handleFavorite} />
        </div>
      {/if}
    {/each}
  </div>
  
  <h2 class="mt-5">Favoritos</h2>
  {#if favorite.length > 0}
    <div class="mt-5">
      <ul class="list-group">
        {#each favorite as f}
          {#if f && f.id}
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span>{f.name || 'Sin nombre'}</span>
              <button class="btn btn-sm btn-outline-danger" on:click={() => deleteFavorite(f.id)}>
                Quitar
              </button>
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  {:else}
    <p>No hay juegos favoritos.</p>
  {/if}
  
  <div class="mt-3">
    <button class="btn btn-primary" on:click={() => goto('/favorite')}>
      Ver favoritos en otra vista
    </button>
  </div>
</div>