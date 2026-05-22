import { FiAward, FiBell } from 'react-icons/fi'

const TopBar = ({ points = 0, showPoints = true }) => {
  return (
    <header className="flex justify-between items-center px-3 py-2 bg-white border-b border-brand-gray">

      <div>
        {showPoints && (
          <span className="flex items-center gap-1 bg-brand-gray-100 rounded-full px-3 py-1">
            <FiAward size={18} className="text-brand-primary" />
            <span className="font-bold text-sm">{points.toLocaleString('pt-BR')}</span>
          </span>
        )}
      </div>

      <div className="flex items-center gap-3">
        <button className="bg-transparent border-none p-0 font-bold text-brand-muted">
          A+
        </button>
        <button className="bg-transparent border-none p-0 text-brand-muted">
          <FiBell size={20} />
        </button>
      </div>

    </header>
  )
}

export default TopBar