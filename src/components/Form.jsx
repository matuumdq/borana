import { BsFacebook, BsInstagram } from 'react-icons/bs'
import '../styles/Form.css'

const Form = () => {
  return (
    <>
        <h2 className='form-cont'>CONTACTANOS</h2>
        <div className='form'>
            <div className='form-text'>
                <p className='form-contactus'>
                    Ponete en contacto con nosotros
                </p>
            <div className='form-dudes'>
                <p>
                    ¿Te quedaron dudas sobre nuestros procesos?
                </p>
                <p>        
                    ¿Te gustaría realizar un pedido para vos o para tu comercio?
                </p>
            </div>

                <div className='form-icons'>
                    <BsInstagram color='#EB7D34' className='form-icons'/>
                    <BsFacebook color='#EB7D34' className='form-icons'/>
                </div>
            </div>

            <div className='form-contact-size'>
                <p>Envianos un mensaje</p>
                <div className='form-contact'>
                    <div className='try'>
                        <label>NOMBRE</label>
                        <input
                            placeholder='Escriba su nombre'
                            type="text" 
                            name="user_name" 
                        />
                    </div>

                    <div className='try'>
                        <label>APELLIDO</label>
                        <input
                            placeholder='Escriba su apellido'
                            type="text" 
                            name="user_name" 
                        />
                    </div>

                    <div className='try'>
                        <label>EMAIL</label>
                        <input
                            placeholder='Escriba su email'
                            type="email" 
                            name="user_email" 
                        />
                    </div>
                    
                    <div className='try'>
                        <label>TELEFONO</label>
                        <input
                            placeholder='Escriba su telefono'
                            type="number" 
                            name="user_name" 
                        />
                    </div>
                    
                    <div className='try message'>
                        <label>MENSAJE</label>
                        <input
                            placeholder='Contanos sobre tu idea'
                            name="message"
                        />
                    </div>
                </div>
                    <button type="submit">
                        Enviar
                    </button>
            </div>
        </div>
    </>
  )
}

export default Form