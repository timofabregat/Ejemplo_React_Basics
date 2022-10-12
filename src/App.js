import './Style.css'

import Content from './Components/Content'
import Footer from './Components/Footer'
import ButtonAppBar from "./Components/ButtonAppBar";
import Pricing from "./Components/Pricing"
import About from "./Components/About";
import Contact from "./Components/Contact";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
        <div>
            <ButtonAppBar/>
            <Router>
                  <Routes>
                      <Route path='/' exact element={<> <Content/> <Footer/></>}/>
                      <Route path ='/pricing' element={<Pricing/>}/>
                      <Route path='/about' element={<About/>}/>
                      <Route path='/contact' element={<Contact/>}/>
                  </Routes>
            </Router>
        </div>
  )
}

export default App;
