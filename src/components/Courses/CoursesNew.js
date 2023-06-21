import React from "react";

import { coursesData } from "../../data";

const CoursesNew = () => {
  const { subtitle, list } = coursesData;
  return (
    // <section className="relative">
    //   <div className="container-fluid mx-auto">
    //     <div
    //       className="bg-tertiary min-h-[600px]"
    //       data-aos="fade-up"
    //       data-aos-offset="300"
    //     >
    <section id="courses" className="relative">
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1"></div>
        <div className="flex-1 bg-tertiary"></div>
      </div>
      <h2 className="h2 text-center" data-aos="fade-down" data-aos-delay="300">
        Courses We Offer
      </h2>
      <br />
      <h3
        className="h3card text-center"
        data-aos="fade-down"
        data-aos-delay="300"
      >
        {subtitle}
      </h3>

      <div className="mx-auto grid max-w-7xl lg:grid-cols-3 gap-12 lg:gap-8 py-24 px-4 sm:px-6 lg:px-8">
        {list.map((course) => (
          <div className="flex-1 cursor-pointer transform transition duration-500 hover:scale-110">
            <div
              key={course.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg flex flex-col text-center"
              data-aos="fade-up"
              data-aos-delay={course.delay}
            >
              <h2 className="h2card">{course.title}</h2>
              <p className="mt-2 text-50% leading-6 text-primary">
                {course.description}
              </p>

              {/*Price details*/}
              <div className="-mx-6 mt-4 rounded-lg bg-tertiary p-6 ">
                <p className="items-center font-semibold text-primary">
                  <span>{course.currency}</span>
                  <span className="ml-3 h3card">₹{course.price}</span>
                  <span className="ml-1.5">{course.classes}</span>
                </p>
              </div>

              {/*Features*/}
              <ul className="mt-6 space-y-4 flex-1">
                {course.features.map((feature) => (
                  <li key={feature} className="flex leading-6 text-primary">
                    <svg
                      className="h-5 w-5 text-primary shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-check"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg>

                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>

              {/*Book*/}
              <a
                href="#"
                className="h3card mt-8 block rounded-lg bg-tertiary px-6 py-4 text-center text-primary shadow-md hover:bg-primary hover:text-tertiary"
              >
                {course.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default CoursesNew;
