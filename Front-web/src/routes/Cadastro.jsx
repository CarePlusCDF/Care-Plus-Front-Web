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
    { value: 'bom', label: 'Bom', desc: 'Me sinto bem disposto na maioria dos dias.' },
    { value: 'excelente', label: 'Excelente', desc: 'Tenho muita energia durante todo o dia.' },
  ]

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleAvancar = () => {
    const dadosPasso1 = {
      peso: formData.peso,
      altura: formData.altura,
    }
    localStorage.setItem('boostcare_user', JSON.stringify(dadosPasso1))
    setStep(2)
  }

  const handleSubmit = () => {
    const dadosFinais = {
      peso: formData.peso,
      altura: formData.altura,
      nivelAtividade: formData.nivelAtividade,
      qualidadeSono: formData.qualidadeSono,
      nivelEnergia: formData.nivelEnergia,
    }
    localStorage.setItem('boostcare_user', JSON.stringify(dadosFinais))
    navigate('/inicial')
  }

  const isStep1Valid = formData.peso !== '' && formData.altura !== ''
  const isStep2Valid = formData.nivelAtividade !== '' && formData.qualidadeSono !== '' && formData.nivelEnergia !== ''

  const RadioCard = ({ field, value, label, desc }) => {
    const selected = formData[field] === value
    return (
      <div
        className={`rounded-3 p-3 mb-2 d-flex align-items-center gap-3 cursor-pointer ${selected ? 'ranking-item-highlight bg-primary-ultra-subtle' : 'bg-white border'}`}
        onClick={() => handleChange(field, value)}
      >
        <div
          className={`rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center ${selected ? 'bg-primary' : 'bg-white'}`}
          style={{ width: '20px', height: '20px', border: `2px solid ${selected ? '#1c9770' : '#CDD3DA'}` }}
        >
          {selected && <div className="rounded-circle bg-white" style={{ width: '8px', height: '8px' }} />}
        </div>
        <div>
          <p className="fw-bold mb-0 fs-7 text-dark-custom">{label}</p>
          <p className="mb-0 text-muted fs-9">{desc}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-vh-100 bg-body">
      <TopBar showPoints={false} />

      <main className="container py-3 pb-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">

            <section className="mb-4">
              <div className="d-flex align-items-center gap-2 mb-1">
                <button
                  className="btn btn-link p-0 text-decoration-none text-muted d-flex align-items-center"
                  onClick={() => step === 1 ? navigate('/onboarding') : setStep(1)}
                >
                  <FiArrowLeft size={20} />
                </button>
                <p className="mb-0 text-muted fs-7">Passo {step} de 2</p>
              </div>
              <h1 className="fw-bold mb-1 fs-5 text-dark-custom">
                {step === 1 ? 'Suas medidas' : 'Seus hábitos'}
              </h1>
              <p className="text-muted mb-0 fs-7">
                Essas informações geram missões personalizadas. Seus dados não serão compartilhados.
              </p>
            </section>

            <div className="mb-4 rounded-pill overflow-hidden progress-h-md bg-body">
              <div
                className={`rounded-pill bg-primary progress-h-md ${step === 1 ? 'progress-50' : 'progress-100'}`}
                style={{ transition: 'width 0.4s ease' }}
              />
            </div>

            {step === 1 && (
              <section>
                <div className="d-flex align-items-center gap-3 rounded-3 p-3 mb-4 bg-primary-ultra-subtle border-primary-subtle">
                  <FiUser size={20} color="#1c9770" />
                  <p className="mb-0 fs-7 text-dark-custom">
                    As informações podem ser alteradas a qualquer momento na aba Perfil.
                  </p>
                </div>

                <div className="mb-3">
                  <label className="fw-bold mb-2 d-block fs-7 text-dark-custom">Peso (kg)</label>
                  <input
                    type="number"
                    className="form-control rounded-3 py-3 border"
                    placeholder="Ex: 70"
                    value={formData.peso}
                    onChange={e => handleChange('peso', e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label className="fw-bold mb-2 d-block fs-7 text-dark-custom">Altura (cm)</label>
                  <input
                    type="number"
                    className="form-control rounded-3 py-3 border"
                    placeholder="Ex: 175"
                    value={formData.altura}
                    onChange={e => handleChange('altura', e.target.value)}
                  />
                </div>

                <button
                  className={`btn w-100 fw-bold rounded-3 py-3 d-flex align-items-center justify-content-center gap-2 text-white fs-7 ${isStep1Valid ? 'bg-primary shadow-primary' : 'bg-secondary'}`}
                  onClick={() => isStep1Valid && handleAvancar()}
                  disabled={!isStep1Valid}
                >
                  Continuar <FiArrowRight size={18} color="#fff" />
                </button>
              </section>
            )}

            {step === 2 && (
              <section>
                <div className="d-flex align-items-center gap-3 rounded-3 p-3 mb-4 bg-primary-ultra-subtle border-primary-subtle">
                  <FiActivity size={20} color="#1c9770" />
                  <p className="mb-0 fs-7 text-dark-custom">
                    Suas respostas ajudam a criar uma jornada de saúde personalizada para você.
                  </p>
                </div>

                <div className="mb-4">
                  <h2 className="fw-bold mb-3 fs-7 text-dark-custom">Quão ativo você se considera?</h2>
                  {nivelAtividadeOpcoes.map(({ value, label, desc }) => (
                    <RadioCard key={value} field="nivelAtividade" value={value} label={label} desc={desc} />
                  ))}
                </div>

                <div className="mb-4">
                  <h2 className="fw-bold mb-3 fs-7 text-dark-custom">Como você avalia sua qualidade de sono?</h2>
                  {qualidadeSonoOpcoes.map(({ value, label, desc }) => (
                    <RadioCard key={value} field="qualidadeSono" value={value} label={label} desc={desc} />
                  ))}
                </div>

                <div className="mb-4">
                  <h2 className="fw-bold mb-3 fs-7 text-dark-custom">Como está seu nível de energia no dia a dia?</h2>
                  {nivelEnergiaOpcoes.map(({ value, label, desc }) => (
                    <RadioCard key={value} field="nivelEnergia" value={value} label={label} desc={desc} />
                  ))}
                </div>

                <button
                  className={`btn w-100 fw-bold rounded-3 py-3 d-flex align-items-center justify-content-center gap-2 text-white fs-7 ${isStep2Valid ? 'bg-primary shadow-primary' : 'bg-secondary'}`}
                  onClick={() => isStep2Valid && handleSubmit()}
                  disabled={!isStep2Valid}
                >
                  Começar minha jornada <FiArrowRight size={18} color="#fff" />
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