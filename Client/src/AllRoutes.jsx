import { Route, Routes } from 'react-router-dom/dist'
import LandingPage from './Components/LandingPage'
import LogInPage from './Components/LogInPage'
import SignUpPage from './Components/SignUpPage'
import Dashboard from './Components/Dashboard'

function AllRoutes() {
  return (
   < Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<LogInPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
   </Routes>
  )
}

export default AllRoutes