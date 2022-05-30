import './ClubAmigosClass.css'

const ClubAmigosClass = () => {
    return (
        <>
         <div className='clubAmigosClass'>

            <div class="description">
                <p class="description__p"> La danza es una actividad con numerosos beneficios, siendo para ellos una actividad terapéutica que les proporciona seguridad, autoestima, equilibrio, musicalidad, belleza y diversión a la vez que disciplina y orden.</p>
                <span className='location'>
                <button className="accion-black">Informate!</button>
                </span>
            </div>

            <div class="coursemeal">


                <div class="coursemeal__div ">

                    <picture class="responsive-img">
                        <source media="(min-width: 992px)" srcset="https://res.cloudinary.com/ddtolhmab/image/upload/v1653311501/Danza%20Okara/DanzaOkara-30_qaicsu.jpg" />
                        <img src="https://res.cloudinary.com/ddtolhmab/image/upload/v1653311501/Danza%20Okara/DanzaOkara-30_qaicsu.jpg" alt="Appetizer" />
                    </picture>

                    <div class="coursemeal-info">
                        <a href="#" class="coursemeal-info__link">Danza Okara y Club Amigos</a>
                        
                    </div>
                </div>


                </div>
            </div>
        </>
    )
}

export default ClubAmigosClass