import {Routes, Route} from 'react-router-dom'
import Actividades from '../pages/ActividadesPage'
import DanzaOkara from '../pages/DanzaOkaraPage'
import Email from '../pages/Email'
import Landing from '../pages/LandingPage'
import Proyecto from '../pages/ProyectoPages'


const AppRoutes = () => {

    return (

        <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/danzaOkara' element={<DanzaOkara/>} />
            <Route path='/Actividades' element={<Actividades/>} />
            <Route path='/Proyecto' element={<Proyecto/>} />
            <Route path='/Contactanos' element={<Email/>} />
            <Route path='*' element={<h1>Error 404</h1>} />         
        </Routes>
    )

}

export default AppRoutes