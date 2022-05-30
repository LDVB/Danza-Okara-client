import "./Form.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import emailjs from 'emailjs-com'
import { useRef } from "react"


const Form = () => {

    const handleClickYoutube = () => {
        window.open("https://youtube.com/channel/UCkmMg-Rxav_QYZveR7_bLwA")
    }

    const handleClickInstagram = () => {
        window.open("https://www.instagram.com/danzaokara/?hl=es")
    }

    const handleClickFacebook = () => {
        window.open("https://www.facebook.com/danza.okara/")
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tb73rff', 'template_du9v9ba', form.current, 't9StgYEnqtufVChdg')
        .then((result) => {
            console.log(result.text);
            alert('Mensaje enviado correctamente.')
        }, (error) => {
            console.log(error.text);
        })
    }


    return (
        <div className="container-form">

            <div className="info-form">

                <div className="Col">
                    <FontAwesomeIcon className="icono" icon={faLocationPin}  />
                    <p className="texto" >C. Navales, 49, 28925 Alcorcón, Madrid</p>
                </div>
                <div className="Col">
                    <FontAwesomeIcon icon={faEnvelope} className="icono"/>
                    <p className="texto">danzaokara@gmail.com</p>
                </div>
                <div className="Col">
                    <FontAwesomeIcon icon={faPhone} className="icono"/>
                    <p className="texto"> 661 09 07 14 <br />628 68 38 85 </p>
                </div>
                <div className="redes">
                    <button onClick={handleClickFacebook} className='icon facebook'>
                        <FontAwesomeIcon icon={faFacebook} />
                    </button>

                    <button onClick={handleClickInstagram} className='icon instagram'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </button>

                    <button onClick={handleClickYoutube} className='icon youtube'>
                        <FontAwesomeIcon icon={faYoutube} />
                    </button>

                </div>
            </div>



            <form  ref={form} onSubmit={sendEmail} className="formulario">
                <input type="text" name="nombre" placeholder="Nombre" id="nombre" />
                <input type="text" name="correo" placeholder="Correo electrónico" id="correo" />
                <input type="text" name="asunto" placeholder="Asunto" id="asunto" />
                <textarea name="mensaje" id="mensaje" placeholder="Mensaje" />
                <button  type="submit" value="Send" className="form-button">Enviar</button>
            </form>

        </div>

    )

}

export default Form