import brasil from '../assets/brasil.jpg'
import india from '../assets/india.png'

const Shop = () => {
  return (
    <div className='shop'>
    <div className='shop-cards'>
        <img src={india} alt="india" className='india'/>
        <img src={brasil} alt="brasil" className='brasil'/>
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