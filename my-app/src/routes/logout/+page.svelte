<script>
    import { goto } from '$app/navigation';
    import { user } from '../../stores/auth.js';
    function cerrarSesion() {
        user.set({
        name: '',
        email: '',
        loged: false
      });
      goto('/');
    }
</script>
<h2>¿Seguro que quieres cerrar sesión?</h2>
<button on:click={cerrarSesion}>Cerrar sesión</button>