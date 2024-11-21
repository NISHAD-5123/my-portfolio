import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import Hero from './Hero.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route exact path="/" Component={Hero}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
  
  
)
