import { useNavigate } from 'react-router-dom'
import { FiShield, FiCheck, FiX } from 'react-icons/fi'
import TopBar from '../components/TopBar'

const LGPD = () => {
  const navigate = useNavigate()

  const dataCollected = [
    'Passos, distância e calorias',
    'Horas de sono',
    'Hidratação',
    'BPM e dados do smartwatch',
    'Informações do Scan diário (pele e sinais faciais)',
  ]

  const dataUsage = [
    'Criar missões e desafios personalizados',
    'Liberar pontos, troféus e recompensas',
    'Gerar recomendações personalizadas',
    'Oferecer suporte no Mind+',
    'Melhorar sua experiência no app',
  ]

  const userControls = [
    'Permitir dados de atividade',
    'Permitir dados de sono',
    'Permitir BPM/smartwatch',
    'Participar do ranking (opt-in)',
    'Receber notificações',
    'Revogar tudo a qualquer momento',
  ]

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#F4F6F8' }}>
      <TopBar showPoints={false} />

      <main className="container py-3 pb-5 mb-2">

        {/* Cabeçalho */}
        <section className="text-center mb-4">
          <div
            className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
            style={{ width: '64px', height: '64px', backgroundColor: 'rgba(28,151,112,0.1)' }}
          >
            <FiShield size={32} color="#1c9770" />
          </div>
          <h1 className="fw-bold mb-1" style={{ fontSize: '22px', color: '#1A202C' }}>
            Termo de Consentimento
          </h1>
          <p className="text-secondary mb-0" style={{ fontSize: '14px' }}>
            Na Care Plus levamos a sério o tratamento de dados dos nossos usuários.
          </p>
        </section>

        {/* Intro */}
        <section
          className="rounded-3 p-3 mb-3"
          style={{ backgroundColor: 'rgba(28,151,112,0.07)', border: '1px solid rgba(28,151,112,0.2)' }}
        >
          <p className="mb-0" style={{ fontSize: '14px', color: '#1A202C', lineHeight: '1.6' }}>
            Para personalizar missões, acompanhar seu progresso e liberar recompensas,
            precisamos acessar algumas informações de saúde. Tudo é tratado com
            segurança, transparência e apenas para fins de bem-estar.
          </p>
        </section>

        {/* O que coletamos */}
        <section className="bg-white rounded-3 p-3 mb-3" style={{ border: '1px solid #E4E7EB' }}>
          <h2 className="fw-bold mb-3" style={{ fontSize: '15px', color: '#1A202C' }}>
            O que coletamos
          </h2>
          <div className="d-flex flex-column gap-2">
            {dataCollected.map((item, index) => (
              <div key={index} className="d-flex align-items-center gap-2">
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                  style={{ width: '22px', height: '22px', backgroundColor: 'rgba(28,151,112,0.1)' }}
                >
                  <FiCheck size={12} color="#1c9770" />
                </div>
                <span style={{ fontSize: '13px', color: '#4A5568' }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Para que usamos */}
        <section className="bg-white rounded-3 p-3 mb-3" style={{ border: '1px solid #E4E7EB' }}>
          <h2 className="fw-bold mb-3" style={{ fontSize: '15px', color: '#1A202C' }}>
            Para que usamos
          </h2>
          <div className="d-flex flex-column gap-2">
            {dataUsage.map((item, index) => (
              <div key={index} className="d-flex align-items-center gap-2">
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                  style={{ width: '22px', height: '22px', backgroundColor: 'rgba(147,203,82,0.15)' }}
                >
                  <FiCheck size={12} color="#93CB52" />
                </div>
                <span style={{ fontSize: '13px', color: '#4A5568' }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Você decide */}
        <section className="bg-white rounded-3 p-3 mb-3" style={{ border: '1px solid #E4E7EB' }}>
          <h2 className="fw-bold mb-3" style={{ fontSize: '15px', color: '#1A202C' }}>
            Você decide
          </h2>
          <div className="d-flex flex-column gap-2">
            {userControls.map((item, index) => (
              <div key={index} className="d-flex align-items-center gap-2">
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                  style={{ width: '22px', height: '22px', backgroundColor: 'rgba(122,209,195,0.2)' }}
                >
                  <FiCheck size={12} color="#7AD1C3" />
                </div>
                <span style={{ fontSize: '13px', color: '#4A5568' }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Aviso LGPD */}
        <section className="text-center mb-4">
          <span
            className="d-inline-block px-3 py-1 rounded-pill fw-medium"
            style={{ backgroundColor: 'rgba(28,151,112,0.1)', color: '#1c9770', fontSize: '13px' }}
          >
            Seus dados estão protegidos pela LGPD
          </span>
        </section>

        {/* Botões */}
        <div className="row g-3">
          <div className="col-12 col-sm-6">
            <button
              className="btn w-100 fw-bold rounded-3 py-3 d-flex align-items-center justify-content-center gap-2"
              style={{ border: '2px solid #E4E7EB', backgroundColor: '#fff', color: '#6B7685', fontSize: '15px' }}
              onClick={() => navigate('/')}
            >
              <FiX size={18} /> Discordo
            </button>
          </div>
          <div className="col-12 col-sm-6">
            <button
              className="btn w-100 fw-bold rounded-3 py-3 d-flex align-items-center justify-content-center gap-2 text-white"
              style={{ backgroundColor: '#1c9770', fontSize: '15px', boxShadow: '0 4px 12px rgba(28,151,112,0.3)' }}
              onClick={() => navigate('/onboarding')}
            >
              <FiCheck size={18} /> Concordo
            </button>
          </div>
        </div>

      </main>
    </div>
  )
}

export default LGPD