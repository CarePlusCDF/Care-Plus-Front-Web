import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiAward } from 'react-icons/fi'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const Ranking = () => {
  const navigate = useNavigate()

  const points = 1500

  const rankingData = [
    { id: 1, nome: 'Renato', pontos: 1500, atual: true },
    { id: 2, nome: 'Maria', pontos: 1200, atual: false },
    { id: 3, nome: 'Emiliano', pontos: 1120, atual: false },
    { id: 4, nome: 'Artur', pontos: 980, atual: false },
    { id: 5, nome: 'Giovanna', pontos: 860, atual: false },
    { id: 6, nome: 'Matheus', pontos: 730, atual: false },
  ]

  const getMedalClass = (position) => {
    if (position === 1) return 'ranking-gold'
    if (position === 2) return 'ranking-silver'
    if (position === 3) return 'ranking-bronze'
    return 'bg-primary-subtle-custom text-primary'
  }

  const podium = rankingData.slice(0, 3)
  const restante = rankingData.slice(3)

  return (
    <div className="min-vh-100 bg-body">
      <TopBar points={points} showPoints={true} />

      <main className="container py-3 pb-5 mb-4">

        <section className="d-flex align-items-center gap-2 mb-4">
          <button
            className="btn btn-link p-0 text-decoration-none text-muted"
            onClick={() => navigate('/missoes')}
          >
            <FiArrowLeft size={20} />
          </button>
          <h1 className="fw-bold mb-0 fs-5 text-dark">Ranking Semanal</h1>
        </section>

        <section className="mb-4">
          <div className="rounded-3 p-4 text-center bg-gradient-primary shadow-primary">
            <div className="avatar-lg rounded-circle bg-white bg-opacity-25 d-flex align-items-center justify-content-center mx-auto mb-3">
              <FiAward size={32} color="#fff" />
            </div>
            <h2 className="fw-bold text-white fs-5 mb-1">Você está em 1° lugar!</h2>
            <p className="text-white opacity-75 small mb-2">Parabéns, Renato!</p>
            <span className="fw-bold d-inline-block px-3 py-1 rounded-pill bg-white text-primary fs-7">
              {points.toLocaleString('pt-BR')} pts
            </span>
          </div>
        </section>

        <section className="mb-4">
          <div className="bg-white rounded-3 border p-3 d-flex align-items-center justify-content-between">
            <p className="mb-0 small text-muted fw-medium">Tempo restante</p>
            <span className="fw-bold text-primary fs-7">4 dias</span>
          </div>
        </section>

        <section className="mb-4">
          <h2 className="fw-bold mb-3 fs-6 text-dark">Pódio</h2>
          <div className="row g-3 justify-content-center">
            {podium.map(({ id, nome, pontos, atual }) => (
              <div key={id} className="col-4">
                <div className={`rounded-3 p-3 text-center border ${atual ? 'ranking-item-highlight' : 'bg-white'}`}>
                  <div className={`avatar-sm rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2 fw-bold fs-7 ${getMedalClass(id)}`}>
                    {id}°
                  </div>
                  <p className="fw-bold mb-0 fs-7 text-dark">{nome}</p>
                  <p className="mb-0 text-primary fw-bold fs-8">
                    {pontos.toLocaleString('pt-BR')} pts
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-4">
          <h2 className="fw-bold mb-3 fs-6 text-dark">Classificação</h2>
          <div className="d-flex flex-column gap-2">
            {rankingData.map(({ id, nome, pontos, atual }) => (
              <div
                key={id}
                className={`rounded-3 p-3 d-flex align-items-center gap-3 border ${atual ? 'ranking-item-highlight' : 'bg-white'}`}
              >
                <div className={`avatar-xs rounded-circle d-flex align-items-center justify-content-center fw-bold fs-8 flex-shrink-0 ${getMedalClass(id)}`}>
                  {id}°
                </div>
                <p className={`mb-0 fw-medium fs-7 flex-fill ${atual ? 'text-primary' : 'text-dark'}`}>
                  {nome} {atual && '(você)'}
                </p>
                <span className={`fw-bold fs-7 ${atual ? 'text-primary' : 'text-muted'}`}>
                  {pontos.toLocaleString('pt-BR')} pts
                </span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <button
            className="btn w-100 rounded-3 py-3 fw-bold fs-7"
            style={{ border: '2px solid #E4E7EB', backgroundColor: '#fff', color: '#6B7685' }}
            onClick={() => navigate('/inicial')}
          >
            Sair do ranking
          </button>
        </section>

      </main>

      <BottomNav activePage="home" />
    </div>
  )
}

export default Ranking