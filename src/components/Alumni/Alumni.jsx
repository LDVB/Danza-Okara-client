
import './Alumni.css'
import opinionServices from "../../services/opinion.services"
import { useEffect, useState } from "react"
import AlumniCard from '../AlumniCard/AlumniCard'
import { Card, Col, Row } from 'react-bootstrap'

const Alumni = () => {
    let [opinion, setOpinion] = useState([])

    useEffect(() => {

        opinionServices
            .getAllOpinion()
            .then(({ data }) => setOpinion(data))
            .catch(err => console.log(err))

    }, [])

    return (
        <Row>
            {opinion.map(opinion => {
                return (
                    <div md={4} key={opinion._id}>
                        <div className='OpinionCard'>
                            <img className='Image-Alumni' src={opinion.imageUrl}/>
                            <div className='Opinion-Text'>
                                <div className='Opinion-Name'>{opinion.name}</div>
                                <div className='Opinion-Opinion'>{opinion.opinion}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Row>
    )


}

export default Alumni