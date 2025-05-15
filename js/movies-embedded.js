// Embedded movie data to avoid fetch issues
const moviesData = [
    { "title": "Everything Everywhere All At Once", "genre": ["Sci-Fi", "Action", "Comedy"], "length": "2+ hrs" },
    { "title": "I, Tonya", "genre": ["Biography", "Drama", "Comedy"], "length": "2+ hrs" },
    { "title": "Midsommar", "genre": ["Horror", "Drama"], "length": "2+ hrs" },
    { "title": "The Favourite", "genre": ["Period", "Drama", "Comedy"], "length": "2+ hrs" },
    { "title": "Roma", "genre": ["Drama"], "length": "2+ hrs" },
    { "title": "A Quiet Place Part II", "genre": ["Horror", "Thriller"], "length": "1-2 hrs" },
    { "title": "Eighth Grade", "genre": ["Drama", "Comedy"], "length": "1-2 hrs" },
    { "title": "The Florida Project", "genre": ["Drama"], "length": "1-2 hrs" },
    { "title": "Moonlight", "genre": ["Drama"], "length": "1-2 hrs" },
    { "title": "The Lobster", "genre": ["Sci-Fi", "Dark Comedy"], "length": "1-2 hrs" },
    { "title": "Climax", "genre": ["Drama", "Horror", "Experimental"], "length": "1-2 hrs" },
    { "title": "Us", "genre": ["Horror", "Thriller"], "length": "2+ hrs" },
    { "title": "Suspiria (1977)", "genre": ["Horror"], "length": "1-2 hrs" },
    { "title": "Suspiria (2018)", "genre": ["Horror", "Drama"], "length": "2+ hrs" },
    { "title": "Coherence", "genre": ["Sci-Fi", "Thriller"], "length": "1-2 hrs" },
    { "title": "Okja", "genre": ["Adventure", "Drama", "Sci-Fi"], "length": "2+ hrs" },
    { "title": "Poor Things", "genre": ["Fantasy", "Drama", "Comedy"], "length": "2+ hrs" },
    { "title": "Dogtooth", "genre": ["Drama", "Thriller"], "length": "1-2 hrs" },
    { "title": "The Killing of a Sacred Deer", "genre": ["Psychological Thriller", "Horror"], "length": "2+ hrs" },
    { "title": "Nope", "genre": ["Horror", "Sci-Fi"], "length": "2+ hrs" },
    { "title": "Marcel the Shell with Shoes On", "genre": ["Animation", "Comedy", "Drama"], "length": "1-2 hrs" },
    { "title": "Safety Not Guaranteed", "genre": ["Comedy", "Sci-Fi", "Romance"], "length": "1-2 hrs" },
    { "title": "Freddy Got Fingered", "genre": ["Comedy"], "length": "1-2 hrs" },
    { "title": "Cart Of Darkness", "genre": ["Documentary"], "length": "1-2 hrs" }
];

// Function to get all movies including localStorage data
function getAllMovies() {
    let customMovies = JSON.parse(localStorage.getItem('customMovies')) || [];
    return [...moviesData, ...customMovies];
}

// Initialize immediately
document.addEventListener('DOMContentLoaded', () => {
    populateGenres();
});

function populateGenres() {
    const genreSelect = document.getElementById('genre');
    const genres = new Set();
    
    // Extract all unique genres
    getAllMovies().forEach(movie => {
        if (Array.isArray(movie.genre)) {
            movie.genre.forEach(g => genres.add(g));
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
    return getAllMovies().filter(movie => {
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
        movieTitle.innerHTML = `<strong>${movie.title}</strong><br><small>Genre: ${movie.genre.join(', ')} | Length: ${movie.length}</small>`;
        resultDiv.style.display = 'block';
    } else {
        movieTitle.textContent = "No movies found matching your criteria";
        resultDiv.style.display = 'block';
    }
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