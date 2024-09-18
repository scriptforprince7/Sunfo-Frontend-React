import React from "react";
import "../../assets/assets/css/responsive.css";
import "../../assets/assets/css/app.css";
import "../../assets/assets/js/app";

function Productbanner() {
  return (
    <div>
      <div id="title" className="page-title">
        <div className="section-container">
          <div className="content-title-heading">
            <h1 className="text-title-heading">Bora Armchair</h1>
          </div>
          <div className="breadcrumbs">
            <a href="index.html">Home</a>
            <span className="delimiter"></span>
            <a href="shop-grid-left.html">Shop</a>
            <span className="delimiter"></span>Bora Armchair
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productbanner;
