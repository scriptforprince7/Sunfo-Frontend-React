import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/assets/css/responsive.css";
import "../../assets/assets/css/app.css";


function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex",justifyContent:'center',alignItems:'center', background: "black" }}
        onClick={onClick}
      >
        <i className="arrow left"></i>
      </div>
    );
  }
  
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex",justifyContent:'center',alignItems:'center', background: "black" }}
        onClick={onClick}
      >
        <i className="arrow right"></i>
      </div>
    );
  }
  
  function Product_left() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
  
    // Settings for the thumbnail slider
    const thumbnailSettings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      focusOnSelect: true,
      asNavFor: nav1,
      arrows: false,
    };
  
    // Settings for the main image slider
    const mainImageSettings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: nav2,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
    };
  
  return (
    <>
      <div className="product-images col-lg-7 col-md-12 col-12">
        <div className="row">
          {/* Thumbnail Slider */}
          <div className="col-md-2">
            <div className="content-thumbnail-scroll">
              <Slider
                {...thumbnailSettings}
                ref={(slider) => setNav2(slider)}
                className="image-thumbnail"
              >
                <div className="img-item">
                  <span className="img-thumbnail-scroll">
                    <img width="600" height="600" src="media/product/1.jpg" alt="Product" />
                  </span>
                </div>
                <div className="img-item">
                  <span className="img-thumbnail-scroll">
                    <img width="600" height="600" src="media/product/1-2.jpg" alt="Product" />
                  </span>
                </div>
                <div className="img-item">
                  <span className="img-thumbnail-scroll">
                    <img width="600" height="600" src="media/product/2.jpg" alt="Product" />
                  </span>
                </div>
                <div className="img-item">
                  <span className="img-thumbnail-scroll">
                    <img width="600" height="600" src="media/product/2-2.jpg" alt="Product" />
                  </span>
                </div>
                <div className="img-item">
                  <span className="img-thumbnail-scroll">
                    <img width="600" height="600" src="media/product/3.jpg" alt="Product" />
                  </span>
                </div>
              </Slider>
            </div>
          </div>

          {/* Main Image Slider */}
          <div className="col-md-10">
            <div className="scroll-image main-image">
              <Slider
                {...mainImageSettings}
                ref={(slider) => setNav1(slider)}
                className="image-additional"
              >
                <div className="img-item">
                  <img width="900" height="900" src="media/product/1.jpg" alt="Product" />
                </div>
                <div className="img-item">
                  <img width="900" height="900" src="media/product/1-2.jpg" alt="Product" />
                </div>
                <div className="img-item">
                  <img width="900" height="900" src="media/product/2.jpg" alt="Product" />
                </div>
                <div className="img-item">
                  <img width="900" height="900" src="media/product/2-2.jpg" alt="Product" />
                </div>
                <div className="img-item">
                  <img width="900" height="900" src="media/product/3.jpg" alt="Product" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .product-images .slick-arrow {
          z-index: 1;
          
        }
        .product-images .slick-prev {
          left: 10px;
        }
        .product-images .slick-next {
          right: 10px;
        }
      `}</style>
    </>
  );
}

export default Product_left;