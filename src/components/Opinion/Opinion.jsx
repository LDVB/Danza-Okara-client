import CardsTeacher from '../CardsTeacher/CardsTeacher'
import ClubAmigosClass from '../ClubAmigosClass/ClubAmigosClass'
import Form from '../Form/Form'
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
                    <h1 className='title-opinion'>Que piensan nuestros alumnos</h1>
                    <p className='text-opinion'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                </div>
                <div class="skew-cc"></div>
                <div class="white-block">
                    <h1 className='title-opinion2'>Danza Okara & club amigos</h1>
                   <ClubAmigosClass/>
                </div>
                <div class="skew-c"></div>
                <div class="colour-block">
                    <h1  className='title-opinion'>Contáctanos!</h1>
                    <Form/>

                    
                </div>


            </div>
        </>
    )
}

export default Opinion