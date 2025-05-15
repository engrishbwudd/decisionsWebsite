document.getElementById('add-movie-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const selectedGenres = [];
    const genreCheckboxes = document.querySelectorAll('input[name="genre"]:checked');
    genreCheckboxes.forEach(checkbox => {
        selectedGenres.push(checkbox.value);
    });
    const length = document.getElementById('length').value;
    
    if (!title || selectedGenres.length === 0 || !length) {
        alert('Please fill all fields and select at least one genre.');
        return;
    }
    
    const newMovie = {
        title: title,
        genre: selectedGenres,
        length: length
    };
    
    let customMovies = JSON.parse(localStorage.getItem('customMovies')) || [];
    customMovies.push(newMovie);
    localStorage.setItem('customMovies', JSON.stringify(customMovies));
    
    alert('Movie added successfully!');
    this.reset();
    window.location.href = 'movies.html';
});