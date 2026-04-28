import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import LGPD from './routes/LGPD'
import Onboarding from './routes/Onboarding'
import Cadastro from './routes/Cadastro'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lgpd" element={<LGPD />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/cadastro" element={<Cadastro />} />

      </Routes>
    </Router>
  )
}

export default App
