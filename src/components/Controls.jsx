import './Controls.css'

function Controls({ 
  speed, 
  setSpeed, 
  showOrbits, 
  setShowOrbits, 
  scale, 
  setScale,
  isPaused,
  setIsPaused
}) {
  return (
    <div className="controls">
      <div className="control-group">
        <label>
          <span>⏯️ Animation</span>
          <button 
            className={`pause-button ${isPaused ? 'paused' : ''}`}
            onClick={() => setIsPaused(!isPaused)}
          >
            {isPaused ? '▶️ Play' : '⏸️ Pause'}
          </button>
        </label>
      </div>

      <div className="control-group">
        <label>
          <span>⚡ Speed: {speed}x</span>
          <input
            type="range"
            min="0.1"
            max="5"
            step="0.1"
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
            disabled={isPaused}
          />
        </label>
      </div>

      <div className="control-group">
        <label>
          <span>🔍 Zoom: {scale.toFixed(1)}x</span>
          <input
            type="range"
            min="0.3"
            max="2"
            step="0.1"
            value={scale}
            onChange={(e) => setScale(parseFloat(e.target.value))}
          />
        </label>
      </div>

      <div className="control-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={showOrbits}
            onChange={(e) => setShowOrbits(e.target.checked)}
          />
          <span>🛸 Show Orbits</span>
        </label>
      </div>
    </div>
  )
}

export default Controls
