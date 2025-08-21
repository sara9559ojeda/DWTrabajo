<script>
  export let items = [];
</script>

<div id="carouselNovedades" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner rounded shadow" style="max-height: 100%; overflow: hidden; max-width: 100%; margin:450px margin-rigth: 450px;">
    {#each items as item, i}
      <div class="carousel-item {i === 0 ? 'active' : ''}">
        <img src={item.img} class="d-block w-100 object-fit-cover" style="height: 450px; " alt={item.title} />
        <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
          <h5>{item.title}</h5>
          <p>{item.description}</p>
        </div>
      </div>
    {/each}
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselNovedades" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Anterior</span>
  </button>

  <button class="carousel-control-next" type="button" data-bs-target="#carouselNovedades" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Siguiente</span>
  </button>
</div>
