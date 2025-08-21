
<script>
    import Card from "../../components/Card.svelte";
    const Cards = [
  {
    CardTitle: "Halo infinite",
    CardText: "Explora las Tierras Intermedias en una oscura fantasía .",
    CardImg: "/images/halo.jpg",
    CardLink: "#"
  },
  {
    CardTitle: "God of War: Ragnarok",
    CardText: "Acompaña a Kratos y Atreus en una nueva batalla contra los dioses nórdicos.",
    CardImg: "/images/GOW.jpg",
    CardLink: "#"
  },
  {
    CardTitle: "The Legend of Zelda: Tears of the Kingdom",
    CardText: "Una aventura mágica en Hyrule con nuevos poderes, secretos y desafíos celestiales.",
    CardImg: "/images/zelda.jpg",
    CardLink: "#"
  },
  {
    CardTitle: "Starfield",
    CardText: "Explora sistemas estelares, descubre civilizaciones y construye tu nave en este RPG espacial.",
    CardImg: "/images/juego.jpg",
    CardLink: "#"
  },
  {
    CardTitle: "Hollow Knight: Silksong",
    CardText: "Una nueva heroína salta a la acción en este metroidvania lleno de insectos y desafíos.",
    CardImg: "/images/HK.jpg",
    CardLink: "#"
  },
  {
    CardTitle: "Final Fantasy XVI",
    CardText: "Sumérgete en un mundo oscuro donde la magia y las bestias dominan el destino de Valisthea.",
    CardImg: "/images/FFXVI.jpg",
    CardLink: "#"
  }

  
        
    ];
</script>
<div class="container mt-5">
    <h2 class="mb-4 text-center">Juegos populares</h2>
    <div class="row g4">
        {#each Cards as C}
            <div class="col-md-4 mb-4">
                <Card 
                    CardTitle={C.CardTitle} 
                    CardText={C.CardText} 
                    CardImg={C.CardImg} 
                    CardLink={C.CardLink}
                />
            </div>
        {/each}
    </div>
</div>