document.getElementById('add-tv-form').addEventListener('submit', function(e) {
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
    
    const newShow = {
        title: title,
        genre: selectedGenres,
        length: length
    };
    
    let customShows = JSON.parse(localStorage.getItem('customShows')) || [];
    customShows.push(newShow);
    localStorage.setItem('customShows', JSON.stringify(customShows));
    
    alert('TV Show added successfully!');
    this.reset();
    window.location.href = 'tv.html';
});