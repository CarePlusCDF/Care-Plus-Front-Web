import { useNavigate } from 'react-router-dom'
import { FiArrowRight, FiCreditCard, FiShield, FiHeart } from 'react-icons/fi'
import TopBar from '../components/TopBar'
import BottomNav from '../components/Bottomnav'

fetch("http://127.0.0.1:8000/")
  .then((response) => response.json())
  .then((data) => console.log(data))

const Home = () => {
  const navigate = useNavigate()
  const user = { name: 'Renato', points: 0 }
  const quickAccessItems = [
    {
      id: 'blua',
      title: 'blua',
      subtitle: 'Saúde Digital',
      clickable: false,
      bg: '#1a1a2e',
    },
    {
      id: 'boostcare',
      title: 'Boost Care',
      subtitle: 'Missões & Recompensas',
      clickable: true,
      bg: '#1c9770',
      path: '/lgpd',
    },
  ]

  const infoCards = [
    { id: 'carteirinha', title: 'Carteirinha Digital', desc: 'Acesse sua carteirinha do plano rapidamente.', icon: FiCreditCard },
    { id: 'cobertura', title: 'Cobertura do Plano', desc: 'Consulte todas as coberturas do seu plano.', icon: FiShield },
    { id: 'saude', title: 'Minha Saúde', desc: 'Acompanhe seus indicadores de saúde.', icon: FiHeart },
  ]

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#F4F6F8' }}>
      <TopBar showPoints={false} />

      <main className="container py-3 pb-5 mb-4">

        <section className="mb-4">
          <p className="mb-0 text-secondary small">Olá,</p>
          <h1 className="fw-bold mb-0" style={{ fontSize: '28px', color: '#1A202C' }}>
            {user.name}!
          </h1>
        </section>

        <section className="mb-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="fw-bold mb-0" style={{ fontSize: '16px', color: '#1A202C' }}>
              Acesso rápido
            </h2>
            <button className="btn btn-link p-0 text-decoration-none d-flex align-items-center gap-1"
              style={{ fontSize: '13px', color: '#1c9770' }}>
              Ver todos <FiArrowRight size={13} />
            </button>
          </div>

          <div className="row g-3">
            {quickAccessItems.map(({ id, title, subtitle, clickable, bg, path }) => (
              <div key={id} className="col-6 col-md-4 col-lg-3">
                <div
                  className="rounded-3 p-3 d-flex flex-column justify-content-end position-relative h-100"
                  style={{
                    backgroundColor: bg,
                    minHeight: '120px',
                    cursor: clickable ? 'pointer' : 'default',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  }}
                  onClick={() => clickable && navigate(path)}
                  onMouseEnter={e => { if (clickable) e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { if (clickable) e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <h3 className="fw-bold mb-0" style={{ fontSize: '16px', color: '#fff' }}>{title}</h3>
                  <p className="mb-0" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)' }}>{subtitle}</p>
                  {clickable && (
                    <FiArrowRight size={16} style={{ position: 'absolute', top: '14px', right: '14px', color: 'rgba(255,255,255,0.8)' }} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-4">
          <div
            className="rounded-3 p-4 position-relative overflow-hidden d-flex align-items-center justify-content-between"
            style={{
              background: 'linear-gradient(135deg, #1c9770 0%, #167a5a 100%)',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(28,151,112,0.3)',
              transition: 'transform 0.2s',
            }}
            onClick={() => navigate('/lgpd')}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{
              position: 'absolute', top: '-30px', right: '-30px',
              width: '140px', height: '140px',
              background: 'rgba(255,255,255,0.07)', borderRadius: '50%'
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <span
                className="d-inline-block fw-bold mb-2"
                style={{
                  backgroundColor: '#93CB52', color: '#1A202C',
                  fontSize: '11px', padding: '3px 10px',
                  borderRadius: '999px', letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}
              >
                Novo
              </span>
              <h2 className="fw-bold text-white mb-1" style={{ fontSize: '20px' }}>Boost Care</h2>
              <p className="mb-3" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.5' }}>
                Transforme o cuidado com a saúde em hábito. Cumpra missões e ganhe recompensas reais!
              </p>
              <div className="d-flex align-items-center gap-2 text-white fw-bold" style={{ fontSize: '13px' }}>
                Começar agora <FiArrowRight size={14} />
              </div>
            </div>

            <span className="d-none d-sm-block" style={{ fontSize: '52px', opacity: '0.85', position: 'relative', zIndex: 1 }}>💚</span>
          </div>
        </section>

        <section>
          <h2 className="fw-bold mb-3" style={{ fontSize: '16px', color: '#1A202C' }}>Serviços</h2>

          <div className="row g-3">
            {infoCards.map(({ id, title, desc, icon: Icon }) => (
              <div key={id} className="col-12 col-md-6 col-lg-4">
                <div
                  className="d-flex align-items-center gap-3 bg-white rounded-3 p-3 h-100"
                  style={{ border: '1px solid #E4E7EB', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                    style={{ width: '48px', height: '48px', backgroundColor: '#F0F2F5' }}
                  >
                    <Icon size={22} color="#1c9770" />
                  </div>
                  <div className="flex-fill">
                    <p className="fw-bold mb-0" style={{ fontSize: '14px', color: '#1A202C' }}>{title}</p>
                    <p className="mb-0 text-secondary" style={{ fontSize: '12px' }}>{desc}</p>
                  </div>
                  <FiArrowRight size={18} color="#9BA3AE" />
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

export default Home