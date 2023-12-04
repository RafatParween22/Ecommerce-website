import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import Slider from './slider.js';
import './globals.css';
import Nav from './nav.js';
import Footer from './footer.js'; 

function Main() {
  return (
    <>
      <Nav />
      <Header />
      <Slider />
      <Footer />  
    </>
  );
}

export default Main;
