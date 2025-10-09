import { useState, useEffect } from 'react'
import SolarSystem from './components/SolarSystem'
import Controls from './components/Controls'
import InfoPanel from './components/InfoPanel'
import './App.css'

function App() {
  const [speed, setSpeed] = useState(1)
  const [showOrbits, setShowOrbits] = useState(true)
  const [selectedPlanet, setSelectedPlanet] = useState(null)
  const [scale, setScale] = useState(1)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    // Add stars background
    const canvas = document.createElement('canvas')
    canvas.className = 'stars-canvas'
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const ctx = canvas.getContext('2d')
    
    // Generate random stars
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const radius = Math.random() * 1.5
      const opacity = Math.random() * 0.5 + 0.5
      
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
      ctx.fill()
    }
    
    document.body.insertBefore(canvas, document.getElementById('root'))
    
    return () => {
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas)
      }
    }
  }, [])

  return (
    <div className="app">
      <header className="app-header">
        <h1>🌌 Solar System Explorer</h1>
        <p>Interactive 3D Visualization of Our Solar System</p>
      </header>
      
      <SolarSystem
        speed={isPaused ? 0 : speed}
        showOrbits={showOrbits}
        scale={scale}
        onPlanetClick={setSelectedPlanet}
      />
      
      <Controls
        speed={speed}
        setSpeed={setSpeed}
        showOrbits={showOrbits}
        setShowOrbits={setShowOrbits}
        scale={scale}
        setScale={setScale}
        isPaused={isPaused}
        setIsPaused={setIsPaused}
      />
      
      {selectedPlanet && (
        <InfoPanel
          planet={selectedPlanet}
          onClose={() => setSelectedPlanet(null)}
        />
      )}
    </div>
  )
}

export default App
