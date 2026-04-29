import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight, FiUser, FiAward, FiEdit2, FiActivity } from 'react-icons/fi'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const Perfil = () => {
  const navigate = useNavigate()
  const points = 1500
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('boostcare_user')
    if (saved) setUserData(JSON.parse(saved))
  }, [])

  const missoesDiarias = [
    { dia: 'Seg', quantidade: 7 },
    { dia: 'Ter', quantidade: 5 },
    { dia: 'Qua', quantidade: 9 },
    { dia: 'Qui', quantidade: 4 },
    { dia: 'Sex', quantidade: 8 },
  ]

  const maxMissoes = Math.max(...missoesDiarias.map(d => d.quantidade))

  const trofeus = [
    { id: 1, title: 'Campeão do Ronco', desc: 'Tenha 8 horas de sono seguidas por 3 dias.', conquistado: true },
    { id: 2, title: 'Rei das Garrafinhas', desc: 'Beba 3L de água diários por 3 dias.', conquistado: true },
    { id: 3, title: 'O Poderoso Pratão', desc: 'Tenha 3 refeições coloridas na semana.', conquistado: true },
    { id: 4, title: 'Mestre dos Passos', desc: 'Dê 10.000 passos diários contados pela pulseira.', conquistado: false },
    { id: 5, title: 'Day Off', desc: 'Tenha ao menos 1 dia de descanso por semana.', conquistado: false },
    { id: 6, title: 'ChecKing', desc: 'Faça ao menos 1 checking diário por 1 mês.', conquistado: false },
  ]

  const nivelLabel = (campo, valor) => {
    const map = {
      nivelAtividade: {
        sedentario: 'Sedentário',
        leve: 'Levemente ativo',
        moderado: 'Moderadamente ativo',
        ativo: 'Ativo',
        muito_ativo: 'Muito ativo',
      },
      qualidadeSono: {
        muito_ruim: 'Muito ruim',
        ruim: 'Ruim',
        regular: 'Regular',
        boa: 'Boa',
        excelente: 'Excelente',
      },
      nivelEnergia: {
        muito_baixo: 'Muito baixo',
        baixo: 'Baixo',
        moderado: 'Moderado',
        bom: 'Bom',
        excelente: 'Excelente',
      },
    }
    return map[campo]?.[valor] || '-'
  }

  return (
    <div className="min-vh-100 bg-body">
      <TopBar points={points} showPoints={true} />

      <main className="container py-3 pb-5 mb-4">

        <section className="d-flex align-items-center gap-2 mb-4">
          <button
            className="btn btn-link p-0 text-decoration-none text-muted"
            onClick={() => navigate('/inicial')}
          >
            <FiArrowLeft size={20} />
          </button>
          <h1 className="fw-bold mb-0 fs-5 text-dark-custom">Perfil</h1>
        </section>

        <section className="mb-4">
          <div className="bg-white rounded-3 border shadow-card p-3 d-flex align-items-center gap-3">
            <div className="avatar-md rounded-circle bg-primary-subtle-custom d-flex align-items-center justify-content-center flex-shrink-0">
              <FiUser size={24} color="#1c9770" />
            </div>
            <div className="flex-fill">
              <h2 className="fw-bold fs-6 text-dark-custom mb-0">Renato</h2>
              <span className="badge rounded-pill bg-primary fs-9">Bronze</span>
            </div>
            <div className="bg-primary-subtle-custom rounded-3 px-3 py-2">
              <span className="fw-bold text-primary fs-7">{points.toLocaleString('pt-BR')} pts</span>
            </div>
          </div>
        </section>

        <section className="mb-4">
          <h2 className="fw-bold fs-6 text-dark-custom mb-3">Missões diárias</h2>
          <div className="bg-white rounded-3 border shadow-card p-3">
            <div className="d-flex justify-content-between align-items-end gap-2">
              {missoesDiarias.map(({ dia, quantidade }) => (
                <div key={dia} className="d-flex flex-column align-items-center gap-1 flex-fill">
                  <span className="text-primary fw-bold fs-9">{quantidade}</span>
                  <div
                    className="w-100 rounded-2 bg-primary"
                    style={{ height: `${(quantidade / maxMissoes) * 60}px` }}
                  />
                  <span className="text-muted fs-9">{dia}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="fw-bold fs-6 text-dark-custom mb-0">Troféus</h2>
            <button
              className="btn btn-link p-0 text-decoration-none text-primary d-flex align-items-center gap-1 fs-7"
              onClick={() => {}}
            >
              Ver todos <FiArrowRight size={13} color="#1c9770" />
            </button>
          </div>
          <div className="row g-3">
            {trofeus.map(({ id, title, desc, conquistado }) => (
              <div key={id} className="col-6 col-md-4">
                <div className={`bg-white rounded-3 border shadow-card p-3 text-center h-100 ${!conquistado ? 'opacity-50' : ''}`}>
                  <div className={`avatar-sm rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2 ${conquistado ? 'bg-primary' : 'bg-primary-subtle-custom'}`}>
                    <FiAward size={18} color={conquistado ? '#fff' : '#1c9770'} />
                  </div>
                  <p className="fw-bold fs-9 text-dark-custom mb-1">{title}</p>
                  <p className="text-muted fs-9 mb-0">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="fw-bold fs-6 text-dark-custom mb-0">Informações pessoais</h2>
            <button
              className="btn btn-link p-0 text-decoration-none text-primary d-flex align-items-center gap-1 fs-7"
              onClick={() => navigate('/cadastro')}
            >
              <FiEdit2 size={13} color="#1c9770" /> Alterar
            </button>
          </div>
          <div className="bg-white rounded-3 border shadow-card p-3">
            <div className="d-flex flex-column gap-3">
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-muted fs-7">Peso</span>
                <span className="fw-bold fs-7 text-dark-custom">
                  {userData?.peso ? `${userData.peso} kg` : '-'}
                </span>
              </div>
              <hr className="my-0" />
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-muted fs-7">Altura</span>
                <span className="fw-bold fs-7 text-dark-custom">
                  {userData?.altura ? `${userData.altura} cm` : '-'}
                </span>
              </div>
              <hr className="my-0" />
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-muted fs-7">Nível de atividade</span>
                <span className="fw-bold fs-7 text-dark-custom">
                  {nivelLabel('nivelAtividade', userData?.nivelAtividade)}
                </span>
              </div>
              <hr className="my-0" />
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-muted fs-7">Qualidade do sono</span>
                <span className="fw-bold fs-7 text-dark-custom">
                  {nivelLabel('qualidadeSono', userData?.qualidadeSono)}
                </span>
              </div>
              <hr className="my-0" />
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-muted fs-7">Nível de energia</span>
                <span className="fw-bold fs-7 text-dark-custom">
                  {nivelLabel('nivelEnergia', userData?.nivelEnergia)}
                </span>
              </div>
            </div>
          </div>
        </section>

      </main>

      <BottomNav activePage="home" />
    </div>
  )
}

export default Perfil