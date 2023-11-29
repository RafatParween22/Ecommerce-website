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