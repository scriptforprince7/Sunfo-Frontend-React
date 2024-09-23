import React from "react";

function Blogdetails_left() {
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-12 col-12 sidebar left-sidebar blog-details-sidebar">
        <div className="block block-post-search">
          <div className="block-title">
            <h2>Search</h2>
          </div>
          <div className="block-content">
            <form method="get" className="search-from" action="">
              <input
                type="text"
                value=""
                name="s"
                className="s"
                placeholder="Search..."
              />
              <button className="btn" type="submit">
                <i className="icon-search"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="block block-post-cats">
          <div className="block-title">
            <h2>Categories</h2>
          </div>
          <div className="block-content">
            <div className="post-cats-list">
              <ul>
                <li>
                  <a href="blog-grid-left.html">
                    Bracelets <span className="count">9</span>
                  </a>
                </li>
                <li>
                  <a href="blog-grid-left.html">
                    Earrings <span className="count">4</span>
                  </a>
                </li>
                <li>
                  <a href="blog-grid-left.html">
                    Necklaces <span className="count">3</span>
                  </a>
                </li>
                <li>
                  <a href="blog-grid-left.html">
                    News <span className="count">6</span>
                  </a>
                </li>
                <li className="current">
                  <a href="blog-grid-left.html">
                    Wedding & Bridal <span className="count">2</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="block block-posts">
          <div className="block-title">
            <h2>Recent Posts</h2>
          </div>
          <div className="block-content">
            <ul className="posts-list">
              <li className="post-item">
                <a href="blog-details-right.html" className="post-image">
                  <img src="media/blog/1.jpg" />
                </a>
                <div className="post-content">
                  <h2 className="post-title">
                    <a href="blog-details-right.html">
                      Bridial Fair Collections 2023
                    </a>
                  </h2>
                  <div className="post-time">
                    <span className="post-date">May 30, 2023</span>
                  </div>
                </div>
              </li>
              <li className="post-item">
                <a href="blog-details-right.html" className="post-image">
                  <img src="media/blog/2.jpg" />
                </a>
                <div className="post-content">
                  <h2 className="post-title">
                    <a href="blog-details-right.html">Our Sterling Silver</a>
                  </h2>
                  <div className="post-time">
                    <span className="post-date">Aug 24, 2023</span>
                  </div>
                </div>
              </li>
              <li className="post-item">
                <a href="blog-details-right.html" className="post-image">
                  <img src="media/blog/3.jpg" />
                </a>
                <div className="post-content">
                  <h2 className="post-title">
                    <a href="blog-details-right.html">
                      New Season Modern Gold Earrings
                    </a>
                  </h2>
                  <div className="post-time">
                    <span className="post-date">Dec 06, 2023</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="block block-post-archives">
          <div className="block-title">
            <h2>Archives</h2>
          </div>
          <div className="block-content">
            <div className="post-archives-list">
              <ul>
                <li>
                  <a href="blog-grid-left.html">May 2023</a>
                </li>
                <li>
                  <a href="blog-grid-left.html">April 2023</a>
                </li>
                <li>
                  <a href="blog-grid-left.html">August 2023</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="block block-post-tags">
          <div className="block-title">
            <h2>Tags</h2>
          </div>
          <div className="block-content">
            <div className="post-tags-list">
              <ul>
                <li>
                  <a href="blog-grid-left.html">Jewelry</a>
                </li>
                <li>
                  <a href="blog-grid-left.html">Ring Styles</a>
                </li>
                <li>
                  <a href="blog-grid-left.html">Gift Ideas</a>
                </li>
                <li>
                  <a href="blog-grid-left.html">Wedding</a>
                </li>
                <li>
                  <a href="blog-grid-left.html">Bracelets</a>
                </li>
                <li>
                  <a href="blog-grid-left.html">Necklaces</a>
                </li>
                <li>
                  <a href="blog-grid-left.html">Unique</a>
                </li>
                <li>
                  <a href="blog-grid-left.html">Glossary</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogdetails_left;
