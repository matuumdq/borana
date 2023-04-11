import { useRef, useState } from 'react'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import emailjs from '@emailjs/browser';
import { Toaster, toast} from "sonner"
import colombia from '../assets/colombia.png'
import '../styles/Form.css'

const Form = () => {
    const form = useRef();
    const [name, setName] = useState('')
    const [surname, setSurName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [messages, setMessages] = useState('')

    const sendEmail = (e) => {
    e.preventDefault();

    if(name==='' || surname ==='' || email === '' || phone === '' || messages === ''){
        toast.error('Todos los campos son obligatorios')
        return
    }

    emailjs.sendForm(import.meta.env.VITE_SERVICE, import.meta.env.VITE_TEMPLATE, form.current, import.meta.env.VITE_USER_API)
      .then((result) => {
          toast.success('Email enviado satisfactoriamente')
            e.target.reset()
            setName('')
            setSurName('')
            setEmail('')
            setPhone('')
            setMessages('')
      }, (error) => {
          console.log(error.text);
      });
    };

  return (
    <div className='form-size'>
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
                <img src={colombia} alt="colombia estampa" className='form-img' />
                <div className='form-contact'>
                    <div className='try'>
                        <label htmlFor='name'>NOMBRE</label>
                        <input
                            onChange={e => setName(e.target.value)}
                            placeholder='Escriba su nombre'
                            type="text" 
                            name="user_name" 
                            id="name" 
                        />
                    </div>

                    <div className='try'>
                        <label htmlFor='surname'>APELLIDO</label>
                        <input
                            onChange={e => setSurName(e.target.value)}
                            placeholder='Escriba su apellido'
                            type="text" 
                            name="user_surname" 
                            id="surname" 
                        />
                    </div>

                    <div className='try'>
                        <label htmlFor='email'>EMAIL</label>
                        <input
                            onChange={e => setEmail(e.target.value)}
                            placeholder='Escriba su email'
                            type="email" 
                            name="user_email" 
                            id="email" 
                        />
                    </div>
                    
                    <div className='try'>
                        <label htmlFor='phone'>TELEFONO</label>
                        <input
                            onChange={e => setPhone(e.target.value)}
                            placeholder='Escriba su telefono'
                            type="number" 
                            name="user_phone" 
                            id="phone" 
                        />
                    </div>
                    
                    <div className='try message'>
                        <label htmlFor='message'>MENSAJE</label>
                        <input
                            onChange={e => setMessages(e.target.value)}
                            placeholder='Contanos sobre tu idea'
                            name="message"
                            id="message"
                        />
                    </div>
                </div>
                    <button className='button-form' type="submit">
                        Enviar
                    </button>
            </div>
        </form>
        <Toaster richColors />
    </div>
  )
}

export default Form