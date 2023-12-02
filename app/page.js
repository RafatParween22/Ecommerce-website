import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import './globals.css';
import Nav from './nav.js';
import Slider from './slider.js';

const Page = () => {
  return (
    <>
      <Nav />
      <Header />
      <Slider/>
   
    </>
  );
}

export default Page;
