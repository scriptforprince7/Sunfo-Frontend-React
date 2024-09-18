import React from "react";
import "../../assets/assets/css/responsive.css";
import "../../assets/assets/css/app.css";
import "../../assets/assets/js/app";
import { Link } from "react-router-dom";

function Rings() {
  return (
    <>
      <div className="col-xl-9 col-lg-9 col-md-12 col-12">
        <div className="products-topbar clearfix">
          <div className="products-topbar-left">
            <div className="products-count">Showing all 21 results</div>
          </div>
          <div className="products-topbar-right">
            <div className="products-sort dropdown">
              <span
                className="sort-toggle dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="true"
              >
                Default sorting
              </span>
              <ul
                className="sort-list dropdown-menu"
                x-placement="bottom-start"
              >
                <li className="active">
                  <a href="#">Default sorting</a>
                </li>
                <li>
                  <a href="#">Sort by popularity</a>
                </li>
                <li>
                  <a href="#">Sort by average rating</a>
                </li>
                <li>
                  <a href="#">Sort by latest</a>
                </li>
                <li>
                  <a href="#">Sort by price: low to high</a>
                </li>
                <li>
                  <a href="#">Sort by price: high to low</a>
                </li>
              </ul>
            </div>
            <ul className="layout-toggle nav nav-tabs">
              <li className="nav-item">
                <a
                  className="layout-grid nav-link active"
                  data-toggle="tab"
                  href="#layout-grid"
                  role="tab"
                >
                  <span className="icon-column">
                    <span className="layer first">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                    <span className="layer middle">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                    <span className="layer last">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="layout-list nav-link"
                  data-toggle="tab"
                  href="#layout-list"
                  role="tab"
                >
                  <span className="icon-column">
                    <span className="layer first">
                      <span></span>
                      <span></span>
                    </span>
                    <span className="layer middle">
                      <span></span>
                      <span></span>
                    </span>
                    <span className="layer last">
                      <span></span>
                      <span></span>
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="layout-grid"
            role="tabpanel"
          >
            <div className="products-list grid">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                  <div className="products-entry clearfix product-wapper">
                    <div className="products-thumb">
                      <div className="product-lable">
                        <div className="hot">Hot</div>
                      </div>
                      <div className="product-thumb-hover">
                        <Link to="/product-details">
                          <img
                            width="600"
                            height="600"
                            src="media/product/1.jpg"
                            className="post-image"
                            alt=""
                          />
                          <img
                            width="600"
                            height="600"
                            src="media/product/1-2.jpg"
                            className="hover-image back"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="product-button">
                        <div
                          className="btn-add-to-cart"
                          data-title="Add to cart"
                        >
                          <Link
                            to="/product-details"
                            className="product-btn button"
                          >
                            Add to cart
                          </Link>
                        </div>
                        <div className="btn-wishlist" data-title="Wishlist">
                          <button className="product-btn">
                            Add to wishlist
                          </button>
                        </div>
                        <div className="btn-compare" data-title="Compare">
                          <button className="product-btn">Compare</button>
                        </div>
                        <span
                          className="product-quickview"
                          data-title="Quick View"
                        >
                          <Link
                            to="/product-details"
                            className="quickview quickview-button"
                          >
                            Quick View <i className="icon-search"></i>
                          </Link>
                        </span>
                      </div>
                    </div>
                    <div className="products-content">
                      <div className="contents text-center">
                        <div className="rating">
                          <div className="star star-0"></div>
                          <span className="count">(0 review)</span>
                        </div>
                        <h3 className="product-title">
                          <Link to="/product-details">Medium Flat Hoops</Link>
                        </h3>
                        <span className="price">$150.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                  <div className="products-entry clearfix product-wapper">
                    <div className="products-thumb">
                      <div className="product-lable">
                        <div className="onsale">-33%</div>
                      </div>
                      <div className="product-thumb-hover border">
                        <Link to="/product-details">
                          <img
                            width="600"
                            height="600"
                            src="media/product/5.jpg"
                            className="post-image"
                            alt=""
                          />
                          <img
                            width="600"
                            height="600"
                            src="media/product/5-2.jpg"
                            className="hover-image back"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="product-button">
                        <div
                          className="btn-add-to-cart"
                          data-title="Add to cart"
                        >
                          <Link
                            to="/product-details"
                            className="product-btn button"
                          >
                            Add to cart
                          </Link>
                        </div>
                        <div className="btn-wishlist" data-title="Wishlist">
                          <button className="product-btn">
                            Add to wishlist
                          </button>
                        </div>
                        <div className="btn-compare" data-title="Compare">
                          <button className="product-btn">Compare</button>
                        </div>
                        <span
                          className="product-quickview"
                          data-title="Quick View"
                        >
                          <Link
                            to="/product-details"
                            className="quickview quickview-button"
                          >
                            Quick View <i className="icon-search"></i>
                          </Link>
                        </span>
                      </div>
                    </div>
                    <div className="products-content">
                      <div className="contents text-center">
                        <div className="rating">
                          <div className="star star-5"></div>
                          <span className="count">(1 review)</span>
                        </div>
                        <h3 className="product-title">
                          <Link to="/product-details">
                            Yilver And Turquoise Earrings
                          </Link>
                        </h3>
                        <span className="price">
                          <del aria-hidden="true">
                            <span>$150.00</span>
                          </del>
                          <ins>
                            <span>$100.00</span>
                          </ins>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                  <div className="products-entry clearfix product-wapper">
                    <div className="products-thumb">
                      <div className="product-thumb-hover">
                        <Link to="/product-details">
                          <img
                            width="600"
                            height="600"
                            src="media/product/2.jpg"
                            className="post-image"
                            alt=""
                          />
                          <img
                            width="600"
                            height="600"
                            src="media/product/2-2.jpg"
                            className="hover-image back"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="product-button">
                        <div
                          className="btn-add-to-cart"
                          data-title="Add to cart"
                        >
                          <Link
                            to="/product-details"
                            className="product-btn button"
                          >
                            Add to cart
                          </Link>
                        </div>
                        <div className="btn-wishlist" data-title="Wishlist">
                          <button className="product-btn">
                            Add to wishlist
                          </button>
                        </div>
                        <div className="btn-compare" data-title="Compare">
                          <button className="product-btn">Compare</button>
                        </div>
                        <span
                          className="product-quickview"
                          data-title="Quick View"
                        >
                          <Link
                            to="/product-details"
                            className="quickview quickview-button"
                          >
                            Quick View <i className="icon-search"></i>
                          </Link>
                        </span>
                      </div>
                    </div>
                    <div className="products-content">
                      <div className="contents text-center">
                        <div className="rating">
                          <div className="star star-0"></div>
                          <span className="count">(0 review)</span>
                        </div>
                        <h3 className="product-title">
                          <Link to="/product-details">
                            Bold Pearl Hoop Earrings
                          </Link>
                        </h3>
                        <span className="price">$150.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                  <div className="products-entry clearfix product-wapper">
                    <div className="products-thumb">
                      <div className="product-lable">
                        <div className="onsale">-33%</div>
                        <div className="hot">Hot</div>
                      </div>
                      <div className="product-thumb-hover border">
                        <Link to="/product-details">
                          <img
                            width="600"
                            height="600"
                            src="media/product/6.jpg"
                            className="post-image"
                            alt=""
                          />
                          <img
                            width="600"
                            height="600"
                            src="media/product/6-2.jpg"
                            className="hover-image back"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="product-button">
                        <div
                          className="btn-add-to-cart"
                          data-title="Add to cart"
                        >
                          <Link
                            to="/product-details"
                            className="product-btn button"
                          >
                            Add to cart
                          </Link>
                        </div>
                        <div className="btn-wishlist" data-title="Wishlist">
                          <button className="product-btn">
                            Add to wishlist
                          </button>
                        </div>
                        <div className="btn-compare" data-title="Compare">
                          <button className="product-btn">Compare</button>
                        </div>
                        <span
                          className="product-quickview"
                          data-title="Quick View"
                        >
                          <Link
                            to="/product-details"
                            className="quickview quickview-button"
                          >
                            Quick View <i className="icon-search"></i>
                          </Link>
                        </span>
                      </div>
                    </div>
                    <div className="products-content">
                      <div className="contents text-center">
                        <div className="rating">
                          <div className="star star-4"></div>
                          <span className="count">(2 reviews)</span>
                        </div>
                        <h3 className="product-title">
                          <Link to="/product-details">Bora Armchair</Link>
                        </h3>
                        <span className="price">
                          <del aria-hidden="true">
                            <span>$150.00</span>
                          </del>
                          <ins>
                            <span>$100.00</span>
                          </ins>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                  <div className="products-entry clearfix product-wapper">
                    <div className="products-thumb">
                      <div className="product-lable">
                        <div className="onsale">-23%</div>
                        <div className="hot">Hot</div>
                      </div>
                      <div className="product-thumb-hover">
                        <a href="#">
                          <img
                            width="600"
                            height="600"
                            src="media/product/3.jpg"
                            className="post-image"
                            alt=""
                          />
                          <img
                            width="600"
                            height="600"
                            src="media/product/3-2.jpg"
                            className="hover-image back"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="product-button">
                        <div
                          className="btn-add-to-cart"
                          data-title="Add to cart"
                        >
                          <a
                            rel="nofollow"
                            href="#"
                            className="product-btn button"
                          >
                            Add to cart
                          </a>
                        </div>
                        <div className="btn-wishlist" data-title="Wishlist">
                          <button className="product-btn">
                            Add to wishlist
                          </button>
                        </div>
                        <div className="btn-compare" data-title="Compare">
                          <button className="product-btn">Compare</button>
                        </div>
                        <span
                          className="product-quickview"
                          data-title="Quick View"
                        >
                          <a href="#" className="quickview quickview-button">
                            Quick View <i className="icon-search"></i>
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="products-content">
                      <div className="contents text-center">
                        <div className="rating">
                          <div className="star star-5"></div>
                          <span className="count">(5 review)</span>
                        </div>
                        <h3 className="product-title">
                          <a href="#">Twin Hoops</a>
                        </h3>
                        <span className="price">
                          <del aria-hidden="true">
                            <span>$100.00</span>
                          </del>
                          <ins>
                            <span>$90.00</span>
                          </ins>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                  <div className="products-entry clearfix product-wapper">
                    <div className="products-thumb">
                      <div className="product-lable">
                        <div className="onsale">-37%</div>
                        <div className="hot">Hot</div>
                      </div>
                      <div className="product-thumb-hover border">
                        <a href="#">
                          <img
                            width="600"
                            height="600"
                            src="media/product/7.jpg"
                            className="post-image"
                            alt=""
                          />
                          <img
                            width="600"
                            height="600"
                            src="media/product/7-2.jpg"
                            className="hover-image back"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="product-button">
                        <div
                          className="btn-add-to-cart"
                          data-title="Add to cart"
                        >
                          <a
                            rel="nofollow"
                            href="#"
                            className="product-btn button"
                          >
                            Add to cart
                          </a>
                        </div>
                        <div className="btn-wishlist" data-title="Wishlist">
                          <button className="product-btn">
                            Add to wishlist
                          </button>
                        </div>
                        <div className="btn-compare" data-title="Compare">
                          <button className="product-btn">Compare</button>
                        </div>
                        <span
                          className="product-quickview"
                          data-title="Quick View"
                        >
                          <a href="#" className="quickview quickview-button">
                            Quick View <i className="icon-search"></i>
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="products-content">
                      <div className="contents text-center">
                        <div className="rating">
                          <div className="star star-0"></div>
                          <span className="count">(0 review)</span>
                        </div>
                        <h3 className="product-title">
                          <a href="#">Diamond Bracelet</a>
                        </h3>
                        <span className="price">
                          <del aria-hidden="true">
                            <span>$79.00</span>
                          </del>
                          <ins>
                            <span>$50.00</span>
                          </ins>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                  <div className="products-entry clearfix product-wapper">
                    <div className="products-thumb">
                      <div className="product-thumb-hover">
                        <a href="#">
                          <img
                            width="600"
                            height="600"
                            src="media/product/4.jpg"
                            className="post-image"
                            alt=""
                          />
                          <img
                            width="600"
                            height="600"
                            src="media/product/4-2.jpg"
                            className="hover-image back"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="product-button">
                        <div
                          className="btn-add-to-cart"
                          data-title="Add to cart"
                        >
                          <a
                            rel="nofollow"
                            href="#"
                            className="product-btn button"
                          >
                            Add to cart
                          </a>
                        </div>
                        <div className="btn-wishlist" data-title="Wishlist">
                          <button className="product-btn">
                            Add to wishlist
                          </button>
                        </div>
                        <div className="btn-compare" data-title="Compare">
                          <button className="product-btn">Compare</button>
                        </div>
                        <span
                          className="product-quickview"
                          data-title="Quick View"
                        >
                          <a href="#" className="quickview quickview-button">
                            Quick View <i className="icon-search"></i>
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="products-content">
                      <div className="contents text-center">
                        <div className="rating">
                          <div className="star star-0"></div>
                          <span className="count">(0 review)</span>
                        </div>
                        <h3 className="product-title">
                          <a href="#">Yilver And Turquoise Earrings</a>
                        </h3>
                        <span className="price">$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                  <div className="products-entry clearfix product-wapper">
                    <div className="products-thumb">
                      <div className="product-lable">
                        <div className="onsale">-10%</div>
                        <div className="hot">Hot</div>
                      </div>
                      <div className="product-thumb-hover border">
                        <a href="#">
                          <img
                            width="600"
                            height="600"
                            src="media/product/8.jpg"
                            className="post-image"
                            alt=""
                          />
                          <img
                            width="600"
                            height="600"
                            src="media/product/8-2.jpg"
                            className="hover-image back"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="product-button">
                        <div
                          className="btn-add-to-cart"
                          data-title="Add to cart"
                        >
                          <a
                            rel="nofollow"
                            href="#"
                            className="product-btn button"
                          >
                            Add to cart
                          </a>
                        </div>
                        <div className="btn-wishlist" data-title="Wishlist">
                          <button className="product-btn">
                            Add to wishlist
                          </button>
                        </div>
                        <div className="btn-compare" data-title="Compare">
                          <button className="product-btn">Compare</button>
                        </div>
                        <span
                          className="product-quickview"
                          data-title="Quick View"
                        >
                          <a href="#" className="quickview quickview-button">
                            Quick View <i className="icon-search"></i>
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="products-content">
                      <div className="contents text-center">
                        <div className="rating">
                          <div className="star star-5"></div>
                          <span className="count">(3 review)</span>
                        </div>
                        <h3 className="product-title">
                          <a href="#">X Hoop Earrings</a>
                        </h3>
                        <span className="price">
                          <del aria-hidden="true">
                            <span>$200.00</span>
                          </del>
                          <ins>
                            <span>$180.00</span>
                          </ins>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                  <div className="products-entry clearfix product-wapper">
                    <div className="products-thumb">
                      <div className="product-lable">
                        <div className="hot">Hot</div>
                      </div>
                      <div className="product-thumb-hover border">
                        <a href="#">
                          <img
                            width="600"
                            height="600"
                            src="media/product/9.jpg"
                            className="post-image"
                            alt=""
                          />
                          <img
                            width="600"
                            height="600"
                            src="media/product/9-2.jpg"
                            className="hover-image back"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="product-button">
                        <div
                          className="btn-add-to-cart"
                          data-title="Add to cart"
                        >
                          <a
                            rel="nofollow"
                            href="#"
                            className="product-btn button"
                          >
                            Add to cart
                          </a>
                        </div>
                        <div className="btn-wishlist" data-title="Wishlist">
                          <button className="product-btn">
                            Add to wishlist
                          </button>
                        </div>
                        <div className="btn-compare" data-title="Compare">
                          <button className="product-btn">Compare</button>
                        </div>
                        <span
                          className="product-quickview"
                          data-title="Quick View"
                        >
                          <a href="#" className="quickview quickview-button">
                            Quick View <i className="icon-search"></i>
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="products-content">
                      <div className="contents text-center">
                        <div className="rating">
                          <div className="star star-4"></div>
                          <span className="count">(1 review)</span>
                        </div>
                        <h3 className="product-title">
                          <a href="#">Yintage Medallion Necklace</a>
                        </h3>
                        <span className="price">$140.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="layout-list" role="tabpanel">
            <div className="products-list list">
              <div className="products-entry clearfix product-wapper">
                <div className="row">
                  <div className="col-md-4">
                    <div className="products-thumb">
                      <div className="product-lable">
                        <div className="hot">Hot</div>
                      </div>
                      <div className="product-thumb-hover">
                        <a href="#">
                          <img
                            width="600"
                            height="600"
                            src="media/product/1.jpg"
                            className="post-image"
                            alt=""
                          />
                          <img
                            width="600"
                            height="600"
                            src="media/product/1-2.jpg"
                            className="hover-image back"
                            alt=""
                          />
                        </a>
                      </div>
                      <span
                        className="product-quickview"
                        data-title="Quick View"
                      >
                        <a href="#" className="quickview quickview-button">
                          Quick View <i className="icon-search"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="products-content">
                      <h3 className="product-title">
                        <a href="#">Medium Flat Hoops</a>
                      </h3>
                      <span className="price">$150.00</span>
                      <div className="rating">
                        <div className="star star-5"></div>
                        <div className="review-count">
                          (1<span> review</span>)
                        </div>
                      </div>
                      <div className="product-button">
                        <div
                          className="btn-add-to-cart"
                          data-title="Add to cart"
                        >
                          <a
                            rel="nofollow"
                            href="#"
                            className="product-btn button"
                          >
                            Add to cart
                          </a>
                        </div>
                        <div className="btn-wishlist" data-title="Wishlist">
                          <button className="product-btn">
                            Add to wishlist
                          </button>
                        </div>
                        <div className="btn-compare" data-title="Compare">
                          <button className="product-btn">Compare</button>
                        </div>
                      </div>
                      <div className="product-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis…
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-entry clearfix product-wapper">
                <div className="row">
                  <div className="col-md-4">
                    <div className="products-thumb">
                      <div className="product-lable">
                        <div className="hot">Hot</div>
                      </div>
                      <div className="product-thumb-hover border">
                        <a href="#">
                          <img
                            width="600"
                            height="600"
                            src="media/product/5.jpg"
                            className="post-image"
                            alt=""
                          />
                          <img
                            width="600"
                            height="600"
                            src="media/product/5-2.jpg"
                            className="hover-image back"
                            alt=""
                          />
                        </a>
                      </div>
                      <span
                        className="product-quickview"
                        data-title="Quick View"
                      >
                        <a href="#" className="quickview quickview-button">
                          Quick View <i className="icon-search"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="products-content">
                      <h3 className="product-title">
                        <a href="#">Yilver And Turquoise Earrings</a>
                      </h3>
                      <span className="price">
                        <del aria-hidden="true">
                          <span>$150.00</span>
                        </del>
                        <ins>
                          <span>$100.00</span>
                        </ins>
                      </span>
                      <div className="rating">
                        <div className="star star-0"></div>
                        <div className="review-count">
                          (0<span> review</span>)
                        </div>
                      </div>
                      <div className="product-button">
                        <div
                          className="btn-add-to-cart"
                          data-title="Add to cart"
                        >
                          <a
                            rel="nofollow"
                            href="#"
                            className="product-btn button"
                          >
                            Add to cart
                          </a>
                        </div>
                        <div className="btn-wishlist" data-title="Wishlist">
                          <button className="product-btn">
                            Add to wishlist
                          </button>
                        </div>
                        <div className="btn-compare" data-title="Compare">
                          <button className="product-btn">Compare</button>
                        </div>
                      </div>
                      <div className="product-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis…
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-entry clearfix product-wapper">
                <div className="row">
                  <div className="col-md-4">
                    <div className="products-thumb">
                      <div className="product-lable">
                        <div className="hot">Hot</div>
                      </div>
                      <div className="product-thumb-hover">
                        <a href="#">
                          <img
                            width="600"
                            height="600"
                            src="media/product/2.jpg"
                            className="post-image"
                            alt=""
                          />
                          <img
                            width="600"
                            height="600"
                            src="media/product/2-2.jpg"
                            className="hover-image back"
                            alt=""
                          />
                        </a>
                      </div>
                      <span
                        className="product-quickview"
                        data-title="Quick View"
                      >
                        <a href="#" className="quickview quickview-button">
                          Quick View <i className="icon-search"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="products-content">
                      <h3 className="product-title">
                        <a href="#">Bold Pearl Hoop Earrings</a>
                      </h3>
                      <span className="price">$150.00</span>
                      <div className="rating">
                        <div className="star star-4"></div>
                        <div className="review-count">
                          (1<span> review</span>)
                        </div>
                      </div>
                      <div className="product-button">
                        <div
                          className="btn-add-to-cart"
                          data-title="Add to cart"
                        >
                          <a
                            rel="nofollow"
                            href="#"
                            className="product-btn button"
                          >
                            Add to cart
                          </a>
                        </div>
                        <div className="btn-wishlist" data-title="Wishlist">
                          <button className="product-btn">
                            Add to wishlist
                          </button>
                        </div>
                        <div className="btn-compare" data-title="Compare">
                          <button className="product-btn">Compare</button>
                        </div>
                      </div>
                      <div className="product-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis…
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-entry clearfix product-wapper">
                <div className="row">
                  <div className="col-md-4">
                    <div className="products-thumb">
                      <div className="product-lable">
                        <div className="hot">Hot</div>
                      </div>
                      <div className="product-thumb-hover border">
                        <a href="#">
                          <img
                            width="600"
                            height="600"
                            src="media/product/6.jpg"
                            className="post-image"
                            alt=""
                          />
                          <img
                            width="600"
                            height="600"
                            src="media/product/6-2.jpg"
                            className="hover-image back"
                            alt=""
                          />
                        </a>
                      </div>
                      <span
                        className="product-quickview"
                        data-title="Quick View"
                      >
                        <a href="#" className="quickview quickview-button">
                          Quick View <i className="icon-search"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="products-content">
                      <h3 className="product-title">
                        <a href="#">Bora Armchair</a>
                      </h3>
                      <span className="price">
                        <del aria-hidden="true">
                          <span>$120.00</span>
                        </del>
                        <ins>
                          <span>$100.00</span>
                        </ins>
                      </span>
                      <div className="rating">
                        <div className="star star-0"></div>
                        <div className="review-count">
                          (0<span> review</span>)
                        </div>
                      </div>
                      <div className="product-button">
                        <div
                          className="btn-add-to-cart"
                          data-title="Add to cart"
                        >
                          <a
                            rel="nofollow"
                            href="#"
                            className="product-btn button"
                          >
                            Add to cart
                          </a>
                        </div>
                        <div className="btn-wishlist" data-title="Wishlist">
                          <button className="product-btn">
                            Add to wishlist
                          </button>
                        </div>
                        <div className="btn-compare" data-title="Compare">
                          <button className="product-btn">Compare</button>
                        </div>
                      </div>
                      <div className="product-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis…
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-entry clearfix product-wapper">
                <div className="row">
                  <div className="col-md-4">
                    <div className="products-thumb">
                      <div className="product-lable">
                        <div className="hot">Hot</div>
                      </div>
                      <div className="product-thumb-hover">
                        <a href="#">
                          <img
                            width="600"
                            height="600"
                            src="media/product/3.jpg"
                            className="post-image"
                            alt=""
                          />
                          <img
                            width="600"
                            height="600"
                            src="media/product/3-2.jpg"
                            className="hover-image back"
                            alt=""
                          />
                        </a>
                      </div>
                      <span
                        className="product-quickview"
                        data-title="Quick View"
                      >
                        <a href="#" className="quickview quickview-button">
                          Quick View <i className="icon-search"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="products-content">
                      <h3 className="product-title">
                        <a href="#">Twin Hoops</a>
                      </h3>
                      <span className="price">
                        <del aria-hidden="true">
                          <span>$100.00</span>
                        </del>
                        <ins>
                          <span>$90.00</span>
                        </ins>
                      </span>
                      <div className="rating">
                        <div className="star star-5"></div>
                        <div className="review-count">
                          (3<span> review</span>)
                        </div>
                      </div>
                      <div className="product-button">
                        <div
                          className="btn-add-to-cart"
                          data-title="Add to cart"
                        >
                          <a
                            rel="nofollow"
                            href="#"
                            className="product-btn button"
                          >
                            Add to cart
                          </a>
                        </div>
                        <div className="btn-wishlist" data-title="Wishlist">
                          <button className="product-btn">
                            Add to wishlist
                          </button>
                        </div>
                        <div className="btn-compare" data-title="Compare">
                          <button className="product-btn">Compare</button>
                        </div>
                      </div>
                      <div className="product-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis…
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-entry clearfix product-wapper">
                <div className="row">
                  <div className="col-md-4">
                    <div className="products-thumb">
                      <div className="product-lable">
                        <div className="hot">Hot</div>
                      </div>
                      <div className="product-thumb-hover border">
                        <a href="#">
                          <img
                            width="600"
                            height="600"
                            src="media/product/7.jpg"
                            className="post-image"
                            alt=""
                          />
                          <img
                            width="600"
                            height="600"
                            src="media/product/7-2.jpg"
                            className="hover-image back"
                            alt=""
                          />
                        </a>
                      </div>
                      <span
                        className="product-quickview"
                        data-title="Quick View"
                      >
                        <a href="#" className="quickview quickview-button">
                          Quick View <i className="icon-search"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="products-content">
                      <h3 className="product-title">
                        <a href="#">Diamond Bracelet</a>
                      </h3>
                      <span className="price">
                        <del aria-hidden="true">
                          <span>$79.00</span>
                        </del>
                        <ins>
                          <span>$50.00</span>
                        </ins>
                      </span>
                      <div className="rating">
                        <div className="star star-5"></div>
                        <div className="review-count">
                          (2<span> review</span>)
                        </div>
                      </div>
                      <div className="product-button">
                        <div
                          className="btn-add-to-cart"
                          data-title="Add to cart"
                        >
                          <a
                            rel="nofollow"
                            href="#"
                            className="product-btn button"
                          >
                            Add to cart
                          </a>
                        </div>
                        <div className="btn-wishlist" data-title="Wishlist">
                          <button className="product-btn">
                            Add to wishlist
                          </button>
                        </div>
                        <div className="btn-compare" data-title="Compare">
                          <button className="product-btn">Compare</button>
                        </div>
                      </div>
                      <div className="product-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis…
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-entry clearfix product-wapper">
                <div className="row">
                  <div className="col-md-4">
                    <div className="products-thumb">
                      <div className="product-lable">
                        <div className="hot">Hot</div>
                      </div>
                      <div className="product-thumb-hover">
                        <a href="#">
                          <img
                            width="600"
                            height="600"
                            src="media/product/4.jpg"
                            className="post-image"
                            alt=""
                          />
                          <img
                            width="600"
                            height="600"
                            src="media/product/4-2.jpg"
                            className="hover-image back"
                            alt=""
                          />
                        </a>
                      </div>
                      <span
                        className="product-quickview"
                        data-title="Quick View"
                      >
                        <a href="#" className="quickview quickview-button">
                          Quick View <i className="icon-search"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="products-content">
                      <h3 className="product-title">
                        <a href="#">Yilver And Turquoise Earrings</a>
                      </h3>
                      <span className="price">$120.00</span>
                      <div className="rating">
                        <div className="star star-4"></div>
                        <div className="review-count">
                          (1<span> review</span>)
                        </div>
                      </div>
                      <div className="product-button">
                        <div
                          className="btn-add-to-cart"
                          data-title="Add to cart"
                        >
                          <a
                            rel="nofollow"
                            href="#"
                            className="product-btn button"
                          >
                            Add to cart
                          </a>
                        </div>
                        <div className="btn-wishlist" data-title="Wishlist">
                          <button className="product-btn">
                            Add to wishlist
                          </button>
                        </div>
                        <div className="btn-compare" data-title="Compare">
                          <button className="product-btn">Compare</button>
                        </div>
                      </div>
                      <div className="product-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis…
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-entry clearfix product-wapper">
                <div className="row">
                  <div className="col-md-4">
                    <div className="products-thumb">
                      <div className="product-lable">
                        <div className="hot">Hot</div>
                      </div>
                      <div className="product-thumb-hover border">
                        <a href="#">
                          <img
                            width="600"
                            height="600"
                            src="media/product/8.jpg"
                            className="post-image"
                            alt=""
                          />
                          <img
                            width="600"
                            height="600"
                            src="media/product/8-2.jpg"
                            className="hover-image back"
                            alt=""
                          />
                        </a>
                      </div>
                      <span
                        className="product-quickview"
                        data-title="Quick View"
                      >
                        <a href="#" className="quickview quickview-button">
                          Quick View <i className="icon-search"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="products-content">
                      <h3 className="product-title">
                        <a href="#">X Hoop Earrings</a>
                      </h3>
                      <span className="price">
                        <del aria-hidden="true">
                          <span>$200.00</span>
                        </del>
                        <ins>
                          <span>$180.00</span>
                        </ins>
                      </span>
                      <div className="rating">
                        <div className="star star-5"></div>
                        <div className="review-count">
                          (4<span> review</span>)
                        </div>
                      </div>
                      <div className="product-button">
                        <div
                          className="btn-add-to-cart"
                          data-title="Add to cart"
                        >
                          <a
                            rel="nofollow"
                            href="#"
                            className="product-btn button"
                          >
                            Add to cart
                          </a>
                        </div>
                        <div className="btn-wishlist" data-title="Wishlist">
                          <button className="product-btn">
                            Add to wishlist
                          </button>
                        </div>
                        <div className="btn-compare" data-title="Compare">
                          <button className="product-btn">Compare</button>
                        </div>
                      </div>
                      <div className="product-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis…
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-entry clearfix product-wapper">
                <div className="row">
                  <div className="col-md-4">
                    <div className="products-thumb">
                      <div className="product-lable">
                        <div className="hot">Hot</div>
                      </div>
                      <div className="product-thumb-hover border">
                        <a href="#">
                          <img
                            width="600"
                            height="600"
                            src="media/product/9.jpg"
                            className="post-image"
                            alt=""
                          />
                          <img
                            width="600"
                            height="600"
                            src="media/product/9-2.jpg"
                            className="hover-image back"
                            alt=""
                          />
                        </a>
                      </div>
                      <span
                        className="product-quickview"
                        data-title="Quick View"
                      >
                        <a href="#" className="quickview quickview-button">
                          Quick View <i className="icon-search"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="products-content">
                      <h3 className="product-title">
                        <a href="#">Yintage Medallion Necklace</a>
                      </h3>
                      <span className="price">$140.00</span>
                      <div className="rating">
                        <div className="star star-5"></div>
                        <div className="review-count">
                          (1<span> review</span>)
                        </div>
                      </div>
                      <div className="product-button">
                        <div
                          className="btn-add-to-cart"
                          data-title="Add to cart"
                        >
                          <a
                            rel="nofollow"
                            href="#"
                            className="product-btn button"
                          >
                            Add to cart
                          </a>
                        </div>
                        <div className="btn-wishlist" data-title="Wishlist">
                          <button className="product-btn">
                            Add to wishlist
                          </button>
                        </div>
                        <div className="btn-compare" data-title="Compare">
                          <button className="product-btn">Compare</button>
                        </div>
                      </div>
                      <div className="product-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis…
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="pagination">
          <ul className="page-numbers">
            <li>
              <a className="prev page-numbers" href="#">
                Previous
              </a>
            </li>
            <li>
              <span aria-current="page" className="page-numbers current">
                1
              </span>
            </li>
            <li>
              <a className="page-numbers" href="#">
                2
              </a>
            </li>
            <li>
              <a className="page-numbers" href="#">
                3
              </a>
            </li>
            <li>
              <a className="next page-numbers" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Rings;
