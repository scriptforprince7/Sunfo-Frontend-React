import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import ExploreCard from "../components/ExploreSection/ExploreCard";
import Jewellery from "../components/Jewellery/Jewellery";
import HotList from "../components/HotList/Hot_list";
import Inspired from "../components/Inspired/Inspired";
import Testimonial from "../components/Testmonials/Testimonial";
import Others from "../components/Others/Others";
import "../assets/assets/css/app.css";
import "../assets/assets/css/responsive.css";
// import '../assets/libs/font-awesome/css/font-awesome.css'

const Home = () => {
  return (
    <>
      <div id="page" className="hfeed page-wrapper">
        <Header />
        <main>
          <div id="site-main" className="site-main">
            <div id="main-content" className="main-content">
              <div id="primary" className="content-area">
                <div id="content" className="site-content" role="main">
                  <Banner />
                  <ExploreCard />
                  <Jewellery />
                  <HotList />
                 
                  <Inspired />
                  <Testimonial/>
                  <Others />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
      
    </>
  );
};

export default Home;
