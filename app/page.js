<<<<<<< HEAD
import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Header from './Header'
import './globals.css'


const page = () => {
  return (
    <>
      <Header/>

     
    </>
  )
}

export default page;
=======
<<<<<<< HEAD
import Link from "next/link"
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react"
import Footer from "./footer.js"

export default function Home() {
  return (
    <>
        <h2> this is main page</h2>
        <Link href="/login"> go to login page</Link>
        <br></br>
        <br></br>
        <Link href="/about"> go to about page</Link>
        <Footer/>

    </>
  )
}
=======
import React from 'react';
import Nav from './nav.js';
import 'bootstrap/dist/css/bootstrap.min.css'; 
function Main() {
  return (
    <>
      <Nav/>
    </>
  )
}

export default Main;
>>>>>>> bf4706a3d6934176b90aacc5a30028b8a6e89843
>>>>>>> e294fe9758a01409938f3d05315eb98e53955348
