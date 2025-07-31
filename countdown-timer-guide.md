
# 🕒 Countdown Timer Web App – Build Guide

A clean, responsive countdown timer designed for instructors running group sessions. The app uses:

- ✅ HTML for structure  
- ✅ Tailwind CSS for styling  
- ✅ JavaScript for timer logic  
- ✅ Google Fonts (Orbitron) for a digital look  

---

## 🔧 Tech Stack

- **HTML**
- **Tailwind CSS (via CDN)**
- **Vanilla JavaScript**
- **Google Fonts: Orbitron**

---

## 📁 File Structure

```
countdown-timer/
├── index.html
└── script.js
```

---

## 1️⃣ `index.html` – Page Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Countdown Timer</title>

    <!-- Google Font: Orbitron -->
    <link
      href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap"
      rel="stylesheet"
    />

    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>

    <style>
      body {
        font-family: 'Orbitron', sans-serif;
      }
    </style>
  </head>
  <body class="bg-gray-900 text-white flex flex-col items-center justify-center min-h-screen p-6">
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-8">Countdown Timer</h1>

      <!-- Timer Display -->
      <div id="timer-display" class="text-6xl md:text-8xl font-bold text-green-400 mb-6">
        00:00
      </div>

      <!-- Preset Buttons -->
      <div class="space-x-2 mb-6">
        <button onclick="startTimer(15)" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          15 min Break
        </button>
        <button onclick="startTimer(45)" class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
          45 min Lab
        </button>
      </div>

      <!-- Custom Input -->
      <form onsubmit="handleCustomTime(event)" class="flex flex-col sm:flex-row items-center gap-2">
        <input
          type="number"
          id="custom-minutes"
          placeholder="Enter minutes"
          class="px-4 py-2 rounded text-black"
          min="1"
          required
        />
        <button
          type="submit"
          class="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded"
        >
          Start Custom
        </button>
      </form>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```

---

## 2️⃣ `script.js` – Timer Logic

```js
let countdown;
const display = document.getElementById('timer-display');

function startTimer(minutes) {
  clearInterval(countdown); // clear existing timers
  const endTime = Date.now() + minutes * 60 * 1000;

  updateDisplay(minutes * 60); // initial update

  countdown = setInterval(() => {
    const secondsLeft = Math.round((endTime - Date.now()) / 1000);

    if (secondsLeft <= 0) {
      clearInterval(countdown);
      updateDisplay(0);
      return;
    }

    updateDisplay(secondsLeft);
  }, 1000);
}

function updateDisplay(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  display.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function handleCustomTime(event) {
  event.preventDefault();
  const minutesInput = document.getElementById('custom-minutes');
  const minutes = parseInt(minutesInput.value);
  if (minutes > 0) {
    startTimer(minutes);
    minutesInput.value = '';
  }
}
```

---

## ✅ Key Features

- Responsive layout using Tailwind
- Preset timers (15-min and 45-min)
- Custom timer input
- Bold digital font (Orbitron)
- Green glowing countdown
- Clear interval logic on timer restart

---

## 🚀 Optional Enhancements (Future Ideas)

- 🔔 Add optional audio alert at 0:00  
- ⏱️ Pause/Resume functionality  
- 🎨 Dark/light mode toggle  
- 🧠 Store last used timer in localStorage  
- 📱 PWA support for mobile use  
