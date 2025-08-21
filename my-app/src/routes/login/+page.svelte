<script>
  import { goto } from '$app/navigation';
  import { user } from '../../stores/auth.js';

  let nameInput = '';
  let emailInput = '';

  const credencialesValidas = {
    name: 'Sara',
    email: 'sara@email.com'
  };

  function iniciarSesion() {
    if (nameInput === '' || emailInput === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const esValido =
      nameInput === credencialesValidas.name &&
      emailInput === credencialesValidas.email;

    if (esValido) {
      user.set({
        name: nameInput,
        email: emailInput,
        loged: true
      });
      goto('/admin'); 
    } else {
      alert('Credenciales inválidas');
    }
  }
</script>

<h2>Iniciar sesión</h2>
<input placeholder="Nombre" bind:value={nameInput} />
<input type="email" placeholder="Correo" bind:value={emailInput} />

<button on:click={iniciarSesion} class="btn ">Entrar</button>

