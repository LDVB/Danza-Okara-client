import { Card } from 'react-bootstrap'

import './AlumniCard.css'



const AlumniCard = ({ imageUrl, name, opinion }) => {



    return (

        <div className='testimonio'>
            <img className='Image-Alumni' src={imageUrl} />
            <div className='Opinion-Name'>{name}</div>
            <div className='Opinion-Opinion'>{opinion}</div>
            
        </div>

    )


}

export default AlumniCard