import '../styles/Card.css'

const Card = ({opt}) => {
  return (
    <div className='card-container'>
        <div className='card-container-logo'>
            <img src={opt.logo} alt={`logo ${opt.key}`} />
        </div>
        <div className='card-container-text'>
            <p>{opt.text}</p>
        </div>
    </div>
  )
}

export default Card