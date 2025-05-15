document.getElementById('add-general-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const activity = document.getElementById('activity').value;
    
    if (!activity) {
        alert('Please enter an activity name.');
        return;
    }
    
    let customActivities = JSON.parse(localStorage.getItem('customActivities')) || [];
    customActivities.push(activity);
    localStorage.setItem('customActivities', JSON.stringify(customActivities));
    
    alert('Activity added successfully!');
    this.reset();
    window.location.href = 'general.html';
});