import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FiArrowRight, FiZap, FiTarget, FiStar,
  FiHeart, FiWifi, FiFileText, FiUser
} from 'react-icons/fi'
import TopBar from '../components/TopBar'
import BottomNav from '../components/Bottomnav'

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
    { id: 1, title: 'Cashback Nubank', points: 1500 },
    { id: 2, title: 'Desconto iFood R$10', points: 800 },
    { id: 3, title: 'Desconto Apple R$40', points: 2000 },
  ]

  const quickMenuItems = [
    { id: 'missoes', label: 'Missões', icon: FiTarget, path: '/missoes', iconColor: '#1c9770', bgColor: 'bg-[rgba(28,151,112,0.1)]' },
    { id: 'mind', label: 'Mind+', icon: FiHeart, path: '/mind', iconColor: '#7AD180', bgColor: 'bg-[rgba(122,209,128,0.15)]' },
    { id: 'connect', label: 'Connect+', icon: FiWifi, path: '/connect', iconColor: '#7AD1C3', bgColor: 'bg-[rgba(122,209,195,0.15)]' },
    { id: 'noticias', label: 'Notícias', icon: FiFileText, path: '/noticias', iconColor: '#93CB52', bgColor: 'bg-[rgba(147,203,82,0.15)]' },
    { id: 'perfil', label: 'Perfil', icon: FiUser, path: '/perfil', iconColor: '#1c9770', bgColor: 'bg-[rgba(28,151,112,0.1)]' },
  ]

  return (
    <div className="min-h-screen bg-[#F4F6F8]">
      <TopBar points={points} showPoints={true} />

      <main className="w-full px-4 lg:px-8 pt-4 pb-24">

        <section className="mb-4">
          <p className="text-[#6B7685] text-sm">Olá,</p>
          <h1 className="font-bold text-[24px] text-[#1A202C]">Renato!</h1>
          <p className="mt-1 text-[#6B7685] text-[14px]">
            Continue sua jornada de bem-estar hoje.
          </p>
        </section>

        <section className="mb-4">
          <div className="grid grid-cols-5 gap-3 justify-center">
            {quickMenuItems.map(({ id, label, icon: Icon, path, iconColor, bgColor }) => (
              <div
                key={id}
                className="flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => navigate(path)}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bgColor}`}>
                  <Icon size={30} color={iconColor} />
                </div>
                <span className="text-[#6B7685] text-[12px] font-medium text-center">{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-4">
          <div
            className="rounded-xl p-3 flex items-center justify-between bg-gradient-primary shadow-brand-primary cursor-pointer"
            onClick={() => navigate('/scan')}
          >
            <div>
              <p className="font-bold text-white text-[14px]">Scan Diário</p>
              <p className="text-white opacity-75 text-[12px]">
                Realize o scan e ganhe uma caixa surpresa
              </p>
            </div>
            <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/25">
              <FiArrowRight size={20} color="#fff" />
            </div>
          </div>
        </section>

        <section className="mb-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-[16px] text-[#1A202C]">Missões ativas</h2>
            <button
              className="flex items-center gap-1 text-[13px] text-[#1c9770] bg-transparent border-0 p-0 cursor-pointer"
              onClick={() => navigate('/missoes')}
            >
              Ver mais <FiArrowRight size={13} color="#1c9770" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {missoesAtivas.map(({ id, title, progress, icon: Icon }) => (
              <div
                key={id}
                className="bg-white rounded-xl p-3 flex items-center gap-3 border border-[#E4E7EB] shadow-brand-card"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[rgba(28,151,112,0.1)]">
                  <Icon size={18} color="#1c9770" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-[14px] text-[#1A202C] mb-1">{title}</p>
                  <div className="rounded-full bg-[#E4E7EB] h-1.5 overflow-hidden">
                    <div
                      className={`rounded-full h-1.5 ${progress === 100 ? 'bg-[#93CB52]' : 'bg-[#1c9770]'}`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
                <span className="font-bold text-[#1c9770] shrink-0 text-[12px]">{progress}%</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-[16px] text-[#1A202C]">Benefícios</h2>
            <button
              className="flex items-center gap-1 text-[13px] text-[#1c9770] bg-transparent border-0 p-0 cursor-pointer"
              onClick={() => navigate('/beneficios')}
            >
              Ver todos <FiArrowRight size={13} color="#1c9770" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {beneficios.map(({ id, title, points: pts }) => (
              <div key={id} className="bg-white rounded-xl p-3 border border-[#E4E7EB] shadow-brand-card">
                <div className="w-9 h-9 rounded-xl mb-2 bg-[rgba(28,151,112,0.1)]" />
                <p className="font-bold text-[14px] text-[#1A202C] mb-1">{title}</p>
                <p className="font-bold text-[#1c9770] text-[12px]">
                  {pts.toLocaleString('pt-BR')} pts
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-4">
          <div
            className="rounded-xl p-3 flex items-center justify-between bg-gradient-accent1 shadow-brand-primary cursor-pointer"
            onClick={() => navigate('/mind')}
          >
            <div>
              <p className="font-bold text-white text-[14px]">Mind+</p>
              <p className="text-white opacity-75 text-[12px]">
                Apoio psicológico a qualquer hora e lugar
              </p>
            </div>
            <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/25">
              <FiHeart size={20} color="#fff" />
            </div>
          </div>
        </section>

        <section className="mb-4">
          <div
            className="rounded-xl p-3 flex items-center justify-between bg-gradient-accent2 shadow-brand-primary cursor-pointer"
            onClick={() => navigate('/connect')}
          >
            <div>
              <p className="font-bold text-white text-[14px]">Connect+</p>
              <p className="text-white opacity-75 text-[12px]">
                Sono, batimentos e metas num só lugar
              </p>
            </div>
            <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/25">
              <FiWifi size={20} color="#fff" />
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-[16px] text-[#1A202C]">Notícias</h2>
            <button
              className="flex items-center gap-1 text-[13px] text-[#1c9770] bg-transparent border-0 p-0 cursor-pointer"
              onClick={() => navigate('/noticias')}
            >
              Ver mais <FiArrowRight size={13} color="#1c9770" />
            </button>
          </div>

          <div
            className="bg-white rounded-xl p-3 border border-[#E4E7EB] shadow-brand-card cursor-pointer"
            onClick={() => navigate('/noticias')}
          >
            <p className="font-bold text-[14px] text-[#1A202C] mb-1">
              Saúde mental: afastamentos dobram em dez anos e chegam a 440 mil
            </p>
            <p className="text-[#6B7685] text-[12px] mb-2">
              Em 2014, quase 203 mil brasileiros foram afastados do trabalho em razão de episódios depressivos e transtornos de ansiedade.
            </p>
            <span className="text-[#1c9770] font-bold text-[12px]">Ver matéria completa</span>
          </div>
        </section>

      </main>

      <BottomNav activePage="home" />
    </div>
  )
}

export default Inicial
