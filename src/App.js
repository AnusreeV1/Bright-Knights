import React from "react";
import { Routes, Route } from "react-router-dom";

// import animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";

// import components
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";
//import Courses from "./components/Courses/Courses";
import CoursesNew from "./components/Courses/CoursesNew";
import Coaches from "./components/Coaches/Coaches";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Contact/Footer";
import Landing from "./components/Landing/Landing";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {
  // animate on scroll initialization
  Aos.init({
    duration: 800,
    offset: 0,
  });
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin-home" element={<AdminDashboard />} />

      </Routes>
    </div>
  );
};

export default App;
