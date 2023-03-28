import logo from '../assets/boranahorizontal.png';
import "../styles/header.css";

const Navbar = () => {
  return (
 
    <div className='navbar-conteiner'>
        
        <img src={logo} alt="logo borana header"/>
        
        <div className='navbar-menu-conteiner'>
            <h5>Nosotros</h5>
            <h5>Contacto</h5>
            <button className='button-store'>Tienda</button>
        </div>

    </div>
  )

}

export default Navbar