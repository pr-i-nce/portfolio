import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'; 
import Resume from './components/Resume'; 
import HomePage from './pages/HomePage'; 
import ContactsPage from './pages/ContactsPage'; 
import AboutPage from './pages/AboutPage'; 

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/contacts" element={<ContactsPage />} /> 
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/resume" element={<Resume />} /> 
      </Routes>
    </Router>
  );
}

export default App;
