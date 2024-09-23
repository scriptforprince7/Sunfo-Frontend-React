import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../assets/assets/css/app.css";
import "../assets/assets/css/responsive.css";
import Checkout from "../components/cart/Checkout";
import Category_banner from "../components/Banner/Category_banner";
function Checkoutpage() {
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
                      <div className="shop-checkout">
                      <form name="checkout" method="post" class="checkout" action="" autocomplete="off">
                        <div className="row">
                            <Checkout/>
                        </div>
                      </form>
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

export default Checkoutpage;
