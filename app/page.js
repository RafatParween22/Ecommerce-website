"use client"
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import Slider from './slider.js';
import './globals.css';
import AllCategories from './all_categories.js'; 

function Main() {
  


  return (
    <>

      <Header />
      <Slider />
      <AllCategories/> 
      
    </>
  );
}

export default Main;
