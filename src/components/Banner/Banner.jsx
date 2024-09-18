import React from "react";
import "../../assets/assets/css/responsive.css";
import "../../assets/assets/css/app.css";
import '../../assets/assets/js/app'



export default function Banner() {
  return (
    <div>
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
                    <div className="subtitle-slider">Now up to 70% off*</div>
                    <h2 className="title-slider">MID YEAR SALE</h2>
                    <a
                      className="button-slider button button-white button-outline thick-border"
                      href="#"
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
                    <div className="subtitle-slider">Oh, Hello Newness!</div>
                    <h2 className="title-slider">MID YEAR SALE</h2>
                    <a
                      className="button-slider button button-white button-outline thick-border"
                      href="#"
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
                    <div className="subtitle-slider">Best of the Best</div>
                    <h2 className="title-slider">MID YEAR SALE</h2>
                    <a
                      className="button-slider button button-white button-outline thick-border"
                      href="#"
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
    </div>
  );
}
