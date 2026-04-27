// 1. Mood Tracker Logic
function logMood(mood) {
  const display = document.getElementById('mood-display');
  display.innerText = "Today you are feeling: " + mood;
  display.style.color = "#4a90e2";
}

// 2. Breathing Exercise Logic
let isBreathing = false;
function toggleBreathing() {
  const circle = document.querySelector('.breathing-circle');
  const btn = document.getElementById('breath-btn');
  
  if (!isBreathing) {
    circle.style.animation = "breath 8s infinite ease-in-out";
    btn.innerText = "Stop Breathing Exercise";
    isBreathing = true;
  } else {
    circle.style.animation = "none";
    btn.innerText = "Start Breathing Exercise";
    isBreathing = false;
  }
}
