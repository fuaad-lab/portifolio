import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Skills from './components/Skills';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Skills />} />
      </Routes>
    </>
  )
}

export default App;