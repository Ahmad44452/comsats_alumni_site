import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Home from './components/home';
import About from './components/About';
import Contact from './components/Contact';
// import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import AlumniPanel from './components/AlumniPanel'
import Gallery from './components/Gallery';
import SelectLoginType from './components/SelectLoginType';


const AppRoutes = () => {

  const adminAuth = useSelector(state => state.adminSlice.adminAuth);
  const alumniAuth = useSelector(state => state.alumniSlice.alumniAuth);

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/login' element={(alumniAuth && (<Navigate to='/alumnipanel' replace={true} />)) || (adminAuth && (<Navigate to='/adminpanel' replace={true} />)) || (<SelectLoginType />)} />
        <Route path='/adminpanel' element={(adminAuth && <AdminDashboard />) || (!adminAuth && <Navigate to='/login' replace={true} />)} />
        <Route path='/alumnipanel' element={(alumniAuth && <AlumniPanel />) || (!alumniAuth && <Navigate to='/login' replace={true} />)} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes;