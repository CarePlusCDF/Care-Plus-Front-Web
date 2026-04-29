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
import Connect from './routes/Connect'
import Scan from './routes/Scan'
import Noticias from './routes/Noticias'



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
        <Route path="/connect" element={<Connect />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/noticias" element={<Noticias />} />


      </Routes>
    </Router>
  )
}

export default App
