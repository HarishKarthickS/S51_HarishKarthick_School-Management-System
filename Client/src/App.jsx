import { BrowserRouter } from 'react-router-dom/dist'
import AllRoutes from './AllRoutes'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <AllRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
