import React, { useState } from "react";
import { HiMenuAlt3, HiDocumentChartBar } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { FaChessKnight, FaChessBoard, FaBook, FaChess } from "react-icons/fa";
import {
  BsFillFileEarmarkBarGraphFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";

// import animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";

// import components
import Home from "../Home/Home";
import About from "../About/About";
import Benefits from "../Benefits/Benefits";
//import Courses from "../Courses/Courses";
import CoursesNew from "../Courses/CoursesNew";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";
import Footer from "../Contact/Footer";
import Navbar from "../Navbar/Navbar";

import "../../Nav.css";
import SignupLogin from "../Login/SignupLogin";

const Landing = () => {
  // animate on scroll initialization
  Aos.init({
    duration: 800,
    offset: 0,
  });

  return (
    <section className="relative">
      <div>
        <Navbar />
      </div>

      <div className="right">
        <Home />
        <About />
        <Benefits />
        <CoursesNew />
        <Testimonials />
        <Contact />
        {/* <Footer /> */}
      </div>
    </section>
  );
};

export default Landing;
