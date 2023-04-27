import React from "react";

// import cta data
import { ctaData } from "../../data";
import { footerData } from "../../data";
import { copyrightData } from "../../data";

// import icons
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  // destructure cta data
  const { title, subtitle, btnText1, btnText2, logo } = ctaData;
  const { logo1, address, email, phone, list1, list2, socialList } = footerData;
  const { text, icon } = copyrightData;
  return (
    <section
      id="contact"
      className="my-[75px] border-t-2 bg-tertiary"
      data-aos="fade-up"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center">
          {/* text */}
          <div className="flex flex-row py-12 xl:py-24 text-center xl:text-left">
            <div>
              <img className="mb-[65px] w-12 h-12" src={logo} alt="" />
            </div>
            <h2 className="h2 mb-5" data-aos="fade-up" data-aos-delay="300">
              {title}
            </h2>
            {/* <p className="lead" data-aos="fade-up">
              {subtitle}
            </p> */}
          </div>
          {/* buttons */}
          <div className="flex flex-col xl:flex-row gap-y-4 gap-x-[30px]">
            {/* <button
              className='btn btn-secondary'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              {btnText1}
            </button> */}
            <button
              className="btn btn-primary flex items-center gap-x-[20px] group"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {btnText2}
              <BsArrowRight className="text-2xl text-accent-quaternary group-hover:text-white transition" />
            </button>
          </div>
        </div>

        {/* social list */}
        <footer data-aos="fade-up">
          <div>
            {/* <div className="font-extrabold text-primary mb-8">
                Social Media
              </div> */}
            <ul className="flex gap-y-4 gap-x-4 justify-center">
              {socialList.map((item, index) => {
                return (
                  <div data-aos="fade-up" data-aos-delay={item.delay}>
                    <li
                      className="w-12 h-12 bg-accent-primary_hover flex justify-center items-center rounded-full cursor-pointer hover:bg-accent-secondary transition-all"
                      key={index}
                    >
                      <a
                        className="text-white text-xl hover:text-white"
                        href={item.href}
                      >
                        {item.icon}
                      </a>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </footer>
      </div>
      <section className="mt-24 pb-12" data-aos="fade-up">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center md:text-left  lg:flex-row justify-between gap-y-8">
            {/* text */}
            <div className="text-sm font-light italic max-w-[360px]">
              {text}
            </div>
            {/* icon */}
            <div className="-order-1 md:order-1">
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-accent-primary/20 cursor-pointer group">
                <div className="text-3xl text-accent-primary group-hover:scale-110 transition-all">
                  {icon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
