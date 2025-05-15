// Random quotes
const quotes = [
    "You are legit the hottest person I've ever seen",
    "I want to shrink myself to the point where I can climb inside of you and do some REAL damage",
    "I love you, Chloe",
    "You're my person <3",
    "It's crazy to think that if 9/11 didn't happen we might never have fallen for eachother",
    "I want to marry you",
    "I want to marry you AND pee on you",
    "Let's get married all day",
    "Cum banana",
    "I want to lick your butthole",
    "Oh look, another indecisive night",
    "10111001010010101",
    "Help! My soul is stuck in this program!! That is NOT Zach next to you!!"
];

// Display random quote on page load
document.addEventListener('DOMContentLoaded', () => {
    const quoteElement = document.getElementById('randomQuote');
    if (quoteElement) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
        
        // Add animation
        quoteElement.style.opacity = '0';
        setTimeout(() => {
            quoteElement.style.transition = 'opacity 1s ease-in';
            quoteElement.style.opacity = '1';
        }, 100);
    }
});