import './InfoPanel.css'

function InfoPanel({ planet, onClose }) {
  return (
    <div className="info-panel-overlay" onClick={onClose}>
      <div className="info-panel" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✕</button>
        
        <div className="planet-header">
          <div 
            className="planet-preview" 
            style={{ backgroundColor: planet.color }}
          >
            {planet.hasRings && <div className="preview-rings"></div>}
          </div>
          <h2>{planet.name}</h2>
        </div>

        <p className="planet-description">{planet.description}</p>

        <div className="planet-stats">
          <div className="stat">
            <span className="stat-label">🌙 Moons</span>
            <span className="stat-value">{planet.moons}</span>
          </div>
          <div className="stat">
            <span className="stat-label">🔄 Orbit Speed</span>
            <span className="stat-value">{planet.orbitSpeed.toFixed(2)} AU/s</span>
          </div>
          <div className="stat">
            <span className="stat-label">📏 Distance</span>
            <span className="stat-value">{planet.distance} AU</span>
          </div>
        </div>

        {planet.moonData && planet.moonData.length > 0 && (
          <div className="visible-moons">
            <h3>Visible Moons</h3>
            <div className="moon-list">
              {planet.moonData.map((moon, index) => (
                <div key={index} className="moon-item">
                  <div 
                    className="moon-preview" 
                    style={{ backgroundColor: moon.color }}
                  ></div>
                  <span>{moon.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="planet-facts">
          <h3>Interesting Facts</h3>
          <ul>
            {planet.facts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default InfoPanel
