
import './AlumniCard.css'

const AlumniCard = ({ imageUrl, name, opinion }) => {



    return (
        <div class="container mt-5 mb-5">
            <div class="d-flex justify-content-center row">
                <div class="col-md-9">
                    <div id="carousel-1" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="border rounded">
                                    <div class="row no-gutters">
                                        <div class="col-md-5">
                                            <img class="img-fluid profile" src={imageUrl} height="300" />
                                            <div class="col-md-7">
                                                <div class="bg-white p-2 px-3 testimonials">
                                                    <p class="text-justify">{opinion}<br /></p>

                                                    <div class="d-flex align-items-center mt-3 text-success font-weight-bold"><span class="mr-2">{name}</span><i class="fa fa-long-arrow-right"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )


}

export default AlumniCard