import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import Services from './pages/Services';

import Properties from './pages/Properties';
import Footer from './components/Footer';
import FAQ from './pages/FAQ';
import ScrollToTop from './components/ScrollTOTop';
import AuthForm from './components/AuthForm';
import AdminDashboard from './pages/AdminDashboard';
import LandlordDashboard from './pages/LandlordDashboard';
import UploadImages from './pages/uploadImages';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/How-it-works' element={<About />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/services' element={<Services/>} />
        <Route path='/faq' element={<FAQ/>} />
        <Route path='/login' element={<AuthForm/>} />
        <Route path='/admin/profile' element={<AdminDashboard/>} />
        <Route path='/landlord/dashboard' element={<LandlordDashboard/>} />
        <Route path='/uploadImage' element={<UploadImages/>} />


      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
