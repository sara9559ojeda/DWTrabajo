<footer class="modern-footer">
  <div class="footer-background">
    <div class="footer-pattern"></div>
  </div>
  
  <div class="container">
    <div class="footer-main">
      <div class="row">
      
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="footer-brand">
            <div class="brand-logo">
              <span class="logo-icon">🎮</span>
              <h3 class="brand-name">GameInfo</h3>
            </div>
            <p class="brand-description">
              Tu plataforma definitiva para descubrir, explorar y gestionar el universo de los videojuegos. 
              Desde clásicos atemporales hasta los últimos lanzamientos.
            </p>
            
            <div class="footer-stats">
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
                <span class="stat-label">Online</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-lg-2 col-md-6 mb-4">
          <div class="footer-section">
            <h5 class="footer-title">
              <i class="bi bi-compass"></i>
              Navegación
            </h5>
            <ul class="footer-links">
              <li><a href="/"> Inicio</a></li>
              <li><a href="/games"> Juegos Populares</a></li>
              <li><a href="/catalog">Catálogo</a></li>
              <li><a href="/favorite"> Favoritos</a></li>
              <li><a href="/admin"> Administrador</a></li>
            </ul>
          </div>
        </div>
        
        <div class="col-lg-2 col-md-6 mb-4">
          <div class="footer-section">
            <h5 class="footer-title">
              <i class="bi bi-tags"></i>
              Categorías
            </h5>
            <ul class="footer-links">
              <li><a href="/games" class="category-link"> Acción</a></li>
              <li><a href="/games" class="category-link"> Aventura</a></li>
              <li><a href="/games" class="category-link"> Carreras</a></li>
              <li><a href="/games" class="category-link"> RPG</a></li>
              <li><a href="/games" class="category-link"> Indie</a></li>
            </ul>
          </div>
        </div>
        
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="footer-section">
            <h5 class="footer-title">
              <i class="bi bi-info-circle"></i>
              Información
            </h5>
            
            <div class="newsletter-section">
              <p class="newsletter-text">Suscríbete para recibir las últimas novedades gaming</p>
              <div class="newsletter-form">
                <div class="input-group">
                  <input 
                    type="email" 
                    class="form-control newsletter-input" 
                    placeholder="tu@email.com"
                    aria-label="Email para newsletter"
                  >
                 
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
        
      </div>
    </div>
    
    <!-- Línea divisoria -->
    <div class="footer-divider"></div>
    
    <!-- Sección inferior -->
    <div class="footer-bottom">
      <div class="row align-items-center">
        <div class="col-md-6">
          <p class="copyright">
            © 2025 <strong>GameInfo</strong>. Todos los derechos reservados.
            <span class="made-with">
              Hecho con <span class="heart">❤️</span> para gamers
            </span>
          </p>
        </div>
        <div class="col-md-6">
          <div class="footer-meta">
            <div class="status-indicator">
              <span class="status-dot"></span>
              <span class="status-text">Todos los sistemas operativos</span>
            </div>
            <div class="version-info">
              <span class="version">v2.0.1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-decoration">
    <div class="floating-controller">🎮</div>
  </div>
</footer>

<style>
  .modern-footer {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
    color: #e2e8f0;
    position: relative;
    margin-top: 5rem;
    overflow: hidden;
  }
  
  .footer-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.05;
  }
  
  .footer-pattern {
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(circle at 25% 25%, #667eea 2px, transparent 2px),
      radial-gradient(circle at 75% 75%, #8b5cf6 1px, transparent 1px);
    background-size: 50px 50px;
    background-position: 0 0, 25px 25px;
    animation: patternMove 20s linear infinite;
  }
  
  @keyframes patternMove {
    0% {
      transform: translateX(0) translateY(0);
    }
    100% {
      transform: translateX(50px) translateY(50px);
    }
  }
  
  .footer-main {
    padding: 4rem 0 2rem;
    position: relative;
    z-index: 1;
  }
  
  .footer-brand {
    margin-bottom: 2rem;
  }
  
  .brand-logo {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .logo-icon {
    font-size: 2.5rem;
    margin-right: 0.75rem;
    animation: gameRotate 3s ease-in-out infinite;
  }
  
  @keyframes gameRotate {
    0%, 100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-10deg);
    }
    75% {
      transform: rotate(10deg);
    }
  }
  
  .brand-name {
    font-size: 2rem;
    font-weight: 900;
    margin: 0;
    background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .brand-description {
    color: #94a3b8;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
  }
  
  .footer-stats {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
  
  .stat-item {
    text-align: center;
    padding: 0.75rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    min-width: 70px;
    transition: transform 0.3s ease;
  }
  
  .stat-item:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.1);
  }
  
  .stat-number {
    display: block;
    font-size: 1.25rem;
    font-weight: 800;
    color: #fbbf24;
    margin-bottom: 0.25rem;
  }
  
  .stat-label {
    display: block;
    font-size: 0.75rem;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .footer-section {
    height: 100%;
  }
  
  .footer-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: #f1f5f9;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .footer-title i {
    margin-right: 0.5rem;
    color: #667eea;
    font-size: 1rem;
  }
  
  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer-links li {
    margin-bottom: 0.75rem;
  }
  
  .footer-links a {
    color: #94a3b8;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    padding: 0.25rem 0;
  }
  
  .footer-links a:hover {
    color: #667eea;
    transform: translateX(5px);
  }
  
  .footer-links a::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #667eea, #8b5cf6);
    transition: width 0.3s ease;
  }
  
  .footer-links a:hover::before {
    width: 100%;
  }
  
  .category-link:hover {
    color: #8b5cf6;
  }
  
  .newsletter-section {
    margin-bottom: 2rem;
  }
  
  .newsletter-text {
    color: #94a3b8;
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }
  
  .newsletter-input {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #e2e8f0;
    border-radius: 8px 0 0 8px;
  }
  
  .newsletter-input:focus {
    background: rgba(255, 255, 255, 0.1);
    border-color: #667eea;
    color: #f1f5f9;
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
  }
  
  .newsletter-input::placeholder {
    color: #64748b;
  }
  </style>