import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../assets/assets/css/app.css";
import "../assets/assets/css/responsive.css";
import Contact_banner from "../components/contact/Contact_banner";
import Needhelp from "../components/contact/Needhelp";
import Map from "../components/contact/Map";

function Contact() {
  return (
    <body className="page">
      <div id="page" className="hfeed page-wrapper">
        <Header />
        <main>
          <div id="site-main" className="site-main">
            <div id="main-content" className="main-content">
              <div id="primary" className="content-area">
                <Contact_banner />
                <div id="content" className="site-content" role="main">
                  <div className="page-contact">
                   <Map/>
                   <Needhelp/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </body>
  );
}

export default Contact;
