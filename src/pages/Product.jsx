import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Left_section from "../components/category/Left_section";
import Product_section from "../components/category/Rings";
import "../assets/assets/css/app.css";
import "../assets/assets/css/responsive.css";
import Category_banner from "../components/Banner/Category_banner";

function Product() {
  return (
    <body className="shop">
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
                        <Left_section />
                        <Product_section />
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
