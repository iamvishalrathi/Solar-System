import { useState, useEffect } from 'react'
import './Sun.css'

function Sun({ speed }) {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    if (speed === 0) return

    const rotationInterval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360)
    }, 100 / speed)

    return () => clearInterval(rotationInterval)
  }, [speed])

  return (
    <div className="sun">
      <div className="sun-core"></div>
      <div className="sun-glow"></div>
      <div 
        className="sun-rays" 
        style={{ 
          transform: `rotate(${rotation}deg)`,
          transition: speed === 0 ? 'none' : 'transform 0.1s linear'
        }}
      ></div>
    </div>
  )
}

export default Sun
