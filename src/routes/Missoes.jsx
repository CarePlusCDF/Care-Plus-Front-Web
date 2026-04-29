import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight, FiZap, FiTarget, FiStar, FiHeart, FiDroplet, FiSun, FiTrendingUp, FiInfo } from 'react-icons/fi'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const Missoes = () => {
  const navigate = useNavigate()
  const [expandedDesafio, setExpandedDesafio] = useState(false)

  const points = 1500
  const streakDias = 7

  const desafioAtual = {
    title: 'Beba 3 litros de água',
    progress: 20,
    atual: '600ml',
    meta: '3l',
  }

  const missoesConect = [
    { id: 1, title: '10 ciclos de respiração quadrada', icon: FiSun, concluida: false },
    { id: 2, title: 'Manter BPM abaixo de 100 por 20min em uma corrida', icon: FiHeart, concluida: false },
    { id: 3, title: 'Queime um total de 700 calorias', icon: FiZap, concluida: false },
  ]

  const missoesPersonalizadas = [
    { id: 1, title: 'Vá para o trabalho caminhando ou de bicicleta', icon: FiTarget, concluida: false },
    { id: 2, title: 'Beba 3 litros de água no dia', icon: FiDroplet, concluida: true },
    { id: 3, title: 'Durma 8 horas essa noite', icon: FiStar, concluida: false },
  ]

  const mapaMissoes = [
    { id: 1, desbloqueada: true, concluida: true },
    { id: 2, desbloqueada: true, concluida: true },
    { id: 3, desbloqueada: true, concluida: false },
    { id: 4, desbloqueada: false, concluida: false },
    { id: 5, desbloqueada: false, concluida: false },
    { id: 6, desbloqueada: false, concluida: false },
  ]

  return (
    <div className="min-vh-100 bg-body">
      <TopBar points={points} showPoints={true} />

      <main className="container py-3 pb-5 mb-4">

        <section className="d-flex align-items-center gap-2 mb-4">
          <button
            className="btn btn-link p-0 text-decoration-none"
            style={{ color: '#6B7685' }}
            onClick={() => navigate('/inicial')}
          >
            <FiArrowLeft size={20} />
          </button>
          <h1 className="fw-bold mb-0 fs-5 text-dark">Missões</h1>
        </section>

        <section className="mb-4">
          <div className="bg-white rounded-3 border p-3">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div>
                <span className="small text-muted fw-medium">Desafio atual</span>
                <h2 className="fw-bold mb-0 fs-6 text-dark mt-1">{desafioAtual.title}</h2>
              </div>
              <span className="fw-bold small text-primary">{desafioAtual.progress}%</span>
            </div>
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="small text-muted">{desafioAtual.atual} / {desafioAtual.meta}</span>
            </div>
            <div className="progress rounded-pill" style={{ height: '6px' }}>
              <div
                className="progress-bar bg-primary rounded-pill"
                style={{ width: `${desafioAtual.progress}%` }}
              />
            </div>
          </div>
        </section>

        <section className="mb-4">
          <div className="bg-white rounded-3 border p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="fw-bold mb-0 fs-6 text-dark">Mapa de missões</h2>
              <div className="d-flex align-items-center gap-1 px-2 py-1 rounded-pill"
                style={{ backgroundColor: 'rgba(28,151,112,0.1)' }}>
                <FiZap size={14} color="#1c9770" />
                <span className="fw-bold small text-primary">{streakDias} dias de streak</span>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
              {mapaMissoes.map(({ id, desbloqueada, concluida }) => (
                <div key={id} className="d-flex flex-column align-items-center gap-1">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center fw-bold"
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: concluida
                        ? '#1c9770'
                        : desbloqueada
                          ? 'rgba(28,151,112,0.15)'
                          : '#E4E7EB',
                      color: concluida ? '#fff' : desbloqueada ? '#1c9770' : '#9BA3AE',
                      fontSize: '13px',
                      border: desbloqueada && !concluida ? '2px solid #1c9770' : '2px solid transparent',
                    }}
                  >
                    {id}
                  </div>
                  {id < mapaMissoes.length && (
                    <div style={{ width: '2px', height: '16px', backgroundColor: concluida ? '#1c9770' : '#E4E7EB' }} />
                  )}
                </div>
              ))}
            </div>

            <p className="text-muted small text-center mt-3 mb-0">
              Acesse o app diariamente para liberar o Impulso+ e receber recompensas
            </p>
          </div>
        </section>

        <section className="mb-4">
          <h2 className="fw-bold mb-3 fs-6 text-dark">Missões Connect+</h2>
          <div className="d-flex flex-column gap-2">
            {missoesConect.map(({ id, title, icon: Icon, concluida }) => (
              <div
                key={id}
                className="bg-white rounded-3 border p-3 d-flex align-items-center gap-3"
              >
                <div
                  className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: '40px', height: '40px', backgroundColor: 'rgba(122,209,195,0.15)' }}
                >
                  <Icon size={18} color="#7AD1C3" />
                </div>
                <p className="mb-0 small text-dark flex-fill">{title}</p>
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: '22px', height: '22px',
                    backgroundColor: concluida ? '#1c9770' : 'transparent',
                    border: `2px solid ${concluida ? '#1c9770' : '#CDD3DA'}`,
                  }}
                >
                  {concluida && <FiArrowRight size={10} color="#fff" />}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-4">
          <h2 className="fw-bold mb-3 fs-6 text-dark">Missões personalizadas</h2>
          <div className="d-flex flex-column gap-2">
            {missoesPersonalizadas.map(({ id, title, icon: Icon, concluida }) => (
              <div
                key={id}
                className="bg-white rounded-3 border p-3 d-flex align-items-center gap-3"
              >
                <div
                  className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: '40px', height: '40px', backgroundColor: 'rgba(28,151,112,0.08)' }}
                >
                  <Icon size={18} color="#1c9770" />
                </div>
                <p className="mb-0 small text-dark flex-fill">{title}</p>
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: '22px', height: '22px',
                    backgroundColor: concluida ? '#93CB52' : 'transparent',
                    border: `2px solid ${concluida ? '#93CB52' : '#CDD3DA'}`,
                  }}
                >
                  {concluida && <FiArrowRight size={10} color="#fff" />}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="fw-bold mb-0 fs-6 text-dark">Desafio semanal</h2>
            <button
              className="btn btn-link p-0 text-decoration-none text-primary small d-flex align-items-center gap-1"
              onClick={() => setExpandedDesafio(!expandedDesafio)}
            >
              <FiInfo size={14} color="#1c9770" />
            </button>
          </div>

          {expandedDesafio && (
            <div className="rounded-3 p-3 mb-3 small"
              style={{ backgroundColor: 'rgba(28,151,112,0.07)', border: '1px solid rgba(28,151,112,0.2)', color: '#1A202C' }}>
              Os desafios semanais são lançados toda segunda-feira para o público do aplicativo.
              Quem completar o desafio mais rápido receberá uma caixa surpresa única.
            </div>
          )}

          <div
            className="rounded-3 p-3 d-flex align-items-center justify-content-between bg-gradient-primary shadow-primary"
            role="button"
            onClick={() => navigate('/ranking')}
          >
            <div>
              <p className="fw-bold text-white mb-0 small">Ver Ranking Semanal</p>
              <p className="mb-0 text-white opacity-75" style={{ fontSize: '12px' }}>
                Você está no grupo dos 40% melhores
              </p>
            </div>
            <FiArrowRight size={20} color="#fff" />
          </div>
        </section>

        <section>
          <div
            className="bg-white rounded-3 border p-4 text-center"
            role="button"
            onClick={() => navigate('/impulso')}
          >
            <div
              className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
              style={{ width: '64px', height: '64px', backgroundColor: 'rgba(147,203,82,0.15)' }}
            >
              <FiTrendingUp size={28} color="#93CB52" />
            </div>
            <h2 className="fw-bold fs-6 text-dark mb-1">Impulso+</h2>
            <p className="text-muted small mb-2">Esse é o Flux, seu amigo de streak</p>
            <span
              className="fw-bold d-inline-block px-3 py-1 rounded-pill"
              style={{ backgroundColor: 'rgba(28,151,112,0.1)', color: '#1c9770', fontSize: '13px' }}
            >
              {streakDias} dias
            </span>
          </div>
        </section>

      </main>

      <BottomNav activePage="home" />
    </div>
  )
}

export default Missoes