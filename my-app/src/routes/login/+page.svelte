<script>
  import { goto } from '$app/navigation';
  import { user } from '../../stores/auth.js';

  let nameInput = '';
  let emailInput = '';
  let isLoading = false;
  let showError = false;
  let errorMessage = '';

  const credencialesValidas = {
    name: 'Sara',
    email: 'sara@email.com'
  };

  async function iniciarSesion() {
    if (nameInput === '' || emailInput === '') {
      showError = true;
      errorMessage = 'Por favor, completa todos los campos.';
      setTimeout(() => showError = false, 3000);
      return;
    }

    isLoading = true;
    showError = false;

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
      showError = true;
      errorMessage = 'Credenciales inválidas. Intenta de nuevo.';
      isLoading = false;
      setTimeout(() => showError = false, 3000);
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      iniciarSesion();
    }
  }
</script>

<div class="login-container">
  <div class="login-background">
    <div class="floating-shape shape-1"></div>
    <div class="floating-shape shape-2"></div>
    <div class="floating-shape shape-3"></div>
    <div class="floating-shape shape-4"></div>
  </div>

  <div class="container-fluid h-100">
    <div class="row h-100">
      <div class="col-lg-6 d-none d-lg-flex login-info-panel">
        <div class="login-info-content">
          <div class="login-brand">
            <h1 class="brand-title">🎮 GameInfo</h1>
            <p class="brand-subtitle">Tu universo gaming te espera</p>
          </div>
          
          <div class="login-features">
            <div class="feature-item">
              <div class="feature-text">
                <h4>Administra tu catálogo</h4>
                <p>Gestiona juegos, actualiza información y controla tu biblioteca digital</p>
              </div>
            </div>
            
            <div class="feature-item">
              <div class="feature-text">
                <h4>Favoritos personalizados</h4>
                <p>Crea tu lista personalizada de juegos favoritos y accede rápidamente</p>
              </div>
            </div>
            

            <div class="login-stats">
              <div class="stat-item">
                <span class="stat-number">1000+</span>
                <span class="stat-label">Juegos</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">50+</span>
                <span class="stat-label">Géneros</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">24/7</span>
                <span class="stat-label">Disponible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 login-form-panel">
        <div class="login-form-container">
          
          <div class="login-header">
            <div class="login-avatar">
            </div>
            <h2 class="login-title">Iniciar Sesión</h2>
            <p class="login-subtitle">Accede a tu panel de administrador</p>
          </div>

          {#if showError}
            <div class="alert alert-danger error-alert" role="alert">
              <i class="bi bi-exclamation-triangle-fill"></i>
              {errorMessage}
            </div>
          {/if}

          <form class="login-form" on:submit|preventDefault={iniciarSesion}>
            <div class="form-group">
              <label for="name" class="form-label">
                <i class="bi bi-person-fill"></i>
                Nombre completo
              </label>
              <input 
                id="name"
                type="text" 
                class="form-control form-control-lg" 
                placeholder="Ingresa tu nombre"
                bind:value={nameInput}
                on:keypress={handleKeyPress}
                disabled={isLoading}
                required
              />
            </div>

            <div class="form-group">
              <label for="email" class="form-label">
                <i class="bi bi-envelope-fill"></i>
                Correo electrónico
              </label>
              <input 
                id="email"
                type="email" 
                class="form-control form-control-lg" 
                placeholder="correo@ejemplo.com"
                bind:value={emailInput}
                on:keypress={handleKeyPress}
                disabled={isLoading}
                required
              />
            </div>

            <button 
              type="submit" 
              class="btn btn-primary btn-lg w-100 login-btn"
              disabled={isLoading}
            >
              {#if isLoading}
                <span class="spinner-border spinner-border-sm me-2" role="status"></span>
                Iniciando sesión...
              {:else}
                <i class="bi bi-box-arrow-in-right me-2"></i>
                Iniciar Sesión
              {/if}
            </button>
          </form>

          <div class="test-credentials">
            <h6> Credenciales de prueba:</h6>
            <div class="credentials-info">
              <p><strong>Nombre:</strong> Sara</p>
              <p><strong>Email:</strong> sara@email.com</p>
            </div>
          </div>

          <!-- Footer del login -->
          <div class="login-footer">
            <p class="help-text">
              ¿Necesitas ayuda? <a href="/" class="help-link">Volver al inicio</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .login-container {
    min-height: 100vh;
    position: relative;
    overflow: hidden;
  }

  .login-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    z-index: -1;
  }

  .floating-shape {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    animation: float 6s ease-in-out infinite;
  }

  .shape-1 {
    width: 300px;
    height: 300px;
    top: 10%;
    left: -5%;
    animation-delay: 0s;
  }

  .shape-2 {
    width: 200px;
    height: 200px;
    top: 60%;
    right: -3%;
    animation-delay: 2s;
  }

  .shape-3 {
    width: 150px;
    height: 150px;
    top: 20%;
    right: 20%;
    animation-delay: 4s;
  }

  .shape-4 {
    width: 100px;
    height: 100px;
    bottom: 20%;
    left: 10%;
    animation-delay: 1s;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
    }
  }

  .login-info-panel {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    align-items: center;
    justify-content: center;
  }

  .login-info-content {
    padding: 3rem;
    color: white;
    max-width: 500px;
  }

  .login-brand {
    text-align: center;
    margin-bottom: 3rem;
  }

  .brand-title {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 0.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .brand-subtitle {
    font-size: 1.2rem;
    opacity: 0.9;
    margin-bottom: 0;
  }

  .login-features {
    margin-bottom: 3rem;
  }

  .feature-item {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: transform 0.3s ease;
  }

  .feature-item:hover {
    transform: translateX(10px);
  }



  .feature-text h4 {
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  .feature-text p {
    margin: 0;
    opacity: 0.8;
    font-size: 0.9rem;
  }

  .login-stats {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
  }

  .stat-number {
    font-size: 2rem;
    font-weight: 900;
    color: #fbbf24;
  }

  .stat-label {
    font-size: 0.9rem;
    opacity: 0.8;
  }

  .login-form-panel {
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .login-form-container {
    width: 100%;
    max-width: 400px;
    padding: 2rem;
  }

  .login-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .login-avatar {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }

  .login-title {
    font-size: 2rem;
    font-weight: 800;
    color: #1e293b;
    margin-bottom: 0.5rem;
  }

  .login-subtitle {
    color: #64748b;
    margin-bottom: 0;
  }

  .error-alert {
    border-radius: 12px;
    border: none;
    background: #fef2f2;
    color: #dc2626;
    padding: 1rem;
    margin-bottom: 1.5rem;
    animation: shake 0.5s ease-in-out;
  }

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }

  .login-form {
    margin-bottom: 2rem;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-label {
    font-weight: 600;
    color: #374151;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
  }

  .form-label i {
    margin-right: 0.5rem;
    color: #667eea;
  }

  .form-control-lg {
    padding: 1rem 1.25rem;
    font-size: 1rem;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    transition: all 0.3s ease;
    background: #fafafa;
  }

  .form-control-lg:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    background: white;
    transform: translateY(-1px);
  }

  .form-control-lg:disabled {
    background: #f3f4f6;
    opacity: 0.7;
  }

  .login-btn {
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: 600;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    transition: all 0.3s ease;
  }

  .login-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
  }

  .login-btn:disabled {
    opacity: 0.7;
    transform: none;
  }

  .test-credentials {
    background: #f8fafc;
    border-radius: 12px;
    padding: 1.5rem;
    text-align: center;
    margin-bottom: 1.5rem;
    border: 2px dashed #e2e8f0;
  }

  .test-credentials h6 {
    color: #475569;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .credentials-info p {
    margin: 0.25rem 0;
    color: #64748b;
    font-size: 0.9rem;
  }

  .credentials-info strong {
    color: #374151;
  }

  .login-footer {
    text-align: center;
  }

  .help-text {
    color: #64748b;
    margin: 0;
  }

  .help-link {
    color: #667eea;
    text-decoration: none;
    font-weight: 600;
  }

  .help-link:hover {
    color: #4f46e5;
    text-decoration: underline;
  }

  /* Responsive */
  @media (max-width: 991px) {
    .login-container {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    
    .login-form-panel {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
    }
  }

  @media (max-width: 576px) {
    .login-form-container {
      padding: 1rem;
    }
    
    .login-title {
      font-size: 1.5rem;
    }
    
    .brand-title {
      font-size: 2rem;
    }
  }
</style>