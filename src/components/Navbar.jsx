import logo from '../assets/boranahorizontal.png';
import "../styles/header.css";

const Navbar = () => {
  return (
 
    <div className='navbar-conteiner'>
        
        <a href="/"><img src={logo} alt="logo borana header"/></a>
        
        <div className='navbar-menu-conteiner'>

             <div className='navbar-menu-options'>
                <h5><a href="#nosotros">Nosotros </a></h5>
                <h5><a href="#contacto">Contacto </a></h5>
              </div> 
            
             <button className='button-store-head'><a href='https://www.instagram.com/borana.cafe/' target='_blank'>TIENDA</a></button>
        </div>

    </div>
  )

}

export default Navbar