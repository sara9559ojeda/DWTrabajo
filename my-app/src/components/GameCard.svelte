<script>
import { createEventDispatcher } from 'svelte';
export let game;
const dispatch = createEventDispatcher();

function agregarFavorito() {
  dispatch('favorite', { 
    id: game.id,
    name: game.name,
    img: game.img,
    description: game.description 
  });
}
</script>

<div class="card h-100 shadow-sm">
  <img src={game.img} class="card-img-top" alt={game.name}>
  <div class="card-body">
    <h5>{game.name}</h5>
    <p>{game.description}</p>
    <button class="btn btn-outline-primary w-100" on:click={agregarFavorito}>
      Agregar a favoritos
    </button>
  </div>
</div>