import React from "react";
import Slider from "react-slick";
import "../../assets/assets/css/responsive.css";
import "../../assets/assets/css/app.css";
import "../../assets/assets/js/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <i className="fa fa-angle-right" />,
    prevArrow: <i className="fa fa-angle-left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="section section-padding m-b-70">
      <div className="section-container">

        <div className="block block-testimonial layout-2">

          <div className="block-widget-wrap">
          <h2 className="newsletter-title"></h2>

            <div className="testimonial-wrap slick-wrap">
              <Slider {...settings}>
                {/* Testimonial 1 */}
                <div
                  className="testimonial-content slick-slide slick-active"
                 
                >
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="testimonial-icon">
                       
                      </div>
                      <h2 className="testimonial-title">“Fabulous Grounds”</h2>
                      <div className="testimonial-excerpt">
                        Blood bank canine teeth larynx occupational therapist
                        oncologist optician plaque spinal tap stat strep...
                      </div>
                      
                    </div>
                    <div className="testimonial-image image-position-top">
                      <div className="thumbnail">
                        <img
                          width="110"
                          height="110"
                          src="media/testimonial/2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="testimonial-info">
                        <h2 className="testimonial-customer-name">
                          Saitama One
                        </h2>
                        <div className="rating">
                          <div className="star star-4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div
                  className="testimonial-content slick-slide slick-active"
                  style="width: 458px;"
                  data-slick-index="1"
                  aria-hidden="false"
                  tabIndex="-1"
                >
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="testimonial-icon">
                      </div>
                      <h2 className="testimonial-title">“Fabulous Grounds”</h2>
                      <div className="testimonial-excerpt">
                        Blood bank canine teeth larynx occupational therapist
                        oncologist optician plaque spinal tap stat strep...
                      </div>
                    </div>
                    <div className="testimonial-image image-position-top">
                      <div className="thumbnail">
                        <img
                          width="110"
                          height="110"
                          src="media/testimonial/2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="testimonial-info">
                        <h2 className="testimonial-customer-name">
                          Saitama One
                        </h2>
                        <div className="rating">
                          <div className="star star-4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div
                  className="testimonial-content slick-slide slick-active"
                  style="width: 458px;"
                  data-slick-index="1"
                  aria-hidden="false"
                  tabIndex="-1"
                >
                  <div className="item">
                    <div className="testimonial-item">
                      <div className="testimonial-icon">
                        
                      </div>
                      <h2 className="testimonial-title">“Fabulous Grounds”</h2>
                      <div className="testimonial-excerpt">
                        Blood bank canine teeth larynx occupational therapist
                        oncologist optician plaque spinal tap stat strep...
                      </div>
                    </div>
                    <div className="testimonial-image image-position-top">
                      <div className="thumbnail">
                        <img
                          width="110"
                          height="110"
                          src="media/testimonial/2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="testimonial-info">
                        <h2 className="testimonial-customer-name">
                          Saitama One
                        </h2>
                        <div className="rating">
                          <div className="star star-4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
