import React from "react";

const Blog_left_section = () => {
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-12 col-12 sidebar left-sidebar md-b-50">
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
                  <a href="#">
                    Bracelets <span className="count">9</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Earrings <span className="count">4</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Necklaces <span className="count">3</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    News <span className="count">6</span>
                  </a>
                </li>
                <li className="current">
                  <a href="#">
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
                <a href="#" className="post-image">
                  <img src="media/blog/1.jpg" />
                </a>
                <div className="post-content">
                  <h2 className="post-title">
                    <a href="#">
                      Bridial Fair Collections 2023
                    </a>
                  </h2>
                  <div className="post-time">
                    <span className="post-date">May 30, 2023</span>
                  </div>
                </div>
              </li>
              <li className="post-item">
                <a href="#" className="post-image">
                  <img src="media/blog/2.jpg" />
                </a>
                <div className="post-content">
                  <h2 className="post-title">
                    <a href="#">Our Sterling Silver</a>
                  </h2>
                  <div className="post-time">
                    <span className="post-date">Aug 24, 2023</span>
                  </div>
                </div>
              </li>
              <li className="post-item">
                <a href="#" className="post-image">
                  <img src="media/blog/3.jpg" />
                </a>
                <div className="post-content">
                  <h2 className="post-title">
                    <a href="#">
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
                  <a href="#">May 2023</a>
                </li>
                <li>
                  <a href="#">April 2023</a>
                </li>
                <li>
                  <a href="#">August 2022</a>
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
                  <a href="#">Jewelry</a>
                </li>
                <li>
                  <a href="#">Ring Styles</a>
                </li>
                <li>
                  <a href="#">Gift Ideas</a>
                </li>
                <li>
                  <a href="#">Wedding</a>
                </li>
                <li>
                  <a href="#">Bracelets</a>
                </li>
                <li>
                  <a href="#">Necklaces</a>
                </li>
                <li>
                  <a href="#">Unique</a>
                </li>
                <li>
                  <a href="#">Glossary</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog_left_section;
