export async function load() {
    try {
        const res = await fetch('http://localhost:3002/games');
        
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const gamesSale = await res.json();
        
        return {
            gamesSale
        };
    } catch (error) {
        console.error('Error cargando juegos:', error);
    }
}