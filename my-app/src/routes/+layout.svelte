<script>
	import '../app.css'
	import Foooter from "../components/Foooter.svelte";
	import NavBar from "../components/NavBar.svelte";

</script>
<NavBar />
<main class="container mt-5">
<slot />
</main>
<Foooter />

