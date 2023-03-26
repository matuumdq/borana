import React from 'react';
import "../styles/footer.css";
import mountain from '../assets/mountain.png'
import logo from '../assets/boranahorizontal.png'
import wpp from '../assets/wp.png'
import ig from '../assets/ig.png'
import fb from '../assets/fb.png'
import { BsWhatsapp } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'

const Footer = () => {
  
  return (
  
    <div className="footer-conteiner">
           
        <img></img>

        <div className='footer-box-conteiner'>

           <div className='footer-box-1'>
                
                <img src={logo} className='footer-box-1-logo'></img><br /> 
                <p>Tostadero de caf&eacute; de especialidad.</p>
        
                <div className='footer-box-1-redes'>
                   <img src={fb} alt="facebook-logo" />
                   <img src={ig} alt="instagram-logo" />
                   <img src={wpp} alt="whatsapp-logo" />
                </div> 
    
           </div>
           <div className='footer-box-2'>
              <ul>MEN&Uacute;
                <li>Comprar</li>
                <li>Nosotros</li>
                <li>Contacto</li>
              </ul>
           </div>  
           <div className='footer-box-3'>
                <ul>CONTACTANOS
                <li><BsWhatsapp size={15} color='#77AAAD' /> +5491158909965</li>
                <li><ImLocation size={15} color='#77AAAD'/>@Borana</li>
                </ul>   
            </div>      
            
        
        </div>  
    
    </div>
  )
}

export default Footer;


{/* <img src={mountain} alt="mountain-borana" className='footer-img'/>
    
<div className='footer-box'>
    <div className='footer-left'>
        <img src={logo} alt="" />
        <p>Tostadero de Cafe de Especialidad</p>
        <div className='footer-logos'>
            <img src={fb} alt="facebook-logo" />
            <img src={ig} alt="instagram-logo" />
            <img src={wpp} alt="whatsapp-logo" />
        </div>
    </div>

    <div className='footer-right'>
        <div className='footer-menu'>
            <h3>Menu</h3>
            <p>Por que elegirnos?</p>
            <p>Como comprar?</p>
            <p>Quienes somos?</p>
            <p>Contacto</p>
        </div>

        <div className='footer-menu'>
            <h3>Contactanos</h3>
            <div className='footer-logos-contact'>
                <BsWhatsapp size={25} color='#77AAAD' />
                <p>+54 9 2236 03-5028</p>
            </div>
            <div className='footer-logos-contact'>
                <ImLocation size={25} color='#77AAAD'/>
                <p>@borana.cafe</p>
            </div>
        </div>
        
    </div>
</div> */}