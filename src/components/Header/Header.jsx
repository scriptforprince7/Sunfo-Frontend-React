import React from "react";
import { Link } from "react-router-dom";
import "../../assets/assets/css/responsive.css";
import "../../assets/assets/css/app.css";
import "../../assets/assets/js/app";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import { useState, useEffect, useRef } from "react";
import './Header.css'
import Logo from '../../assets/media/sunflowlogo.png';

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => setSticky(e.intersectionRatio < 1),
      { threshold: [1] }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <header
      ref={headerRef}
      id="site-header"
      className={`site-header header-v4 ${isSticky ? "sticky" : ""}`}
    >
      <div className="header-mobile">
        <div className="section-padding">
          <div className="section-container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-left">
                <div className="navbar-header">
                  <button
                    type="button"
                    id="show-megamenu"
                    className="navbar-toggle"
                  ></button>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 header-center">
                <div className="site-logo">
                  <Link to="/">
                    <img
                      width="400"
                      height="79"
                      src={Logo}
                      alt="Mojuri – Jewelry Store HTML Template"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-right">
                <div className="mojuri-topcart dropdown">
                  <div className="dropdown mini-cart top-cart">
                    <div className="remove-cart-shadow"></div>
                    <Link
                      className="dropdown-toggle cart-icon"
                      to="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div className="icons-cart">
                        <i className="icon-large-paper-bag"></i>
                        <span className="cart-count">2</span>
                      </div>
                    </Link>
                    <div className="dropdown-menu cart-popup">
                      <div
                        className="cart-empty-wrap"
                        style={{ display: " none" }}
                      >
                        <ul className="cart-list">
                          <li className="empty">
                            <span>No products in the cart.</span>
                            <Link className="go-shop" to="#">
                              GO TO SHOP
                              <i aria-hidden="true" className="arrow_right"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="cart-list-wrap">
                        <ul className="cart-list ">
                          <li className="mini-cart-item">
                            <a
                              href="#"
                              className="remove"
                              title="Remove this item"
                            >
                              <i className="icon_close"></i>
                            </a>
                            <a
                              href="#"
                              className="product-image"
                            >
                              <img
                                width="600"
                                height="600"
                                src="/media/product/3.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              href="#"
                              className="product-name"
                            >
                              Twin Hoops
                            </a>
                            <div className="quantity">Qty: 1</div>
                            <div className="price">$150.00</div>
                          </li>
                          <li className="mini-cart-item">
                            <a
                              href="#"
                              className="remove"
                              title="Remove this item"
                            >
                              <i className="icon_close"></i>
                            </a>
                            <a
                              href="#"
                              className="product-image"
                            >
                              <img
                                width="600"
                                height="600"
                                src="/media/product/1.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              href="#"
                              className="product-name"
                            >
                              Medium Flat Hoops
                            </a>
                            <div className="quantity">Qty: 1</div>
                            <div className="price">$100.00</div>
                          </li>
                        </ul>
                        <div className="total-cart">
                          <div className="title-total">Total: </div>
                          <div className="total-price">
                            <span>$250.00</span>
                          </div>
                        </div>
                        <div className="free-ship">
                          <div className="title-ship">
                            Buy <strong>$400</strong> more to enjoy{" "}
                            <strong>FREE Shipping</strong>
                          </div>
                          <div className="total-percent">
                            <div
                              className="percent"
                              style={{ width: "20%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="buttons">
                          <a
                            href="#"
                            className="button btn view-cart btn-primary"
                          >
                            View cart
                          </a>
                          <a
                            href="#"
                            className="button btn checkout btn-default"
                          >
                            Check out
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-mobile-fixed">
          <div className="shop-page">
            <a href="#">
              <i className="wpb-icon-shop"></i>
            </a>
          </div>
          <div className="my-account">
            <div className="login-header">
              <a href="#">
                <i className="wpb-icon-user"></i>
              </a>
            </div>
          </div>

          <div className="search-box">
            <div className="search-toggle">
              <i className="wpb-icon-magnifying-glass"></i>
            </div>
          </div>

          <div className="wishlist-box">
            <a href="#">
              <i className="wpb-icon-heart"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="header-desktop ">
        <div className="header-wrapper">
          <div className="section-padding">
            <div className="section-container large p-l-r">
              <div className="row">
                <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 header-left">
                  <div className="site-logo">
                    <Link to="/">
                      <img
                        style={{ width: "170px" }}
                        src={Logo}
                        alt="sunflow"
                      />
                    </Link>
                  </div>
                </div>

                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 text-center header-center">
                  <div className="site-navigation">
                    <nav id="main-navigation">
                      <ul id="menu-main-menu" className="menu">
                        <li className="level-0 ">
                          <Link to="/">
                            <span className="menu-item-text">Home</span>
                          </Link>
                        </li>
                        <li className="level-0">
                          <Link to="/shop-product">
                            <span className="menu-item-text">Gift Box</span>
                          </Link>
                        </li>
                        <li className="level-0">
                          <Link to="/shop-product">
                            <span className="menu-item-text">Earings</span>
                          </Link>
                          {/* <ul className="sub-menu">
                            <li className="level-1 menu-item menu-item-has-children">
                              <Link to="/shop/products">
                                <span className="menu-item-text">
                                  Shop - Products
                                </span>
                              </Link>
                              <ul className="sub-menu">
                                <li>
                                  <Link to="/shop/grid-left">
                                    <span className="menu-item-text">
                                      Shop Grid - Left Sidebar
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/shop/list-left">
                                    <span className="menu-item-text">
                                      Shop List - Left Sidebar
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/shop/grid-right">
                                    <span className="menu-item-text">
                                      Shop Grid - Right Sidebar
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/shop/list-right">
                                    <span className="menu-item-text">
                                      Shop List - Right Sidebar
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/shop/grid-fullwidth">
                                    <span className="menu-item-text">
                                      Shop Grid - No Sidebar
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to="/shop/details">
                                <span className="menu-item-text">
                                  Shop Details
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/cart">
                                <span className="menu-item-text">
                                  Shop - Cart
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/checkout">
                                <span className="menu-item-text">
                                  Shop - Checkout
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/wishlist">
                                <span className="menu-item-text">
                                  Shop - Wishlist
                                </span>
                              </Link>
                            </li>
                          </ul> */}
                        </li>
                        {/* <li className="level-0 menu-item menu-item-has-children mega-menu mega-menu-fullwidth align-center">
                          <Link to="/contact">
                            <span className="menu-item-text">Rings</span>
                          </Link>
                        </li> */}
                        <li className="level-0">
                          <Link to="/shop-product">
                            <span className="menu-item-text">Rings</span>
                          </Link>
                        </li>
                        <li className="level-0">
                          <Link to="/shop-product">
                            <span className="menu-item-text">Necklaces</span>
                          </Link>
                          {/* <ul className="sub-menu">
                            <li>
                              <Link to="/login">
                                <span className="menu-item-text">
                                  Login / Register
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/forgot-password">
                                <span className="menu-item-text">
                                  Forgot Password
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/my-account">
                                <span className="menu-item-text">
                                  My Account
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/about">
                                <span className="menu-item-text">About Us</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/contact">
                                <span className="menu-item-text">Contact</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/faq">
                                <span className="menu-item-text">FAQ</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/404">
                                <span className="menu-item-text">Page 404</span>
                              </Link>
                            </li>
                          </ul> */}
                        </li>
                        <li className="level-0">
                          <Link to="/contact">
                            <b><span className="menu-item-text" >Track Order</span></b>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 header-right">
                  <div className="header-page-link">
                    <div className="search-box">
                      <div className="search-toggle">
                        <i className="icon-search"></i>
                      </div>
                    </div>

                    <div className="login-header icon">
                      <a className="active-login" href="#">
                        <i className="icon-user"></i>
                      </a>
                      <div className="form-login-register">
                        <div className="box-form-login">
                          <div className="active-login"></div>
                          <div className="box-content">
                            <div className="form-login active">
                              <form
                                id="login_ajax"
                                method="post"
                                className="login"
                              >
                                <h2>Sign in</h2>
                                <p className="status"></p>
                                <div className="content">
                                  <div className="username">
                                    <input
                                      type="text"
                                      required="required"
                                      className="input-text"
                                      name="username"
                                      id="username"
                                      placeholder="Your name"
                                    />
                                  </div>
                                  <div className="password">
                                    <input
                                      className="input-text"
                                      required="required"
                                      type="password"
                                      name="password"
                                      id="password"
                                      placeholder="Password"
                                    />
                                  </div>
                                  <div className="rememberme-lost">
                                    <div className="rememberme">
                                      <input
                                        name="rememberme"
                                        type="checkbox"
                                        id="rememberme"
                                        value="forever"
                                      />
                                      <label
                                        htmlFor="rememberme"
                                        className="inline"
                                      >
                                        Remember me
                                      </label>
                                    </div>
                                    <div className="lost_password">
                                      <a href="#">
                                        Lost your password?
                                      </a>
                                    </div>
                                  </div>
                                  <div className="button-login">
                                    <input
                                      type="submit"
                                      className="button"
                                      name="login"
                                      value="Login"
                                    />
                                  </div>
                                  <div className="button-next-reregister">
                                    Create An Account
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="form-register">
                              <form method="post" className="register">
                                <h2>REGISTER</h2>
                                <div className="content">
                                  <div className="email">
                                    <input
                                      type="email"
                                      className="input-text"
                                      placeholder="Email"
                                      name="email"
                                      id="reg_email"
                                      value=""
                                    />
                                  </div>
                                  <div className="password">
                                    <input
                                      type="password"
                                      className="input-text"
                                      placeholder="Password"
                                      name="password"
                                      id="reg_password"
                                    />
                                  </div>
                                  <div className="button-register">
                                    <input
                                      type="submit"
                                      className="button"
                                      name="register"
                                      value="Register"
                                    />
                                  </div>
                                  <div className="button-next-login">
                                    Already has an account
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="wishlist-box">
                      <a href="#">
                        <i className="icon-heart"></i>
                      </a>
                      <span className="count-wishlist">1</span>
                    </div>

                    <div className="mojuri-topcart dropdown light">
                      <div className="dropdown mini-cart top-cart">
                        <div className="remove-cart-shadow"></div>
                        <a
                          className="dropdown-toggle cart-icon"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <div className="icons-cart">
                            <i className="icon-large-paper-bag"></i>
                            <span className="cart-count">2</span>
                          </div>
                        </a>
                        <div className="dropdown-menu cart-popup">
                          <div
                            className="cart-empty-wrap"
                            style={{ display: "none" }}
                          >
                            <ul className="cart-list">
                              <li className="empty">
                                <span>No products in the cart.</span>
                                <a
                                  className="go-shop"
                                  href="#"
                                >
                                  GO TO SHOP
                                  <i
                                    aria-hidden="true"
                                    className="arrow_right"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="cart-list-wrap">
                            <ul className="cart-list ">
                              <li className="mini-cart-item">
                                <a
                                  href="#"
                                  className="remove"
                                  title="Remove this item"
                                >
                                  <i className="icon_close"></i>
                                </a>
                                <a
                                  href="#"
                                  className="product-image"
                                >
                                  <img
                                    width="600"
                                    height="600"
                                    src="/media/product/3.jpg"
                                    alt=""
                                  />
                                </a>
                                <a
                                  href="#"
                                  className="product-name"
                                >
                                  Twin Hoops
                                </a>
                                <div className="quantity">Qty: 1</div>
                                <div className="price">$150.00</div>
                              </li>
                              <li className="mini-cart-item">
                                <a
                                  href="#"
                                  className="remove"
                                  title="Remove this item"
                                >
                                  <i className="icon_close"></i>
                                </a>
                                <a
                                  href="#"
                                  className="product-image"
                                >
                                  <img
                                    width="600"
                                    height="600"
                                    src="/media/product/1.jpg"
                                    alt=""
                                  />
                                </a>
                                <a
                                  href="#"
                                  className="product-name"
                                >
                                  Medium Flat Hoops
                                </a>
                                <div className="quantity">Qty: 1</div>
                                <div className="price">$100.00</div>
                              </li>
                            </ul>
                            <div className="total-cart">
                              <div className="title-total">Total: </div>
                              <div className="total-price">
                                <span>$250.00</span>
                              </div>
                            </div>
                            <div className="free-ship">
                              <div className="title-ship">
                                Buy <strong>$400</strong> more to enjoy{" "}
                                <strong>FREE Shipping</strong>
                              </div>
                              <div className="total-percent">
                                <div
                                  className="percent"
                                  style={{ width: "20%" }}
                                ></div>
                              </div>
                            </div>
                            <div className="buttons">
                              <a
                                href="#"
                                className="button btn view-cart btn-primary"
                              >
                                View cart
                              </a>
                              <a
                                href="#"
                                className="button btn checkout btn-default"
                              >
                                Check out
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
