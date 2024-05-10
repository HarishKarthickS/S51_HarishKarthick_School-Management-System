import { BrowserRouter } from 'react-router-dom/dist'
import AllRoutes from './AllRoutes'
import Chatbot from './Components/Chatbot'
import './App.css'

function App() {

  return (
    <>
    <Chatbot/>
      {/* <BrowserRouter>
        <AllRoutes/>
      </BrowserRouter> */}
    </>
  )
}

export default App
