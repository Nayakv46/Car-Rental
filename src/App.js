import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Main from './pages';
import About from './pages/about';
import Models from './pages/models';
import Testimonials from './pages/testimonials';
import Team from './pages/team';
import Contact from './pages/contact';


import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/models' element={<Models />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App