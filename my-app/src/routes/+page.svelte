<script>
  import { goto } from '$app/navigation';
  import Carousel from '../components/Carousel.svelte';

  function gotoSectionGames() {
    goto('/games'); 
  }

  const news = [
    {
      img: '/images/novedad2.jpg',
      title: 'Nuevo juego GTA 6 anunciado',
      description: 'La espera ha terminado, ¡ya está aquí el tráiler!'
    },
    {
      img: '/images/novedad1.png',
      title: 'Nuevo juego de Resident Evil',
      description: 'Gráficos mejorados y jugabilidad renovada.'
    },
    {
      img: '/images/novedad3.png',
      title: 'Nuevo Call of duty: black ops 7',
      description: 'Gráficos mejorados y jugabilidad renovada.'
    }
  ];
</script>

<section class="hero text-center p-5 bg-dark text-white">
  <h1 class="display-4">Bienvenid@ a GameInfo</h1>
  <p class="lead">Tu fuente confiable para descubrir, analizar y disfrutar el universo de los videojuegos.</p>
  <button class="btn btn-primary mt-3" on:click={gotoSectionGames}>
    Explorar juegos
  </button>
</section>

<section class="features container py-5">
  <h2 class="text-center mb-4">¿Qué puedes encontrar aquí?</h2>
  <div class="row text-center">
    <div class="col-md-4">
      <i class="bi bi-controller fs-1 text-primary"></i>
      <h4 class="mt-2">Exploración</h4>
      <p>Recorre catálogos con cientos de videojuegos organizados por género y plataforma.</p>
    </div>
    <div class="col-md-4">
      <i class="bi bi-chat-dots fs-1 text-success"></i>
      <h4 class="mt-2">Opiniones</h4>
      <p>Lee reseñas imparciales y comentarios de la comunidad gamer.</p>
    </div>
    <div class="col-md-4">
      <i class="bi bi-lightning fs-1 text-warning"></i>
      <h4 class="mt-2">Novedades</h4>
      <p>Mantente al tanto de los eventos, lanzamientos y torneos del mundo gaming.</p>
    </div>
  </div>
</section>

<section class="container my-5">
  <h2 class="text-center mb-4">📰 Novedades recientes</h2>
  <Carousel items={news} />
</section>

