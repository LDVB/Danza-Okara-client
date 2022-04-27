import "./Navigation.css"
import {  Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleDown} from '@fortawesome/free-regular-svg-icons'

const Navigation = () => {

    return (
        <>

            <div className="Logo">
                <img src='\Logo.png' alt="Logo Danza Okara" />
            </div>

            <div>
                <nav className="NavMenu">
                    <Link to="/Danza Okara">
                        <Nav.Link> Danza Okara </Nav.Link>
                    </Link>
                    <Link to="/Actividades">
                        <Nav.Link> Actividades </Nav.Link>
                    </Link>
                    <Link to="/Proyecto">
                        <Nav.Link> Nuestro Proyecto </Nav.Link>
                    </Link>
                    <Link to="/Contactanos">
                        <Nav.Link> Contactanos </Nav.Link>
                    </Link>
                    <div>
                    <FontAwesomeIcon icon={ faCircleDown} />
                    </div>

                </nav>


            </div>

            <div className="Line" />


        </>

    )

}

export default Navigation