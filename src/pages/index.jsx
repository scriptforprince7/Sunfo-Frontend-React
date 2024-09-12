import React, { Fragment } from "react";
// import banner from "../media/banner/banner-4-2.jpg";
const Index = () => {
  return (
    <Fragment>
      <body className="home home-4 title-4">
        <div id="page" class="hfeed page-wrapper">
          <header id="site-header" className="site-header header-v4">
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
                        <a href="Index4.html">
                          <img
                            width="400"
                            height="79"
                            src=""
                            alt="Mojuri – Jewelry Store HTML Template"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-right">
                      <div className="mojuri-topcart dropdown">
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
                              style={{ display: " none" }}
                            >
                              <ul className="cart-list">
                                <li className="empty">
                                  <span>No products in the cart.</span>
                                  <a
                                    className="go-shop"
                                    href="shop-grid-left.html"
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
                                    href="shop-details.html"
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
                                    href="shop-details.html"
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
                                    href="shop-details.html"
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
                                    href="shop-details.html"
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
                                  href="shop-cart.html"
                                  className="button btn view-cart btn-primary"
                                >
                                  View cart
                                </a>
                                <a
                                  href="shop-checkout.html"
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
                  <a href="shop-grid-left.html">
                    <i className="wpb-icon-shop"></i>
                  </a>
                </div>
                <div className="my-account">
                  <div className="login-header">
                    <a href="page-my-account.html">
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
                  <a href="shop-wishlist.html">
                    <i className="wpb-icon-heart"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="header-desktop">
              <div className="header-wrapper">
                <div className="section-padding">
                  <div className="section-container large p-l-r">
                    <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 header-left">
                        <div className="site-logo">
                          <a href="index4.html">
                            <img
                              width="400"
                              height="140"
                              src="/media/logo.png"
                              alt="Mojuri – Jewelry Store HTML Template"
                            />
                          </a>
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-center header-center">
                        <div className="site-navigation">
                          <nav id="main-navigation">
                            <ul id="menu-main-menu" className="menu">
                              <li className="level-0 menu-item menu-item-has-children current-menu-item">
                                <a href="index.html">
                                  <span className="menu-item-text">Home</span>
                                </a>
                                <ul className="sub-menu">
                                  <li>
                                    <a href="index.html">
                                      <span className="menu-item-text">
                                        Home Clean
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="index2.html">
                                      <span className="menu-item-text">
                                        Home Collection
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="index3.html">
                                      <span className="menu-item-text">
                                        Home Minimal
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="index4.html">
                                      <span className="menu-item-text">
                                        Home Modern
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="index5.html">
                                      <span className="menu-item-text">
                                        Home Parallax
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="index6.html">
                                      <span className="menu-item-text">
                                        Home Strong
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="index7.html">
                                      <span className="menu-item-text">
                                        Home Style
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="index8.html">
                                      <span className="menu-item-text">
                                        Home Unique
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="level-0 menu-item menu-item-has-children">
                                <a href="shop-grid-left.html">
                                  <span className="menu-item-text">Shop</span>
                                </a>
                                <ul className="sub-menu">
                                  <li className="level-1 menu-item menu-item-has-children">
                                    <a href="shop-grid-left.html">
                                      <span className="menu-item-text">
                                        Shop - Products
                                      </span>
                                    </a>
                                    <ul className="sub-menu">
                                      <li>
                                        <a href="shop-grid-left.html">
                                          <span className="menu-item-text">
                                            Shop Grid - Left Sidebar
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-list-left.html">
                                          <span className="menu-item-text">
                                            Shop List - Left Sidebar
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-grid-right.html">
                                          <span className="menu-item-text">
                                            Shop Grid - Right Sidebar
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-list-right.html">
                                          <span className="menu-item-text">
                                            Shop List - Right Sidebar
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="shop-grid-fullwidth.html">
                                          <span className="menu-item-text">
                                            Shop Grid - No Sidebar
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="shop-details.html">
                                      <span className="menu-item-text">
                                        Shop Details
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-cart.html">
                                      <span className="menu-item-text">
                                        Shop - Cart
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-checkout.html">
                                      <span className="menu-item-text">
                                        Shop - Checkout
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-wishlist.html">
                                      <span className="menu-item-text">
                                        Shop - Wishlist
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="level-0 menu-item menu-item-has-children mega-menu mega-menu-fullwidth align-center">
                                <a href="blog-grid-left.html">
                                  <span className="menu-item-text">Blog</span>
                                </a>
                                <div className="sub-menu">
                                  <div className="row">
                                    <div className="col-md-5">
                                      <div className="menu-section">
                                        <h2 className="sub-menu-title">
                                          Blog Category
                                        </h2>
                                        <ul className="menu-list">
                                          <li>
                                            <a href="blog-grid-left.html">
                                              <span className="menu-item-text">
                                                Blog Grid - Left Sidebar
                                              </span>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="blog-grid-right.html">
                                              <span className="menu-item-text">
                                                Blog Grid - Right Sidebar
                                              </span>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="blog-list-left.html">
                                              <span className="menu-item-text">
                                                Blog List - Left Sidebar
                                              </span>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="blog-list-right.html">
                                              <span className="menu-item-text">
                                                Blog List - Right Sidebar
                                              </span>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="blog-grid-fullwidth.html">
                                              <span className="menu-item-text">
                                                Blog Grid - No Sidebar
                                              </span>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>

                                      <div className="menu-section">
                                        <h2 className="sub-menu-title">
                                          Blog Details
                                        </h2>
                                        <ul className="menu-list">
                                          <li>
                                            <a href="blog-details-left.html">
                                              <span className="menu-item-text">
                                                Blog Details - Left Sidebar
                                              </span>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="blog-details-right.html">
                                              <span className="menu-item-text">
                                                Blog Details - Right Sidebar
                                              </span>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="blog-details-fullwidth.html">
                                              <span className="menu-item-text">
                                                Blog Details - No Sidebar
                                              </span>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-md-7">
                                      <div className="menu-section">
                                        <h2 className="sub-menu-title">
                                          Recent Posts
                                        </h2>
                                        <div className="block block-posts recent-posts p-t-5">
                                          <ul className="posts-list">
                                            <li className="post-item">
                                              <a
                                                href="blog-details-right.html"
                                                className="post-image"
                                              >
                                                <img src="/media/blog/1.jpg" />
                                              </a>
                                              <div className="post-content">
                                                <h2 className="post-title">
                                                  <a href="blog-details-right.html">
                                                    Bridial Fair Collections
                                                    2023
                                                  </a>
                                                </h2>
                                                <div className="post-time">
                                                  <span className="post-date">
                                                    May 30, 2022
                                                  </span>
                                                  <span className="post-comment">
                                                    4 Comments
                                                  </span>
                                                </div>
                                              </div>
                                            </li>
                                            <li className="post-item">
                                              <a
                                                href="blog-details-right.html"
                                                className="post-image"
                                              >
                                                <img src="/media/blog/2.jpg" />
                                              </a>
                                              <div className="post-content">
                                                <h2 className="post-title">
                                                  <a href="blog-details-right.html">
                                                    Our Sterling Silver
                                                  </a>
                                                </h2>
                                                <div className="post-time">
                                                  <span className="post-date">
                                                    Aug 24, 2022
                                                  </span>
                                                  <span className="post-comment">
                                                    2 Comments
                                                  </span>
                                                </div>
                                              </div>
                                            </li>
                                            <li className="post-item">
                                              <a
                                                href="blog-details-right.html"
                                                className="post-image"
                                              >
                                                <img src="/media/blog/3.jpg" />
                                              </a>
                                              <div className="post-content">
                                                <h2 className="post-title">
                                                  <a href="blog-details-right.html">
                                                    Kitchen Inspired On Japanese
                                                  </a>
                                                </h2>
                                                <div className="post-time">
                                                  <span className="post-date">
                                                    Dec 06, 2022
                                                  </span>
                                                  <span className="post-comment">
                                                    1 Comment
                                                  </span>
                                                </div>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="level-0 menu-item menu-item-has-children">
                                <a href="#">
                                  <span className="menu-item-text">Pages</span>
                                </a>
                                <ul className="sub-menu">
                                  <li>
                                    <a href="page-login.html">
                                      <span className="menu-item-text">
                                        Login / Register
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-forgot-password.html">
                                      <span className="menu-item-text">
                                        Forgot Password
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-my-account.html">
                                      <span className="menu-item-text">
                                        My Account
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-about.html">
                                      <span className="menu-item-text">
                                        About Us
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-contact.html">
                                      <span className="menu-item-text">
                                        Contact
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-faq.html">
                                      <span className="menu-item-text">
                                        FAQ
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="page-404.html">
                                      <span className="menu-item-text">
                                        Page 404
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="level-0 menu-item">
                                <a href="page-contact.html">
                                  <span className="menu-item-text">
                                    Contact
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>

                      <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 header-right">
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
                                              for="rememberme"
                                              className="inline"
                                            >
                                              Remember me
                                            </label>
                                          </div>
                                          <div className="lost_password">
                                            <a href="forgot-password.html">
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
                            <a href="shop-wishlist.html">
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
                                        href="shop-grid-left.html"
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
                                        href="shop-details.html"
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
                                        href="shop-details.html"
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
                                        href="shop-details.html"
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
                                        href="shop-details.html"
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
                                      href="shop-cart.html"
                                      className="button btn view-cart btn-primary"
                                    >
                                      View cart
                                    </a>
                                    <a
                                      href="shop-checkout.html"
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
          <div id="site-main" className="site-main">
            <div id="main-content" className="main-content">
              <div id="primary" className="content-area">
                <div id="content" className="site-content" role="main">
                  
                  <section className="section m-b-0">
                    <div className="block block-sliders layout-4 auto-height color-white nav-center">
                      <div
                        className="slick-sliders"
                        data-autoplay="true"
                        data-dots="true"
                        data-nav="true"
                        data-columns4="1"
                        data-columns3="1"
                        data-columns2="1"
                        data-columns1="1"
                        data-columns1440="1"
                        data-columns="1"
                      >
                        <div className="item slick-slide">
                          <div className="item-content">
                            <div className="content-image">
                              <img
                                width="1920"
                                height="781"
                                src="/media/slider/4-1.jpg"
                                alt="Image Slider"
                              />
                            </div>
                            <div className="item-info horizontal-center vertical-middle text-center">
                              <div className="content">
                                <div className="subtitle-slider">
                                  Now up to 70% off*
                                </div>
                                <h2 className="title-slider">MID YEAR SALE</h2>
                                <a
                                  className="button-slider button button-white button-outline thick-border"
                                  href="shop-grid-left.html"
                                >
                                  Explore Bestseller
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item slick-slide">
                          <div className="item-content">
                            <div className="content-image">
                              <img
                                width="1920"
                                height="781"
                                src="/media/slider/4-2.jpg"
                                alt="Image Slider"
                              />
                            </div>
                            <div className="item-info horizontal-center vertical-middle text-center">
                              <div className="content">
                                <div className="subtitle-slider">
                                  Oh, Hello Newness!
                                </div>
                                <h2 className="title-slider">MID YEAR SALE</h2>
                                <a
                                  className="button-slider button button-white button-outline thick-border"
                                  href="shop-grid-left.html"
                                >
                                  Explore Bestseller
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item slick-slide">
                          <div className="item-content">
                            <div className="content-image">
                              <img
                                width="1920"
                                height="781"
                                src="/media/slider/4-3.jpg"
                                alt="Image Slider"
                              />
                            </div>
                            <div className="item-info horizontal-center vertical-middle text-center">
                              <div className="content">
                                <div className="subtitle-slider">
                                  Best of the Best
                                </div>
                                <h2 className="title-slider">MID YEAR SALE</h2>
                                <a
                                  className="button-slider button button-white button-outline thick-border"
                                  href="shop-grid-left.html"
                                >
                                  Explore Bestseller
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="section section-padding background-img bg-img-2 p-t-70 p-b-50 m-b-70">
                    <div className="section-container">
                      <div className="block block-product-cats slider layout-3">
                        <div className="block-widget-wrap">
                          <div className="block-title">
                            <div className="sub-title">
                              We’ve Got You Covered
                            </div>
                            <h2>Explore the Range</h2>
                          </div>
                          <div className="block-content">
                            <div className="product-cats-list slick-wrap">
                              <div
                                className="slick-sliders content-category"
                                data-dots="0"
                                data-slidestoscroll="true"
                                data-nav="0"
                                data-columns4="1"
                                data-columns3="3"
                                data-columns2="4"
                                data-columns1="4"
                                data-columns1440="5"
                                data-columns="5"
                              >
                                <div className="item item-product-cat slick-slide">
                                  <div className="item-product-cat-content">
                                    <a href="shop-grid-left.html">
                                      <div className="item-image animation-horizontal">
                                        <img
                                          width="273"
                                          height="376"
                                          src="/media/product/cat-4-1.jpg"
                                          alt="Bracelets"
                                        />
                                      </div>
                                    </a>
                                    <div className="product-cat-content-info">
                                      <h2 className="item-title">
                                        <a href="shop-grid-left.html">
                                          Bracelets
                                        </a>
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                                <div className="item item-product-cat slick-slide">
                                  <div className="item-product-cat-content">
                                    <a href="shop-grid-left.html">
                                      <div className="item-image animation-horizontal">
                                        <img
                                          width="273"
                                          height="376"
                                          src="/media/product/cat-4-2.jpg"
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
                                          width="273"
                                          height="376"
                                          src="/media/product/cat-4-3.jpg"
                                          alt="Earrings"
                                        />
                                      </div>
                                    </a>
                                    <div className="product-cat-content-info">
                                      <h2 className="item-title">
                                        <a href="shop-grid-left.html">
                                          Earrings
                                        </a>
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                                <div className="item item-product-cat slick-slide">
                                  <div className="item-product-cat-content">
                                    <a href="shop-grid-left.html">
                                      <div className="item-image animation-horizontal">
                                        <img
                                          width="273"
                                          height="376"
                                          src="/media/product/cat-4-4.jpg"
                                          alt="Necklaces"
                                        />
                                      </div>
                                    </a>
                                    <div className="product-cat-content-info">
                                      <h2 className="item-title">
                                        <a href="shop-grid-left.html">
                                          Necklaces
                                        </a>
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                                <div className="item item-product-cat slick-slide">
                                  <div className="item-product-cat-content">
                                    <a href="shop-grid-left.html">
                                      <div className="item-image animation-horizontal">
                                        <img
                                          width="273"
                                          height="376"
                                          src="/media/product/cat-4-5.jpg"
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="section section-padding m-b-70">
                    <div className="section-container large">
                      <div className="block block-banners layout-4 banners-effect">
                        <div className="block-widget-wrap">
                          <div className="row">
                            <div className="col-md-6 sm-m-b-40">
                              <div className="block-widget-banner">
                                <div className="bg-banner">
                                  <div className="banner-wrapper banners">
                                    <div className="banner-image">
                                      <a href="shop-grid-left.html">
                                        <img
                                          width="690"
                                          height="398"
                                          src="/media/banner/banner-4-1.jpg"
                                          alt="Banner Image"
                                        />
                                      </a>
                                    </div>
                                    <div className="banner-wrapper-infor">
                                      <div className="info">
                                        <div className="content">
                                          <h3 className="title-banner">
                                            EAR STACK MAGIC
                                          </h3>
                                          <div className="banner-image-description">
                                            Elevate your ear party with a choice
                                            of mix and matched stacks or
                                            striking solo statements. The choice
                                            is yours!
                                          </div>
                                          <a
                                            className="button button-outline border-black"
                                            href="shop-grid-left.html"
                                          >
                                            SHOP NOW
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="block-widget-banner">
                                <div className="bg-banner">
                                  <div className="banner-wrapper banners">
                                    <div className="banner-image">
                                      <a href="shop-grid-left.html">
                                        <img
                                          width="690"
                                          height="398"
                                          src="/media/banner/banner-4-2.jpg"
                                          alt="Banner Image"
                                        />
                                      </a>
                                    </div>
                                    <div className="banner-wrapper-infor">
                                      <div className="info">
                                        <div className="content">
                                          <h3 className="title-banner">
                                            JOIN THE LAYERING GANG
                                          </h3>
                                          <div className="banner-image-description">
                                            Love to layer? Us too! Transition
                                            your outfits from day to night in
                                            one easy step with the power of a
                                            unique, luxe layered look.
                                          </div>
                                          <a
                                            className="button button-outline border-black"
                                            href="shop-grid-left.html"
                                          >
                                            SHOP NOW
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
                  </section>

                  <section className="section section-padding top-border p-t-70 m-b-70">
                    <div className="section-container large">
                      <div className="block block-products slider">
                        <div className="block-widget-wrap">
                          <div className="block-title">
                            <div className="sub-title">
                              Discover This Week’s
                            </div>
                            <h2>Jewellery Favourites</h2>
                          </div>
                          <div className="block-content">
                            <div className="content-product-list slick-wrap">
                              <div
                                className="slick-sliders products-list grid"
                                data-slidestoscroll="true"
                                data-dots="false"
                                data-nav="1"
                                data-columns4="1"
                                data-columns3="2"
                                data-columns2="2"
                                data-columns1="3"
                                data-columns1440="4"
                                data-columns="4"
                              >
                                <div className="item-product slick-slide">
                                  <div className="items">
                                    <div className="products-entry clearfix product-wapper">
                                      <div className="products-thumb">
                                        <div className="product-lable">
                                          <div className="hot">Hot</div>
                                        </div>
                                        <div className="product-thumb-hover">
                                          <a href="shop-details.html">
                                            <img
                                              width="600"
                                              height="600"
                                              src="/media/product/1.jpg"
                                              className="post-image"
                                              alt=""
                                            />
                                            <img
                                              width="600"
                                              height="600"
                                              src="/media/product/1-2.jpg"
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
                                          <div
                                            className="btn-wishlist"
                                            data-title="Wishlist"
                                          >
                                            <button className="product-btn">
                                              Add to wishlist
                                            </button>
                                          </div>
                                          <div
                                            className="btn-compare"
                                            data-title="Compare"
                                          >
                                            <button className="product-btn">
                                              Compare
                                            </button>
                                          </div>
                                          <span
                                            className="product-quickview"
                                            data-title="Quick View"
                                          >
                                            <a
                                              href="#"
                                              className="quickview quickview-button"
                                            >
                                              Quick View{" "}
                                              <i className="icon-search"></i>
                                            </a>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="products-content">
                                        <div className="contents">
                                          <div className="rating">
                                            <div className="star star-0"></div>
                                            <span className="count">
                                              (0 review)
                                            </span>
                                          </div>
                                          <h3 className="product-title">
                                            <a href="shop-details.html">
                                              Medium Flat Hoops
                                            </a>
                                          </h3>
                                          <span className="price">$100.00</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-product slick-slide">
                                  <div className="items">
                                    <div className="products-entry clearfix product-wapper">
                                      <div className="products-thumb">
                                        <div className="product-lable">
                                          <div className="onsale">-10%</div>
                                          <div className="hot">Hot</div>
                                        </div>
                                        <div className="product-thumb-hover">
                                          <a href="shop-details.html">
                                            <img
                                              width="600"
                                              height="600"
                                              src="/media/product/2.jpg"
                                              className="post-image"
                                              alt=""
                                            />
                                            <img
                                              width="600"
                                              height="600"
                                              src="/media/product/2-2.jpg"
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
                                          <div
                                            className="btn-wishlist"
                                            data-title="Wishlist"
                                          >
                                            <button className="product-btn">
                                              Add to wishlist
                                            </button>
                                          </div>
                                          <div
                                            className="btn-compare"
                                            data-title="Compare"
                                          >
                                            <button className="product-btn">
                                              Compare
                                            </button>
                                          </div>
                                          <span
                                            className="product-quickview"
                                            data-title="Quick View"
                                          >
                                            <a
                                              href="#"
                                              className="quickview quickview-button"
                                            >
                                              Quick View{" "}
                                              <i className="icon-search"></i>
                                            </a>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="products-content">
                                        <div className="contents">
                                          <div className="rating">
                                            <div className="star star-5"></div>
                                            <span className="count">
                                              (1 review)
                                            </span>
                                          </div>
                                          <h3 className="product-title">
                                            <a href="shop-details.html">
                                              Bold Pearl Hoop Earrings
                                            </a>
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
                                </div>
                                <div className="item-product slick-slide">
                                  <div className="items">
                                    <div className="products-entry clearfix product-wapper">
                                      <div className="products-thumb">
                                        <div className="product-lable">
                                          <div className="hot">Hot</div>
                                        </div>
                                        <div className="product-thumb-hover">
                                          <a href="shop-details.html">
                                            <img
                                              width="600"
                                              height="600"
                                              src="/media/product/3.jpg"
                                              className="post-image"
                                              alt=""
                                            />
                                            <img
                                              width="600"
                                              height="600"
                                              src="/media/product/3-2.jpg"
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
                                          <div
                                            className="btn-wishlist"
                                            data-title="Wishlist"
                                          >
                                            <button className="product-btn">
                                              Add to wishlist
                                            </button>
                                          </div>
                                          <div
                                            className="btn-compare"
                                            data-title="Compare"
                                          >
                                            <button className="product-btn">
                                              Compare
                                            </button>
                                          </div>
                                          <span
                                            className="product-quickview"
                                            data-title="Quick View"
                                          >
                                            <a
                                              href="#"
                                              className="quickview quickview-button"
                                            >
                                              Quick View{" "}
                                              <i className="icon-search"></i>
                                            </a>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="products-content">
                                        <div className="contents">
                                          <div className="rating">
                                            <div className="star star-0"></div>
                                            <span className="count">
                                              (0 review)
                                            </span>
                                          </div>
                                          <h3 className="product-title">
                                            <a href="shop-details.html">
                                              Twin Hoops
                                            </a>
                                          </h3>
                                          <span className="price">$150.00</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-product slick-slide">
                                  <div className="items">
                                    <div className="products-entry clearfix product-wapper">
                                      <div className="products-thumb">
                                        <div className="product-lable">
                                          <div className="onsale">-33%</div>
                                        </div>
                                        <div className="product-thumb-hover">
                                          <a href="shop-details.html">
                                            <img
                                              width="600"
                                              height="600"
                                              src="/media/product/4.jpg"
                                              className="post-image"
                                              alt=""
                                            />
                                            <img
                                              width="600"
                                              height="600"
                                              src="/media/product/4-2.jpg"
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
                                          <div
                                            className="btn-wishlist"
                                            data-title="Wishlist"
                                          >
                                            <button className="product-btn">
                                              Add to wishlist
                                            </button>
                                          </div>
                                          <div
                                            className="btn-compare"
                                            data-title="Compare"
                                          >
                                            <button className="product-btn">
                                              Compare
                                            </button>
                                          </div>
                                          <span
                                            className="product-quickview"
                                            data-title="Quick View"
                                          >
                                            <a
                                              href="#"
                                              className="quickview quickview-button"
                                            >
                                              Quick View{" "}
                                              <i className="icon-search"></i>
                                            </a>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="products-content">
                                        <div className="contents">
                                          <div className="rating">
                                            <div className="star star-4"></div>
                                            <span className="count">
                                              (2 reviews)
                                            </span>
                                          </div>
                                          <h3 className="product-title">
                                            <a href="shop-details.html">
                                              Yilver And Turquoise Earrings
                                            </a>
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
                                </div>
                                <div className="item-product slick-slide">
                                  <div className="items">
                                    <div className="products-entry clearfix product-wapper">
                                      <div className="products-thumb">
                                        <div className="product-lable">
                                          <div className="onsale">-7%</div>
                                        </div>
                                        <div className="product-thumb-hover">
                                          <a href="shop-details.html">
                                            <img
                                              width="600"
                                              height="600"
                                              src="/media/product/13.jpg"
                                              className="post-image"
                                              alt=""
                                            />
                                            <img
                                              width="600"
                                              height="600"
                                              src="/media/product/13-2.jpg"
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
                                          <div
                                            className="btn-wishlist"
                                            data-title="Wishlist"
                                          >
                                            <button className="product-btn">
                                              Add to wishlist
                                            </button>
                                          </div>
                                          <div
                                            className="btn-compare"
                                            data-title="Compare"
                                          >
                                            <button className="product-btn">
                                              Compare
                                            </button>
                                          </div>
                                          <span
                                            className="product-quickview"
                                            data-title="Quick View"
                                          >
                                            <a
                                              href="#"
                                              className="quickview quickview-button"
                                            >
                                              Quick View{" "}
                                              <i className="icon-search"></i>
                                            </a>
                                          </span>
                                        </div>
                                        <div className="product-stock">
                                          <span className="stock">
                                            Out Of Stock
                                          </span>
                                        </div>
                                      </div>
                                      <div className="products-content">
                                        <div className="contents">
                                          <div className="rating">
                                            <div className="star star-5"></div>
                                            <span className="count">
                                              (1 review)
                                            </span>
                                          </div>
                                          <h3 className="product-title">
                                            <a href="shop-details.html">
                                              Medium Flat Hoops
                                            </a>
                                          </h3>
                                          <span className="price">
                                            <del aria-hidden="true">
                                              <span>$150.00</span>
                                            </del>
                                            <ins>
                                              <span>$140.00</span>
                                            </ins>
                                          </span>
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
                  </section>

                  <section className="section m-b-70">
                    <div className="block block-video">
                      <div className="video-container">
                        <div id="player"></div>
                      </div>
                      <div className="video-caption">
                        <h2 className="caption-title">Stand Out In Style</h2>
                        <a
                          className="button button-white animation-horizontal"
                          href="shop-grid-left.html"
                        >
                          DISCOVER NOW
                        </a>
                      </div>
                    </div>
                  </section>

                  <section className="section section-padding m-b-70">
                    <div className="section-container large">
                      <div className="block block-products slider">
                        <div className="block-widget-wrap">
                          <div className="block-title">
                            <div className="sub-title">
                              On Trend Hot Jewellery
                            </div>
                            <h2>The Hot List</h2>
                          </div>
                          <div className="block-content">
                            <div className="content-product-list slick-wrap">
                              <div
                                className="slick-sliders products-list grid"
                                data-slidestoscroll="true"
                                data-dots="false"
                                data-nav="1"
                                data-columns4="1"
                                data-columns3="2"
                                data-columns2="2"
                                data-columns1="3"
                                data-columns1440="4"
                                data-columns="4"
                              >
                                <div className="item-product slick-slide">
                                  <div className="items">
                                    <div className="products-entry clearfix product-wapper">
                                      <div className="products-thumb">
                                        <div className="product-lable">
                                          <div className="hot">Hot</div>
                                        </div>
                                        <div className="product-thumb-hover">
                                          <a href="shop-details.html">
                                            <img
                                              width="600"
                                              height="600"
                                              src="/media/product/13.jpg"
                                              className="post-image"
                                              alt=""
                                            />
                                            <img
                                              width="600"
                                              height="600"
                                              src="/media/product/13-2.jpg"
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
                                          <div
                                            className="btn-wishlist"
                                            data-title="Wishlist"
                                          >
                                            <button className="product-btn">
                                              Add to wishlist
                                            </button>
                                          </div>
                                          <div
                                            className="btn-compare"
                                            data-title="Compare"
                                          >
                                            <button className="product-btn">
                                              Compare
                                            </button>
                                          </div>
                                          <span
                                            className="product-quickview"
                                            data-title="Quick View"
                                          >
                                            <a
                                              href="#"
                                              className="quickview quickview-button"
                                            >
                                              Quick View{" "}
                                              <i className="icon-search"></i>
                                            </a>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="products-content">
                                        <div className="contents">
                                          <div className="rating">
                                            <div className="star star-5"></div>
                                            <span className="count">
                                              (1 review)
                                            </span>
                                          </div>
                                          <h3 className="product-title">
                                            <a href="shop-details.html">
                                              Les Textured Hoops
                                            </a>
                                          </h3>
                                          <span className="price">$100.00</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-product slick-slide">
                                  <div className="items">
                                    <div className="products-entry clearfix product-wapper">
                                      <div className="products-thumb">
                                        <div className="product-lable">
                                          <div className="onsale">-10%</div>
                                          <div className="hot">Hot</div>
                                        </div>
                                        <div className="product-thumb-hover">
                                          <a href="shop-details.html">
                                            <img
                                              width="600"
                                              height="600"
                                              src="/media/product/14.jpg"
                                              className="post-image"
                                              alt=""
                                            />
                                            <img
                                              width="600"
                                              height="600"
                                              src="/media/product/14-2.jpg"
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
                                          <div
                                            className="btn-wishlist"
                                            data-title="Wishlist"
                                          >
                                            <button className="product-btn">
                                              Add to wishlist
                                            </button>
                                          </div>
                                          <div
                                            className="btn-compare"
                                            data-title="Compare"
                                          >
                                            <button className="product-btn">
                                              Compare
                                            </button>
                                          </div>
                                          <span
                                            className="product-quickview"
                                            data-title="Quick View"
                                          >
                                            <a
                                              href="#"
                                              className="quickview quickview-button"
                                            >
                                              Quick View{" "}
                                              <i className="icon-search"></i>
                                            </a>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="products-content">
                                        <div className="contents">
                                          <div className="rating">
                                            <div className="star star-0"></div>
                                            <span className="count">
                                              (0 review)
                                            </span>
                                          </div>
                                          <h3 className="product-title">
                                            <a href="shop-details.html">
                                              Oversized Thin Hoops
                                            </a>
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
                                </div>
                                <div className="item-product slick-slide">
                                  <div className="items">
                                    <div className="products-entry clearfix product-wapper">
                                      <div className="products-thumb">
                                        <div className="product-lable">
                                          <div className="hot">Hot</div>
                                        </div>
                                        <div className="product-thumb-hover">
                                          <a href="shop-details.html">
                                            <img
                                              width="600"
                                              height="600"
                                              src="/media/product/15.jpg"
                                              className="post-image"
                                              alt=""
                                            />
                                            <img
                                              width="600"
                                              height="600"
                                              src="/media/product/15-2.jpg"
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
                                          <div
                                            className="btn-wishlist"
                                            data-title="Wishlist"
                                          >
                                            <button className="product-btn">
                                              Add to wishlist
                                            </button>
                                          </div>
                                          <div
                                            className="btn-compare"
                                            data-title="Compare"
                                          >
                                            <button className="product-btn">
                                              Compare
                                            </button>
                                          </div>
                                          <span
                                            className="product-quickview"
                                            data-title="Quick View"
                                          >
                                            <a
                                              href="#"
                                              className="quickview quickview-button"
                                            >
                                              Quick View{" "}
                                              <i className="icon-search"></i>
                                            </a>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="products-content">
                                        <div className="contents">
                                          <div className="rating">
                                            <div className="star star-5"></div>
                                            <span className="count">
                                              (1 review)
                                            </span>
                                          </div>
                                          <h3 className="product-title">
                                            <a href="shop-details.html">
                                              Bold Hoops
                                            </a>
                                          </h3>
                                          <span className="price">$150.00</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-product slick-slide">
                                  <div className="items">
                                    <div className="products-entry clearfix product-wapper">
                                      <div className="products-thumb">
                                        <div className="product-lable">
                                          <div className="onsale">-33%</div>
                                        </div>
                                        <div className="product-thumb-hover">
                                          <a href="shop-details.html">
                                            <img
                                              width="600"
                                              height="600"
                                              src="/media/product/16.jpg"
                                              className="post-image"
                                              alt=""
                                            />
                                            <img
                                              width="600"
                                              height="600"
                                              src="/media/product/16-2.jpg"
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
                                          <div
                                            className="btn-wishlist"
                                            data-title="Wishlist"
                                          >
                                            <button className="product-btn">
                                              Add to wishlist
                                            </button>
                                          </div>
                                          <div
                                            className="btn-compare"
                                            data-title="Compare"
                                          >
                                            <button className="product-btn">
                                              Compare
                                            </button>
                                          </div>
                                          <span
                                            className="product-quickview"
                                            data-title="Quick View"
                                          >
                                            <a
                                              href="#"
                                              className="quickview quickview-button"
                                            >
                                              Quick View{" "}
                                              <i className="icon-search"></i>
                                            </a>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="products-content">
                                        <div className="contents">
                                          <div className="rating">
                                            <div className="star star-5"></div>
                                            <span className="count">
                                              (1 review)
                                            </span>
                                          </div>
                                          <h3 className="product-title">
                                            <a href="shop-details.html">
                                              Organic Pearl Stacked Hoops
                                            </a>
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
                                </div>
                                <div className="item-product slick-slide">
                                  <div className="items">
                                    <div className="products-entry clearfix product-wapper">
                                      <div className="products-thumb">
                                        <div className="product-lable">
                                          <div className="onsale">-7%</div>
                                        </div>
                                        <div className="product-thumb-hover">
                                          <a href="shop-details.html">
                                            <img
                                              width="600"
                                              height="600"
                                              src="/media/product/1.jpg"
                                              className="post-image"
                                              alt=""
                                            />
                                            <img
                                              width="600"
                                              height="600"
                                              src="/media/product/1-2.jpg"
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
                                          <div
                                            className="btn-wishlist"
                                            data-title="Wishlist"
                                          >
                                            <button className="product-btn">
                                              Add to wishlist
                                            </button>
                                          </div>
                                          <div
                                            className="btn-compare"
                                            data-title="Compare"
                                          >
                                            <button className="product-btn">
                                              Compare
                                            </button>
                                          </div>
                                          <span
                                            className="product-quickview"
                                            data-title="Quick View"
                                          >
                                            <a
                                              href="#"
                                              className="quickview quickview-button"
                                            >
                                              Quick View{" "}
                                              <i className="icon-search"></i>
                                            </a>
                                          </span>
                                        </div>
                                        <div className="product-stock">
                                          <span className="stock">
                                            Out Of Stock
                                          </span>
                                        </div>
                                      </div>
                                      <div className="products-content">
                                        <div className="contents">
                                          <div className="rating">
                                            <div className="star star-0"></div>
                                            <span className="count">
                                              (0 review)
                                            </span>
                                          </div>
                                          <h3 className="product-title">
                                            <a href="shop-details.html">
                                              Diamond Celestial Studs
                                            </a>
                                          </h3>
                                          <span className="price">
                                            <del aria-hidden="true">
                                              <span>$150.00</span>
                                            </del>
                                            <ins>
                                              <span>$140.00</span>
                                            </ins>
                                          </span>
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
                  </section>

                  <section className="section section-padding top-border p-t-70 m-b-70">
                    <div className="section-container">
                      <div className="block block-intro layout-3">
                        <div className="block-widget-wrap">
                          <div className="row">
                            <div className="section-column left">
                              <div className="intro-wrap">
                                <h2 className="intro-title black">
                                  Jewellery Online
                                  <br /> at the Most Affordable Price
                                </h2>
                                <div className="intro-item">
                                  Behind our 15-year success is our panel of
                                  expert jewellers who have been scouring the
                                  entire globe in pursuit of the best and most
                                  stunning jewellery that can be offered at
                                  affordable price for you.
                                </div>
                                <div className="intro-item">
                                  Visit our online catalogue and shop for the
                                  finest earrings, rings, bracelets, watches,
                                  silver, and the most luxurious gemstones.
                                </div>
                                <div className="intro-btn">
                                  <a
                                    href="shop-grid-left.html"
                                    className="button button-outline border-black animation-horizontal"
                                  >
                                    Read more
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="section-column right animation-horizontal hover-opacity">
                              <img
                                width="690"
                                height="498"
                                src="/media/banner/intro-4.jpg"
                                alt="intro"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="section section-padding top-border p-t-70 m-b-70">
                    <div className="section-container">
                      <div className="block block-posts slider">
                        <div className="block-widget-wrap">
                          <div className="block-title">
                            <div className="sub-title">News & Inspired</div>
                            <h2>Jewellery Style Files</h2>
                          </div>
                          <div className="block-content">
                            <div className="posts-wrap slick-wrap">
                              <div
                                className="slick-sliders"
                                data-slidestoscroll="true"
                                data-dots="0"
                                data-nav="1"
                                data-columns4="1"
                                data-columns3="1"
                                data-columns2="2"
                                data-columns1="3"
                                data-columns="3"
                              >
                                <div className="post-grid post">
                                  <div className="post-inner">
                                    <div className="post-image">
                                      <div className="post-date-wrap">
                                        <div className="post-date">
                                          <span>30</span>
                                          <span>May</span>
                                        </div>
                                      </div>
                                      <a
                                        className="post-thumbnail"
                                        href="blog-details-right.html"
                                      >
                                        <img
                                          width="720"
                                          height="484"
                                          src="/media/blog/1.jpg"
                                          alt="Bridial Fair Collections 2023"
                                        />
                                      </a>
                                    </div>
                                    <div className="post-content">
                                      <div className="post-categories">
                                        <a href="blog-grid-right.html">
                                          Backpack
                                        </a>
                                      </div>
                                      <h2 className="post-title">
                                        <a href="blog-details-right.html">
                                          Bridial Fair Collections 2023
                                        </a>
                                      </h2>
                                      <div className="btn-read-more">
                                        <a
                                          className="read-more btn-underline"
                                          href="blog-details-right.html"
                                        >
                                          Read more
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="post-grid post">
                                  <div className="post-inner">
                                    <div className="post-image">
                                      <div className="post-date-wrap">
                                        <div className="post-date">
                                          <span>06</span>
                                          <span>Jun</span>
                                        </div>
                                      </div>
                                      <a
                                        className="post-thumbnail"
                                        href="blog-details-right.html"
                                      >
                                        <img
                                          width="720"
                                          height="484"
                                          src="/media/blog/2.jpg"
                                          alt="Our Sterling Silver"
                                        />
                                      </a>
                                    </div>
                                    <div className="post-content">
                                      <div className="post-categories">
                                        <a href="blog-grid-right.html">
                                          Backpack
                                        </a>
                                      </div>
                                      <h2 className="post-title">
                                        <a href="blog-details-right.html">
                                          Our Sterling Silver
                                        </a>
                                      </h2>
                                      <div className="btn-read-more">
                                        <a
                                          className="read-more btn-underline"
                                          href="blog-details-right.html"
                                        >
                                          Read more
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="post-grid post">
                                  <div className="post-inner">
                                    <div className="post-image">
                                      <div className="post-date-wrap">
                                        <div className="post-date">
                                          <span>14</span>
                                          <span>Aug</span>
                                        </div>
                                      </div>
                                      <a
                                        className="post-thumbnail"
                                        href="blog-details-right.html"
                                      >
                                        <img
                                          width="720"
                                          height="484"
                                          src="/media/blog/3.jpg"
                                          alt="New Season Modern Gold Earrings"
                                        />
                                      </a>
                                    </div>
                                    <div className="post-content">
                                      <div className="post-categories">
                                        <a href="blog-grid-right.html">
                                          Backpack
                                        </a>
                                      </div>
                                      <h2 className="post-title">
                                        <a href="blog-details-right.html">
                                          New Season Modern Gold Earrings
                                        </a>
                                      </h2>
                                      <div className="btn-read-more">
                                        <a
                                          className="read-more btn-underline"
                                          href="blog-details-right.html"
                                        >
                                          Read more
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="post-grid post">
                                  <div className="post-inner">
                                    <div className="post-image">
                                      <div className="post-date-wrap">
                                        <div className="post-date">
                                          <span>10</span>
                                          <span>Sep</span>
                                        </div>
                                      </div>
                                      <a
                                        className="post-thumbnail"
                                        href="blog-details-right.html"
                                      >
                                        <img
                                          width="720"
                                          height="484"
                                          src="/media/blog/4.jpg"
                                          alt="Glossary of Jewelry Terms"
                                        />
                                      </a>
                                    </div>
                                    <div className="post-content">
                                      <div className="post-categories">
                                        <a href="blog-grid-right.html">
                                          Backpack
                                        </a>
                                      </div>
                                      <h2 className="post-title">
                                        <a href="blog-details-right.html">
                                          Glossary of Jewelry Terms
                                        </a>
                                      </h2>
                                      <div className="btn-read-more">
                                        <a
                                          className="read-more btn-underline"
                                          href="blog-details-right.html"
                                        >
                                          Read more
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
                  </section>

                  <section className="section section-padding background-img bg-img-3 p-t-70 p-b-70 m-b-0">
                    <div className="section-container">
                      <div className="block block-feature layout-2">
                        <div className="block-widget-wrap">
                          <div className="row">
                            <div className="col-md-4 sm-m-b-50">
                              <div className="box">
                                <div className="box-icon animation-horizontal">
                                  {/* <span>
																<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 511.998 511.998" style="enable-background:new 0 0 511.998 511.998;"><g><g><path d="M256.013,59.844c-108.193,0-196.218,88.025-196.218,196.218c0,108.201,88.025,196.218,196.218,196.218    S452.23,364.263,452.23,256.061C452.23,147.869,364.206,59.844,256.013,59.844z M256.013,435.217    c-98.791,0-179.155-80.372-179.155-179.155c0-98.791,80.364-179.155,179.155-179.155s179.155,80.364,179.155,179.155    C435.168,354.844,354.804,435.217,256.013,435.217z"></path></g></g><g><g><path d="M256.013,281.655h-68.25c-4.709,0-8.531,3.813-8.531,8.531v42.656c0,2.849,1.425,5.511,3.796,7.098l21.797,14.529v38.092    c0,3.489,2.124,6.629,5.358,7.925l42.656,17.062c1.032,0.409,2.107,0.606,3.174,0.606c1.689,0,3.353-0.503,4.786-1.467    c2.338-1.587,3.745-4.231,3.745-7.064V290.186C264.544,285.468,260.722,281.655,256.013,281.655z M247.482,397.022l-25.594-10.237    v-36.88c0-2.849-1.425-5.511-3.796-7.098l-21.797-14.529v-29.561h51.187V397.022z"></path></g></g><g><g><path d="M262.044,190.311l-42.656-42.656c-2.448-2.44-6.108-3.174-9.299-1.851c-3.182,1.322-5.264,4.436-5.264,7.883v17.062    h-17.062V85.437h-17.062v93.843c0,4.709,3.822,8.531,8.531,8.531h34.125c4.709,0,8.531-3.822,8.531-8.531v-4.999l25.594,25.594    v30.593h-59.718c-4.709,0-8.531,3.822-8.531,8.531v33.434l-25.594-20.466v-47.092c0-4.709-3.822-8.531-8.531-8.531h-68.25v17.062    h59.718v42.656c0,2.585,1.177,5.042,3.199,6.663l42.656,34.125c1.544,1.237,3.43,1.868,5.332,1.868    c1.263,0,2.525-0.273,3.694-0.845c2.96-1.425,4.837-4.402,4.837-7.687V247.53h59.718c4.709,0,8.531-3.822,8.531-8.531v-42.656    C264.544,194.082,263.648,191.915,262.044,190.311z"></path></g></g><g><g><path d="M343.824,87.937l-62.218,62.218l-17.062-17.062V68.375h-17.062v68.25c0,2.261,0.896,4.428,2.5,6.032l25.594,25.594    c1.595,1.604,3.762,2.5,6.032,2.5c2.261,0,4.428-0.896,6.032-2.5l68.25-68.25L343.824,87.937z"></path></g></g><g><g><path d="M442.829,243.785c-1.433-2.926-4.402-4.786-7.661-4.786h-25.594v-76.781c0-4.709-3.813-8.531-8.531-8.531h-51.187    c-2.269,0-4.428,0.896-6.032,2.5l-42.656,42.656c-3.336,3.336-3.336,8.727,0,12.063l31.625,31.625v81.78    c0,4.718,3.813,8.531,8.531,8.531h34.125c2.628,0,5.11-1.22,6.731-3.293l59.718-76.781    C443.895,250.2,444.262,246.711,442.829,243.785z M371.278,315.78h-21.422v-76.781c0-2.261-0.896-4.428-2.5-6.032l-28.093-28.093    l34.125-34.125h39.124v76.781c0,4.709,3.813,8.531,8.531,8.531h16.678L371.278,315.78z"></path></g></g><g><g><path d="M297.21,491.386c-13.582,2.355-27.445,3.549-41.197,3.549c-0.026,0-0.051,0-0.077,0    c-63.771,0-123.737-24.826-168.85-69.913c-45.139-45.096-70.007-105.079-70.024-168.884c-0.008-34.364,7.192-67.644,21.405-98.919    l-15.527-7.055C7.704,183.674-0.009,219.335,0,256.138c0.017,68.361,26.669,132.635,75.015,180.955    c48.338,48.304,112.586,74.904,180.921,74.904c0.026,0,0.051,0,0.085,0c14.725,0,29.561-1.271,44.106-3.796L297.21,491.386z"></path></g></g><g><g><path d="M346.623,477.147c-9.162,3.762-18.641,6.979-28.161,9.546l4.445,16.482c10.212-2.764,20.364-6.211,30.2-10.246    L346.623,477.147z"></path></g></g><g><g><path d="M506.506,202.895C477.235,64.843,341.146-23.694,203.06,5.602l3.54,16.687C335.43-5.027,462.502,77.589,489.81,206.435    c10.528,49.583,4.752,102.315-16.252,148.468l15.527,7.064C511.591,312.521,517.767,256.027,506.506,202.895z"></path></g></g><g><g><path d="M185.528,10.312c-8.983,2.44-17.898,5.417-26.506,8.838l6.296,15.859c8.019-3.182,16.32-5.955,24.681-8.233    L185.528,10.312z"></path></g></g><g><g><path d="M151.13,45.264c-17.54-17.455-45.795-18.274-64.325-1.868L39.491,85.437H8.608c-3.447,0-6.56,2.073-7.883,5.264    S0.136,97.56,2.576,100l42.656,42.656c1.664,1.664,3.848,2.5,6.032,2.5c2.056,0,4.112-0.734,5.742-2.227l93.843-85.312    c1.732-1.57,2.739-3.779,2.79-6.117C153.69,49.171,152.785,46.911,151.13,45.264z M51.546,124.843L29.202,102.5h13.531    c2.09,0,4.104-0.759,5.665-2.15l49.728-44.183c9.444-8.369,22.864-9.7,33.57-4.189L51.546,124.843z"></path></g></g><g><g><path d="M509.441,412.123l-42.656-42.656c-3.208-3.233-8.395-3.336-11.773-0.282l-93.843,85.312    c-1.723,1.578-2.73,3.796-2.79,6.125c-0.051,2.329,0.862,4.59,2.517,6.236c9.12,9.077,21.132,13.65,33.169,13.65    c11.116,0,22.266-3.907,31.156-11.79l47.306-42.033h30.883c3.447,0,6.569-2.073,7.883-5.264    C512.614,418.231,511.881,414.563,509.441,412.123z M469.293,409.623c-2.09,0-4.104,0.768-5.665,2.158l-49.72,44.175    c-9.444,8.352-22.864,9.7-33.579,4.189l80.151-72.865l22.343,22.343H469.293z"></path></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
															</span> */}
                                </div>
                                <div className="box-title-wrap">
                                  <h3 className="box-title">
                                    Shipping Worldwide
                                  </h3>
                                  <p className="box-description">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 sm-m-b-50">
                              <div className="box">
                                <div className="box-icon icon-2 animation-horizontal">
                                  {/* <span>
																<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 508 508" style="enable-background:new 0 0 508 508;"><g><g><path d="M254,0C128.3,0,26.1,102.2,26.1,227.9c0,122.9,97.9,223.4,219.8,227.7V508l60.3-60.3l-60.3-60.3v52    c-113-4.4-203.5-97.5-203.5-211.5c0-116.7,94.9-211.6,211.6-211.6s211.6,94.9,211.6,211.6h16.3C481.9,102.2,379.7,0,254,0z     M262.1,426.6l21,21l-21,21V426.6z"></path></g></g><g><g><path d="M131.9,105.8V350h244.2V105.8H131.9z M229.6,122.1L229.6,122.1h48.8v32.6h-48.8V122.1z M359.8,333.7H148.2V122.1h65.1    v48.8h81.4v-48.8h65.1V333.7z"></path></g></g><g><g><polygon points="319.1,248.2 291.2,279.5 303.4,290.3 311,281.8 311,317.4 327.3,317.4 327.3,281.8 334.8,290.3 347,279.5   "></polygon></g></g><g><g><polygon points="251.4,248.2 223.5,279.5 235.7,290.3 243.2,281.8 243.2,317.4 259.5,317.4 259.5,281.8 267.1,290.3 279.2,279.5       "></polygon></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
															</span> */}
                                </div>
                                <div className="box-title-wrap">
                                  <h3 className="box-title">14 Days Return</h3>
                                  <p className="box-description">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="box">
                                <div className="box-icon icon-3 animation-horizontal">
                                  {/* <span>
																<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512" style="enable-background:new 0 0 512 512;"><g><g><path d="M457.987,31.531c-2.688-6.997-13.013-8.533-17.749-3.499c-21.44,18.88-48.939,29.248-77.547,29.248    c-39.424,0-75.989-19.627-97.771-52.501C262.937,1.792,259.609,0,256.025,0c-3.563,0-6.912,1.792-8.875,4.757    c-21.845,32.875-58.411,52.501-97.835,52.501c-28.928,0-56.704-10.603-78.208-29.867c-3.136-2.816-7.616-3.499-11.477-1.792    c-3.84,1.707-6.315,5.525-6.315,9.728v231.317c0,133.205,189.44,239.552,197.504,244.011c1.6,0.896,3.392,1.344,5.163,1.344    c1.771,0,3.563-0.448,5.163-1.301c8.064-4.459,197.504-110.827,197.504-244.011v-230.4    C458.777,34.688,458.563,33.067,457.987,31.531z M437.315,266.667c0,109.163-151.232,204.459-181.333,222.336    C225.859,471.125,74.649,375.936,74.649,266.667V56.811c22.165,14.165,48,21.803,74.667,21.803    c41.579,0,80.469-18.496,106.667-50.091c26.24,31.616,65.131,50.091,106.709,50.091c26.645,0,52.48-7.637,74.624-21.781V266.667z"></path></g></g><g><g><path d="M327.577,195.136c-4.16-4.16-10.923-4.16-15.083,0l-77.845,77.781l-35.072-35.115c-4.16-4.16-10.923-4.16-15.083,0    c-4.16,4.139-4.16,10.923,0,15.083l42.581,42.667c2.005,1.984,4.715,3.115,7.552,3.115s5.547-1.131,7.531-3.115l85.419-85.333    C331.737,206.059,331.737,199.296,327.577,195.136z"></path></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
															</span> */}
                                </div>
                                <div className="box-title-wrap">
                                  <h3 className="box-title">
                                    Security Payment
                                  </h3>
                                  <p className="box-description">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <footer
            id="site-footer"
            class="site-footer four-columns no-border-top"
          >
            <div class="footer">
              <div class="section-padding">
                <div class="section-container">
                  <div class="block-widget-wrap">
                    <div class="row">
                      <div class="col-lg-3 col-md-6 column-1">
                        <div class="block block-menu">
                          <h2 class="block-title">Customer Services</h2>
                          <div class="block-content">
                            <ul>
                              <li>
                                <a href="shop-grid-left.html">Contact Us</a>
                              </li>
                              <li>
                                <a href="shop-grid-left.html">
                                  Track Your Order
                                </a>
                              </li>
                              <li>
                                <a href="shop-grid-left.html">
                                  Product Care & Repair
                                </a>
                              </li>
                              <li>
                                <a href="shop-grid-left.html">
                                  Book an Appointment
                                </a>
                              </li>
                              <li>
                                <a href="shop-grid-left.html">
                                  Frequently Asked Questions
                                </a>
                              </li>
                              <li>
                                <a href="shop-grid-left.html">
                                  Shipping & Returns
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-6 column-2">
                        <div class="block block-menu">
                          <h2 class="block-title">About Us</h2>
                          <div class="block-content">
                            <ul>
                              <li>
                                <a href="#">About Us</a>
                              </li>
                              <li>
                                <a href="#">FAQ</a>
                              </li>
                              <li>
                                <a href="#">Our Producers</a>
                              </li>
                              <li>
                                <a href="#">Sitemap</a>
                              </li>
                              <li>
                                <a href="#">Terms & Conditions</a>
                              </li>
                              <li>
                                <a href="#">Privacy Policy</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-6 column-3">
                        <div class="block block-menu">
                          <h2 class="block-title">Catalog</h2>
                          <div class="block-content">
                            <ul>
                              <li>
                                <a href="shop-grid-left.html">Earrings</a>
                              </li>
                              <li>
                                <a href="shop-grid-left.html">Necklaces</a>
                              </li>
                              <li>
                                <a href="shop-grid-left.html">Bracelets</a>
                              </li>
                              <li>
                                <a href="shop-grid-left.html">Rings</a>
                              </li>
                              <li>
                                <a href="shop-grid-left.html">Jewelry Box</a>
                              </li>
                              <li>
                                <a href="shop-grid-left.html">Studs</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-6 column-4">
                        <div class="block block-newsletter">
                          <h2 class="block-title">Our Newsletter</h2>
                          <div class="block-content">
                            <div class="newsletter-text">
                              Sign up for the latest Ice offers and exclusives.
                            </div>
                            <form
                              action=""
                              method="post"
                              class="newsletter-form"
                            >
                              <input
                                type="email"
                                name="your-email"
                                value=""
                                size="40"
                                placeholder="Email address"
                              />
                              <span class="btn-submit">
                                <input type="submit" value="Subscribe" />
                              </span>
                            </form>
                          </div>
                        </div>

                        <div class="block block-social">
                          <ul class="social-link">
                            <li>
                              <a href="#">
                                <i class="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-dribbble"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-behance"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer-bottom">
              <div class="section-padding">
                <div class="section-container">
                  <div class="block-widget-wrap">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="footer-left">
                          <p class="copyright">
                            Copyright © 2023. All Right Reserved
                          </p>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="footer-right">
                          <div class="block block-image">
                            <img
                              width="309"
                              height="32"
                              src="media/payments.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>

          <div class="back-top button-show">
            <i class="arrow_carrot-up"></i>
          </div>

          <div class="search-overlay">
            <div class="close-search"></div>
            <div class="wrapper-search">
              <form
                role="search"
                method="get"
                class="search-from ajax-search"
                action=""
              >
                <a href="#" class="search-close"></a>
                <div class="search-box">
                  <button id="searchsubmit" class="btn" type="submit">
                    <i class="icon-search"></i>
                  </button>
                  <input
                    type="text"
                    autocomplete="off"
                    value=""
                    name="s"
                    class="input-search s"
                    placeholder="Search..."
                  />
                  <div class="content-menu_search">
                    <label>Suggested</label>
                    <ul id="menu_search" class="menu">
                      <li>
                        <a href="#">Earrings</a>
                      </li>
                      <li>
                        <a href="#">Necklaces</a>
                      </li>
                      <li>
                        <a href="#">Bracelets</a>
                      </li>
                      <li>
                        <a href="#">Jewelry Box</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="wishlist-popup">
            <div class="wishlist-popup-inner">
              <div class="wishlist-popup-content">
                <div class="wishlist-popup-content-top">
                  <span class="wishlist-name">Wishlist</span>
                  <span class="wishlist-count-wrapper">
                    <span class="wishlist-count">2</span>
                  </span>
                  <span class="wishlist-popup-close"></span>
                </div>
                <div class="wishlist-popup-content-mid">
                  <table class="wishlist-items">
                    <tbody>
                      <tr class="wishlist-item">
                        <td class="wishlist-item-remove">
                          <span></span>
                        </td>
                        <td class="wishlist-item-image">
                          <a href="shop-details.html">
                            <img
                              width="600"
                              height="600"
                              src="media/product/3.jpg"
                              alt=""
                            />
                          </a>
                        </td>
                        <td class="wishlist-item-info">
                          <div class="wishlist-item-name">
                            <a href="shop-details.html">Twin Hoops</a>
                          </div>
                          <div class="wishlist-item-price">
                            <span>$150.00</span>
                          </div>
                          <div class="wishlist-item-time">June 4, 2022</div>
                        </td>
                        <td class="wishlist-item-actions">
                          <div class="wishlist-item-stock">In stock</div>
                          <div class="wishlist-item-add">
                            <div data-title="Add to cart">
                              <a rel="nofollow" href="#">
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="wishlist-item">
                        <td class="wishlist-item-remove">
                          <span></span>
                        </td>
                        <td class="wishlist-item-image">
                          <a href="shop-details.html">
                            <img
                              width="600"
                              height="600"
                              src="media/product/4.jpg"
                              alt=""
                            />
                          </a>
                        </td>
                        <td class="wishlist-item-info">
                          <div class="wishlist-item-name">
                            <a href="shop-details.html">
                              Yilver And Turquoise Earrings
                            </a>
                          </div>
                          <div class="wishlist-item-price">
                            <del aria-hidden="true">
                              <span>$150.00</span>
                            </del>
                            <ins>
                              <span>$100.00</span>
                            </ins>
                          </div>
                          <div class="wishlist-item-time">June 4, 2022</div>
                        </td>
                        <td class="wishlist-item-actions">
                          <div class="wishlist-item-stock">In stock</div>
                          <div class="wishlist-item-add">
                            <div data-title="Add to cart">
                              <a rel="nofollow" href="#">
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="wishlist-popup-content-bot">
                  <div class="wishlist-popup-content-bot-inner">
                    <a class="wishlist-page" href="shop-wishlist.html">
                      Open wishlist page
                    </a>
                    <span class="wishlist-continue" data-url="">
                      Continue shopping
                    </span>
                  </div>
                  <div class="wishlist-notice wishlist-notice-show">
                    Added to the wishlist!
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="compare-popup">
            <div class="compare-popup-inner">
              <div class="compare-table">
                <div class="compare-table-inner">
                  <a
                    href="#"
                    id="compare-table-close"
                    class="compare-table-close"
                  >
                    <span class="compare-table-close-icon"></span>
                  </a>
                  <div class="compare-table-items">
                    <table id="product-table" class="product-table">
                      <thead>
                        <tr>
                          <th>
                            <a href="#" class="compare-table-settings">
                              Settings
                            </a>
                          </th>
                          <th>
                            <a href="shop-details.html">Twin Hoops</a>{" "}
                            <span class="remove">remove</span>
                          </th>
                          <th>
                            <a href="shop-details.html">Medium Flat Hoops</a>{" "}
                            <span class="remove">remove</span>
                          </th>
                          <th>
                            <a href="shop-details.html">
                              Bold Pearl Hoop Earrings
                            </a>{" "}
                            <span class="remove">remove</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="tr-image">
                          <td class="td-label">Image</td>
                          <td>
                            <a href="shop-details.html">
                              <img
                                width="600"
                                height="600"
                                src="media/product/3.jpg"
                                alt=""
                              />
                            </a>
                          </td>
                          <td>
                            <a href="shop-details.html">
                              <img
                                width="600"
                                height="600"
                                src="media/product/1.jpg"
                                alt=""
                              />
                            </a>
                          </td>
                          <td>
                            <a href="shop-details.html">
                              <img
                                width="600"
                                height="600"
                                src="media/product/2.jpg"
                                alt=""
                              />
                            </a>
                          </td>
                        </tr>
                        <tr class="tr-sku">
                          <td class="td-label">SKU</td>
                          <td>VN00189</td>
                          <td></td>
                          <td>D1116</td>
                        </tr>
                        <tr class="tr-rating">
                          <td class="td-label">Rating</td>
                          <td>
                            <div class="star-rating">
                              <span style={{ width: "80%" }}></span>
                            </div>
                          </td>
                          <td>
                            <div class="star-rating">
                              <span style={{ width: "100%" }}></span>
                            </div>
                          </td>
                          <td></td>
                        </tr>
                        <tr class="tr-price">
                          <td class="td-label">Price</td>
                          <td>
                            <span class="amount">$150.00</span>
                          </td>
                          <td>
                            <del>
                              <span class="amount">$150.00</span>
                            </del>{" "}
                            <ins>
                              <span class="amount">$100.00</span>
                            </ins>
                          </td>
                          <td>
                            <span class="amount">$200.00</span>
                          </td>
                        </tr>
                        <tr class="tr-add-to-cart">
                          <td class="td-label">Add to cart</td>
                          <td>
                            <div data-title="Add to cart">
                              <a href="#" class="button">
                                Add to cart
                              </a>
                            </div>
                          </td>
                          <td>
                            <div data-title="Add to cart">
                              <a href="#" class="button">
                                Add to cart
                              </a>
                            </div>
                          </td>
                          <td>
                            <div data-title="Add to cart">
                              <a href="#" class="button">
                                Add to cart
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr class="tr-description">
                          <td class="td-label">Description</td>
                          <td>
                            Phasellus sed volutpat orci. Fusce eget lore mauris
                            vehicula elementum gravida nec dui. Aenean aliquam
                            varius ipsum, non ultricies tellus sodales eu. Donec
                            dignissim viverra nunc, ut aliquet magna posuere
                            eget.
                          </td>
                          <td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                          </td>
                          <td>
                            The EcoSmart Fleece Hoodie full-zip hooded jacket
                            provides medium weight fleece comfort all year
                            around. Feel better in this sweatshirt because Hanes
                            keeps plastic bottles of landfills by using recycled
                            polyester.7.8 ounce fleece sweatshirt made with up
                            to 5 percent polyester created from recycled
                            plastic.
                          </td>
                        </tr>
                        <tr class="tr-content">
                          <td class="td-label">Content</td>
                          <td>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum. Sed ut
                            perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem.
                          </td>
                          <td>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum. Sed ut
                            perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem.
                          </td>
                          <td>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum. Sed ut
                            perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem.
                          </td>
                        </tr>
                        <tr class="tr-dimensions">
                          <td class="td-label">Dimensions</td>
                          <td>N/A</td>
                          <td>N/A</td>
                          <td>N/A</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="quickview-popup">
            <div id="quickview-container">
              <div class="quickview-container">
                <a href="#" class="quickview-close"></a>
                <div class="quickview-notices-wrapper"></div>
                <div class="product single-product product-type-simple">
                  <div class="product-detail">
                    <div class="row">
                      <div class="img-quickview">
                        <div class="product-images-slider">
                          <div id="quickview-slick-carousel">
                            <div class="images">
                              <div class="scroll-image">
                                <div class="slick-wrap">
                                  <div
                                    class="slick-sliders image-additional"
                                    data-dots="true"
                                    data-columns4="1"
                                    data-columns3="1"
                                    data-columns2="1"
                                    data-columns1="1"
                                    data-columns="1"
                                    data-nav="true"
                                  >
                                    <div class="img-thumbnail slick-slide">
                                      <a
                                        href="media/product/3.jpg"
                                        class="image-scroll"
                                        title=""
                                      >
                                        <img
                                          width="900"
                                          height="900"
                                          src="media/product/3.jpg"
                                          alt=""
                                        />
                                      </a>
                                    </div>
                                    <div class="img-thumbnail slick-slide">
                                      <a
                                        href="media/product/3-2.jpg"
                                        class="image-scroll"
                                        title=""
                                      >
                                        <img
                                          width="900"
                                          height="900"
                                          src="media/product/3-2.jpg"
                                          alt=""
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="quickview-single-info">
                        <div class="product-content-detail entry-summary">
                          <h1 class="product-title entry-title">Twin Hoops</h1>
                          <div class="price-single">
                            <div class="price">
                              <del>
                                <span>$150.00</span>
                              </del>
                              <span>$100.00</span>
                            </div>
                          </div>
                          <div class="product-rating">
                            <div
                              class="star-rating"
                              role="img"
                              aria-label="Rated 4.00 out of 5"
                            >
                              <span style={{ width: "80%" }}>
                                Rated <strong class="rating">4.00</strong> out
                                of 5 based on <span class="rating">1</span>{" "}
                                customer rating
                              </span>
                            </div>
                            <a href="#" class="review-link">
                              (<span class="count">1</span> customer review)
                            </a>
                          </div>
                          <div class="description">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis…
                            </p>
                          </div>
                          <form
                            class="cart"
                            method="post"
                            enctype="multipart/form-data"
                          >
                            <div class="quantity-button">
                              <div class="quantity">
                                <button type="button" class="plus">
                                  +
                                </button>
                                <input
                                  type="number"
                                  class="input-text qty text"
                                  step="1"
                                  min="1"
                                  max=""
                                  name="quantity"
                                  value="1"
                                  title="Qty"
                                  size="4"
                                  placeholder=""
                                  inputmode="numeric"
                                  autocomplete="off"
                                />
                                <button type="button" class="minus">
                                  -
                                </button>
                              </div>
                              <button
                                type="submit"
                                class="single-add-to-cart-button button alt"
                              >
                                Add to cart
                              </button>
                            </div>
                            <button class="button quick-buy">Buy It Now</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>

          <div class="popup-shadow"></div>
          <div class="newsletter-popup">
            <a href="#" class="newsletter-close"></a>
            <div class="newsletter-container">
              <div class="newsletter-img">
                <img src="/media/banner/newsletter-popup.jpg" alt="" />
              </div>
              <div class="newsletter-form">
                <form action="" method="post">
                  <div class="newsletter-title">
                    <div class="title">
                      Get
                      <br /> free shipping
                    </div>
                    <div class="sub-title">
                      on your first order. Offer ends soon.
                    </div>
                  </div>
                  <div class="newsletter-input clearfix">
                    <input
                      type="email"
                      name="your-email"
                      size="40"
                      class="form-control"
                      placeholder="Enter Your Email ..."
                    />
                    <input
                      type="submit"
                      value="Subscribe"
                      class="form-control"
                    />
                  </div>
                  <div class="newsletter-no">no thanks !</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
    </Fragment>
  );
};

export default Index;
