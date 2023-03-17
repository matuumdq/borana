import bg from '../assets/fondo.png'
import logo from '../assets/boranaverticalblanco.png'

const Header = () => {
  return (
    <div className='bg-header'>
        <img src={logo} alt="borana logo" className='header-logo'/>
    </div>
  )
}

export default Header