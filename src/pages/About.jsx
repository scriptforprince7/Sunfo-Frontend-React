import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../assets/assets/css/app.css";
import "../assets/assets/css/responsive.css";
import About_banner from "../components/About/About_banner";
import Inspired from "../components/Inspired/Inspired";
import Jewellery from "../components/Jewellery/Jewellery";
import Testimonial from "../components/Testmonials/Testimonial";
import ExploreCard from "../components/ExploreSection/ExploreCard";
import Top_category from "../components/About/Top_category";
function About() {
  return (
    <>
      <div id="page" className="hfeed page-wrapper">
        <Header />
        <main>
          <div id="site-main" className="site-main">
            <div id="main-content" className="main-content">
              <div id="primary" className="content-area">
                <div id="content" className="site-content" role="main">
                  <About_banner />
                  <Top_category/>
                  <ExploreCard/>
                  <Inspired/>
                  <Testimonial/>

                 
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default About;
