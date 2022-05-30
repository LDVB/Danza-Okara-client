import './FusionLatinoClass.css'

const FusionLatinoClass = () => {
    return (
        <>
         <div className='fusionClass'>

            <div class="description">
                <h1 class="description__title">Clases Fusión Latino</h1>
                <p class="description__p"> El propósito de la Danza Fusión Oriental es la de unir varias danzas en una sola entidad. La danza combina elementos de poses tradicionales de danza oriental junto con otras disciplinas fusionando con ritmos latinos.</p>
                
            </div>

            <div class="coursemeal-fusion">


                <div class="coursemeal__div ">

                    <picture class="responsive-img">
                        <source media="(min-width: 992px)" srcset="https://res.cloudinary.com/ddtolhmab/image/upload/v1651738943/Danza%20Okara/Fanny_fmppmv.jpg" />
                        <img src="https://res.cloudinary.com/ddtolhmab/image/upload/v1651738943/Danza%20Okara/Fanny_fmppmv.jpg" alt="Appetizer" />
                    </picture>

                    <div class="coursemeal-info">
                        <a href="#" class="coursemeal-info__link">Fusión Latinos  <br/><br/>Jueves de 18h a 19h</a>
                        
                    </div>
                </div>


                </div>
            </div>

            
        </>
    )
}

export default FusionLatinoClass