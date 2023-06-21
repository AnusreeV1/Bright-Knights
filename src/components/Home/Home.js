import React, { useRef } from "react";

// import home data
import { homeData } from "../../data";

//import icons
import { BsArrowRight } from "react-icons/bs";
import Modal from "../Modal/Modal";
import SignupLogin from "../Login/SignupLogin";

const Home = () => {
  const { title, subtitle, book, login, image, bgimg, logo } = homeData;
  const modalRef = useRef();

  return (
    <div
      id="home"
      className="bg-cover bg-[url('../src/assets/img/bg.png')]"
      // data-aos="fade-up"
      // data-aos-offset="350"
    >
      <div className="container mx-auto">
        <div className=" rounded-[50px] min-h-screen pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0 xl:pl-10">
          {/* text */}

          <div className="flex-1 xl:pr-12">
            <div className="flex flex-row text-center xl:text-left">
              <div data-aos="fade-down" data-aos-delay="400">
                <img className="mb-[65px] w-12 h-12" src={logo} alt="" />
              </div>

              <h1
                className="h2 mb-10"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                Bright Knights
              </h1>
            </div>
            <h1 className="h2 mb-10" data-aos="fade-down" data-aos-delay="400">
              {title}
            </h1>
            <h2
              className="h3card mb-10"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              {subtitle}
            </h2>
            <div className="relative space-x-4">
              <button
                className="float-left btn btn-primary flex items-center gap-x-[20px] group font-bold hover:text-secondary"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                {book}
                <BsArrowRight className="text-2xl text-accent-quaternary group-hover:text-primary transition" />
              </button>
              <button
                className="float-right-0 btn btn-primary mb-8 xl:mb-0 font-bold hover:text-secondary"
                data-aos="fade-up"
                data-aos-delay="600"
                onClick={() => modalRef.current.open()}
              >
                {login}
              </button>

              <Modal ref={modalRef}>
                <SignupLogin />
              </Modal>
            </div>
          </div>

          {/* image */}

          <div className="flex-1" data-aos="fade-up" data-aos-delay="700">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
