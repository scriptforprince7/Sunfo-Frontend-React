import React from "react";
import { Link } from "react-router-dom";
import "../../assets/assets/css/responsive.css";
import "../../assets/assets/css/app.css";
import '../../assets/assets/js/app'

export default function Footer() {
  return (
    <div>
      <footer
        id="site-footer"
        className="site-footer four-columns no-border-top"
      >
        <div className="footer">
          <div className="section-padding">
            <div className="section-container">
              <div className="block-widget-wrap">
                <div className="row">
                  <div className="col-lg-3 col-md-6 column-1">
                    <div className="block block-menu">
                      <h2 className="block-title">Customer Services</h2>
                      <div className="block-content">
                        <ul>
                          <li>
                            <a href="shop-grid-left.html">Contact Us</a>
                          </li>
                          <li>
                            <a href="shop-grid-left.html">Track Your Order</a>
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
                            <a href="shop-grid-left.html">Shipping & Returns</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 column-2">
                    <div className="block block-menu">
                      <h2 className="block-title">About Us</h2>
                      <div className="block-content">
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
                  <div className="col-lg-3 col-md-6 column-3">
                    <div className="block block-menu">
                      <h2 className="block-title">Catalog</h2>
                      <div className="block-content">
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
                  <div className="col-lg-3 col-md-6 column-4">
                    <div className="block block-newsletter">
                      <h2 className="block-title">Our Newsletter</h2>
                      <div className="block-content">
                        <div className="newsletter-text">
                          Sign up for the latest Ice offers and exclusives.
                        </div>
                        <form
                          action=""
                          method="post"
                          className="newsletter-form"
                        >
                          <input
                            type="email"
                            name="your-email"
                            value=""
                            size="40"
                            placeholder="Email address"
                          />
                          <span className="btn-submit">
                            <input type="submit" value="Subscribe" />
                          </span>
                        </form>
                      </div>
                    </div>

                    <div className="block block-social">
                      <ul className="social-link">
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-dribbble"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-behance"></i>
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
        <div className="footer-bottom">
          <div className="section-padding">
            <div className="section-container">
              <div className="block-widget-wrap">
                <div className="row">
                  <div className="col-md-6">
                    <div className="footer-left">
                      <p className="copyright">
                        Copyright © 2023. All Right Reserved
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="footer-right">
                      <div className="block block-image">
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
    </div>
  );
}
