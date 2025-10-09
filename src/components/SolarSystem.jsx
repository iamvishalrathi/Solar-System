import { useEffect, useRef, useState } from 'react'
import { planetsData } from '../data/planetsData'
import Planet from './Planet'
import Sun from './Sun'
import './SolarSystem.css'

function SolarSystem({ speed, showOrbits, scale, onPlanetClick }) {
  const containerRef = useRef(null)
  const [rotations, setRotations] = useState({})
  const animationFrameRef = useRef(null)
  const lastTimeRef = useRef(Date.now())

  useEffect(() => {
    // Initialize rotations
    const initialRotations = {}
    planetsData.forEach(planet => {
      initialRotations[planet.name] = 0
    })
    setRotations(initialRotations)
  }, [])

  useEffect(() => {
    if (speed === 0) {
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

      setRotations(prev => {
        const newRotations = { ...prev }
        planetsData.forEach(planet => {
          newRotations[planet.name] = 
            (prev[planet.name] + planet.orbitSpeed * speed * deltaTime * 10) % 360
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
  }, [speed])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `scale(${scale})`
    }
  }, [scale])

  return (
    <div className="solar-system-wrapper">
      <div className="solar-system" ref={containerRef}>
        <Sun speed={speed} />
        
        {planetsData.map((planet) => (
          <Planet
            key={planet.name}
            planet={planet}
            rotation={rotations[planet.name] || 0}
            showOrbit={showOrbits}
            onClick={() => onPlanetClick(planet)}
            speed={speed}
          />
        ))}
      </div>
    </div>
  )
}

export default SolarSystem
