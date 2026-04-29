import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FiArrowRight, FiZap, FiTarget, FiStar,
  FiHeart, FiWifi, FiFileText, FiUser
} from 'react-icons/fi'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const Inicial = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('boostcare_user')
    if (saved) setUserData(JSON.parse(saved))
  }, [])

  const points = 1500

  const missoesAtivas = [
    { id: 1, title: 'Beber 3 litros de água', progress: 60, icon: FiZap },
    { id: 2, title: 'Andar 3km no dia', progress: 30, icon: FiTarget },
    { id: 3, title: '30min de bike', progress: 0, icon: FiStar },
  ]

  const beneficios = [
    { id: 1, title: 'Cashback Nubank', points: 1500, bgClass: 'bg-primary-subtle-custom' },
    { id: 2, title: 'Desconto iFood R$10', points: 800, bgClass: 'bg-accent2-subtle' },
    { id: 3, title: 'Desconto Apple R$40', points: 2000, bgClass: 'bg-primary-subtle-custom' },
  ]

  const quickMenuItems = [
    { id: 'missoes', label: 'Missões', icon: FiTarget, path: '/missoes', iconColor: '#1c9770', bgClass: 'bg-primary-subtle-custom' },
    { id: 'mind', label: 'Mind+', icon: FiHeart, path: '/mind', iconColor: '#7AD180', bgClass: 'bg-accent2-subtle' },
    { id: 'connect', label: 'Connect+', icon: FiWifi, path: '/connect', iconColor: '#7AD1C3', bgClass: 'bg-accent2-subtle' },
    { id: 'noticias', label: 'Notícias', icon: FiFileText, path: '/noticias', iconColor: '#93CB52', bgClass: 'bg-primary-subtle-custom' },
    { id: 'perfil', label: 'Perfil', icon: FiUser, path: '/perfil', iconColor: '#1c9770', bgClass: 'bg-primary-subtle-custom' },
  ]

  return (
    <div className="min-vh-100 bg-body">
      <TopBar points={points} showPoints={true} />

      <main className="container py-3 pb-5 mb-4">

        {/* Saudação */}
        <section className="mb-4">
          <p className="mb-0 text-muted small">Olá,</p>
          <h1 className="fw-bold mb-0 fs-4 text-dark-custom">Renato!</h1>
          <p className="mb-0 mt-1 text-muted-custom fs-7">
            Continue sua jornada de bem-estar hoje.
          </p>
        </section>

        {/* Menu rápido */}
        <section className="mb-4">
          <div className="row g-3 justify-content-center">
            {quickMenuItems.map(({ id, label, icon: Icon, path, iconColor, bgClass }) => (
              <div key={id} className="col">
                <div
                  className="d-flex flex-column align-items-center gap-2 cursor-pointer"
                  onClick={() => navigate(path)}
                >
                  <div className={`icon-box-sm rounded-3 d-flex align-items-center justify-content-center ${bgClass}`}>
                    <Icon size={22} color={iconColor} />
                  </div>
                  <span className="text-muted-custom fs-8 fw-medium text-center">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Scan Diário */}
        <section className="mb-4">
          <div
            className="rounded-3 p-3 d-flex align-items-center justify-content-between bg-gradient-primary shadow-primary cursor-pointer"
            onClick={() => navigate('/scan')}
          >
            <div>
              <p className="fw-bold text-white mb-0 fs-7">Scan Diário</p>
              <p className="mb-0 text-white opacity-75 fs-8">
                Realize o scan e ganhe uma caixa surpresa
              </p>
            </div>
            <div className="w-44 h-44 d-flex align-items-center justify-content-center rounded-3 bg-white bg-opacity-25">
              <FiArrowRight size={20} color="#fff" />
            </div>
          </div>
        </section>

        {/* Missões ativas */}
        <section className="mb-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="fw-bold mb-0 fs-6 text-dark-custom">Missões ativas</h2>
            <button
              className="btn btn-link p-0 text-decoration-none text-primary d-flex align-items-center gap-1 fs-7"
              onClick={() => navigate('/missoes')}
            >
              Ver mais <FiArrowRight size={13} color="#1c9770" />
            </button>
          </div>

          <div className="d-flex flex-column gap-2">
            {missoesAtivas.map(({ id, title, progress, icon: Icon }) => (
              <div
                key={id}
                className="bg-white rounded-3 p-3 d-flex align-items-center gap-3 border shadow-card"
              >
                <div className="icon-box-sm rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 bg-primary-subtle-custom">
                  <Icon size={18} color="#1c9770" />
                </div>
                <div className="flex-fill">
                  <p className="fw-medium mb-1 fs-7 text-dark-custom">{title}</p>
                  <div className="progress rounded-pill progress-h-sm">
                    <div
                      className={`progress-bar rounded-pill ${progress === 100 ? 'bg-success' : 'bg-primary'}`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
                <span className="fw-bold text-primary flex-shrink-0 fs-9">{progress}%</span>
              </div>
            ))}
          </div>
        </section>

        {/* Benefícios */}
        <section className="mb-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="fw-bold mb-0 fs-6 text-dark-custom">Benefícios</h2>
            <button
              className="btn btn-link p-0 text-decoration-none text-primary d-flex align-items-center gap-1 fs-7"
              onClick={() => navigate('/beneficios')}
            >
              Ver todos <FiArrowRight size={13} color="#1c9770" />
            </button>
          </div>

          <div className="row g-3">
            {beneficios.map(({ id, title, points: pts, bgClass }) => (
              <div key={id} className="col-12 col-md-4">
                <div className="bg-white rounded-3 p-3 border shadow-card h-100">
                  <div className={`icon-box-xs rounded-3 mb-2 ${bgClass}`} />
                  <p className="fw-bold mb-1 fs-7 text-dark-custom">{title}</p>
                  <p className="mb-0 fw-bold text-primary fs-9">
                    {pts.toLocaleString('pt-BR')} pts
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mind+ */}
        <section className="mb-4">
          <div
            className="rounded-3 p-3 d-flex align-items-center justify-content-between bg-gradient-accent1 shadow-primary cursor-pointer"
            onClick={() => navigate('/mind')}
          >
            <div>
              <p className="fw-bold text-white mb-0 fs-7">Mind+</p>
              <p className="mb-0 text-white opacity-75 fs-9">
                Apoio psicológico a qualquer hora e lugar
              </p>
            </div>
            <div className="w-44 h-44 d-flex align-items-center justify-content-center rounded-3 bg-white bg-opacity-25">
              <FiHeart size={20} color="#fff" />
            </div>
          </div>
        </section>

        {/* Connect+ */}
        <section className="mb-4">
          <div
            className="rounded-3 p-3 d-flex align-items-center justify-content-between bg-gradient-accent2 shadow-primary cursor-pointer"
            onClick={() => navigate('/connect')}
          >
            <div>
              <p className="fw-bold text-white mb-0 fs-7">Connect+</p>
              <p className="mb-0 text-white opacity-75 fs-9">
                Sono, batimentos e metas num só lugar
              </p>
            </div>
            <div className="w-44 h-44 d-flex align-items-center justify-content-center rounded-3 bg-white bg-opacity-25">
              <FiWifi size={20} color="#fff" />
            </div>
          </div>
        </section>

        {/* Notícias */}
        <section>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="fw-bold mb-0 fs-6 text-dark-custom">Notícias</h2>
            <button
              className="btn btn-link p-0 text-decoration-none text-primary d-flex align-items-center gap-1 fs-7"
              onClick={() => navigate('/noticias')}
            >
              Ver mais <FiArrowRight size={13} color="#1c9770" />
            </button>
          </div>

          <div
            className="bg-white rounded-3 p-3 border shadow-card cursor-pointer"
            onClick={() => navigate('/noticias')}
          >
            <p className="fw-bold mb-1 fs-7 text-dark-custom">
              Saúde mental: afastamentos dobram em dez anos e chegam a 440 mil
            </p>
            <p className="text-muted mb-2 fs-9">
              Em 2014, quase 203 mil brasileiros foram afastados do trabalho em razão de episódios depressivos e transtornos de ansiedade.
            </p>
            <span className="text-primary fw-bold fs-9">Ver matéria completa</span>
          </div>
        </section>

      </main>

      <BottomNav activePage="home" />
    </div>
  )
}

export default Inicial