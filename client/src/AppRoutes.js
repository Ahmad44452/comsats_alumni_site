import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Navbar from "./components/navbar";
import Home from './components/home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import AlumniPanel from './components/AlumniPanel'
import Footer from './components/Footer';


const AppRoutes = () => {

  const adminAuth = useSelector(state => state.adminSlice.adminAuth);
  console.log(adminAuth)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={(adminAuth && (<Navigate to='/adminpanel' replace={true} />)) || (<Login />)} />
        <Route path='/adminpanel' element={(adminAuth && <AdminPanel />) || (!adminAuth && <Navigate to='/login' replace={true} />)} />
        <Route path='/alumni' element={<AlumniPanel />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes;