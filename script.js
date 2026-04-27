// Breathing logic
let isAnimating = false;

function toggleBreathing() {
    const circle = document.getElementById('breath-circle');
    const btn = document.getElementById('breath-btn');

    if (!isAnimating) {
        circle.classList.add('animating');
        btn.innerText = "Stop Exercise";
        isAnimating = true;
    } else {
        circle.classList.remove('animating');
        btn.innerText = "Start Breathing";
        isAnimating = false;
    }
}

// Mood logic
function logMood(moodName, emoji) {
    const status = document.getElementById('mood-status');
    status.innerHTML = `You feeling <strong>${moodName} ${emoji}</strong>. Take a deep breath!`;
}
