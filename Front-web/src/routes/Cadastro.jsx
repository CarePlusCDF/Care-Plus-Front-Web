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
        className={`rounded-xl p-3 mb-2 flex items-center gap-3 cursor-pointer border-2 ${selected ? 'border-[#1c9770] bg-[rgba(28,151,112,0.05)]' : 'border-[#E4E7EB] bg-white'}`}
        onClick={() => handleChange(field, value)}
      >
        <div
          className={`rounded-full shrink-0 flex items-center justify-center w-5 h-5 border-2 ${selected ? 'bg-[#1c9770] border-[#1c9770]' : 'bg-white border-[#CDD3DA]'}`}
        >
          {selected && <div className="rounded-full bg-white w-2 h-2" />}
        </div>
        <div>
          <p className="font-bold text-[14px] text-[#1A202C]">{label}</p>
          <p className="text-[12px] text-[#6B7685]">{desc}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F4F6F8]">
      <TopBar showPoints={false} />

      <main className="w-full px-4 lg:px-8 pt-4 pb-10">
        <div className="flex justify-center">
          <div className="w-full lg:max-w-lg">

            <section className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <button
                  className="bg-transparent border-0 p-0 text-[#6B7685] flex items-center cursor-pointer"
                  onClick={() => step === 1 ? navigate('/onboarding') : setStep(1)}
                >
                  <FiArrowLeft size={20} />
                </button>
                <p className="text-[#6B7685] text-[14px]">Passo {step} de 2</p>
              </div>
              <h1 className="font-bold text-[20px] text-[#1A202C] mb-1">
                {step === 1 ? 'Suas medidas' : 'Seus hábitos'}
              </h1>
              <p className="text-[#6B7685] text-[14px]">
                Essas informações geram missões personalizadas. Seus dados não serão compartilhados.
              </p>
            </section>

            <div className="mb-4 rounded-full overflow-hidden h-2 bg-[#E4E7EB]">
              <div
                className={`rounded-full bg-[#1c9770] h-2 transition-[width] duration-[400ms] ease-out ${step === 1 ? 'w-1/2' : 'w-full'}`}
              />
            </div>

            {step === 1 && (
              <section>
                <div className="flex items-center gap-3 rounded-xl p-3 mb-4 bg-[rgba(28,151,112,0.07)] border border-[rgba(28,151,112,0.2)]">
                  <FiUser size={20} color="#1c9770" />
                  <p className="text-[14px] text-[#1A202C]">
                    As informações podem ser alteradas a qualquer momento na aba Perfil.
                  </p>
                </div>

                <div className="mb-3">
                  <label className="font-bold mb-2 block text-[14px] text-[#1A202C]">Peso (kg)</label>
                  <input
                    type="number"
                    className="w-full rounded-xl py-3 px-3 border border-[#E4E7EB] text-[14px] text-[#1A202C] bg-white outline-none focus:border-[#1c9770]"
                    placeholder="Ex: 70"
                    value={formData.peso}
                    onChange={e => handleChange('peso', e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label className="font-bold mb-2 block text-[14px] text-[#1A202C]">Altura (cm)</label>
                  <input
                    type="number"
                    className="w-full rounded-xl py-3 px-3 border border-[#E4E7EB] text-[14px] text-[#1A202C] bg-white outline-none focus:border-[#1c9770]"
                    placeholder="Ex: 175"
                    value={formData.altura}
                    onChange={e => handleChange('altura', e.target.value)}
                  />
                </div>

                <button
                  className={`w-full font-bold rounded-xl py-3 flex items-center justify-center gap-2 text-white text-[14px] cursor-pointer ${isStep1Valid ? 'bg-[#1c9770] shadow-brand-primary' : 'bg-[#CDD3DA] cursor-not-allowed'}`}
                  onClick={() => isStep1Valid && handleAvancar()}
                  disabled={!isStep1Valid}
                >
                  Continuar <FiArrowRight size={18} color="#fff" />
                </button>
              </section>
            )}

            {step === 2 && (
              <section>
                <div className="flex items-center gap-3 rounded-xl p-3 mb-4 bg-[rgba(28,151,112,0.07)] border border-[rgba(28,151,112,0.2)]">
                  <FiActivity size={20} color="#1c9770" />
                  <p className="text-[14px] text-[#1A202C]">
                    Suas respostas ajudam a criar uma jornada de saúde personalizada para você.
                  </p>
                </div>

                <div className="mb-4">
                  <h2 className="font-bold mb-3 text-[14px] text-[#1A202C]">Quão ativo você se considera?</h2>
                  {nivelAtividadeOpcoes.map(({ value, label, desc }) => (
                    <RadioCard key={value} field="nivelAtividade" value={value} label={label} desc={desc} />
                  ))}
                </div>

                <div className="mb-4">
                  <h2 className="font-bold mb-3 text-[14px] text-[#1A202C]">Como você avalia sua qualidade de sono?</h2>
                  {qualidadeSonoOpcoes.map(({ value, label, desc }) => (
                    <RadioCard key={value} field="qualidadeSono" value={value} label={label} desc={desc} />
                  ))}
                </div>

                <div className="mb-4">
                  <h2 className="font-bold mb-3 text-[14px] text-[#1A202C]">Como está seu nível de energia no dia a dia?</h2>
                  {nivelEnergiaOpcoes.map(({ value, label, desc }) => (
                    <RadioCard key={value} field="nivelEnergia" value={value} label={label} desc={desc} />
                  ))}
                </div>

                <button
                  className={`w-full font-bold rounded-xl py-3 flex items-center justify-center gap-2 text-white text-[14px] cursor-pointer ${isStep2Valid ? 'bg-[#1c9770] shadow-brand-primary' : 'bg-[#CDD3DA] cursor-not-allowed'}`}
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
