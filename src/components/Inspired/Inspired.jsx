import React from "react";
import "../../assets/assets/css/responsive.css";
import "../../assets/assets/css/app.css";
import "../../assets/assets/js/app";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Inspired() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: <i className="slick-arrow fa fa-angle-left" />,
    nextArrow: <i className="slick-arrow fa fa-angle-right" />,
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

  const posts = [
    {
      id: 1,
      date: { day: "30", month: "May" },
      image: "media/blog/1.jpg",
      title: "Bridial Fair Collections 2023",
      category: "Backpack",
    },
    {
      id: 2,
      date: { day: "06", month: "Jun" },
      image: "media/blog/2.jpg",
      title: "Our Sterling Silver",
      category: "Backpack",
    },
    {
      id: 3,
      date: { day: "14", month: "Aug" },
      image: "media/blog/3.jpg",
      title: "New Season Modern Gold Earrings",
      category: "Backpack",
    },
    {
      id: 4,
      date: { day: "10", month: "Sep" },
      image: "media/blog/4.jpg",
      title: "Glossary of Jewelry Terms",
      category: "Backpack",
    },
  ];

  return (
    <div>
      {/* <section className="section section-padding top-border p-t-70 m-b-70">
        <div className="section-container">
          <div className="block block-posts slider">
            <div className="block-widget-wrap">
              <div className="block-title">
                <div className="sub-title">News &amp; Inspired</div>
                <h2>Jewellery Style Files</h2>
              </div>
              <div className="block-content">
                <div className="posts-wrap slick-wrap">
                  <Slider {...settings}>
                    {posts.map((post) => (
                      <div key={post.id} className="post-grid post">
                        <div className="post-inner">
                          <div className="post-image">
                            <div className="post-date-wrap">
                              <div className="post-date">
                                <span>{post.date.day}</span>
                                <span>{post.date.month}</span>
                              </div>
                            </div>
                            <a
                              className="post-thumbnail"
                              href="blog-details-right.html"
                            >
                              <img
                                width="720"
                                height="484"
                                src={post.image}
                                alt={post.title}
                              />
                            </a>
                          </div>
                          <div className="post-content">
                            <div className="post-categories">
                              <a href="blog-grid-right.html">{post.category}</a>
                            </div>
                            <h2 className="post-title">
                              <a href="blog-details-right.html">{post.title}</a>
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
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
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
                      <h3 className="box-title">Shipping Worldwide</h3>
                      <p className="box-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
                      <h3 className="box-title">Security Payment</h3>
                      <p className="box-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
  );
}
