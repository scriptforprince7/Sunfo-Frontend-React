import React from "react";

function Product_right() {
  return (
    <>
      <div className="product-info col-lg-5 col-md-12 col-12 ">
        <h1 className="title">Bora Armchair</h1>
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
            (3<span> reviews</span>)
          </div>
        </div>
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="variations">
          <table cellspacing="0">
            <tbody>
              <tr>
                <td className="label">Size</td>
                <td className="attributes">
                  <ul className="text">
                    <li>
                      <span>L</span>
                    </li>
                    <li>
                      <span>M</span>
                    </li>
                    <li>
                      <span>S</span>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="label">Color</td>
                <td className="attributes">
                  <ul className="colors">
                    <li>
                      <span className="color-1"></span>
                    </li>
                    <li>
                      <span className="color-2"></span>
                    </li>
                    <li>
                      <span className="color-3"></span>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="buttons">
          <div className="add-to-cart-wrap">
            <div className="quantity">
              <button type="button" className="plus">
                +
              </button>
              <input
                type="number"
                className="qty"
                step="1"
                min="0"
                max=""
                name="quantity"
                value="1"
                title="Qty"
                size="4"
                placeholder=""
                inputmode="numeric"
                autocomplete="off"
              />
              <button type="button" className="minus">
                -
              </button>
            </div>
            <div className="btn-add-to-cart">
              <a href="#" tabindex="0">
                Add to cart
              </a>
            </div>
          </div>
          <div className="btn-quick-buy" data-title="Wishlist">
            <button className="product-btn">Buy It Now</button>
          </div>
          <div className="btn-wishlist" data-title="Wishlist">
            <button className="product-btn">Add to wishlist</button>
          </div>
          <div className="btn-compare" data-title="Compare">
            <button className="product-btn">Compare</button>
          </div>
        </div>
        <div className="product-meta">
          <span className="sku-wrapper">
            SKU: <span className="sku">D2300-3-2-2</span>
          </span>
          <span className="posted-in">
            Category:{" "}
            <a href="#" rel="tag">
              Bracelets
            </a>
          </span>
          <span className="tagged-as">
            Tags:{" "}
            <a href="#" rel="tag">
              Hot
            </a>
            ,{" "}
            <a href="#" rel="tag">
              Trend
            </a>
          </span>
        </div>
        <div className="social-share">
          <a href="#" title="Facebook" className="share-facebook" target="_blank">
            <i className="fa fa-facebook"></i>Facebook
          </a>
          <a href="#" title="Twitter" className="share-twitter">
            <i className="fa fa-twitter"></i>Twitter
          </a>
          <a href="#" title="Pinterest" className="share-pinterest">
            <i className="fa fa-pinterest"></i>Pinterest
          </a>
        </div>
      </div>
    </>
  );
}

export default Product_right;
