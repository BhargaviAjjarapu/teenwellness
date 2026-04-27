// 1. MOOD GRAPH LOGIC
let moodData = [3, 4, 2, 5, 4, 3, 4]; // Sample data for 7 days
const ctx = document.getElementById('moodChart').getContext('2d');
let moodChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Mood Level',
            data: moodData,
            borderColor: '#6c5ce7',
            tension: 0.4,
            fill: true,
            backgroundColor: 'rgba(108, 92, 231, 0.1)'
        }]
    },
    options: { scales: { y: { min: 1, max: 5 } } }
});

function addMood(val) {
    moodData.shift();
    moodData.push(val);
    moodChart.update();
}

// 2. SQUARE BREATHING (4-4-4)
async function startBreathing() {
    const circle = document.getElementById('breath-circle');
    const text = document.getElementById('breath-text');
    
    const steps = [
        { t: "Inhale...", c: "inhale" },
        { t: "Hold...", c: "hold" },
        { t: "Exhale...", c: "exhale" },
        { t: "Wait...", c: "" }
    ];

    for(let i=0; i<4; i++) { // Run 4 cycles
        for(let step of steps) {
            text.innerText = step.t;
            circle.className = "circle " + step.c;
            await new Promise(r => setTimeout(r, 4000));
        }
    }
    text.innerText = "Exercise Complete!";
}

// 3. FOCUS TIMER LOGIC
let timeLeft = 1500; // 25 mins
let timerId = null;
let isBreak = false;

function toggleTimer() {
    if(timerId) {
        clearInterval(timerId);
        timerId = null;
        document.getElementById('timer-btn').innerText = "Resume";
    } else {
        timerId = setInterval(updateTimer, 1000);
        document.getElementById('timer-btn').innerText = "Pause";
    }
}

function updateTimer() {
    let mins = Math.floor(timeLeft / 60);
    let secs = timeLeft % 60;
    document.getElementById('timer').innerText = `${mins}:${secs < 10 ? '0'+secs : secs}`;
    
    if(timeLeft === 0) {
        isBreak = !isBreak;
        timeLeft = isBreak ? 300 : 1500; // 5 min break or 25 min work
        document.getElementById('timer-label').innerText = isBreak ? "Break Time!" : "Get back to work!";
        alert(isBreak ? "Break time! Stretch your legs." : "Focus time! Get back to it.");
    }
    timeLeft--;
}

// 4. VENT BOX
function clearVent() { document.getElementById('ventInput').value = ""; }
