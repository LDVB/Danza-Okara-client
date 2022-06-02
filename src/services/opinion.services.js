import axios from "axios"

class OpinionServices{
    constructor(){
        this.api=axios.create({baseURL:'http://localhost:5005/api/Danza-Okara'})
    }

    getAllOpinion = () => {
        return this.api.get(`/getAllOpinion`)
    }
}


const opinionServices = new OpinionServices()

export default opinionServices