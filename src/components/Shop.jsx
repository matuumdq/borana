import borana from '../assets/boranacartel.png'
import country from '../assets/country.png'

import '../styles/Shop.css'
const Shop = () => {
  return (
    <div className='shop'>
    <div className='shop-cards'>
        {/* <img src={borana} className='shop-img' alt="Logo borana Redondo" /> */}
        <img src={country} alt="countries coffe" className='shop-country'/>
    </div>
    <div className='shop-container'>
        <div className='shop-text'>
            <p className='principal-text'>¡Visita nuestra tienda online!</p>
            <p className='sec-text'>Y disfrutá de tú café favorito directo en casa</p>
            <button className='shop-button'>COMPRAR</button>
        </div>
    </div>
    </div>
  )
}

export default Shop