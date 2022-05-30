import './DanceClass.css'

const DanceClass = () => {
    return (
        <>
         <div className='danceClass'>

            <div class="description">
                <h1 class="description__title">Clases Danza Oriental</h1>
                <p class="description__p"> La danza del vientre es un baile para todas las edades que aporta muchos beneficios para la salud de la mujer. 
                    Además de ser un ejercicio alegre y desenfadado, libera energía, ejercita el suelo pélvico, tonifica los músculos, 
                    mejora la capacidad cardiovascular, así como la conciencia corporal y la postura.</p>
                
            </div>

            <div class="coursemeal">


                <div class="coursemeal__div ">

                    <picture class="responsive-img">
                        <source media="(min-width: 992px)" srcset="https://res.cloudinary.com/ddtolhmab/image/upload/v1653302002/Danza%20Okara/DanzaOkara-8_x8vihr.jpg" />
                        <img src="https://res.cloudinary.com/ddtolhmab/image/upload/v1653302002/Danza%20Okara/DanzaOkara-8_x8vihr.jpg" alt="Iniciación" />
                    </picture>

                    <div class="coursemeal-info">
                        <a href="#" class="coursemeal-info__link">Iniciación  <br/><br/>Miércoles de 18,30h a 19,30h </a>
                        
                    </div>
                </div>

                <div class="coursemeal__div">

                    <picture class="responsive-img">
                        <source media="(min-width: 992px)" srcset="https://res.cloudinary.com/ddtolhmab/image/upload/v1651737618/Danza%20Okara/foto22_oxt6bf.jpg" />
                        <img src="https://res.cloudinary.com/ddtolhmab/image/upload/v1651737618/Danza%20Okara/foto22_oxt6bf.jpg" alt="Medio" />
                    </picture>

                    <div class="coursemeal-info">
                        <a href="" class="coursemeal-info__link">Medio <br/><br/>Jueves de 20h a 21h</a>
                    </div>
                </div>
                <div class="coursemeal__div">

                    <picture class="responsive-img">
                        <source media="(min-width: 992px)" srcset="https://res.cloudinary.com/ddtolhmab/image/upload/v1651738964/Danza%20Okara/Guerreras-2_u3poj1.jpg" />
                        <source media="(min-width: 767px)" srcset="https://res.cloudinary.com/ddtolhmab/image/upload/v1651738964/Danza%20Okara/Guerreras-2_u3poj1.jpg" />
                        <source srcset="https://res.cloudinary.com/ddtolhmab/image/upload/v1651738964/Danza%20Okara/Guerreras-2_u3poj1.jpg" />
                        <img src="https://res.cloudinary.com/ddtolhmab/image/upload/v1651738964/Danza%20Okara/Guerreras-2_u3poj1.jpg" alt="Avanzado" />
                    </picture>

                    <div class="coursemeal-info">
                        <a href="#" class="coursemeal-info__link">Avanzado <br/><br/>
                        Lunes y jueves de 19h a 20h nivel III<br/> Lunes de 20h a 21h nivel II</a>
                    </div>
                </div>

                </div>
            </div>
        </>
    )
}

export default DanceClass