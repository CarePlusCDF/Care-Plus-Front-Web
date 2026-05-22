import { FiAward, FiBell } from 'react-icons/fi'

const TopBar = ({ points = 0, showPoints = true }) => {
  return (
    <header className="d-flex justify-content-between align-items-center px-3 py-2 bg-white border-bottom">
      
      <div>
        {showPoints && (
          <span className="d-flex align-items-center gap-1 bg-light rounded-pill px-3 py-1">
            <FiAward size={18} color="#1c9770" />
            <span className="fw-bold small">{points.toLocaleString('pt-BR')}</span>
          </span>
        )}
      </div>

      <div className="d-flex align-items-center gap-3">
        <button className="btn btn-link text-secondary p-0 fw-bold">
          A+
        </button>
        <button className="btn btn-link text-secondary p-0">
          <FiBell size={20} />
        </button>
      </div>

    </header>
  )
}

export default TopBar