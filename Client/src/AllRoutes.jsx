import React from 'react'
import { Route, Routes } from 'react-router-dom/dist'
import LandingPage from './Components/LandingPage'

function AllRoutes() {
  return (
   < Routes>
        <Route path='/' element={<LandingPage/>}/>
   </Routes>
  )
}

export default AllRoutes