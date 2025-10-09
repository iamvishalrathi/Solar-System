# 🌌 Solar System Explorer

An interactive 3D visualization of our Solar System built with React and Vite. Explore all planets, their orbits, and learn fascinating facts about each celestial body.

![Solar System](https://img.shields.io/badge/React-18.2-blue)
![Vite](https://img.shields.io/badge/Vite-5.0-purple)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **Complete Solar System**: Visualize all 8 planets with accurate relative distances
- **Interactive Controls**: 
  - Adjustable orbit speed (0.1x to 5x)
  - Zoom functionality (0.3x to 2x)
  - Toggle orbit visibility
  - Play/Pause animation
- **Planet Information**: Click on any planet to learn detailed facts
- **Realistic Details**:
  - Earth with orbiting Moon
  - Saturn with ring system
  - Accurate colors and relative sizes
  - Smooth animations
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Production Ready**: Optimized build with code splitting and minification

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/iamvishalrathi/Solar-System.git
cd Solar-System
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The build files will be in the `dist` folder, ready to deploy.

## 🌐 Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Update `vite.config.js` base to your repo name:
   ```js
   base: '/Solar-System/'
   ```
4. Run: `npm run deploy`

## 🎮 Controls

- **Speed Slider**: Adjust orbital speed from 0.1x to 5x
- **Zoom Slider**: Zoom in/out from 0.3x to 2x
- **Show Orbits**: Toggle orbit path visibility
- **Play/Pause**: Control animation
- **Click Planets**: View detailed information

## 🪐 Planets Included

1. Mercury - The smallest and fastest planet
2. Venus - The hottest planet
3. Earth - Our home with its Moon
4. Mars - The Red Planet
5. Jupiter - The largest planet
6. Saturn - Famous for its rings
7. Uranus - The ice giant
8. Neptune - The windiest planet

## 🛠️ Technologies

- **React 18.2** - UI framework
- **Vite 5.0** - Build tool and dev server
- **CSS3** - Animations and styling
- **ESLint** - Code quality

## 📁 Project Structure

```
Solar-System/
├── public/
│   └── solar-icon.svg
├── src/
│   ├── components/
│   │   ├── SolarSystem.jsx
│   │   ├── Sun.jsx
│   │   ├── Planet.jsx
│   │   ├── Controls.jsx
│   │   └── InfoPanel.jsx
│   ├── data/
│   │   └── planetsData.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Planet data based on NASA's solar system information
- Inspired by various solar system visualizations

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

Made with ❤️ and ☕ by [Vishal Rathi](https://github.com/iamvishalrathi)
