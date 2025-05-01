import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
