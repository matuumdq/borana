import filtrado from '../assets/filtrado.png'
import sirviendo from '../assets/sirviendo.png'
import '../styles/Who.css'

const Who = () => {
    const text = 'Borana nace en 2020 en Mar del Plata como un tostadero de café de especialidad impulsado por el deseo de ofrecer café de alta calidad y de diversos orígenes.' 
    const text2 = 'Luego de tostar, desarrollar y validar nuestros primeros granos y perfiles,  Borana es introducida al mercado local como una Boutique de Café.'
  return (
    <div className='who-size' id='nosotros'>
        <h2 className='who-us'>¿QUIENES SOMOS?</h2>
        <div className='who-container'>
            <div className='who-text'>
                <p>{text}</p>
                <p>{text2}</p>
            </div>
            <div className='who-img'>
                <img src={sirviendo} alt="servir" className='serve-img'/>
                <img src={filtrado} alt="filtrado" className='filter-img'/>
            </div>
        </div>
    </div>
  )
}

export default Who