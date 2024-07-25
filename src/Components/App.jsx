import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import ProjectDetails from '../pages/ProjectDetails';
import Footer from './Footer';

function App() {
  return( 
      <div>
        <Header />
        <Routes>
          <Route path = "/wolf-enterijeri" element = {<Home />} />
          <Route path = "/" element = {<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path  = "/projects" element = {<Projects />} />
          <Route path="/project-details" element={<ProjectDetails />} /> 
        </Routes>
        <Footer />
      </div>
  )
}

export default App;
