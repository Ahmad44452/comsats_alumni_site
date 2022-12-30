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
  const alumniAuth = useSelector(state => state.alumniSlice.alumniAuth);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={(alumniAuth && (<Navigate to='/alumnipanel' replace={true} />)) || (adminAuth && (<Navigate to='/adminpanel' replace={true} />)) || (<Login />)} />
        <Route path='/adminpanel' element={(adminAuth && <AdminPanel />) || (!adminAuth && <Navigate to='/login' replace={true} />)} />
        <Route path='/alumnipanel' element={(alumniAuth && <AlumniPanel />) || (!alumniAuth && <Navigate to='/login' replace={true} />)} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes;