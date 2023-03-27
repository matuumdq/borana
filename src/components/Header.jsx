import React from 'react';
import logo from '../assets/boranaverticalblanco.png';
import tostadoresdecafe from '../assets/tostadoresdecafe.png';
import Navbar from './Navbar';
import Shipping from './Shipping';
import '../styles/header.css';

const Header = () => {
  return (

    <header>

        <div className='header-shipping-span-conteiner'>
          <h5>ENVIOS A TODO EL PA&Iacute;S</h5>
        </div>

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