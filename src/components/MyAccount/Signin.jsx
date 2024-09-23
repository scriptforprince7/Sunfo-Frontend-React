import React from "react";
import "../../assets/assets/css/responsive.css";
import "../../assets/assets/css/app.css";

function Signin() {
  return (
    <>
      
      <div className="col-lg-6 col-md-6 col-sm-12 sm-m-b-50">
        <div className="box-form-login">
          <h2>Login</h2>
          <div className="box-content">
            <div className="form-login">
              <form method="post" className="login">
                <div className="username">
                  <label>
                    Username or email address <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="input-text"
                    name="username"
                    id="username"
                  />
                </div>
                <div className="password">
                  <label for="password">
                    Password <span className="required">*</span>
                  </label>
                  <input className="input-text" type="password" name="password" />
                </div>
                <div className="rememberme-lost">
                  <div className="remember-me">
                    <input name="rememberme" type="checkbox" value="forever" />
                    <label className="inline">Remember me</label>
                  </div>
                  <div className="lost-password">
                    <a href="page-forgot-password.html">Lost your password?</a>
                  </div>
                </div>
                <div className="button-login">
                  <input
                    type="submit"
                    className="button"
                    name="login"
                    value="Login"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
