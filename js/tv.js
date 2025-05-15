let tvData = [];

// Load TV shows data and populate genres
async function loadTVData() {
    try {
        const response = await fetch('data/shows.json');
        if (!response.ok) {
            throw new Error('Failed to fetch TV shows data');
        }
        tvData = await response.json();
        populateGenres();
    } catch (error) {
        console.error('Error loading TV data:', error);
        showError('Failed to load TV shows data');
    }
}

function populateGenres() {
    const genreSelect = document.getElementById('genre');
    const genres = new Set();
    
    // Extract all unique genres
    tvData.forEach(show => {
        if (Array.isArray(show.genre)) {
            show.genre.forEach(g => genres.add(g));
        } else if (show.genre) {
            genres.add(show.genre);
        }
    });
    
    // Sort and add to select
    Array.from(genres).sort().forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreSelect.appendChild(option);
    });
}

function filterShows(genre, length) {
    return tvData.filter(show => {
        // If no genre selected, match all
        let genreMatch = true;
        if (genre) {
            genreMatch = Array.isArray(show.genre) 
                ? show.genre.includes(genre)
                : show.genre === genre;
        }
        
        // If no length selected, match all
        let lengthMatch = true;
        if (length) {
            lengthMatch = show.length === length;
        }
        
        return genreMatch && lengthMatch;
    });
}

function getRandomShow(shows) {
    if (shows.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * shows.length);
    return shows[randomIndex];
}

function showResult(show) {
    const resultDiv = document.getElementById('result');
    const showTitle = document.getElementById('showTitle');
    
    if (show) {
        showTitle.textContent = show.title;
        resultDiv.style.display = 'block';
    } else {
        showTitle.textContent = "No shows found matching your criteria";
        resultDiv.style.display = 'block';
    }
}

function showError(message) {
    const container = document.querySelector('.container');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    container.appendChild(errorDiv);
}

// Handle form submission
document.getElementById('tvForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const genre = document.getElementById('genre').value;
    const length = document.getElementById('length').value;
    
    const filteredShows = filterShows(genre, length);
    const randomShow = getRandomShow(filteredShows);
    showResult(randomShow);
});

// Load data when page loads
loadTVData();