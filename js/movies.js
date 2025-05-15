let moviesData = [];

// Load movies data and populate genres
async function loadMoviesData() {
    try {
        const response = await fetch('data/movies.json');
        moviesData = await response.json();
        populateGenres();
    } catch (error) {
        console.error('Error loading movies data:', error);
        showError('Failed to load movies data');
    }
}

function populateGenres() {
    const genreSelect = document.getElementById('genre');
    const genres = new Set();
    
    // Extract all unique genres
    moviesData.forEach(movie => {
        if (Array.isArray(movie.genre)) {
            movie.genre.forEach(g => genres.add(g));
        } else if (movie.genre) {
            genres.add(movie.genre);
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

function filterMovies(genre, length) {
    return moviesData.filter(movie => {
        // If no genre selected, match all
        let genreMatch = true;
        if (genre) {
            genreMatch = Array.isArray(movie.genre) 
                ? movie.genre.includes(genre)
                : movie.genre === genre;
        }
        
        // If no length selected, match all
        let lengthMatch = true;
        if (length) {
            lengthMatch = movie.length === length;
        }
        
        return genreMatch && lengthMatch;
    });
}

function getRandomMovie(movies) {
    if (movies.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
}

function showResult(movie) {
    const resultDiv = document.getElementById('result');
    const movieTitle = document.getElementById('movieTitle');
    
    if (movie) {
        movieTitle.textContent = movie.title;
        resultDiv.style.display = 'block';
    } else {
        movieTitle.textContent = "No movies found matching your criteria";
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
document.getElementById('movieForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const genre = document.getElementById('genre').value;
    const length = document.getElementById('length').value;
    
    const filteredMovies = filterMovies(genre, length);
    const randomMovie = getRandomMovie(filteredMovies);
    showResult(randomMovie);
});

// Load data when page loads
loadMoviesData();