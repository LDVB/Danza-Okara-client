import './ClubAmigosClass.css'

const ClubAmigosClass = () => {
    return (
        <>
            <div className='clubAmigosClass'>

                <div class="description-clubAmigos">
                    <p class="description__p"> La danza es una actividad con numerosos beneficios, siendo para ellos una actividad terapéutica que les proporciona seguridad, autoestima, equilibrio, musicalidad, belleza y diversión a la vez que disciplina y orden.</p>
                    <p class="description__p">Los niños tienen una gran sensibilidad para la música. Todos ellos adoran escuchar música, bailar o cantar en cualquier ocasión. Es quizás una capacidad innata. </p>
                    <span className='location'>
                        <button className="accion-clubAmigos">Informate!</button>
                    </span>
                </div>

                <div class="coursemeal-clubAmigos">

                    <div class="coursemeal-clubAmigos__div">

                        <picture class="responsive-clubAmigos-img">
                            <img src="https://res.cloudinary.com/ddtolhmab/image/upload/v1653311501/Danza%20Okara/DanzaOkara-30_qaicsu.jpg" alt="Club Amigos" />
                        </picture>
                        <picture class="responsive-clubAmigos-img">
                            <img src="https://res.cloudinary.com/ddtolhmab/image/upload/v1653926002/Danza%20Okara/DanzaOkara-29_edin5j.jpg" alt="Club Amigos" />
                        </picture>
                       

                    </div>

                </div>
            </div>
        </>
    )
}

export default ClubAmigosClass