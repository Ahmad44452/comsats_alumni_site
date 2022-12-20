import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/navbar";
import Home from './components/home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Footer from './components/Footer';


const AppRoutes = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes;