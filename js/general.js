let generalData = [];

// Load general activities data
async function loadGeneralData() {
    try {
        const response = await fetch('data/general.json');
        generalData = await response.json();
        pickNewActivity();
    } catch (error) {
        console.error('Error loading general data:', error);
        showError('Failed to load activities data');
    }
}

function getRandomActivity() {
    if (generalData.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * generalData.length);
    return generalData[randomIndex];
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

function showError(message) {
    const container = document.querySelector('.container');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    container.appendChild(errorDiv);
}

// Load data when page loads
loadGeneralData();