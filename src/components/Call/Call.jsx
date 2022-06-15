import './Call.css'
import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom'


const Call = () => {
    return (
        <div className='llamada'>
            <div className="hero">
                <h1 className='name'> Danza Okara</h1>
                <span className='location'>
                    <button className="accion"> 
                    <Link to="/Contactanos">
                        Ven a bailar!
                    </Link></button>
                </span>

            </div>

        </div>

    )
}

export default Call