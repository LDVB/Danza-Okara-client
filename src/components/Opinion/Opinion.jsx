import CardsTeacher from '../CardsTeacher/CardsTeacher'
import './Opinion.css'

const Opinion = () => {
    return (
        <>
            <div className='Opiniones'>

                <div class="skew-c"></div>
                <div class="colour-block">
                    <h1>¿Quienes somos?</h1>
                    <br />
                    <p>Danza Okara nació del amor y afán de ayudar a los demás, nos dimos cuenta lo que aportaba a nivel psíquico y fisico en las personas y es lo que nos impulso a realizar este proyecto.</p>
                </div>
                <div class="skew-cc"></div>
                <div class="white-block">
                    <h1 class="white-block">Nuestras profes</h1>
                    <div class="container">
                    <CardsTeacher/>
                    </div>

                </div>
                <div class="skew-c"></div>
                <div class="colour-block">
                    <h1>Que piensan nuestros alumnos.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                </div>
                <div class="skew-cc"></div>
                <div class="white-block">
                    <h1 class="white-block">Danza Okara & club amigos.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                </div>


            </div>
        </>
    )
}

export default Opinion