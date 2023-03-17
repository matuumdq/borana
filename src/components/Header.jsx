import logo from '../assets/boranaverticalblanco.png'
import Navbar from './Navbar'
import Shipping from './Shipping'

const Header = () => {
  return (
    <>
        <Shipping />
        <Navbar />
        <div className='bg-header'>
            <img src={logo} alt="borana logo" className='header-logo'/>
            <p className='header-toast'>Tostadores de Café</p>
        </div>
    </>
  )
}

export default Header