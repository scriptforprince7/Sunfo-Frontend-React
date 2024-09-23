import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../assets/assets/css/app.css";
import "../assets/assets/css/responsive.css";
import Category_banner from "../components/Banner/Category_banner";
import Blog_left_section from "../components/Blog/Blog_left_section";
import Blog_details_main from "../components/Blog/Blog_details_main";

function Blogdetails() {
  return (
    <body className="blog">
      <div id="page" className="hfeed page-wrapper">
        <Header />
        <main>
          <div id="site-main" className="site-main">
            <div id="main-content" className="main-content">
              <div id="primary" className="content-area">
                <Category_banner />
                <div id="content" className="site-content" role="main">
                  <div className="section-padding">
                    <div className="section-container p-l-r">
                     <div className="row">
                        <Blog_left_section/>
                        <Blog_details_main/>
                     </div>
                    </div>
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

export default Blogdetails;
