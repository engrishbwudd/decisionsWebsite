// Embedded games data
const gamesData = [
  "Rocket League",
  "Arma",
  "Plate Up",
  "UFC",
  "OOTP",
  "Don't Look Outside",
  "Keep Talking and Nobody Explodes",
  "HomeSafety Hotline",
  "Hollywood Mogul"
];

// Function to get all games including localStorage data
function getAllGames() {
    let customGames = JSON.parse(localStorage.getItem('customGames')) || [];
    return [...gamesData, ...customGames];
}

function getRandomGame() {
    const allGames = getAllGames();
    if (allGames.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * allGames.length);
    return allGames[randomIndex];
}

function pickNewGame() {
    const gameTitle = document.getElementById('gameTitle');
    const game = getRandomGame();
    
    if (game) {
        gameTitle.textContent = game;
    } else {
        gameTitle.textContent = "No games available";
    }
}

// Initialize when page loads
window.addEventListener('DOMContentLoaded', function() {
    pickNewGame();
});
