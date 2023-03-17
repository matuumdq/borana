import logo from '../assets/boranahorizontal.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="logo borana header"/>
        <div className='nav-menu'>
            <p>Por que elegirnos?</p>
            <p>Como comprar?</p>
            <p>Quienes somos?</p>
            <p>Contacto</p>
            <button>Tienda</button>
        </div>
    </div>
  )
}

export default Navbar