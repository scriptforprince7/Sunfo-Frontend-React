import React from "react";

const Blog_details_main = () => {
  return (
    <>
      <div className="col-xl-9 col-lg-9 col-md-12 col-12 md-b-30 blog-details-content">
        <div className="post-details">
          <div className="post-image">
            <img src="media/blog/1.jpg" alt="" />
          </div>
          <h2 className="post-title">Bridial Fair Collections 2023</h2>
          <div className="post-meta">
            <span className="post-categories">
              <i className="icon_folder-alt"></i>{" "}
              <a href="#">Wedding & Bridal</a>
            </span>
            <span className="post-time">
              <i className="icon_clock_alt"></i> July 24, 2023
            </span>
            <span className="post-comment">
              <i className="icon_comment_alt"></i> 1 Comment
            </span>
          </div>
          <div className="post-content clearfix">
            <p>
              Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero,
              non adipiscing dolor urna a orci. Aenean commodo ligula eget
              dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris
              ipsum aliquam libero, non adipiscing dolor urna a orci. non,
              velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus
              leo dolor, tempus non, auctor et, hendrerit quis, nisiVivamus
              aliquet elit ac nisl. Ut a nisl id ante tempus hendrerit.Sed
              mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non
              adipiscing dolor urna a orci. Aenean commodo ligula eget dolor.
              Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum
              aliquam libero, non adipiscing dolor urna a orci. Duis arcu
              tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.
            </p>
            <p>
              Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Nulla
              neque dolor, sagittis eget, iaculis quis, molestie non, velit.
              Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo
              dolor, tempus non, auctor et, hendrerit quis, nisi.
            </p>
            <blockquote>
              <p>
                <i className="icon-straight-quotes"></i>Vivamus aliquet elit ac
                nisl. Ut a nisl id ante tempus hendrerit. Phasellus accumsan
                cursus velitid ante tempus hendrerit. Donec interdum, metus et
                hendrerit aliquet”
              </p>
              <h2>ROBERT SMITH</h2>
            </blockquote>
            <p>
              Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero,
              non adipiscing dolor urna a orci. Aenean commodo ligula eget
              dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris
              ipsum aliquam libero, non adipiscing dolor urna a orci. Duis arcu
              tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.
            </p>
            <p>
              Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Nulla
              neque dolor, sagittis eget, iaculis quis, molestie non, velit.
              Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo
              dolor, tempus non, auctor et, hendrerit quis, nisi.
            </p>
            <div className="content-img">
              <img
                width="1410"
                height="460"
                src="media/blog/details.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="post-content-entry">
            <div className="tags-links">
              <label>Tags :</label>{" "}
              <a href="#" rel="tag">
                Wedding
              </a>{" "}
              <a href="#" rel="tag">
                Glossary
              </a>
            </div>
            <div className="entry-social-share">
              <label>Share :</label>
              <div className="social-share">
                <a
                  href="#"
                  title="Facebook"
                  className="share-facebook"
                  target="_blank"
                >
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
          </div>
          <div className="prev-next-post">
            <div className="previous-post">
              <a href="#" rel="prev">
                <div className="hover-extend active">
                  <span>Previous</span>
                </div>
                <h2 className="title">Our Sterling Silver</h2>
              </a>
            </div>
            <div className="next-post">
              <a href="#" rel="next">
                <div className="hover-extend active">
                  <span>Next</span>
                </div>
                <h2 className="title">New Season Modern Gold Earrings</h2>
              </a>
            </div>
          </div>
          <div id="comments" className="comments-area">
            <h3 className="comments-title">1 Comment</h3>
            <div className="comments-list">
              <div className="comment-item">
                <div className="comment-avatar">
                  <img
                    alt=""
                    src="media/user.jpg"
                    className="avatar"
                    height="70"
                    width="70"
                  />
                </div>
                <div className="comment-content-wrap">
                  <h3 className="comment-author">Peter Capidal</h3>
                  <div className="comment-time">June 15, 2023</div>
                  <div className="comment-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam fringilla augue nec est tristique auctor. Donec non
                      est at libero vulputate rutrum. Morbi ornare lectus quis
                      justo gravida semper. Nulla tellus mi, vulputate
                      adipiscing cursus eu, suscipit id nulla.
                    </p>
                  </div>
                  <a className="comment-reply-link" href="#">
                    Reply
                  </a>
                </div>
              </div>
            </div>
            <div className="comment-form">
              <div className="form-header">
                <h3>Leave a Reply</h3>
              </div>
              <form action="" method="post" className="row" novalidate="">
                <div className="comment-notes col-md-12 col-sm-12">
                  Your email address will not be published.
                </div>
                <div className="form-group col-md-12 col-sm-12">
                  <textarea
                    id="comment"
                    name="comment"
                    cols="45"
                    rows="8"
                    aria-required="true"
                    placeholder="Comment"
                    className="form-control"
                  ></textarea>
                </div>
                <div className="form-group col-md-6 col-sm-6">
                  <input
                    id="author"
                    placeholder="Your Name *"
                    name="author"
                    type="text"
                    value=""
                    size="30"
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-6">
                  <input
                    id="email"
                    placeholder="Your Email *"
                    name="email"
                    type="text"
                    value=""
                    size="30"
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12 col-sm-12">
                  <input
                    id="url"
                    name="url"
                    placeholder="Website"
                    type="text"
                    value=""
                    size="30"
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    name="submit"
                    type="submit"
                    id="submit"
                    className="button button-outline border-black"
                    value="Post Comment"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog_details_main;
