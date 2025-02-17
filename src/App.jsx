import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import HelpCenter from "./pages/HelpCenter"
import TermsConditions from "./pages/TermsConditions"
import ShippingPolicy from "./pages/ShippingPolicy"
import PrivacyPolicy from "./pages/PrivacyPolicy"

function App() {
  return(
    <div>
     <Navbar/>

     <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/help-center" element={<HelpCenter />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/shipping-policy" element={<ShippingPolicy />} />
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
     </Routes>

     <Footer/>
    </div>
  )
}

export default App
