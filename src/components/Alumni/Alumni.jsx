
import { Col, Row,  } from 'react-bootstrap'
import opinionServices from "../../services/opinion.services"
import { useEffect, useState } from "react"
import AlumniCard from '../AlumniCard/AlumniCard'

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
                    <Col md={4} key={opinion._id}>
                        <AlumniCard {...opinion} />
                    </Col>
                )
            })}
        </Row>
    )


}

export default Alumni