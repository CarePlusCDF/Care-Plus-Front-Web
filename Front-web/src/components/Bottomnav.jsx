import { FiHome, FiUsers, FiDollarSign, FiCheckSquare, FiMenu } from 'react-icons/fi'


const BottomNav = ({ activePage = 'home' }) => {

  const navItems = [
    { id: 'home', label: 'Home', icon: FiHome },
    { id: 'rede', label: 'Rede', icon: FiUsers },
    { id: 'reembolsos', label: 'Reembolsos', icon: FiDollarSign },
    { id: 'autorizacoes', label: 'Autorizações', icon: FiCheckSquare },
    { id: 'mais', label: 'Mais', icon: FiMenu },
  ]

  return (
    <nav className="d-flex justify-content-around align-items-center bg-white border-top py-2 fixed-bottom">
      {navItems.map(({ id, label, icon: Icon }) => (
        <div
          key={id}
          className="d-flex flex-column align-items-center"
          style={{ color: activePage === id ? '#1c9770' : '#9BA3AE', minWidth: '44px' }}
        >
          <Icon size={22} />
          <span style={{ fontSize: '11px', marginTop: '2px' }}>{label}</span>
        </div>
      ))}
    </nav>
  )
}

export default BottomNav