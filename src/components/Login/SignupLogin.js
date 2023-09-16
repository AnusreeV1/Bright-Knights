import React, { useEffect, useState } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";
import Axios from "axios";
import Swal  from "sweetalert2";
import Cookies from 'js-cookie';

const SignupLogin = () => {
  const [signUp, setSignUp] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });9
  const signUpBtn = () => {
    setSignUp(true);
  };
  const loginBtn = () => {
    setSignUp(false);
  };

  const handleChange = (e) => {
    if (!signUp) {
      let field = e.target.name;
      let value = e.target.value;
      credentials[field] = value;
      setCredentials(credentials);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    let baseURL = "http://localhost:5000";
    let url = "http://localhost:5000/api/admin/login"
    let utype = "admin";

    try {
      // console.log(credentials)
      let response = await Axios.post(
        `${baseURL}/api/${utype}/login`,
        credentials
      );

      // console.log(response)
      if (response.status == 200) {
        Swal.fire({
          icon: "success",
          title: "Login successful",
        });

        Cookies.set("token", response.data.token, {expires: 1})
        localStorage.setItem("token", response.data.token)
      } 
    } catch (err) {
      // console.log(err)
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.response.data.message
      });
    }
  };

  return (
    <div className={`modalcontainer${signUp ? " sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <div action="#" className="form sign-in-form">
            <h2 className="formtitle">Login</h2>
            <div className="input-field">
              <FontAwesomeIcon className="profile" icon={faEnvelope} />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon className="profile" icon={faLock} />
              <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            </div>
            <input
              type="submit"
              value="Login"
              className="modalbtn solid"
              onClick={login}
            />
            {/* <p className="social-text">Or login with social platforms</p>
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
            </div> */}
          </div>

          <div action="#" className="form sign-up-form">
            <h2 className="formtitle">Sign up</h2>
            {/* <div className="input-field">
              <FontAwesomeIcon className="profile" icon={faUser} />
              <input type="text" placeholder="Username" />
            </div> */}
            <div className="input-field">
              <FontAwesomeIcon className="profile" icon={faEnvelope} />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon className="profile" icon={faPhone} />
              <input type="tel" placeholder="Phone number" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon className="profile" icon={faLock} />
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon className="profile" icon={faLock} />
              <input type="password" placeholder="Confirm Password" />
            </div>
            <input type="submit" className="modalbtn" value="Sign up" />
            {/* <p className="social-text">Or Sign up with social platforms</p>
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
            </div> */}
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
