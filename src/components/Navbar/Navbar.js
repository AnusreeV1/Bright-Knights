import React, { useState } from "react";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Aos from "aos";
import "aos/dist/aos.css";

import "../../Nav.css";
import { navigationData } from "../../data";

const Navbar = () => {
  Aos.init({
    duration: 800,
    offset: 0,
  });
  const menus = navigationData;

  return (
    <nav className="navbar" data-aos="fade-right" data-aos-offset="450">
      <ul className="navbar-nav">
        <div className="col">
          <li className="logo">
            <HashLink to="#home" className="nav-link-first rounded-xl">
              <div className="link-text logo-text">Bright Knights</div>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="angle-double-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
              >
                <g className="fa-group">
                  <path
                    fill="#E5B8F4"
                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                    className="fa-secondary"
                  ></path>
                  <path
                    fill="#E5B8F4"
                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                    className="fa-primary"
                  ></path>
                </g>
              </svg>
            </HashLink>
          </li>

          {menus.map((menu, i) => (
            <HashLink
              to={menu.link}
              key={i}
              className="nav-link group flex items-center text-sm font-medium text-tertiary hover:bg-tertiary rounded-xl hover:text-primary"
            >
              <div>{React.createElement(menu.icon, { size: "20" })}</div>
              <div className="link-text text-lg font-bold duration-500 overflow-hidden">
                {menu.name}
              </div>
            </HashLink>
          ))}
        </div>
      </ul>
    </nav>
  );
};
export default Navbar;
