import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import Header from './components/Header';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Skills />
    <Contact />
    <Footer />
  </React.StrictMode>
);
