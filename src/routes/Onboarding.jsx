import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'
import TopBar from '../components/TopBar'

const Onboarding = () => {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 0,
      title: 'Boost Care',
      subtitle: 'Jornada Gamificada do Cuidado Contínuo',
      description:
        'Transforme o cuidado em hábito. Na Boost Care, suas ações diárias como andar, se hidratar e descansar viram progresso real.',
      color: '#1c9770',
    },
    {
      id: 1,
      title: 'Impulso+',
      subtitle: 'Seu incentivo diário para seguir em frente',
      description:
        'Acessando o app todos os dias, você ativa o Impulso+ e recebe surpresas que mantêm sua motivação. Pequenos gestos, grandes conquistas.',
      color: '#93CB52',
    },
    {
      id: 2,
      title: 'Missões & Recompensas',
      subtitle: 'Missões personalizadas para o seu perfil',
      description:
        'Complete missões diárias, suba no ranking semanal e troque seus troféus por benefícios reais com parceiros como Nubank, iFood e Amazon.',
      color: '#7AD1C3',
    },
  ]

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1)
    } else {
      navigate('/cadastro')
    }
  }

  const handleBack = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1)
    } else {
      navigate('/lgpd')
    }
  }

  const {title, subtitle, description, color } = slides[currentSlide]

  return (
    <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: '#F4F6F8' }}>
      <TopBar showPoints={false} />

      <main className="container flex-fill d-flex flex-column justify-content-between py-4">

        <div className="row justify-content-center flex-fill">
          <div className="col-12 col-md-8 col-lg-6 d-flex flex-column justify-content-center">

            <div
              className="rounded-4 p-5 text-center mb-4 position-relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)`,
                boxShadow: `0 12px 32px ${color}40`,
                minHeight: '320px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                position: 'absolute', top: '-40px', right: '-40px',
                width: '180px', height: '180px',
                background: 'rgba(255,255,255,0.08)', borderRadius: '50%'
              }} />
              <div style={{
                position: 'absolute', bottom: '-60px', left: '-20px',
                width: '160px', height: '160px',
                background: 'rgba(255,255,255,0.05)', borderRadius: '50%'
              }} />

              
              <h1 className="fw-bold text-white mb-2" style={{ fontSize: '28px', position: 'relative', zIndex: 1 }}>
                {title}
              </h1>
              <p className="fw-medium mb-0" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', position: 'relative', zIndex: 1 }}>
                {subtitle}
              </p>
            </div>

            <p className="text-center mb-4" style={{ fontSize: '15px', color: '#4A5568', lineHeight: '1.7' }}>
              {description}
            </p>

            <div className="d-flex justify-content-center gap-2 mb-4">
              {slides.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  style={{
                    width: currentSlide === index ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '999px',
                    backgroundColor: currentSlide === index ? '#1c9770' : '#CDD3DA',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>

          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="d-flex gap-3">
              <button
                className="btn fw-bold rounded-3 py-3 d-flex align-items-center justify-content-center gap-2"
                style={{ border: '2px solid #E4E7EB', backgroundColor: '#fff', color: '#6B7685', minWidth: '56px' }}
                onClick={handleBack}
                aria-label="Voltar"
              >
                <FiArrowLeft size={20} />
              </button>
              <button
                className="btn fw-bold rounded-3 py-3 flex-fill d-flex align-items-center justify-content-center gap-2 text-white"
                style={{ backgroundColor: '#1c9770', fontSize: '15px', boxShadow: '0 4px 12px rgba(28,151,112,0.3)' }}
                onClick={handleNext}
              >
                {currentSlide < slides.length - 1 ? (
                  <>Continuar <FiArrowRight size={18} /></>
                ) : (
                  <>Começar <FiArrowRight size={18} /></>
                )}
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}

export default Onboarding