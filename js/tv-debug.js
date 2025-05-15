let tvData = [];

// Load TV shows data and populate genres
async function loadTVData() {
    console.log('Starting to load TV data...');
    const errorDiv = document.querySelector('.error-message');
    if (errorDiv) errorDiv.style.display = 'none';
    
    try {
        console.log('Fetching from: data/shows.json');
        const response = await fetch('data/shows.json');
        console.log('Response status:', response.status);
        console.log('Response ok:', response.ok);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const text = await response.text();
        console.log('Response text length:', text.length);
        console.log('First 100 chars:', text.substring(0, 100));
        
        tvData = JSON.parse(text);
        console.log('Parsed data length:', tvData.length);
        console.log('First item:', tvData[0]);
        
        populateGenres();
    } catch (error) {
        console.error('Error loading TV data:', error);
        showError('Failed to load TV shows data: ' + error.message);
    }
}

function populateGenres() {
    console.log('Populating genres...');
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
    
    console.log('Found genres:', genres);
    
    // Sort and add to select
    Array.from(genres).sort().forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreSelect.appendChild(option);
    });
    
    console.log('Genres populated');
}

function filterShows(genre, length) {
    console.log('Filtering shows - Genre:', genre, 'Length:', length);
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
    console.log('Showing result:', show);
    const resultDiv = document.getElementById('result');
    const showTitle = document.getElementById('showTitle');
    
    if (!resultDiv || !showTitle) {
        console.error('Result elements not found');
        return;
    }
    
    if (show) {
        showTitle.innerHTML = `${show.title}<br><small>Genre: ${show.genre.join(', ')} | Length: ${show.length}</small>`;
        resultDiv.style.display = 'block';
    } else {
        showTitle.textContent = "No shows found matching your criteria";
        resultDiv.style.display = 'block';
    }
}

function showError(message) {
    console.error('Showing error:', message);
    const errorDiv = document.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
    } else {
        // Create error div if it doesn't exist
        const container = document.querySelector('.container');
        const newErrorDiv = document.createElement('div');
        newErrorDiv.className = 'error-message';
        newErrorDiv.textContent = message;
        container.appendChild(newErrorDiv);
    }
}

// Handle form submission
const form = document.getElementById('tvForm');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted');
        
        const genre = document.getElementById('genre').value;
        const length = document.getElementById('length').value;
        
        console.log('Selected - Genre:', genre, 'Length:', length);
        
        const filteredShows = filterShows(genre, length);
        console.log('Filtered shows count:', filteredShows.length);
        
        const randomShow = getRandomShow(filteredShows);
        showResult(randomShow);
    });
} else {
    console.error('TV form not found');
}

// Load data when page loads
console.log('Starting data load...');
loadTVData();