import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"

function App() {
  return(
    <div>
     <Navbar/>

     <Routes>

      <Route path="/" element={<Home/>}/>
     </Routes>

     <Footer/>
    </div>
  )
}

export default App
