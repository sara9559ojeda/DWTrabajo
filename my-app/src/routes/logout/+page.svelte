<script>
    import { goto } from '$app/navigation';
    import { user } from '../../stores/auth.js';
    import { onMount } from 'svelte';
    
    let isLoading = false;
    let currentUser = { name: '', email: '' };
    
    onMount(() => {
        const unsubscribe = user.subscribe(value => {
            currentUser = value;
        });
        return unsubscribe;
    });
    
    async function cerrarSesion() {
        isLoading = true;
        
        user.set({
            name: '',
            email: '',
            loged: false
        });
        
        goto('/');
    }
    
    function cancelar() {
        goto('/admin');
    }
</script>

<div class="logout-container">
    <div class="logout-background">
        <div class="floating-shape shape-1"></div>
        <div class="floating-shape shape-2"></div>
        <div class="floating-shape shape-3"></div>
    </div>
    
    <div class="container">
        <div class="row justify-content-center align-items-center min-vh-100">
            <div class="col-md-6 col-lg-5">
                <div class="logout-card">
                    <div class="logout-header">
                        
                        <h2 class="logout-title">¿Cerrar Sesión?</h2>
                        <p class="logout-subtitle">Hasta pronto</p>
                    </div>
                    
                    
                    <div class="logout-actions">
                        <button 
                            class="btn btn-outline-secondary btn-lg cancel-btn"
                            on:click={cancelar}
                            disabled={isLoading}
                        >
                            <i class="bi bi-arrow-left me-2"></i>
                            Cancelar
                        </button>
                        
                        <button 
                            class="btn btn-danger btn-lg logout-btn"
                            on:click={cerrarSesion}
                            disabled={isLoading}
                        >
                            {#if isLoading}
                                <span class="spinner-border spinner-border-sm me-2" role="status"></span>
                                Cerrando sesión...
                            {:else}
                                <i class="bi bi-box-arrow-right me-2"></i>
                                Cerrar Sesión
                            {/if}
                        </button>
                    </div>
                    
                    <div class="logout-footer">
                        <div class="footer-links">
                            <a href="/" class="footer-link">
                                <i class="bi bi-house"></i>
                                Ir al inicio
                            </a>
                            <a href="/games" class="footer-link">
                                <i class="bi bi-controller"></i>
                                Ver juegos
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .logout-container {
        min-height: 100vh;
        position: relative;
        display: flex;
        align-items: center;
        padding: 2rem 0;
    }
    
    .logout-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #b91c1c 100%);
        z-index: -1;
    }
    
    .floating-shape {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        animation: floatSlow 8s ease-in-out infinite;
    }
    
    .shape-1 {
        width: 200px;
        height: 200px;
        top: 20%;
        left: 10%;
        animation-delay: 0s;
    }
    
    .shape-2 {
        width: 150px;
        height: 150px;
        top: 60%;
        right: 15%;
        animation-delay: 3s;
    }
    
    .shape-3 {
        width: 100px;
        height: 100px;
        bottom: 30%;
        left: 70%;
        animation-delay: 6s;
    }
    
    @keyframes floatSlow {
        0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
        }
        50% {
            transform: translateY(-30px) rotate(180deg);
            opacity: 0.9;
        }
    }
    
    .logout-card {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        border-radius: 24px;
        padding: 3rem;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.3);
        animation: slideUp 0.8s ease-out;
    }
    
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .logout-header {
        text-align: center;
        margin-bottom: 2rem;
    }
    

    
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    }
    
    .logout-title {
        font-size: 2rem;
        font-weight: 800;
        color: #1e293b;
        margin-bottom: 0.5rem;
    }
    
    .logout-subtitle {
        color: #64748b;
        margin-bottom: 0;
        font-size: 1.1rem;
    }
    
    
    
    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 rgba(5, 150, 105, 0.7);
        }
        70% {
            box-shadow: 0 0 0 10px rgba(5, 150, 105, 0);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(5, 150, 105, 0);
        }
    }
    
    
    
    .logout-actions {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
    }
    
    .logout-actions .btn {
        flex: 1;
        padding: 1rem 1.5rem;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 12px;
        transition: all 0.3s ease;
    }
    
    .cancel-btn {
        border: 2px solid #6b7280;
        color: #6b7280;
        background: white;
    }
    
    .cancel-btn:hover:not(:disabled) {
        background: #6b7280;
        color: white;
        transform: translateY(-2px);
    }
    
    .logout-btn {
        background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
        border: none;
        box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
    }
    
    .logout-btn:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(239, 68, 68, 0.5);
    }
    
    .logout-btn:disabled,
    .cancel-btn:disabled {
        opacity: 0.7;
        transform: none;
    }
    
    .logout-footer {
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
    }
    
    .footer-links {
        display: flex;
        justify-content: center;
        gap: 2rem;
    }
    
    .footer-link {
        color: #64748b;
        text-decoration: none;
        font-weight: 500;
        display: flex;
        align-items: center;
        transition: color 0.3s ease;
    }
    
    .footer-link:hover {
        color: #667eea;
    }
    
    .footer-link i {
        margin-right: 0.5rem;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
        .logout-card {
            padding: 2rem;
            margin: 1rem;
        }
        
        .logout-actions {
            flex-direction: column;
        }
        
        .footer-links {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
        }
        
        .logout-title {
            font-size: 1.5rem;
        }
    }
</style>