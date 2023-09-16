import React from "react";
import { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import ModuleBtn from "./ModuleBtn";

const ScrollBar = () => {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  let data = [
    { name: "module 1", status: "progress" },
    { name: "module2", status: "locked" },
    { name: "module 3", status: "complete" },
    { name: "module 1", status: "progress" },
    { name: "module2", status: "locked" },
    { name: "module 3", status: "complete" },
    { name: "module 1", status: "progress" },
    { name: "module2", status: "locked" },
    { name: "module 3", status: "complete" },
  ];

  //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    // if (
    //   Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
    //   scrl.current.offsetWidth
    // ) {
    //   setscrolEnd(true);
    // } else {
    //   setscrolEnd(false);
    // }
  };

  // //Anim
  // const anim = (e) => {
  //   gsap.from(e.target, { scale: 1 });
  //   gsap.to(e.target, { scale: 1.5 });
  // };
  // const anim2 = (e) => {
  //   gsap.from(e.target, { scale: 1.5 });
  //   gsap.to(e.target, { scale: 1 });
  // };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    // if (
    //   Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
    //   scrl.current.offsetWidth
    // ) {
    //   setscrolEnd(true);
    // } else {
    //   setscrolEnd(false);
    // }
  };

  return (
    <div className="hscroll h-fit">
      <button
        type="button"
        className="text-white bg-purple-700 hover:border hover:border-purple-700 hover:bg-white hover:outline-purple-700 hover:text-purple-700 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center ml-2 mr-2"
        onClick={() => slide(-50)}
      >
        {/* <i className="fa fa-angle-left"></i> */}
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <ul className="hscroll-ul" ref={scrl} onScroll={scrollCheck}>
        {data.map((d, i) => (
          // <li className='hscroll-li'><button className='btn'>{d}</button></li>
          <ModuleBtn name={d.name} status={d.status} key={i} />
        ))}
      </ul>

      <button
        type="button"
        className="text-white bg-purple-700 hover:border hover:border-purple-700 hover:bg-white hover:outline-purple-700 hover:text-purple-700 font-medium rounded-lg text-sm p-2.5 ml-2.5 text-center inline-flex items-center mr-2"
        onClick={() => slide(+50)}
      >
        {/* <i className="fa fa-angle-left"></i> */}
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};

export default ScrollBar;
