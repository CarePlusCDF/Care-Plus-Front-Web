import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight, FiWifi, FiActivity, FiDroplet } from 'react-icons/fi'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const Connect = () => {
  const navigate = useNavigate()
  const points = 1500

  const metaPassos = 10000
  const passosAtual = 6340
  const progressoPassos = Math.round((passosAtual / metaPassos) * 100)

  const metaAgua = 3000
  const aguaAtual = 1800
  const progressoAgua = Math.round((aguaAtual / metaAgua) * 100)

  const conquistasPassos = [
    { id: 1, title: 'Mestre dos Passos', desc: 'Dê 10.000 passos em um dia.', concluida: false },
    { id: 2, title: 'Caminhante', desc: 'Dê 5.000 passos por 3 dias seguidos.', concluida: true },
  ]

  const conquistasAgua = [
    { id: 1, title: 'Rei das Garrafinhas', desc: 'Beba 3L de água diários por 3 dias.', concluida: false },
    { id: 2, title: 'Hidratado', desc: 'Beba pelo menos 2L em um dia.', concluida: true },
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
          <h1 className="fw-bold mb-0 fs-5 text-dark-custom">Connect+</h1>
        </section>

        <section className="mb-4">
          <div className="bg-gradient-accent2 shadow-primary rounded-3 p-4 text-center">
            <div className="avatar-lg rounded-circle bg-white bg-opacity-25 d-flex align-items-center justify-content-center mx-auto mb-3">
              <FiWifi size={32} color="#fff" />
            </div>
            <h2 className="fw-bold text-white fs-5 mb-1">Pulseira Conectada</h2>
            <p className="text-white opacity-75 small mb-0">
              Acompanhe seus passos e hidratação em tempo real.
            </p>
          </div>
        </section>

        <section className="mb-4">
          <h2 className="fw-bold fs-6 text-dark-custom mb-3">Passos de hoje</h2>
          <div className="bg-white rounded-3 border shadow-card p-3">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="icon-box-md rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 bg-primary-subtle-custom">
                <FiActivity size={22} color="#1c9770" />
              </div>
              <div className="flex-fill">
                <p className="text-muted fs-9 mb-0">Passos registrados</p>
                <h3 className="fw-bold fs-4 text-dark-custom mb-0">
                  {passosAtual.toLocaleString('pt-BR')}
                  <span className="text-muted fs-7 fw-medium"> / {metaPassos.toLocaleString('pt-BR')}</span>
                </h3>
              </div>
              <span className="fw-bold text-primary fs-7">{progressoPassos}%</span>
            </div>
            <div className="progress rounded-pill progress-h-md">
              <div
                className="progress-bar bg-primary rounded-pill"
                style={{ width: `${progressoPassos}%` }}
              />
            </div>
            <p className="text-muted fs-9 mt-2 mb-0">
              Faltam {(metaPassos - passosAtual).toLocaleString('pt-BR')} passos para sua meta diária.
            </p>
          </div>
        </section>

        <section className="mb-4">
          <h2 className="fw-bold fs-6 text-dark-custom mb-3">Hidratação de hoje</h2>
          <div className="bg-white rounded-3 border shadow-card p-3">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="icon-box-md rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 bg-accent2-subtle">
                <FiDroplet size={22} color="#7AD1C3" />
              </div>
              <div className="flex-fill">
                <p className="text-muted fs-9 mb-0">Água consumida</p>
                <h3 className="fw-bold fs-4 text-dark-custom mb-0">
                  {aguaAtual}ml
                  <span className="text-muted fs-7 fw-medium"> / {metaAgua}ml</span>
                </h3>
              </div>
              <span className="fw-bold text-primary fs-7">{progressoAgua}%</span>
            </div>
            <div className="progress rounded-pill progress-h-md">
              <div
                className="progress-bar rounded-pill"
                style={{ width: `${progressoAgua}%`, backgroundColor: '#7AD1C3' }}
              />
            </div>
            <p className="text-muted fs-9 mt-2 mb-0">
              Faltam {metaAgua - aguaAtual}ml para atingir sua meta diária.
            </p>
          </div>
        </section>

        <section className="mb-4">
          <h2 className="fw-bold fs-6 text-dark-custom mb-3">Conquistas</h2>
          <div className="d-flex flex-column gap-2">
            {[...conquistasPassos, ...conquistasAgua].map(({ id, title, desc, concluida }) => (
              <div
                key={`${title}-${id}`}
                className={`bg-white rounded-3 border shadow-card p-3 d-flex align-items-center gap-3 ${concluida ? 'ranking-item-highlight' : ''}`}
              >
                <div className={`icon-box-sm rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 ${concluida ? 'bg-primary' : 'bg-primary-subtle-custom'}`}>
                  <FiActivity size={18} color={concluida ? '#fff' : '#1c9770'} />
                </div>
                <div className="flex-fill">
                  <p className="fw-bold mb-0 fs-7 text-dark-custom">{title}</p>
                  <p className="mb-0 text-muted fs-9">{desc}</p>
                </div>
                {concluida
                  ? <span className="badge rounded-pill bg-primary fs-9">Concluída</span>
                  : <span className="badge rounded-pill badge-neutral fs-9">Pendente</span>
                }
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="rounded-3 p-3 border-primary-subtle bg-primary-ultra-subtle d-flex align-items-center justify-content-between gap-3">
            <div>
              <p className="fw-bold fs-9 text-primary mb-0">Em breve</p>
              <p className="text-muted fs-9 mb-0">
                Novas leituras da pulseira a caminho: frequência cardíaca, sono e muito mais.
              </p>
            </div>
            <FiArrowRight size={16} color="#1c9770" />
          </div>
        </section>

      </main>

      <BottomNav activePage="home" />
    </div>
  )
}

export default Connect