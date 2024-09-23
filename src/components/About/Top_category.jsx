import React from "react";

function Top_category() {
  return (
    <>
      <section className="section section-padding ">
        <div className="section-container">
          <div className="block block-product-cats slider round-border">
            <div className="block-widget-wrap">
              <div className="block-title" style={{margin:'20px'}}>
                <h2>Top Categories</h2>
              </div>
              <div className="block-content">
                <div className="product-cats-list slick-wrap">
                  <div
                    className="slick-sliders content-category"
                    data-dots="0"
                    data-slidestoscroll="true"
                    data-nav="1"
                    data-columns4="2"
                    data-columns3="3"
                    data-columns2="3"
                    data-columns1="5"
                    data-columns1440="5"
                    data-columns="5"
                  >
                    <div className="item item-product-cat slick-slide">
                      <div className="item-product-cat-content">
                        <a href="shop-grid-left.html">
                          <div className="item-image animation-horizontal">
                            <img
                              width="258"
                              height="258"
                              src="media/product/cat-1.jpg"
                              alt="Bracelets"
                            />
                          </div>
                        </a>
                        <div className="product-cat-content-info">
                          <h2 className="item-title">
                            <a href="shop-grid-left.html">Bracelets</a>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="item item-product-cat slick-slide">
                      <div className="item-product-cat-content">
                        <a href="shop-grid-left.html">
                          <div className="item-image animation-horizontal">
                            <img
                              width="258"
                              height="258"
                              src="media/product/cat-2.jpg"
                              alt="Charms"
                            />
                          </div>
                        </a>
                        <div className="product-cat-content-info">
                          <h2 className="item-title">
                            <a href="shop-grid-left.html">Charms</a>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="item item-product-cat slick-slide">
                      <div className="item-product-cat-content">
                        <a href="shop-grid-left.html">
                          <div className="item-image animation-horizontal">
                            <img
                              width="258"
                              height="258"
                              src="media/product/cat-3.jpg"
                              alt="Earrings"
                            />
                          </div>
                        </a>
                        <div className="product-cat-content-info">
                          <h2 className="item-title">
                            <a href="shop-grid-left.html">Earrings</a>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="item item-product-cat slick-slide">
                      <div className="item-product-cat-content">
                        <a href="shop-grid-left.html">
                          <div className="item-image animation-horizontal">
                            <img
                              width="258"
                              height="258"
                              src="media/product/cat-4.jpg"
                              alt="Necklaces"
                            />
                          </div>
                        </a>
                        <div className="product-cat-content-info">
                          <h2 className="item-title">
                            <a href="shop-grid-left.html">Necklaces</a>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="item item-product-cat slick-slide">
                      <div className="item-product-cat-content">
                        <a href="shop-grid-left.html">
                          <div className="item-image animation-horizontal">
                            <img
                              width="258"
                              height="258"
                              src="media/product/cat-5.jpg"
                              alt="Rings"
                            />
                          </div>
                        </a>
                        <div className="product-cat-content-info">
                          <h2 className="item-title">
                            <a href="shop-grid-left.html">Rings</a>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="item item-product-cat slick-slide">
                      <div className="item-product-cat-content">
                        <a href="shop-grid-left.html">
                          <div className="item-image animation-horizontal">
                            <img
                              width="258"
                              height="258"
                              src="media/product/cat-1.jpg"
                              alt="Bracelets"
                            />
                          </div>
                        </a>
                        <div className="product-cat-content-info">
                          <h2 className="item-title">
                            <a href="shop-grid-left.html">Bracelets</a>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Top_category;
