<script>
  import GameCard from '../../components/GameCard.svelte';
  export let data;
  import { goto } from '$app/navigation';
  let gamesSale = data.gamesSale;
  let favorite = [];

  function handleFavorite(event) {
    const game = event.detail.game;
    if (!favorite.find(p => p.id === game.id)) {
      favorite.push(game);
      saveInLocalStorage();
      alert(`${game.name} agregado a favoritos`);
    }
  }
  function deleteFavorite(id) {
    favorite = favorite.filter(game => game.id !== id);
    saveInLocalStorage();
    alert(`Juego eliminado de favoritos`);
  }
  function saveInLocalStorage(){
    localStorage.setItem('favoritos', JSON.stringify(favorite))
  }
</script>

<div class="container mt-4">
  <h2>Catálogo de juegos</h2>
  <div class="row g-4">
    {#each gamesSale as game}
      <div class="col-md-4">
        <GameCard {game} on:favorite={handleFavorite} />
      </div>
    {/each}
  </div>
  <h2 class="mt-5">Favoritos</h2>
  {#if favorite.length > 0}
    <div class="mt-5">
      {#each favorite as f}
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>{f.name}</span>
          <button class="btn btn-sm btn-outline-danger" on:click={() => deleteFavorite}>quitar</button>
        </li>
      {/each}
    </div>
  {:else}
    <p>No hay juegos favoritos.</p>
  {/if}
  <ul>
    <button class="btn btn-primary mt-3" on:click={()=> goto ('/favorite')}>ver favoritos en otra vista</button>
  </ul>
</div>
