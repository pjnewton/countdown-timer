# 🕒 Countdown Timer Web App

A clean, responsive countdown timer designed for instructors running group sessions. Features enhanced controls including play, pause, stop, reset, and add time functionality.

## ✨ Features

- **🎮 Enhanced Controls**: Play, pause, stop, reset, and add time
- **🎨 Modern UI**: Dark theme with digital Orbitron font
- **📱 Responsive**: Works on desktop and mobile devices
- **⚡ Fast**: Built with vanilla JavaScript and Tailwind CSS
- **🎯 Preset Timers**: Quick access to common session lengths
- **⏰ Custom Input**: Set any duration you need

## 🚀 Quick Start

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Build CSS**:

   ```bash
   npm run build
   ```

3. **Open in browser**:
   Open `index.html` in your browser

## 🛠️ Development

### Build Commands

- **Development** (with watch): `npm run build`
- **Production** (minified): `npm run build:prod`

### Project Structure

```
timer/
├── index.html          # Main HTML file
├── src/
│   ├── script.js       # Timer logic
│   └── styles.css      # Tailwind CSS
├── dist/
│   └── output.css      # Generated CSS (after build)
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
└── README.md          # This file
```

## 🎮 Controls

- **▶️ Play/Pause**: Start or pause the countdown
- **⏹️ Stop**: Stop timer and reset to original time
- **🔄 Reset**: Clear timer completely
- **➕ Add Time**: Add minutes to current timer
- **Preset Buttons**: Quick 15-min and 45-min timers
- **Custom Input**: Set any duration

## 🎨 Styling

- **Dark Theme**: `bg-gray-900` background with white text
- **Digital Font**: Orbitron for authentic timer feel
- **Glowing Effects**: Green glow for running timer, red pulse when finished
- **Responsive**: Adapts to different screen sizes

## 🔧 Tech Stack

- **HTML5**: Semantic structure
- **Tailwind CSS**: Utility-first styling
- **Vanilla JavaScript**: No frameworks needed
- **Google Fonts**: Orbitron for digital display

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Future Enhancements

- [ ] Audio alerts when timer finishes
- [ ] Keyboard shortcuts
- [ ] Multiple timer presets
- [ ] Timer history
- [ ] PWA support for mobile apps
- [ ] Dark/light theme toggle

## 📄 License

MIT License - feel free to use and modify!
