document.getElementById('add-sexy-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const activity = document.getElementById('activity').value;
    const intensity = document.getElementById('intensity').value;
    const focus = document.getElementById('focus').value;
    const selectedToys = [];
    const toyCheckboxes = document.querySelectorAll('input[name="toys"]:checked');
    toyCheckboxes.forEach(checkbox => {
        selectedToys.push(checkbox.value);
    });
    
    if (!activity || !intensity || !focus) {
        alert('Please fill all required fields.');
        return;
    }
    
    const newActivity = {
        activity: activity,
        intensity: intensity,
        focus: focus,
        toys: selectedToys
    };
    
    let customSexyActivities = JSON.parse(localStorage.getItem('customSexyActivities')) || [];
    customSexyActivities.push(newActivity);
    localStorage.setItem('customSexyActivities', JSON.stringify(customSexyActivities));
    
    alert('Activity added successfully!');
    this.reset();
    window.location.href = 'sexy.html';
});