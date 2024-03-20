import "./App.css"
import Profile from "./pages/Profile.jsx"
import Contact from "./pages/Contact.jsx"
import About from "./pages/About.jsx"
import Faq from "./pages/Faq.jsx"
import Notfound from "./pages/Notfound.jsx"
import Login from "./pages/Login.jsx"
import Createticket from "./pages/Createticket.jsx"
import Home from "./pages/Home.jsx"
import Test from "./pages/Test.jsx"

import {BrowserRouter,Routes,Route} from "react-router-dom"

const App = () => {

  return (
    
        <BrowserRouter>
        
            <Routes>

                <Route path="/profile" element={<Profile/>}/> 
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/faq" element={<Faq/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/createticket" element={<Createticket/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/test" element={<Test/>}/>

                <Route path="*" element={<Notfound/>}/>

            </Routes>
        
        </BrowserRouter>

  )

}

export default App