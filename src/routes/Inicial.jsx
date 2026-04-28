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
    { id: 1, title: 'Cashback Nubank', points: 1500, color: '#1c9770' },
    { id: 2, title: 'Desconto iFood R$10', points: 800, color: '#7AD1C3' },
    { id: 3, title: 'Desconto Apple R$40', points: 2000, color: '#93CB52' },
  ]

  const quickMenuItems = [
    { id: 'missoes', label: 'Missões', icon: FiTarget, path: '/missoes', color: '#1c9770' },
    { id: 'mind', label: 'Mind+', icon: FiHeart, path: '/mind', color: '#7AD180' },
    { id: 'connect', label: 'Connect+', icon: FiWifi, path: '/connect', color: '#7AD1C3' },
    { id: 'noticias', label: 'Notícias', icon: FiFileText, path: '/noticias', color: '#93CB52' },
    { id: 'perfil', label: 'Perfil', icon: FiUser, path: '/perfil', color: '#1c9770' },
  ]

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#F4F6F8' }}>
      <TopBar points={points} showPoints={true} />

      <main className="container py-3 pb-5 mb-4">

        {/* Saudação */}
        <section className="mb-4">
          <p className="mb-0 text-secondary small">Olá,</p>
          <h1 className="fw-bold mb-0" style={{ fontSize: '26px', color: '#1A202C' }}>
            Renato!
          </h1>
          <p className="mb-0 mt-1" style={{ fontSize: '13px', color: '#6B7685' }}>
            Continue sua jornada de bem-estar hoje.
          </p>
        </section>

        {/* Menu rápido */}
        <section className="mb-4">
          <div className="row g-3 justify-content-center">
            {quickMenuItems.map(({ id, label, icon: Icon, path, color }) => (
              <div key={id} className="col">
                <div
                  className="d-flex flex-column align-items-center gap-2"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate(path)}
                >
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3"
                    style={{
                      width: '52px', height: '52px',
                      backgroundColor: `${color}22`,
                      transition: 'transform 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <Icon size={22} color={color} />
                  </div>
                  <span style={{ fontSize: '11px', color: '#6B7685', fontWeight: '500', textAlign: 'center' }}>
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Scan Diário */}
        <section className="mb-4">
          <div
            className="rounded-3 p-3 d-flex align-items-center justify-content-between"
            style={{
              background: 'linear-gradient(135deg, #1c9770 0%, #167a5a 100%)',
              boxShadow: '0 4px 16px rgba(28,151,112,0.25)',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/scan')}
          >
            <div>
              <p className="fw-bold text-white mb-0" style={{ fontSize: '15px' }}>Scan Diário</p>
              <p className="mb-0" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)' }}>
                Realize o scan e ganhe uma caixa surpresa
              </p>
            </div>
            <div
              className="d-flex align-items-center justify-content-center rounded-3"
              style={{ width: '44px', height: '44px', backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <FiArrowRight size={20} color="#fff" />
            </div>
          </div>
        </section>

        {/* Missões ativas */}
        <section className="mb-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="fw-bold mb-0" style={{ fontSize: '16px', color: '#1A202C' }}>
              Missões ativas
            </h2>
            <button
              className="btn btn-link p-0 text-decoration-none d-flex align-items-center gap-1"
              style={{ fontSize: '13px', color: '#1c9770' }}
              onClick={() => navigate('/missoes')}
            >
              Ver mais <FiArrowRight size={13} />
            </button>
          </div>

          <div className="d-flex flex-column gap-2">
            {missoesAtivas.map(({ id, title, progress, icon: Icon }) => (
              <div
                key={id}
                className="bg-white rounded-3 p-3 d-flex align-items-center gap-3"
                style={{ border: '1px solid #E4E7EB', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                  style={{ width: '40px', height: '40px', backgroundColor: 'rgba(28,151,112,0.08)' }}
                >
                  <Icon size={18} color="#1c9770" />
                </div>
                <div className="flex-fill">
                  <p className="fw-medium mb-1" style={{ fontSize: '13px', color: '#1A202C' }}>{title}</p>
                  <div className="rounded-pill overflow-hidden" style={{ height: '5px', backgroundColor: '#E4E7EB' }}>
                    <div
                      className="rounded-pill"
                      style={{
                        width: `${progress}%`,
                        height: '100%',
                        backgroundColor: progress === 100 ? '#93CB52' : '#1c9770',
                        transition: 'width 0.4s ease',
                      }}
                    />
                  </div>
                </div>
                <span className="fw-bold flex-shrink-0" style={{ fontSize: '12px', color: '#1c9770' }}>
                  {progress}%
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Benefícios */}
        <section className="mb-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="fw-bold mb-0" style={{ fontSize: '16px', color: '#1A202C' }}>
              Benefícios
            </h2>
            <button
              className="btn btn-link p-0 text-decoration-none d-flex align-items-center gap-1"
              style={{ fontSize: '13px', color: '#1c9770' }}
              onClick={() => navigate('/beneficios')}
            >
              Ver todos <FiArrowRight size={13} />
            </button>
          </div>

          <div className="d-flex d-md-none gap-3 pb-2" style={{ overflowX: 'auto' }}>
            {beneficios.map(({ id, title, points: pts, color }) => (
              <div
                key={id}
                className="rounded-3 p-3 flex-shrink-0"
                style={{ width: '160px', border: '1px solid #E4E7EB', backgroundColor: '#fff' }}
              >
                <div className="rounded-3 mb-2" style={{ width: '36px', height: '36px', backgroundColor: `${color}22` }} />
                <p className="fw-bold mb-1" style={{ fontSize: '13px', color: '#1A202C' }}>{title}</p>
                <p className="mb-0 fw-bold" style={{ fontSize: '12px', color: '#1c9770' }}>
                  {pts.toLocaleString('pt-BR')} pts
                </p>
              </div>
            ))}
          </div>

          <div className="d-none d-md-block">
            <div className="row g-3">
              {beneficios.map(({ id, title, points: pts, color }) => (
                <div key={id} className="col-md-4">
                  <div
                    className="rounded-3 p-3 h-100"
                    style={{ border: '1px solid #E4E7EB', backgroundColor: '#fff' }}
                  >
                    <div className="rounded-3 mb-2" style={{ width: '36px', height: '36px', backgroundColor: `${color}22` }} />
                    <p className="fw-bold mb-1" style={{ fontSize: '13px', color: '#1A202C' }}>{title}</p>
                    <p className="mb-0 fw-bold" style={{ fontSize: '12px', color: '#1c9770' }}>
                      {pts.toLocaleString('pt-BR')} pts
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mind+ */}
        <section className="mb-4">
          <div
            className="rounded-3 p-3 d-flex align-items-center justify-content-between"
            style={{
              background: 'linear-gradient(135deg, #7AD180 0%, #1c9770 100%)',
              boxShadow: '0 4px 16px rgba(122,209,128,0.25)',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/mind')}
          >
            <div>
              <p className="fw-bold text-white mb-0" style={{ fontSize: '15px' }}>Mind+</p>
              <p className="mb-0" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.85)' }}>
                Apoio psicológico a qualquer hora e lugar
              </p>
            </div>
            <div
              className="d-flex align-items-center justify-content-center rounded-3"
              style={{ width: '44px', height: '44px', backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <FiHeart size={20} color="#fff" />
            </div>
          </div>
        </section>

        {/* Connect+ */}
        <section className="mb-4">
          <div
            className="rounded-3 p-3 d-flex align-items-center justify-content-between"
            style={{
              background: 'linear-gradient(135deg, #7AD1C3 0%, #1c9770 100%)',
              boxShadow: '0 4px 16px rgba(122,209,195,0.25)',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/connect')}
          >
            <div>
              <p className="fw-bold text-white mb-0" style={{ fontSize: '15px' }}>Connect+</p>
              <p className="mb-0" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.85)' }}>
                Sono, batimentos e metas num só lugar
              </p>
            </div>
            <div
              className="d-flex align-items-center justify-content-center rounded-3"
              style={{ width: '44px', height: '44px', backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <FiWifi size={20} color="#fff" />
            </div>
          </div>
        </section>

        {/* Notícias */}
        <section>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="fw-bold mb-0" style={{ fontSize: '16px', color: '#1A202C' }}>
              Notícias
            </h2>
            <button
              className="btn btn-link p-0 text-decoration-none d-flex align-items-center gap-1"
              style={{ fontSize: '13px', color: '#1c9770' }}
              onClick={() => navigate('/noticias')}
            >
              Ver mais <FiArrowRight size={13} />
            </button>
          </div>

          <div
            className="bg-white rounded-3 p-3"
            style={{ border: '1px solid #E4E7EB', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', cursor: 'pointer' }}
            onClick={() => navigate('/noticias')}
          >
            <p className="fw-bold mb-1" style={{ fontSize: '14px', color: '#1A202C' }}>
              Saúde mental: afastamentos dobram em dez anos e chegam a 440 mil
            </p>
            <p className="text-secondary mb-2" style={{ fontSize: '12px', lineHeight: '1.5' }}>
              Em 2014, quase 203 mil brasileiros foram afastados do trabalho em razão de episódios depressivos e transtornos de ansiedade.
            </p>
            <span style={{ fontSize: '12px', color: '#1c9770', fontWeight: '600' }}>
              Ver matéria completa
            </span>
          </div>
        </section>

      </main>

      <BottomNav activePage="home" />
    </div>
  )
}

export default Inicial