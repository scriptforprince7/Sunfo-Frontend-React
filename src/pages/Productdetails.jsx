import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../assets/assets/css/app.css";
import "../assets/assets/css/responsive.css";
import Productbanner from "../components/Banner/Productbanner";
import RelatedProducts from "../components/productdetails/RelatedProducts";
import Review from "../components/productdetails/Review";
import Product_left from "../components/productdetails/Product_left";
import Product_right from "../components/productdetails/Product_right";

function Productdetails() {
  return (
    <>
      <body className="shop">
        <div id="page" className="hfeed page-wrapper">
          <Header />
          <main>
            <div id="site-main" className="site-main">
              <div id="main-content" className="main-content">
                <div id="primary" className="content-area">
                  {/* <Productbanner /> */}
                  <h1 style={{textAlign:'center',color:'red',margin:'20px'}}>Product details</h1>
                  <div id="content" className="site-content" role="main">
                    <div
                      class="shop-details zoom"
                      data-product_layout_thumb="scroll"
                      data-zoom_scroll="true"
                      data-zoom_contain_lens="true"
                      data-zoomtype="inner"
                      data-lenssize="200"
                      data-lensshape="square"
                      data-lensborder=""
                      data-bordersize="2"
                      data-bordercolour="#f9b61e"
                      data-popup="false"
                    >
                      <div class="product-top-info">
                        <div className="section-padding">
                          <div className="section-container p-l-r">
                            <div className="row">
                              <Product_left/>
                              <Product_right/>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="product-tabs">
                        <Review/>

                      </div>
                      <RelatedProducts/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </>
  );
}

export default Productdetails;
