import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const Noticias = () => {
  const navigate = useNavigate()
  const points = 1500

  const noticias = [
    {
      id: 1,
      titulo: 'Saúde mental: afastamentos dobram em dez anos e chegam a 440 mil',
      resumo: 'Em 2014, quase 203 mil brasileiros foram afastados do trabalho em razão de episódios depressivos, transtornos de ansiedade, reações a estresse grave e outras questões relacionadas à saúde mental.',
      tag: 'Saúde Mental',
      tagClass: 'bg-primary-subtle-custom text-primary',
    },
    {
      id: 2,
      titulo: 'Saúde anuncia investimento de R$ 15 bi no setor industrial',
      resumo: 'Serão R$ 6 bi com recursos públicos e privados, incluindo o Novo PAC, para a nova planta de vacinas e biofármacos no Complexo Industrial de Biotecnologia em Saúde, localizado no Rio de Janeiro.',
      tag: 'Política',
      tagClass: 'bg-accent2-subtle text-dark-custom',
    },
    {
      id: 3,
      titulo: 'Brasil é destaque em encontro latino americano sobre tuberculose',
      resumo: 'Ministério da Saúde participou da 12ª Reunião da Sociedade Latino Americana de Tuberculose e Outras Micobacterioses, realizada em Montevidéu.',
      tag: 'Internacional',
      tagClass: 'bg-primary-subtle-custom text-primary',
    },
    {
      id: 4,
      titulo: 'Exercício físico regular reduz risco de doenças crônicas em 35%',
      resumo: 'Estudo realizado com mais de 50 mil participantes aponta que a prática regular de atividades físicas está diretamente associada à redução de doenças cardiovasculares e metabólicas.',
      tag: 'Bem-estar',
      tagClass: 'bg-accent2-subtle text-dark-custom',
    },
    {
      id: 5,
      titulo: 'Hidratação adequada melhora desempenho cognitivo em até 20%',
      resumo: 'Pesquisadores apontam que beber a quantidade correta de água diariamente tem impacto direto na concentração, memória e produtividade ao longo do dia.',
      tag: 'Bem-estar',
      tagClass: 'bg-accent2-subtle text-dark-custom',
    },
  ]

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
          <h1 className="fw-bold mb-0 fs-5 text-dark-custom">Notícias</h1>
        </section>

        <section className="mb-4">
          <div className="bg-gradient-primary shadow-primary rounded-3 p-4">
            <p className="text-white opacity-75 fs-9 mb-1">Destaque do dia</p>
            <h2 className="fw-bold text-white fs-6 mb-2">{noticias[0].titulo}</h2>
            <p className="text-white opacity-75 fs-9 mb-3">{noticias[0].resumo}</p>
            <button
              className="btn rounded-pill py-1 px-3 fw-bold fs-9 bg-white text-primary d-flex align-items-center gap-1"
              onClick={() => {}}
            >
              Ver matéria completa <FiArrowRight size={12} color="#1c9770" />
            </button>
          </div>
        </section>

        <section>
          <h2 className="fw-bold fs-6 text-dark-custom mb-3">Mais notícias</h2>
          <div className="d-flex flex-column gap-3">
            {noticias.slice(1).map(({ id, titulo, resumo, tag, tagClass }) => (
              <div
                key={id}
                className="bg-white rounded-3 border shadow-card p-3 cursor-pointer"
                onClick={() => {}}
              >
                <span className={`badge rounded-pill fs-9 fw-medium mb-2 ${tagClass}`}>
                  {tag}
                </span>
                <p className="fw-bold fs-7 text-dark-custom mb-1">{titulo}</p>
                <p className="text-muted fs-9 mb-2">{resumo}</p>
                <div className="d-flex align-items-center gap-1 text-primary fw-bold fs-9">
                  Ver matéria completa <FiArrowRight size={12} color="#1c9770" />
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

export default Noticias