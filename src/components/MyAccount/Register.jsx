import React from "react";
import "../../assets/assets/css/responsive.css";
import "../../assets/assets/css/app.css";

function Register() {
  return (
    <>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="box-form-login">
          <h2 className="register">Register</h2>
          <div className="box-content">
            <div className="form-register">
              <form method="post" className="register">
                <div className="email">
                  <label>
                    Email address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    className="input-text"
                    name="email"
                    value=""
                  />
                </div>
                <div className="password">
                  <label>
                    Password <span className="required">*</span>
                  </label>
                  <input
                    type="password"
                    className="input-text"
                    name="password"
                  />
                </div>
                <div className="button-register">
                  <input
                    type="submit"
                    className="button"
                    name="register"
                    value="Register"
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

export default Register;
