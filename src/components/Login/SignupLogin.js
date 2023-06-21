import React, { useEffect, useState } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";

const SignupLogin = () => {
  const [signUp, setSignUp] = useState(false);
  const signUpBtn = () => {
    setSignUp(true);
  };
  const loginBtn = () => {
    setSignUp(false);
  };
  return (
    <div className={`modalcontainer${signUp ? " sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <div action="#" className="form sign-in-form">
            <h2 className="formtitle">Loginnn</h2>
            <div className="input-field">
              <FontAwesomeIcon className="profile" icon={faUser} />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon className="profile" icon={faLock} />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="modalbtn solid" />
            <p className="social-text">Or login with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>

          <div action="#" className="form sign-up-form">
            <h2 className="formtitle">Sign up</h2>
            <div className="input-field">
              <FontAwesomeIcon className="profile" icon={faUser} />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon className="profile" icon={faEnvelope} />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon className="profile" icon={faLock} />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="modalbtn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <div className="side">New here ?</div>
            <p></p>
            <button
              onClick={signUpBtn}
              className="modalbtn transparent"
              id="sign-up-btn"
            >
              Sign up
            </button>
          </div>
          {/* <img src="img/log.svg" className="image" alt="" /> */}
        </div>
        <div className="panel right-panel">
          <div className="content">
            <div className="side">One of us ?</div>
            <p></p>
            <button
              onClick={loginBtn}
              className="modalbtn transparent"
              id="login-btn"
            >
              Login
            </button>
          </div>
          {/* <img src="img/register.svg" className="image" alt="" /> */}
        </div>
      </div>
      {/* <Helmet>
        <script
          type="text/javascript"
          src="C:/Users/Anusree/Documents/Web Dev/Chess/Bright Knights/src/components/Login/condition.js"
        />
      </Helmet> */}
    </div>
  );
};

export default SignupLogin;
