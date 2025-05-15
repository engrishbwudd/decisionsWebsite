let gamesData = [];

// Load games data
async function loadGamesData() {
    try {
        const response = await fetch('data/video-games.json');
        gamesData = await response.json();
        pickNewGame();
    } catch (error) {
        console.error('Error loading games data:', error);
        showError('Failed to load games data');
    }
}

function getRandomGame() {
    if (gamesData.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * gamesData.length);
    return gamesData[randomIndex];
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

function showError(message) {
    const container = document.querySelector('.container');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    container.appendChild(errorDiv);
}

// Load data when page loads
loadGamesData();