// Sexy times suggestion generator with localStorage integration
function loadCustomActivities() {
    return JSON.parse(localStorage.getItem('customSexyActivities')) || [];
}

function generateSuggestion(intensity, focus, toys) {
    const suggestions = {
        sweet: {
            zach: [
                "Sensual massage focusing on Zach",
                "Gentle teasing and kissing for Zach",
                "Slow, intimate exploration of Zach"
            ],
            chloe: [
                "Romantic massage for Chloe",
                "Soft touches and caresses for Chloe",
                "Sweet, tender attention to Chloe"
            ],
            both: [
                "Mutual massage session",
                "Slow dancing leading to intimacy",
                "Take turns with gentle exploration"
            ]
        },
        spicy: {
            zach: [
                "Dominate Zach tonight",
                "Edge and tease Zach",
                "Focus entirely on pleasing Zach"
            ],
            chloe: [
                "Let Zach take control of Chloe",
                "Extended foreplay for Chloe",
                "Worship Chloe's body"
            ],
            both: [
                "Role reversal - switch who's in charge",
                "Try a new position together",
                "Extended foreplay for both"
            ]
        },
        unhinged: {
            zach: [
                "Complete dominance over Zach",
                "Push Zach's limits",
                "Make Zach beg"
            ],
            chloe: [
                "Chloe takes full control",
                "Explore Chloe's deepest desires",
                "No holding back for Chloe"
            ],
            both: [
                "No limits night",
                "Explore your darkest fantasies together",
                "Push all boundaries"
            ]
        }
    };
    
    // Get base suggestions and add custom activities
    let baseSuggestion = suggestions[intensity][focus];
    const customActivities = loadCustomActivities();
    
    // Filter custom activities based on intensity and focus
    const relevantCustom = customActivities.filter(activity => 
        activity.intensity === intensity && activity.focus.toLowerCase() === focus.toLowerCase()
    );
    
    // Combine base suggestions with custom activities
    const allSuggestions = [...baseSuggestion, ...relevantCustom.map(a => a.activity)];
    
    const randomIndex = Math.floor(Math.random() * allSuggestions.length);
    let suggestion = allSuggestions[randomIndex];
    
    // If it's a custom activity, check for its toys
    const customActivity = customActivities.find(a => a.activity === suggestion);
    if (customActivity && customActivity.toys && customActivity.toys.length > 0) {
        toys = [...toys, ...customActivity.toys];
    }
    
    // Add toy modifiers
    if (toys.length > 0) {
        const toyModifiers = {
            'vibrator': ' with the vibrator',
            'anal-beads': ' incorporating anal beads',
            'butt-plug': ' with the butt plug',
            'whip': ' using the whip',
            'fleshlight': ' with the fleshlight',
            'cuffs': ' with restraints',
            'blindfold': ' while blindfolded',
            'nipple-clamps': ' with nipple play'
        };
        
        // Add random toy to suggestion
        const randomToy = toys[Math.floor(Math.random() * toys.length)];
        suggestion += toyModifiers[randomToy];
    }
    
    return suggestion;
}

function showResult(suggestion) {
    const resultDiv = document.getElementById('result');
    const activityText = document.getElementById('sexyActivity');
    
    activityText.textContent = suggestion;
    resultDiv.style.display = 'block';
}

// Handle form submission
window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('sexyForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const intensity = document.getElementById('intensity').value;
            const focus = document.getElementById('focus').value;
            
            // Get selected toys
            const toyCheckboxes = document.querySelectorAll('input[name="toys"]:checked');
            const toys = Array.from(toyCheckboxes).map(cb => cb.value);
            
            const suggestion = generateSuggestion(intensity, focus, toys);
            showResult(suggestion);
        });
    }
});
