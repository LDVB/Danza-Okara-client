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
             <ul className={click ? 'NavMenu active' : 'NavMenu'}>
                <li className="nav-item"> 

                </li>
                 <nav className={click ? 'NavMenu active' : 'NavMenu'}>
                 
                     <Link to="/Danza Okara" className="nav-item">
                         <Nav.Link active className="NavLink" onClick={handleClick}> Danza Okara </Nav.Link>
                     </Link>
                     <Link to="/Actividades" className="nav-item">
                         <Nav.Link active className="NavLink" onClick={handleClick}> Actividades </Nav.Link>
                     </Link>
                     <Link to="/Proyecto" className="nav-item">
                         <Nav.Link active className="NavLink" onClick={handleClick}> Nuestro Proyecto </Nav.Link>
                     </Link>
                     <Link to="/Contactanos" className="nav-item">
                         <Nav.Link  active className="NavLink" onClick={handleClick}> Contáctanos </Nav.Link>
                     </Link>

                     <div className="Nav-Icon" onClick={handleClick}>
                     <FontAwesomeIcon icon={ click? faXmark : faAlignJustify} />
                     </div>
                 </nav>
             </ul>
         </div>
     </nav>

    )

}

export default Navigation