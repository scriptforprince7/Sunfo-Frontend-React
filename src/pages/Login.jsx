import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../assets/assets/css/app.css";
import "../assets/assets/css/responsive.css";
import Category_banner from "../components/Banner/Category_banner";
import Signin from "../components/MyAccount/Signin";
import Register from "../components/MyAccount/Register";

function Product() {
  return (
    <body className="page">
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
                      <div className="page-login-register">
                        <div className="row">
                          <Signin />
                          <Register />
                        </div>
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

export default Product;
