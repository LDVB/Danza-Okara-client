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
     <nav className="navBar">
         <div className="nav-container">
             <ul className={click ? 'Nav-menu active' : 'Nav-menu'}>
               
                <nav className={click ? 'Nav-menu active' : 'Nav-menu'}>

                    <Link to="/DanzaOkara" className="nav-item">
                        <Nav.Link as="span" active className="NavLink" onClick={handleClick}> Danza Okara </Nav.Link>
                    </Link>
                    <Link to="/Actividades" className="nav-item">
                        <Nav.Link as="span" active className="NavLink" onClick={handleClick}> Actividades </Nav.Link>
                    </Link>
                    <Link to="/Proyecto" className="nav-item">
                        <Nav.Link as="span" active className="NavLink" onClick={handleClick}> Nuestro Proyecto </Nav.Link>
                    </Link>
                    <Link to="/Contactanos" className="nav-item">
                        <Nav.Link as="span" active className="NavLink" onClick={handleClick}> Contáctanos </Nav.Link>
                    </Link>
                </nav>
             </ul>
            <div className="Nav-Icon" onClick={handleClick}>
                     <FontAwesomeIcon icon={ click? faXmark : faAlignJustify} />
            </div>
         </div>
     </nav>

    )

}

export default Navigation