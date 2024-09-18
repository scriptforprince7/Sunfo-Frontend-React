import React from "react";
import "../../assets/assets/css/responsive.css";
import "../../assets/assets/css/app.css";
import '../../assets/assets/js/app'


function Left_section() {
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-12 col-12 sidebar left-sidebar md-b-50 p-t-10">
        <div className="block block-product-cats">
          <div className="block-title">
            <h2>Categories</h2>
          </div>
          <div className="block-content">
            <div className="product-cats-list">
              <ul>
                <li className="current">
                  <a href="#">
                    Bracelets <span className="count">9</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Earrings <span className="count">4</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Necklaces <span className="count">3</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Charms <span className="count">6</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Rings <span className="count">2</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Wedding & Bridal <span className="count">4</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="block block-product-filter">
          <div className="block-title">
            <h2>Price</h2>
          </div>
          <div className="block-content">
            <div id="slider-range" className="price-filter-wrap">
              <div className="filter-item price-filter">
                <div className="layout-slider">
                  <input id="price-filter" name="price" value="0;100" />
                </div>
                <div className="layout-slider-settings"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="block block-product-filter clearfix">
          <div className="block-title">
            <h2>Color</h2>
          </div>
          <div className="block-content">
            <ul className="filter-items color">
              <li>
                <a href="#">
                  <span className="color-wrap">
                    <span className="color antique"></span>Antique
                  </span>
                  <span className="count">3</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="color-wrap">
                    <span className="color bone"></span>Bone
                  </span>
                  <span className="count">2</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="color-wrap">
                    <span className="color chestnut"></span>
                    Chestnut
                  </span>
                  <span className="count">5</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="color-wrap">
                    <span className="color crimson"></span>Crimson
                  </span>
                  <span className="count">8</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="color-wrap">
                    <span className="color eggshell"></span>
                    Eggshell
                  </span>
                  <span className="count">3</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="color-wrap">
                    <span className="color grullo"></span>Grullo
                  </span>
                  <span className="count">4</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="block block-product-filter clearfix">
          <div className="block-title">
            <h2>Size</h2>
          </div>
          <div className="block-content">
            <ul className="filter-items text">
              <li>
                <a href="#">
                  <span>L</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>M</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>S</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="block block-product-filter clearfix">
          <div className="block-title">
            <h2>Brands</h2>
          </div>
          <div className="block-content">
            <ul className="filter-items image">
              <li>
                <a href="#">
                  <span>
                    <img src="media/brand/2.jpg" alt="Brand" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <img src="media/brand/3.jpg" alt="Brand" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <img src="media/brand/4.jpg" alt="Brand" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <img src="media/brand/5.jpg" alt="Brand" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <img src="media/brand/1.jpg" alt="Brand" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="block block-products">
          <div className="block-title">
            <h2>Feature Product</h2>
          </div>
          <div className="block-content">
            <ul className="products-list">
              <li className="product-item">
                <a href="#" className="product-image">
                  <img src="media/product/1.jpg" />
                </a>
                <div className="product-content">
                  <h2 className="product-title">
                    <a href="#">Medium Flat Hoops</a>
                  </h2>
                  <div className="rating">
                    <div className="star star-5"></div>
                  </div>
                  <span className="price">
                    <del aria-hidden="true">
                      <span>$150.00</span>
                    </del>
                    <ins>
                      <span>$100.00</span>
                    </ins>
                  </span>
                </div>
              </li>
              <li className="product-item">
                <a href="#" className="product-image">
                  <img src="media/product/2.jpg" />
                </a>
                <div className="product-content">
                  <h2 className="product-title">
                    <a href="#">Bold Pearl Hoop Earrings</a>
                  </h2>
                  <div className="rating">
                    <div className="star star-0"></div>
                  </div>
                  <span className="price">$120.00</span>
                </div>
              </li>
              <li className="product-item">
                <a href="#" className="product-image">
                  <img src="media/product/3.jpg" />
                </a>
                <div className="product-content">
                  <h2 className="product-title">
                    <a href="#">Twin Hoops</a>
                  </h2>
                  <div className="rating">
                    <div className="star star-4"></div>
                  </div>
                  <span className="price">
                    <del aria-hidden="true">
                      <span>$200.00</span>
                    </del>
                    <ins>
                      <span>$180.00</span>
                    </ins>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Left_section;
