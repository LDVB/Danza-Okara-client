import './CardsTeacher.css'


const CardsTeacher = () => {
    return (

        <>

            <div class="card-wrapper">

                <div class="card">

                    <div class="card-image">
                        <img  className='pic1' src="https://res.cloudinary.com/ddtolhmab/image/upload/v1651737579/Danza%20Okara/Foto4_e91ni7.jpg" alt="profile Conchi" />
                    </div>

                    <div class="details">
                        <p class="text-card">Conchi
                            <br />
                            <span class="job-title">Profesora de Danza Okara</span>
                        </p>
                    </div>
                </div>
            </div>


            <div class="card-wrapper">

                <div class="card profile-two">

                    <div class="card-image profile-img--two">
                        <img className='pic2' src="https://res.cloudinary.com/ddtolhmab/image/upload/v1651737579/Danza%20Okara/foto5_psxase.jpg" alt="profile Fany" />
                    </div>

                    <div class="details fany">
                        <p class="text-card">Fany
                            <br />
                            <span class="job-title">Profesora de Fusión Latino</span>
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CardsTeacher