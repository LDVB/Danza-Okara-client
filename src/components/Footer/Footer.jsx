import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

    const handleClickYoutube = () => {
        window.open("https://youtube.com/channel/UCkmMg-Rxav_QYZveR7_bLwA")
    }

    const handleClickInstagram = () => {
        window.open("https://www.instagram.com/danzaokara/?hl=es")
    }

    const handleClickFacebook = () => {
        window.open("https://www.facebook.com/danza.okara/")
    }


    return (
        <>
            <footer>
                <div className='line' />
                <div className="grupo-1">
                    <div className="box-footer">
                        <p className="title-footer">DANZA OKARA</p>
                        <p>Clases adultos</p>
                        <p>Clases Fusión Latinos</p>
                        
                    </div>
                    <div className="box-footer">
                        <p className="title-footer">ACTIVIDADES</p>
                        <p>Eventos</p>
                        <p>Momentos Danza Okara</p>
                        <p>Galeria de fotos</p>
                    </div>
                    <div className="box-footer">
                        <p className="title-footer">NUESTRO PROYECTO</p>
                        <p>Quienes somos</p>
                        <p>Formación</p>
                        <p>Nuestros profesores</p>
                        <p>Danza Okara y Club amigos</p>
                    </div>
                    <div className="box-footer">
                        <p className="title-footer">¡SIGUENOS!</p>
                        <div className='socialMedia'>

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
                </div>
                <div className="grupo-2">
                    <small> © 2022 - Danza Okara - Todos los derechos reservados</small>
                </div>
                
            </footer>

        </>
    )

}

export default Footer