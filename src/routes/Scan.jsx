import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiCamera, FiGift, FiCheck } from 'react-icons/fi'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const Scan = () => {
  const navigate = useNavigate()
  const points = 1500
  const [scanFeito, setScanFeito] = useState(false)
  const [mostrarRecompensa, setMostrarRecompensa] = useState(false)

  const handleScan = () => {
    setScanFeito(true)
    setTimeout(() => setMostrarRecompensa(true), 1000)
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
          <h1 className="fw-bold mb-0 fs-5 text-dark-custom">Scan Diário</h1>
        </section>

        {!scanFeito && (
          <>
            <section className="mb-4">
              <div className="bg-gradient-primary shadow-primary rounded-3 p-4 text-center">
                <div className="avatar-lg rounded-circle bg-white bg-opacity-25 d-flex align-items-center justify-content-center mx-auto mb-3">
                  <FiCamera size={32} color="#fff" />
                </div>
                <h2 className="fw-bold text-white fs-5 mb-1">Realize seu Scan diário</h2>
                <p className="text-white opacity-75 small mb-0">
                  Ganhe uma caixa surpresa ao completar o scan de hoje.
                </p>
              </div>
            </section>

            <section className="mb-4">
              <div className="bg-white rounded-3 border shadow-card p-3">
                <h2 className="fw-bold fs-6 text-dark-custom mb-3">Como funciona a caixa surpresa?</h2>
                <p className="text-muted fs-7 mb-0">
                  Todo dia ao entrar no app, você pode realizar um Scan que identifica idade da pele, rugas, olheiras e outros indicadores. Ao realizar essa mini consulta você ganha uma caixa surpresa podendo ganhar desde escudos e multiplicadores até descontos e benefícios com nossas marcas parceiras.
                </p>
              </div>
            </section>

            <section>
              <button
                className="btn w-100 rounded-3 py-3 fw-bold fs-7 text-white bg-gradient-primary shadow-primary d-flex align-items-center justify-content-center gap-2"
                onClick={handleScan}
              >
                <FiCamera size={18} color="#fff" /> Realizar Scan
              </button>
            </section>
          </>
        )}

        {scanFeito && !mostrarRecompensa && (
          <section className="text-center py-5">
            <div className="avatar-lg rounded-circle bg-primary-subtle-custom d-flex align-items-center justify-content-center mx-auto mb-3">
              <FiCamera size={32} color="#1c9770" />
            </div>
            <p className="fw-bold fs-6 text-dark-custom mb-1">Analisando...</p>
            <p className="text-muted fs-7">Aguarde enquanto processamos seu scan.</p>
          </section>
        )}

        {mostrarRecompensa && (
          <>
            <section className="mb-4">
              <div className="bg-gradient-primary shadow-primary rounded-3 p-4 text-center">
                <div className="avatar-lg rounded-circle bg-white bg-opacity-25 d-flex align-items-center justify-content-center mx-auto mb-3">
                  <FiCheck size={32} color="#fff" />
                </div>
                <h2 className="fw-bold text-white fs-5 mb-1">Scan realizado!</h2>
                <p className="text-white opacity-75 small mb-0">
                  Continue completando missões para trocar em benefícios.
                </p>
              </div>
            </section>

            <section className="mb-4">
              <div className="bg-white rounded-3 border shadow-card p-4 text-center">
                <div className="avatar-lg rounded-circle bg-primary-subtle-custom d-flex align-items-center justify-content-center mx-auto mb-3">
                  <FiGift size={32} color="#1c9770" />
                </div>
                <h2 className="fw-bold fs-6 text-dark-custom mb-1">Sua recompensa</h2>
                <p className="text-muted fs-7 mb-3">
                  A caixa surpresa pode te dar desde multiplicadores de troféus, escudos, personalizações até cupons de desconto e benefícios em nossas empresas parceiras.
                </p>
                <button
                  className="btn rounded-3 py-2 px-4 fw-bold fs-7 text-white bg-primary shadow-primary"
                  onClick={() => {}}
                >
                  <FiGift size={16} color="#fff" /> Abrir caixa surpresa
                </button>
              </div>
            </section>

            <section>
              <button
                className="btn w-100 rounded-3 py-3 fw-bold fs-7 text-primary border-primary-subtle bg-white"
                onClick={() => navigate('/inicial')}
              >
                Voltar para o início
              </button>
            </section>
          </>
        )}

      </main>

      <BottomNav activePage="home" />
    </div>
  )
}

export default Scan