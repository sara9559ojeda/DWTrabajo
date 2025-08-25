<script>
    import { onMount } from 'svelte';   
    import { goto } from '$app/navigation';
    import { user } from '../../stores/auth';

    let currentUser = {
        name: '',
        email: '',
        loged: false
    };

    let games = [];
    let editingGame = null;
    let showForm = false;
    
    let gameForm = {
        id: '',
        name: '',
        img: '',
        description: ''
    };

    onMount(() => {
        const unsubscribe = user.subscribe(value => {
            currentUser = value;
            if (!currentUser.loged) {
                goto('/login');
            }
        });

        loadGames();
        return () => unsubscribe();
    });

    async function loadGames() {
        try {
            const response = await fetch('http://localhost:3002/games');
            games = await response.json();
        } catch (error) {
            console.error('Error cargando juegos:', error);
            alert('Error al cargar los juegos');
        }
    }

    async function addGame() {
        if (!gameForm.name.trim() || !gameForm.description.trim()) {
            alert('Por favor completa todos los campos requeridos');
            return;
        }

        try {
            const newGame = {
                id: Date.now(),
                name: gameForm.name.trim(),
                img: gameForm.img.trim() || '/images/default.jpg',
                description: gameForm.description.trim()
            };

            const response = await fetch('http://localhost:3002/games', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newGame)
            });

            if (response.ok) {
                await loadGames();
                resetForm();
                alert('Juego agregado exitosamente');
            } else {
                throw new Error('Error en la respuesta del servidor');
            }
        } catch (error) {
            console.error('Error agregando juego:', error);
            alert('Error al agregar el juego');
        }
    }
    async function updateGame() {
        if (!gameForm.name.trim() || !gameForm.description.trim()) {
            alert('Por favor completa todos los campos requeridos');
            return;
        }

        try {
            const updatedGame = {
                id: parseInt(gameForm.id),
                name: gameForm.name.trim(),
                img: gameForm.img.trim() || '/images/default.jpg',
                description: gameForm.description.trim()
            };

            const response = await fetch(`http://localhost:3002/games/${gameForm.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedGame)
            });

            if (response.ok) {
                await loadGames();
                resetForm();
                alert('Juego actualizado exitosamente');
            } else {
                throw new Error('Error en la respuesta del servidor');
            }
        } catch (error) {
            console.error('Error actualizando juego:', error);
            alert('Error al actualizar el juego');
        }
    }

    async function deleteGame(id) {
        if (!confirm('¿Estás seguro de que quieres eliminar este juego?')) {
            return;
        }

        try {
            const response = await fetch(`http://localhost:3002/games/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                await loadGames();
                alert('Juego eliminado exitosamente');
            } else {
                throw new Error('Error en la respuesta del servidor');
            }
        } catch (error) {
            console.error('Error eliminando juego:', error);
            alert('Error al eliminar el juego');
        }
    }

    function editGame(game) {
        editingGame = game.id;
        gameForm = {
            id: game.id.toString(),
            name: game.name,
            img: game.img,
            description: game.description
        };
        showForm = true;
    }

    function resetForm() {
        editingGame = null;
        gameForm = {
            id: '',
            name: '',
            img: '',
            description: ''
        };
        showForm = false;
    }

    function handleSubmit() {
        if (editingGame) {
            updateGame();
        } else {
            addGame();
        }
    }
</script>

<div class="container mt-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h1>Panel de Administrador</h1>
        <p class="text-muted">Bienvenido, {currentUser.name}</p>
    </div>

    <div class="mb-4">
        <button class="btn btn-primary" on:click={() => {showForm = !showForm; if (!showForm) resetForm()}}>
            {showForm ? 'Cancelar' : 'Agregar Nuevo Juego'}
        </button>
        <button class="btn btn-secondary ms-2" on:click={loadGames}>
            Actualizar Lista
        </button>
    </div>

    {#if showForm}
        <div class="card mb-4">
            <div class="card-header">
                <h5>{editingGame ? 'Editar Juego' : 'Agregar Nuevo Juego'}</h5>
            </div>
            <div class="card-body">
                <form on:submit|preventDefault={handleSubmit}>
                    <div class="mb-3">
                        <label for="gameName" class="form-label">Nombre del Juego*</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="gameName"
                            bind:value={gameForm.name}
                            placeholder="Nombre del juego"
                            required
                        >
                    </div>
                    
                    <div class="mb-3">
                        <label for="gameImg" class="form-label">URL de la Imagen</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="gameImg"
                            bind:value={gameForm.img}
                            placeholder="/images/juego.jpg"
                        >
                    </div>
                    
                    <div class="mb-3">
                        <label for="gameDescription" class="form-label">Descripción*</label>
                        <textarea 
                            class="form-control" 
                            id="gameDescription"
                            rows="3"
                            bind:value={gameForm.description}
                            placeholder="Descripción del juego"
                            required
                        ></textarea>
                    </div>
                    
                    <div class="d-flex gap-2">
                        <button type="submit" class="btn btn-success">
                            {editingGame ? 'Actualizar' : 'Agregar'} Juego
                        </button>
                        <button type="button" class="btn btn-secondary" on:click={resetForm}>
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    {/if}
    <div class="card">
        <div class="card-header">
            <h5>Lista de Juegos ({games.length})</h5>
        </div>
        <div class="card-body">
            {#if games.length === 0}
                <p class="text-muted text-center">No hay juegos disponibles</p>
            {:else}
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {#each games as game}
                                <tr>
                                    <td>{game.id}</td>
                                    <td>
                                        <img 
                                            src={game.img || '/images/default.jpg'} 
                                            alt={game.name}
                                            style="width: 50px; height: 50px; object-fit: cover;"
                                            class="rounded"
                                        >
                                    </td>
                                    <td>
                                        <strong>{game.name}</strong>
                                    </td>
                                    <td>
                                        <span class="text-truncate" style="max-width: 200px; display: inline-block;">
                                            {game.description}
                                        </span>
                                    </td>
                                    <td>
                                        <div class="btn-group btn-group-sm">
                                            <button 
                                                class="btn btn-outline-primary"
                                                on:click={() => editGame(game)}
                                                title="Editar"
                                            >
                                                Editar
                                            </button>
                                            <button 
                                                class="btn btn-outline-danger"
                                                on:click={() => deleteGame(game.id)}
                                                title="Eliminar"
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>
            {/if}
        </div>
    </div>
</div>