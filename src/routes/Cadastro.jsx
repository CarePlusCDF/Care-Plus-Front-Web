import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowRight, FiArrowLeft, FiUser, FiActivity } from 'react-icons/fi'
import TopBar from '../components/TopBar'

const Cadastro = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    peso: '',
    altura: '',
    nivelAtividade: '',
    qualidadeSono: '',
    nivelEnergia: '',
  })

  const [step, setStep] = useState(1)

  const nivelAtividadeOpcoes = [
    { value: 'sedentario', label: 'Sedentário', desc: 'Raramente pratico atividades físicas.' },
    { value: 'leve', label: 'Levemente ativo', desc: 'Me movimento um pouco no dia a dia.' },
    { value: 'moderado', label: 'Moderadamente ativo', desc: 'Pratico exercícios algumas vezes por semana.' },
    { value: 'ativo', label: 'Ativo', desc: 'Tenho rotina regular de treinos ou esportes.' },
    { value: 'muito_ativo', label: 'Muito ativo', desc: 'Pratico atividades intensas quase todos os dias.' },
  ]

  const qualidadeSonoOpcoes = [
    { value: 'muito_ruim', label: 'Muito ruim', desc: 'Durmo mal quase todas as noites.' },
    { value: 'ruim', label: 'Ruim', desc: 'Tenho dificuldades com frequência.' },
    { value: 'regular', label: 'Regular', desc: 'Durmo ok, mas poderia melhorar.' },
    { value: 'boa', label: 'Boa', desc: 'Na maior parte das noites durmo bem.' },
    { value: 'excelente', label: 'Excelente', desc: 'Descanso profundamente e acordo renovado.' },
  ]

  const nivelEnergiaOpcoes = [
    { value: 'muito_baixo', label: 'Muito baixo', desc: 'Sinto cansaço constante.' },
    { value: 'baixo', label: 'Baixo', desc: 'Tenho energia limitada na maior parte do dia.' },
    { value: 'moderado', label: 'Moderado', desc: 'Às vezes disposto, às vezes não.' },
    { value: 'boa', label: 'Bom', desc: 'Me sinto bem disposto na maioria dos dias.' },
    { value: 'excelente', label: 'Excelente', desc: 'Tenho muita energia durante todo o dia.' },
  ]

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    localStorage.setItem('boostcare_user', JSON.stringify(formData))
    navigate('/inicial')
  }

  const isStep1Valid = formData.peso !== '' && formData.altura !== ''
  const isStep2Valid = formData.nivelAtividade !== '' && formData.qualidadeSono !== '' && formData.nivelEnergia !== ''

  const RadioCard = ({ field, value, label, desc }) => {
    const selected = formData[field] === value
    return (
      <div
        className="rounded-3 p-3 mb-2 d-flex align-items-center gap-3"
        style={{
          border: `2px solid ${selected ? '#1c9770' : '#E4E7EB'}`,
          backgroundColor: selected ? 'rgba(28,151,112,0.06)' : '#fff',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onClick={() => handleChange(field, value)}
      >
        <div
          className="rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center"
          style={{
            width: '20px', height: '20px',
            border: `2px solid ${selected ? '#1c9770' : '#CDD3DA'}`,
            backgroundColor: selected ? '#1c9770' : 'transparent',
          }}
        >
          {selected && <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#fff' }} />}
        </div>
        <div>
          <p className="fw-bold mb-0" style={{ fontSize: '14px', color: '#1A202C' }}>{label}</p>
          <p className="mb-0 text-secondary" style={{ fontSize: '12px' }}>{desc}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#F4F6F8' }}>
      <TopBar showPoints={false} />

      <main className="container py-3 pb-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">

            <section className="mb-4">
              <div className="d-flex align-items-center gap-2 mb-1">
                <button
                  className="btn btn-link p-0 text-decoration-none d-flex align-items-center"
                  style={{ color: '#6B7685' }}
                  onClick={() => step === 1 ? navigate('/onboarding') : setStep(1)}
                >
                  <FiArrowLeft size={20} />
                </button>
                <p className="mb-0 text-secondary" style={{ fontSize: '13px' }}>
                  Passo {step} de 2
                </p>
              </div>
              <h1 className="fw-bold mb-1" style={{ fontSize: '22px', color: '#1A202C' }}>
                {step === 1 ? 'Suas medidas' : 'Seus hábitos'}
              </h1>
              <p className="text-secondary mb-0" style={{ fontSize: '13px' }}>
                Essas informações geram missões personalizadas. Seus dados não serão compartilhados.
              </p>
            </section>

            <div className="mb-4 rounded-pill overflow-hidden" style={{ height: '6px', backgroundColor: '#E4E7EB' }}>
              <div
                className="rounded-pill"
                style={{
                  width: step === 1 ? '50%' : '100%',
                  height: '100%',
                  backgroundColor: '#1c9770',
                  transition: 'width 0.4s ease',
                }}
              />
            </div>

            {step === 1 && (
              <section>
                <div
                  className="d-flex align-items-center gap-3 rounded-3 p-3 mb-4"
                  style={{ backgroundColor: 'rgba(28,151,112,0.07)', border: '1px solid rgba(28,151,112,0.2)' }}
                >
                  <FiUser size={20} color="#1c9770" />
                  <p className="mb-0" style={{ fontSize: '13px', color: '#1A202C' }}>
                    As informações podem ser alteradas a qualquer momento na aba Perfil.
                  </p>
                </div>

                <div className="mb-3">
                  <label className="fw-bold mb-2 d-block" style={{ fontSize: '14px', color: '#1A202C' }}>
                    Peso (kg)
                  </label>
                  <input
                    type="number"
                    className="form-control rounded-3 py-3"
                    placeholder="Ex: 70"
                    value={formData.peso}
                    onChange={e => handleChange('peso', e.target.value)}
                    style={{ border: '2px solid #E4E7EB', fontSize: '15px' }}
                  />
                </div>

                <div className="mb-4">
                  <label className="fw-bold mb-2 d-block" style={{ fontSize: '14px', color: '#1A202C' }}>
                    Altura (cm)
                  </label>
                  <input
                    type="number"
                    className="form-control rounded-3 py-3"
                    placeholder="Ex: 175"
                    value={formData.altura}
                    onChange={e => handleChange('altura', e.target.value)}
                    style={{ border: '2px solid #E4E7EB', fontSize: '15px' }}
                  />
                </div>

                <button
                  className="btn w-100 fw-bold rounded-3 py-3 d-flex align-items-center justify-content-center gap-2 text-white"
                  style={{
                    backgroundColor: isStep1Valid ? '#1c9770' : '#CDD3DA',
                    fontSize: '15px',
                    boxShadow: isStep1Valid ? '0 4px 12px rgba(28,151,112,0.3)' : 'none',
                    transition: 'all 0.2s ease',
                    cursor: isStep1Valid ? 'pointer' : 'not-allowed',
                  }}
                  onClick={() => isStep1Valid && setStep(2)}
                  disabled={!isStep1Valid}
                >
                  Continuar <FiArrowRight size={18} />
                </button>
              </section>
            )}

            
            {step === 2 && (
              <section>
                <div
                  className="d-flex align-items-center gap-3 rounded-3 p-3 mb-4 justify-content-center"
                  style={{ backgroundColor: 'rgba(28,151,112,0.07)', border: '1px solid rgba(28,151,112,0.2)' }}
                >
                  
                  <p className="mb-0 " style={{ fontSize: '13px', color: '#1A202C' }}>
                    Suas respostas ajudam a criar uma jornada de saúde personalizada para você.
                  </p>
                </div>

                <div className="mb-4">
                  <h2 className="fw-bold mb-3" style={{ fontSize: '15px', color: '#1A202C' }}>
                    Quão ativo você se considera?
                  </h2>
                  {nivelAtividadeOpcoes.map(({ value, label, desc }) => (
                    <RadioCard key={value} field="nivelAtividade" value={value} label={label} desc={desc} />
                  ))}
                </div>

                <div className="mb-4">
                  <h2 className="fw-bold mb-3" style={{ fontSize: '15px', color: '#1A202C' }}>
                    Como você avalia sua qualidade de sono?
                  </h2>
                  {qualidadeSonoOpcoes.map(({ value, label, desc }) => (
                    <RadioCard key={value} field="qualidadeSono" value={value} label={label} desc={desc} />
                  ))}
                </div>

                <div className="mb-4">
                  <h2 className="fw-bold mb-3" style={{ fontSize: '15px', color: '#1A202C' }}>
                    Como está seu nível de energia no dia a dia?
                  </h2>
                  {nivelEnergiaOpcoes.map(({ value, label, desc }) => (
                    <RadioCard key={value} field="nivelEnergia" value={value} label={label} desc={desc} />
                  ))}
                </div>

                <button
                  className="btn w-100 fw-bold rounded-3 py-3 d-flex align-items-center justify-content-center gap-2 text-white"
                  style={{
                    backgroundColor: isStep2Valid ? '#1c9770' : '#CDD3DA',
                    fontSize: '15px',
                    boxShadow: isStep2Valid ? '0 4px 12px rgba(28,151,112,0.3)' : 'none',
                    transition: 'all 0.2s ease',
                    cursor: isStep2Valid ? 'pointer' : 'not-allowed',
                  }}
                  onClick={() => isStep2Valid && handleSubmit()}
                  disabled={!isStep2Valid}
                >
                  Começar minha jornada <FiArrowRight size={18} />
                </button>
              </section>
            )}

          </div>
        </div>
      </main>
    </div>
  )
}

export default Cadastro