// Embedded general activities data
const generalData = [
  "Chloe backrub",
  "Zach backrub",
  "Thumbwar",
  "Truth",
  "Dare"
];

// Function to get all activities including localStorage data
function getAllActivities() {
    let customActivities = JSON.parse(localStorage.getItem('customActivities')) || [];
    return [...generalData, ...customActivities];
}

function getRandomActivity() {
    const allActivities = getAllActivities();
    if (allActivities.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * allActivities.length);
    return allActivities[randomIndex];
}

function pickNewActivity() {
    const activityTitle = document.getElementById('activityTitle');
    const activity = getRandomActivity();
    
    if (activity) {
        activityTitle.textContent = activity;
    } else {
        activityTitle.textContent = "No activities available";
    }
}

// Initialize when page loads
window.addEventListener('DOMContentLoaded', function() {
    pickNewActivity();
});
