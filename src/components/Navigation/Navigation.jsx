import "./Navigation.css"
import {  Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAlignJustify, faXmark} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

const Navigation = () => {

    const [click, setClick]= useState (false)
    const handleClick = () => setClick(!click)
    return (
        <>
            <div>

           
                <nav className="NavMenu">
                    
                    <Link to="/Danza Okara" className="item">
                        <Nav.Link className="NavLink"> Danza Okara </Nav.Link>
                    </Link>
                    <Link to="/Actividades" className="item">
                        <Nav.Link className="NavLink"> Actividades </Nav.Link>
                    </Link>
                    <Link to="/Proyecto" className="item">
                        <Nav.Link className="NavLink"> Nuestro Proyecto </Nav.Link>
                    </Link>
                    <Link to="/Contactanos" className="item">
                        <Nav.Link className="NavLink"> Contáctanos </Nav.Link>
                    </Link>
                    

                </nav>

                <div className="Nav-Icon" onClick={handleClick}>
                    <FontAwesomeIcon icon={ click? faXmark : faAlignJustify} />
                </div>

                

            </div>

            <div className="Line" />


        </>

    )

}

export default Navigation