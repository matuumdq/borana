import mountain from '../assets/mountain.png'
import logo from '../assets/boranahorizontal.png'

const Footer = () => {
  return (
    <div className='footer'>
        <img src={mountain} alt="mountain-borana" className='footer-img'/>
        <div className='footer-box'>
            <div className='footer-left'>
                <img src={logo} alt="" />
                <p>Tostadero de Cafe de Especialidad</p>
                <div className='footer-logos'>
                    <p>fb</p>
                    <p>ig</p>
                    <p>wpp</p>
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
                    <div>
                        <p>+54 0 2236 03-5028</p>
                    </div>
                    <div>
                        <p>Logo @borana.cafe</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer