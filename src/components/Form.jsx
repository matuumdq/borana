import { useRef } from 'react'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import emailjs from '@emailjs/browser';
import '../styles/Form.css'

const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_SERVICE, import.meta.env.VITE_TEMPLATE, form.current, import.meta.env.VITE_USER_API)
      .then((result) => {
          console.log(result.text);
          console.log('message send')
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
    };

  return (
    <>
        <h2 className='form-cont'>CONTACTANOS</h2>
        <form 
            ref={form}
            className='form'
            onSubmit={sendEmail}
        >
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
                    <BsInstagram color='#EB7D34' className='form-icons' size={25}/>
                    <BsFacebook color='#EB7D34' className='form-icons' size={25}/>
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
                            name="user_surname" 
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
                            name="user_phone" 
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
        </form>
    </>
  )
}

export default Form