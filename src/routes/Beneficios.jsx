import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight, FiLock } from 'react-icons/fi'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const Beneficios = () => {
  const navigate = useNavigate()
  const points = 1500
  const categoria = 'Bronze'
  const proximaCategoria = 'Prata'

  const beneficiosAtivos = [
    { id: 1, title: '5 corridas com 10% de desconto', parceiro: 'Uber', ativo: true },
  ]

  const beneficiosDisponiveis = [
    { id: 1, title: 'Ganhe 1% de cashback no roxinho', parceiro: 'Nubank', bloqueado: false },
    { id: 2, title: 'Ganhe 3% de desconto em qualquer compra', parceiro: 'Amazon', bloqueado: false },
    { id: 3, title: 'Desconto R$3 na próxima corrida', parceiro: 'Uber', bloqueado: false },
    { id: 4, title: 'Ganhe até 10% de desconto na primeira sessão', parceiro: 'Mattos Filho', bloqueado: true },
    { id: 5, title: 'Receba até 2GB de armazenamento', parceiro: 'Google Cloud', bloqueado: true },
    { id: 6, title: 'Receba aplicativos exclusivos', parceiro: 'Meta', bloqueado: true },
  ]

  return (
    <div className="min-vh-100 bg-body">
      <TopBar points={points} showPoints={true} />

      <main className="container py-3 pb-5 mb-4">

        <section className="d-flex align-items-center gap-2 mb-4">
          <button
            className="btn btn-link p-0 text-decoration-none text-muted"
            onClick={() => navigate('/inicial')}
          >
            <FiArrowLeft size={20} />
          </button>
          <h1 className="fw-bold mb-0 fs-5 text-dark-custom">Benefícios</h1>
        </section>

        <section className="mb-4">
          <div className="bg-gradient-primary shadow-primary rounded-3 p-4">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <p className="text-white opacity-75 small mb-1">Sua categoria</p>
                <h2 className="fw-bold text-white fs-4 mb-1">{categoria}</h2>
                <p className="text-white opacity-75 fs-9 mb-0">
                  Próxima categoria: {proximaCategoria}
                </p>
              </div>
              <div className="bg-white bg-opacity-25 rounded-3 px-3 py-2">
                <span className="fw-bold text-white fs-7">
                  {points.toLocaleString('pt-BR')} pts
                </span>
              </div>
            </div>
            <div className="mt-3">
              <div className="d-flex justify-content-between mb-1">
                <span className="text-white opacity-75 fs-9">Progresso para Prata</span>
                <span className="text-white fw-bold fs-9">60%</span>
              </div>
              <div className="progress rounded-pill progress-h-sm">
                <div className="progress-bar bg-white rounded-pill progress-60" />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-4">
          <h2 className="fw-bold fs-6 text-dark-custom mb-3">Benefícios ativos</h2>
          <div className="d-flex flex-column gap-2">
            {beneficiosAtivos.map(({ id, title, parceiro, ativo }) => (
              <div key={id} className="bg-white rounded-3 border shadow-card p-3 d-flex align-items-center gap-3">
                <div className="icon-box-sm rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 bg-primary-subtle-custom">
                  <FiArrowRight size={18} color="#1c9770" />
                </div>
                <div className="flex-fill">
                  <p className="fw-bold mb-0 fs-7 text-dark-custom">{title}</p>
                  <p className="mb-0 text-muted fs-9">{parceiro}</p>
                </div>
                {ativo && (
                  <span className="badge rounded-pill fs-9 bg-primary">Ativo</span>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="fw-bold fs-6 text-dark-custom mb-0">Disponíveis no nível {categoria}</h2>
          </div>
          <div className="row g-3">
            {beneficiosDisponiveis.map(({ id, title, parceiro, bloqueado }) => (
              <div key={id} className="col-12 col-md-6">
                <div className={`bg-white rounded-3 border shadow-card p-3 h-100 ${bloqueado ? 'opacity-50' : ''}`}>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="fw-bold fs-7 text-dark-custom">{parceiro}</span>
                    {bloqueado && <FiLock size={14} color="#9BA3AE" />}
                  </div>
                  <p className="mb-0 text-muted fs-9">{title}</p>
                  {bloqueado && (
                    <p className="mb-0 text-primary fs-9 fw-medium mt-1">
                      Complete missões para desbloquear
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        

      </main>

      <BottomNav activePage="home" />
    </div>
  )
}

export default Beneficios