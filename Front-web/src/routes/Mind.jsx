import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight, FiHeart, FiPhone } from 'react-icons/fi'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const Mind = () => {
  const navigate = useNavigate()
  const points = 1500

  const artigos = [
    { id: 1, title: 'Quando procurar um psicólogo?', desc: 'Esteja atento a sinais de alteração da saúde mental.' },
    { id: 2, title: 'Crise de ansiedade?', desc: 'Veja a técnica 5 4 3 2 1 para amenizar crises.' },
    { id: 3, title: 'Reduzir tensão?', desc: 'Hábito de 2 minutos para reduzir o estresse mental.' },
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
          <h1 className="fw-bold mb-0 fs-5 text-dark-custom">Mind+</h1>
        </section>

        <section className="mb-4">
          <div className="bg-gradient-accent1 shadow-primary rounded-3 p-4 text-center">
            <div className="avatar-lg rounded-circle bg-white bg-opacity-25 d-flex align-items-center justify-content-center mx-auto mb-3">
              <FiHeart size={32} color="#fff" />
            </div>
            <h2 className="fw-bold text-white fs-5 mb-1">Pedir ajuda não é sinal de fraqueza</h2>
            <p className="text-white opacity-75 small mb-0">
              É a coragem de escolher cuidar de si.
            </p>
          </div>
        </section>

        <section className="mb-4">
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <div
                className="bg-white rounded-3 border shadow-card p-3 h-100 cursor-pointer"
                onClick={() => {}}
              >
                <div className="icon-box-sm rounded-3 d-flex align-items-center justify-content-center bg-primary-subtle-custom mb-2">
                  <FiHeart size={18} color="#1c9770" />
                </div>
                <p className="fw-bold fs-7 text-dark-custom mb-1">Acompanhamento com profissional</p>
                <p className="text-muted fs-9 mb-0">
                  Profissionais preparados para te ouvir e orientar a qualquer momento.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div
                className="bg-white rounded-3 border shadow-card p-3 h-100 cursor-pointer"
                onClick={() => {}}
              >
                <div className="icon-box-sm rounded-3 d-flex align-items-center justify-content-center bg-primary-subtle-custom mb-2">
                  <FiPhone size={18} color="#1c9770" />
                </div>
                <p className="fw-bold fs-7 text-dark-custom mb-1">Pronto atendimento</p>
                <p className="text-muted fs-9 mb-0">
                  Serviço de psicólogo online, pronto atendimento a qualquer hora e lugar.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-4">
          <h2 className="fw-bold fs-6 text-dark-custom mb-3">Não está se sentindo bem?</h2>
          <div
            className="rounded-3 p-3 d-flex align-items-center justify-content-between border-primary-subtle cursor-pointer"
            style={{ backgroundColor: 'rgba(28,151,112,0.05)' }}
            onClick={() => {}}
          >
            <div>
              <p className="fw-bold fs-7 text-primary mb-0">CVV - Centro de Valorização da Vida</p>
              <p className="text-muted fs-9 mb-0">Receber auxílio</p>
            </div>
            <FiArrowRight size={18} color="#1c9770" />
          </div>
        </section>

        <section className="mb-4">
          <h2 className="fw-bold fs-6 text-dark-custom mb-3">Dúvidas frequentes</h2>
          <div className="d-flex flex-column gap-2">
            {artigos.map(({ id, title, desc }) => (
              <div
                key={id}
                className="bg-white rounded-3 border shadow-card p-3 d-flex align-items-center gap-3 cursor-pointer"
              >
                <div className="flex-fill">
                  <p className="fw-bold mb-0 fs-7 text-dark-custom">{title}</p>
                  <p className="mb-0 text-muted fs-9">{desc}</p>
                </div>
                <FiArrowRight size={16} color="#1c9770" />
              </div>
            ))}
          </div>
        </section>

        <section>
          <button
            className="btn w-100 rounded-3 py-3 fw-bold fs-7 text-white bg-gradient-accent1 shadow-primary d-flex align-items-center justify-content-center gap-2"
            onClick={() => {}}
          >
            <FiPhone size={18} color="#fff" /> Receber auxílio agora
          </button>
        </section>

      </main>

      <BottomNav activePage="home" />
    </div>
  )
}

export default Mind