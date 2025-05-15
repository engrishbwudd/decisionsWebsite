// Embedded TV data to avoid fetch issues
const tvData = [
    { "title": "Severance", "genre": ["Sci-Fi", "Drama", "Thriller"], "length": "1hr" },
    { "title": "Atlanta", "genre": ["Comedy", "Drama"], "length": "30min" },
    { "title": "30 Rock", "genre": ["Comedy"], "length": "30min" },
    { "title": "Los Espookys", "genre": ["Comedy", "Horror"], "length": "30min" },
    { "title": "Pen15", "genre": ["Comedy", "Drama"], "length": "30min" },
    { "title": "Castlevania", "genre": ["Animation", "Fantasy", "Action"], "length": "30min" },
    { "title": "The Last of Us", "genre": ["Drama", "Horror", "Adventure"], "length": "1hr" },
    { "title": "The OA", "genre": ["Sci-Fi", "Drama", "Mystery"], "length": "1hr" },
    { "title": "Erased", "genre": ["Anime", "Thriller", "Mystery"], "length": "30min" },
    { "title": "Last Man on Earth", "genre": ["Comedy", "Sci-Fi"], "length": "30min" },
    { "title": "Game of Thrones", "genre": ["Fantasy", "Drama", "Action"], "length": "1hr" },
    { "title": "The Magicians", "genre": ["Fantasy", "Drama"], "length": "1hr" },
    { "title": "On Cinema", "genre": ["Comedy", "Satire"], "length": "30min" },
    { "title": "Saiki K", "genre": ["Anime", "Comedy", "Supernatural"], "length": "30min" },
    { "title": "BoJack Horseman", "genre": ["Animation", "Comedy", "Drama"], "length": "30min" },
    { "title": "Devilman Crybaby", "genre": ["Anime", "Horror", "Action"], "length": "30min" },
    { "title": "My Hero Academia", "genre": ["Anime", "Action", "Fantasy"], "length": "30min" },
    { "title": "The Rehearsal", "genre": ["Comedy", "Docufiction"], "length": "30min" },
    { "title": "Peep Show", "genre": ["Comedy"], "length": "30min" },
    { "title": "Cunk on Earth", "genre": ["Comedy", "Documentary"], "length": "30min" },
    { "title": "Cunk on Life", "genre": ["Comedy", "Documentary"], "length": "30min" },
    { "title": "Veep", "genre": ["Comedy", "Political Satire"], "length": "30min" },
    { "title": "Ludwig", "genre": ["Variety", "Comedy"], "length": "1hr" },
    { "title": "It's Always Sunny in Philadelphia", "genre": ["Comedy"], "length": "30min" },
    { "title": "The Trip", "genre": ["Comedy", "Drama"], "length": "30min" },
    { "title": "The Thick of It", "genre": ["Comedy", "Political Satire"], "length": "30min" },
    { "title": "Detroiters", "genre": ["Comedy"], "length": "30min" },
    { "title": "Succession", "genre": ["Drama", "Satire"], "length": "1hr" },
    { "title": "The Bear", "genre": ["Drama", "Comedy"], "length": "30min" }
];

// Function to get all shows including localStorage data
function getAllShows() {
    let customShows = JSON.parse(localStorage.getItem('customShows')) || [];
    return [...tvData, ...customShows];
}

// Initialize immediately
document.addEventListener('DOMContentLoaded', () => {
    populateGenres();
});

function populateGenres() {
    const genreSelect = document.getElementById('genre');
    const genres = new Set();
    
    // Extract all unique genres
    getAllShows().forEach(show => {
        if (Array.isArray(show.genre)) {
            show.genre.forEach(g => genres.add(g));
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
    return getAllShows().filter(show => {
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
        showTitle.innerHTML = `<strong>${show.title}</strong><br><small>Genre: ${show.genre.join(', ')} | Length: ${show.length}</small>`;
        resultDiv.style.display = 'block';
    } else {
        showTitle.textContent = "No shows found matching your criteria";
        resultDiv.style.display = 'block';
    }
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