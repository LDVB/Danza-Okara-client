import Alumni from '../Alumni/Alumni'
import CardsTeacher from '../CardsTeacher/CardsTeacher'
import ClubAmigosClass from '../ClubAmigosClass/ClubAmigosClass'
import './Opinion.css'

const Opinion = () => {
    return (
        <>
            <div className='Opiniones'>

                <div class="skew-c"></div>
                <div class="colour-block">
                    <h1 className='title-opinion'>¿Quienes somos?</h1>
                    <br />
                    <p className='text-opinion'>Danza Okara nació del amor y afán de ayudar a los demás, nos dimos cuenta lo que aportaba a nivel psíquico y fisico en las personas y es lo que nos impulso a realizar este proyecto.</p>
                </div>
                <div class="skew-cc"></div>
                <div class="white-block">
                    <h1 class="title-opinion2">Nuestras profes</h1>
                    <div class="container">
                    <CardsTeacher/>
                    </div>

                </div>
                <div class="skew-c"></div>
                <div class="colour-block">
                <h1 class="title-opinion">Danza Okara & Club amigos</h1>
                    <div class="container">
                    <ClubAmigosClass/>
                    </div>
                </div>
                <div class="skew-cc"></div>
                <div class="white-block">
                <h1 className='title-opinion2'>Que piensan nuestros alumnos</h1>
                    <Alumni/> 

                </div>

            </div>
        </>
    )
}

export default Opinion