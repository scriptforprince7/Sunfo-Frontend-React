import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';   
import "../assets/assets/css/app.css";
import "../assets/assets/css/responsive.css";


function Contact() {
  return (
    <div>
        <Header/>
      <h1>Contact Us</h1>
      <p>This is the Contact page content.</p>
      <Footer/>
    </div>
  )
}

export default Contact