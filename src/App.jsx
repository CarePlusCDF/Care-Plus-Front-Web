import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import LGPD from './routes/LGPD'
import Onboarding from './routes/Onboarding'
import Cadastro from './routes/Cadastro'
import Inicial from './routes/Inicial'
import Missoes from './routes/Missoes'
import Ranking from './routes/Ranking'
import Impulso from './routes/Impulso'
import Beneficios from './routes/Beneficios'
import Mind from './routes/Mind'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lgpd" element={<LGPD />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/inicial" element={<Inicial />} />
        <Route path="/missoes" element={<Missoes />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/impulso" element={<Impulso />} />
        <Route path="/beneficios" element={<Beneficios />} />
        <Route path="/mind" element={<Mind />} />

      </Routes>
    </Router>
  )
}

export default App
