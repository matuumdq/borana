import logo from '../assets/boranaverticalblanco.png';
import tostadoresdecafe from '../assets/tostadoresdecafe.png';
import Navbar from './Navbar';
import Shipping from './Shipping';
import '../styles/header.css';

const Header = () => {
  return (

    <header>

        <Shipping />
        <Navbar />

        <div className='slider-conteiner'>
            <img src={logo} alt="borana logo" className='slider-logo'/>
            <img src={tostadoresdecafe} className='slider-slogan' />
            {/* <p className='slider-title'>Tostadores de Café</p> */}
        
        </div>

    </header>
  )

}

export default Header;