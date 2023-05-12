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
     
   <>
      
    <img src={mountain} alt="mountain-borana" className='footer-image'/>   
                  
 
     <div className="footer-conteiner">
   
        <div className='footer-box-conteiner'>

           <div className='footer-box-1'>
                
                <img src={logo} className='footer-box-1-logo'></img><br /> 
                <p>Tostadero de caf&eacute; de especialidad.</p>
        
                <div className='footer-box-1-redes'>
                   <a href='https://www.facebook.com/profile.php?id=100064113159137' target='_blank'>  <img src={fb} alt="facebook-logo" /> </a>
                   <a href='https://www.instagram.com/borana.cafe/' target='_blank'> <img src={ig} alt="instagram-logo" /> </a>
                   <a href='https://api.whatsapp.com/send?phone=5492236035028' target='_blank'> <img src={wpp} alt="whatsapp-logo" /> </a>
                </div> 
    
           </div>
          {/* <div className='celphone-view'>  */}
           <div className='footer-box-2'>
              <ul>MEN&Uacute;
                <li><a href="#shop">Comprar </a></li>
                <li><a href="#nosotros">Nosotros </a></li>
                <li><a href="#contacto">Contacto </a></li>
              </ul>
           </div>  
           <div className='footer-box-3'>
                <ul>CONTACTANOS
                <li><BsWhatsapp size={15} color='#77AAAD' /> <a href='https://api.whatsapp.com/send?phone=5492236035028' target='_blank'>+5491158909965 </a></li>
                <li><ImLocation size={15} color='#77AAAD'/>  <a href='https://www.instagram.com/borana.cafe/' target='_blank'>@Borana </a></li>
                </ul>   
           </div>  
           {/* </div> */}     
            
        </div>  
    
      </div>
   </>

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