import { useState, useEffect, useRef } from 'react'
import './Planet.css'

function Planet({ planet, rotation, showOrbit, onClick, speed }) {
  const [moonRotations, setMoonRotations] = useState({})
  const [planetRotation, setPlanetRotation] = useState(0)
  const animationFrameRef = useRef(null)
  const lastTimeRef = useRef(Date.now())

  useEffect(() => {
    if (!planet.moonData || planet.moonData.length === 0 || speed === 0) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
      }
      return
    }

    lastTimeRef.current = Date.now()

    const animate = () => {
      const currentTime = Date.now()
      const deltaTime = (currentTime - lastTimeRef.current) / 1000
      lastTimeRef.current = currentTime

      setMoonRotations(prev => {
        const newRotations = { ...prev }
        planet.moonData.forEach(moon => {
          const currentRotation = prev[moon.name] || 0
          newRotations[moon.name] = (currentRotation + moon.speed * speed * deltaTime * 60) % 360
        })
        return newRotations
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [planet.moonData, speed])

  // Planet self-rotation animation
  useEffect(() => {
    if (speed === 0) return

    const rotationInterval = setInterval(() => {
      setPlanetRotation(prev => (prev + 1) % 360)
    }, 50 / speed)

    return () => clearInterval(rotationInterval)
  }, [speed])

  const orbitStyle = {
    width: `${planet.distance * 2}px`,
    height: `${planet.distance * 2}px`,
    top: `calc(50% - ${planet.distance}px)`,
    left: `calc(50% - ${planet.distance}px)`,
  }

  return (
    <div className="orbit-container">
      {showOrbit && <div className="orbit" style={orbitStyle}></div>}
      <div 
        className="planet-revolution" 
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div 
          className="planet-position"
          style={{ 
            transform: `translateX(${planet.distance}px)` 
          }}
        >
          <div 
            className="planet" 
            style={{
              width: `${planet.size}px`,
              height: `${planet.size}px`,
              backgroundColor: planet.color,
            }}
            onClick={onClick}
            title={planet.name}
          >
            {/* Planet surface rotation */}
            <div className="planet-surface" style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${planet.color} 0%, ${adjustBrightness(planet.color, -20)} 100%)`,
              transform: `rotate(${planetRotation * (planet.rotationSpeed || 1)}deg)`,
              transition: speed === 0 ? 'none' : 'transform 0.05s linear',
            }}></div>

            {planet.hasRings && (
              <div className="rings" style={{
                width: `${planet.size * 2}px`,
                height: `${planet.size * 0.4}px`,
              }}></div>
            )}
            
            {/* Render moons */}
            {planet.moonData && planet.moonData.map(moon => (
              <div key={moon.name}>
                {showOrbit && (
                  <div className="moon-orbit-path" style={{
                    width: `${moon.distance * 2}px`,
                    height: `${moon.distance * 2}px`,
                  }}></div>
                )}
                <div 
                  className="moon-wrapper"
                  style={{ 
                    transform: `rotate(${moonRotations[moon.name] || 0}deg)`
                  }}
                >
                  <div 
                    className="moon" 
                    style={{
                      width: `${moon.size}px`,
                      height: `${moon.size}px`,
                      backgroundColor: moon.color,
                      transform: `translateX(${moon.distance}px)`,
                    }}
                    title={moon.name}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper function to adjust color brightness
function adjustBrightness(color, percent) {
  const num = parseInt(color.replace("#", ""), 16)
  const amt = Math.round(2.55 * percent)
  const R = (num >> 16) + amt
  const G = (num >> 8 & 0x00FF) + amt
  const B = (num & 0x0000FF) + amt
  return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255))
    .toString(16).slice(1)
}

export default Planet
