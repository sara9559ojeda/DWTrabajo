// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3002; // Cambiar a puerto 3002

// Middleware
app.use(cors());
app.use(express.json());

// Ruta del archivo JSON
const dbPath = path.join(__dirname, 'db.json');

// Función para leer la base de datos
function readDatabase() {
    try {
        const data = fs.readFileSync(dbPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error leyendo la base de datos:', error);
        return { games: [] };
    }
}

// Función para escribir la base de datos
function writeDatabase(data) {
    try {
        fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error('Error escribiendo la base de datos:', error);
        return false;
    }
}

// CRUD Operations

// GET - Obtener todos los juegos
app.get('/games', (req, res) => {
    try {
        const database = readDatabase();
        res.json(database.games);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los juegos' });
    }
});

// GET - Obtener un juego por ID
app.get('/games/:id', (req, res) => {
    try {
        const database = readDatabase();
        const game = database.games.find(g => g.id == req.params.id);
        
        if (!game) {
            return res.status(404).json({ error: 'Juego no encontrado' });
        }
        
        res.json(game);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el juego' });
    }
});

// POST - Crear un nuevo juego
app.post('/games', (req, res) => {
    try {
        const database = readDatabase();
        const { name, img, description } = req.body;

        // Validación básica
        if (!name || !description) {
            return res.status(400).json({ error: 'Nombre y descripción son requeridos' });
        }

        // Generar nuevo ID
        const maxId = database.games.length > 0 
            ? Math.max(...database.games.map(g => g.id)) 
            : 0;
        
        const newGame = {
            id: maxId + 1,
            name: name.trim(),
            img: img ? img.trim() : '/images/default.jpg',
            description: description.trim()
        };

        database.games.push(newGame);
        
        if (writeDatabase(database)) {
            res.status(201).json(newGame);
        } else {
            res.status(500).json({ error: 'Error al guardar el juego' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el juego' });
    }
});

// PUT - Actualizar un juego existente
app.put('/games/:id', (req, res) => {
    try {
        const database = readDatabase();
        const gameIndex = database.games.findIndex(g => g.id == req.params.id);
        
        if (gameIndex === -1) {
            return res.status(404).json({ error: 'Juego no encontrado' });
        }

        const { name, img, description } = req.body;

        // Validación básica
        if (!name || !description) {
            return res.status(400).json({ error: 'Nombre y descripción son requeridos' });
        }

        // Actualizar el juego
        database.games[gameIndex] = {
            id: parseInt(req.params.id),
            name: name.trim(),
            img: img ? img.trim() : '/images/default.jpg',
            description: description.trim()
        };

        if (writeDatabase(database)) {
            res.json(database.games[gameIndex]);
        } else {
            res.status(500).json({ error: 'Error al actualizar el juego' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el juego' });
    }
});

// DELETE - Eliminar un juego
app.delete('/games/:id', (req, res) => {
    try {
        const database = readDatabase();
        const gameIndex = database.games.findIndex(g => g.id == req.params.id);
        
        if (gameIndex === -1) {
            return res.status(404).json({ error: 'Juego no encontrado' });
        }

        const deletedGame = database.games[gameIndex];
        database.games.splice(gameIndex, 1);

        if (writeDatabase(database)) {
            res.json({ message: 'Juego eliminado exitosamente', game: deletedGame });
        } else {
            res.status(500).json({ error: 'Error al eliminar el juego' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el juego' });
    }
});

// Middleware para rutas no encontradas
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log('Rutas disponibles:');
    console.log('  GET    /games     - Obtener todos los juegos');
    console.log('  GET    /games/:id - Obtener un juego');
    console.log('  POST   /games     - Crear nuevo juego');
    console.log('  PUT    /games/:id - Actualizar juego');
    console.log('  DELETE /games/:id - Eliminar juego');
});

module.exports = app;