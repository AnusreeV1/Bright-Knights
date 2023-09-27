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
        <div className="flex flex-col justify-between items-center">
          {/* text */}
          <div className="flex flex-row pt-12 text-center xl:text-left">
            <div>
              <img className="w-12 h-12" src={logo} alt="" />
            </div>
            <h2 className="h2" data-aos="fade-up" data-aos-delay="300">
              {title}
            </h2>
          </div>
          <br />
          <p className="lead" data-aos="fade-up">
            {/* {subtitle} */}
          </p>
          <br />
          {/* buttons */}
          <div className="flex flex-col xl:flex-row gap-y-4 gap-x-[30px]">
            {/* <button
              className='btn btn-secondary'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              {btnText1}
            </button> */}

            <a
              href="https://wa.me/919344701084?text=Hey%20Young%20Visionaries%20Chess%20Club.%20I%27m%20interested%20to%20avail%20your%20services."
              className="btn btn-primary flex items-center gap-x-[20px] group hover:text-white"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Contact Us
              <BsArrowRight className="text-2xl text-accent-quaternary group-hover:text-white transition" />
            </a>

            {/* <ReactWhatsapp number="1-212-736-5000" message="Hello World!!!" /> */}
          </div>
        </div>
        <br />

        {/* social list */}
        <footer data-aos="fade-up">
          <div>
            {/* <div className="font-extrabold text-primary mb-8">
                Social Media
              </div> */}
            <ul className="flex gap-y-4 gap-x-4 justify-center">
              {socialList.map((item, index) => {
                return (
                  <div className="flex flex-row items-center space-x-2">
                    <div data-aos="fade-up" data-aos-delay={item.delay}>
                      <li
                        className="w-12 h-12 bg-accent-primary_hover flex justify-center items-center rounded-full cursor-pointer hover:bg-accent-secondary transition-all"
                        key={index}
                      >
                        <a
                          className="text-white text-xl hover:text-white"
                        // href={item.href}
                        >
                          {item.icon}
                        </a>
                      </li>
                    </div>
                    <a
                      className="lead"
                      data-aos="fade-up"
                      data-aos-delay={item.delay}
                      href="mailto:brightknights05@gmail.com?subject=Service%20Enquiry%20-%20%5BYour%20Name%5D&body=Hey%20Young%20Visionaries%20Chess%20Club%0A%0AI'm%20interested%20in%20availing%20your%20services."
                    >
                      {item.mailid}
                    </a>
                  </div>
                );
              })}
            </ul>
          </div>
        </footer>
      </div>
      {/* <section className="mt-24 pb-12" data-aos="fade-up">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center md:text-left  lg:flex-row justify-between gap-y-8">
            {text}
            <div className="text-sm font-light italic max-w-[360px]">
              {text}
            </div>
            {icon}
            <div className="-order-1 md:order-1">
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-accent-primary/20 cursor-pointer group">
                <div className="text-3xl text-accent-primary group-hover:scale-110 transition-all">
                  {icon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <br />
    </section>
  );
};

export default Contact;
