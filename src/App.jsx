import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
<<<<<<< Updated upstream
import AboutUs from "./pages/AboutUs"
import HelpCenter from "./pages/HelpCenter"
import TermsConditions from "./pages/TermsConditions"
import ShippingPolicy from "./pages/ShippingPolicy"
import PrivacyPolicy from "./pages/PrivacyPolicy"
=======
import Contact from './pages/contact'
>>>>>>> Stashed changes

function App() {
  return(
    <div>
     <Navbar/>

     <Routes>

      <Route path="/" element={<Home/>}/>
<<<<<<< Updated upstream
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/help-center" element={<HelpCenter />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/shipping-policy" element={<ShippingPolicy />} />
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
=======
      <Route path="/contact" element={<Contact/>}/>
>>>>>>> Stashed changes
     </Routes>

     <Footer/>
    </div>
  )
}

export default App
