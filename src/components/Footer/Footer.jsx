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
                    <div className="box">
                        <p className="title">DANZA OKARA</p>
                        <p>Beneficios de la danza</p>
                        <p>Clases adultos</p>
                        <p>Clases Fusión Latinos</p>
                        <p>Danza Okara y Club amigos</p>
                    </div>
                    <div className="box">
                        <p className="title">ACTIVIDADES</p>
                        <p>Eventos</p>
                        <p>Momentos Danza Okara</p>
                        <p>Galeria de fotos</p>
                    </div>
                    <div className="box">
                        <p className="title">NUESTRO PROYECTO</p>
                        <p>Quienes somos</p>
                        <p>Formación</p>
                        <p>Nuestros profesores</p>
                    </div>
                    <div className="box">
                        <p className="title">¡SIGUENOS!</p>
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


                {/* <div className='line' />
                <div className='footer-bottom'>
                    <div className="container">
                        <div className="">
                            <div className='col-4'>
                                <div className='socialMedia'>
                                        <div className='col-2'>
                                            <div className='icon facebook'>
                                                <button onClick={handleClickFacebook} className='icon facebook'>
                                                    <FontAwesomeIcon icon={faFacebook} />
                                                </button>
                                            </div>
                                        </div>
                                        <div className='col-2'>
                                            <button onClick={handleClickInstagram} className='icon instagram'>
                                                <FontAwesomeIcon icon={faInstagram} />
                                            </button>
                                        </div>
                                        <div className='col-2'>
                                            <button onClick={handleClickYoutube} className='icon youtube'>
                                                <FontAwesomeIcon icon={faYoutube} />
                                            </button>
                                        </div>
                                    </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="footer-site-info">Copyright © 2022 Todos los derechos reservados</div>
                    </div>

                </div> */}
            </footer>

        </>
    )

}

export default Footer