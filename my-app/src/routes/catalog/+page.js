export async function load() {
    const res = await fetch('http://localhost:3001/games');
    const gamesSale = await res.json();
    return {
        gamesSale
    };
    
}