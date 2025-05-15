document.getElementById('add-game-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    
    if (!title) {
        alert('Please enter a game title.');
        return;
    }
    
    let customGames = JSON.parse(localStorage.getItem('customGames')) || [];
    customGames.push(title);
    localStorage.setItem('customGames', JSON.stringify(customGames));
    
    alert('Game added successfully!');
    this.reset();
    window.location.href = 'games.html';
});