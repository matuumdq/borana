import logo from '../assets/boranahorizontal.png';
import "../styles/header.css";

const Navbar = () => {
  return (
 
    <div className='navbar-conteiner'>
        
        <img src={logo} alt="logo borana header"/>
        
        <div className='navbar-menu-conteiner'>

             <div className='navbar-menu-options'>
                <h5>Nosotros</h5>
                <h5>Contacto</h5>
              </div> 
            
             <button className='button-store-head'>TIENDA</button>
        </div>

    </div>
  )

}

export default Navbar