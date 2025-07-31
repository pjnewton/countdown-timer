// Timer state
let countdown;
let isRunning = false;
let originalTime = 0;
let currentTime = 0;
let endTime = 0;

// DOM elements
const display = document.getElementById('timer-display');
const playPauseBtn = document.getElementById('play-pause-btn');
const stopBtn = document.getElementById('stop-btn');

// Initialize timer
function initTimer() {
  updateDisplay(0);
  updateButtonStates();
}

// Set timer to specific minutes
function setTimer(minutes) {
  stopTimer();
  originalTime = minutes * 60;
  currentTime = originalTime;
  updateDisplay(currentTime);
  updateButtonStates();
}

// Start the countdown
function startTimer() {
  if (currentTime <= 0) return;

  isRunning = true;
  endTime = Date.now() + currentTime * 1000;

  updateButtonStates();

  countdown = setInterval(() => {
    const secondsLeft = Math.round((endTime - Date.now()) / 1000);

    if (secondsLeft <= 0) {
      clearInterval(countdown);
      currentTime = 0;
      updateDisplay(0);
      display.classList.add('finished');
      isRunning = false;
      updateButtonStates();
      return;
    }

    currentTime = secondsLeft;
    updateDisplay(secondsLeft);
  }, 1000);
}

// Pause the countdown
function pauseTimer() {
  clearInterval(countdown);
  isRunning = false;
  updateButtonStates();
}

// Toggle play/pause
function toggleTimer() {
  if (isRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

// Stop timer and reset to original time
function stopTimer() {
  clearInterval(countdown);
  isRunning = false;
  currentTime = originalTime;
  display.classList.remove('finished');
  updateDisplay(currentTime);
  updateButtonStates();
}

// Reset timer completely
function resetTimer() {
  clearInterval(countdown);
  isRunning = false;
  originalTime = 0;
  currentTime = 0;
  display.classList.remove('finished');
  updateDisplay(0);
  updateButtonStates();
}

// Add time to current timer
function addTime() {
  const minutes = prompt('Enter minutes to add:', '5');

  // Input validation and sanitization
  if (!minutes || minutes.trim() === '') return;

  const cleanMinutes = minutes.trim().replace(/[^0-9]/g, '');
  if (!cleanMinutes) return;

  const parsedMinutes = parseInt(cleanMinutes);

  // Bounds checking - reasonable limits
  if (parsedMinutes <= 0 || parsedMinutes > 1440) {
    // Max 24 hours
    alert('Please enter a valid number between 1 and 1440 minutes.');
    return;
  }

  const additionalSeconds = parsedMinutes * 60;
  originalTime += additionalSeconds;
  currentTime += additionalSeconds;

  if (isRunning) {
    // If timer is running, adjust the end time
    endTime += additionalSeconds * 1000;
  }

  updateDisplay(currentTime);
}

// Update the display
function updateDisplay(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  display.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(
    2,
    '0'
  )}`;
}

// Update button states
function updateButtonStates() {
  const hasTime = currentTime > 0;

  // Play/Pause button
  if (isRunning) {
    playPauseBtn.innerHTML = `
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.75 5.25v13.5m-7.5-13.5v13.5"/>
      </svg>
      Pause
    `;
    playPauseBtn.className =
      'control-btn bg-yellow-600 hover:bg-yellow-700 text-white text-lg py-3 flex items-center justify-center gap-2';
  } else {
    playPauseBtn.innerHTML = `
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z"/>
      </svg>
      Play
    `;
    playPauseBtn.className =
      'control-btn bg-green-600 hover:bg-green-700 text-white text-lg py-3 flex items-center justify-center gap-2';
  }

  // Stop button
  stopBtn.disabled = !hasTime || !isRunning;

  // Disable play button if no time set
  playPauseBtn.disabled = !hasTime;
}

// Handle custom time input
function handleCustomTime(event) {
  event.preventDefault();
  const minutesInput = document.getElementById('custom-minutes');
  const rawValue = minutesInput.value;

  // Input validation and sanitization
  if (!rawValue || rawValue.trim() === '') return;

  const cleanValue = rawValue.trim().replace(/[^0-9]/g, '');
  if (!cleanValue) return;

  const minutes = parseInt(cleanValue);

  // Bounds checking - reasonable limits
  if (minutes <= 0 || minutes > 1440) {
    // Max 24 hours
    alert('Please enter a valid number between 1 and 1440 minutes.');
    return;
  }

  setTimer(minutes);
  minutesInput.value = '';
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initTimer);
