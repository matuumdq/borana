import borana from '../assets/boranacartel.png'
import country from '../assets/country.png'

import '../styles/Shop.css'
const Shop = () => {
  return (
    <div className='shop'>
    <div className='shop-cards'>
        <img src={borana} className='shop-img' alt="Logo borana Redondo" />
        <img src={country} alt="countries coffe" className='shop-country'/>
    </div>
        <div className='shop-text'>
            <p className='principal-text'>¡Visita nuestra tienda online!</p>
            <p className='sec-text'>Y pedi tu cafe favorito directo a tu casa</p>
            <button className='shop-button'>TIENDA</button>
        </div>
    </div>
  )
}

export default Shop