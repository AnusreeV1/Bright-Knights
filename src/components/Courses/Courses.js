// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";

// import { coursesData1, coursesData2, coursesData3 } from "../../data";

// const Courses = () => {
//   const { name1, desc1, rate1 } = coursesData1;
//   const { name2, desc2, rate2 } = coursesData2;
//   const { name3, desc3, rate3 } = coursesData3;
//   return (
//     // <div className="h-screen bg-[#E5B8F4] text-[#2D033B] flex items-center justify-center">
//     //   <div className="max-w-5xl">
//     <section className="relative">
//       <div className="h-screen bg-tertiary text-white flex items-center justify-center">
//         <div className="max-w-5xl" data-aos="fade-up" data-aos-offset="300">
//           <Swiper
//             spaceBetween={50}
//             slidesPerView={3}
//             onSlideChange={() => console.log("slide change")}
//             onSwiper={(swiper) => console.log(swiper)}
//           >
//             <SwiperSlide>
//               <div className="h-96 flex">
//                 <div className={`card to-[#2D033B]`}>
//                   <div className="flex-1 ">
//                     <h2
//                       className="cardtitle"
//                       data-aos="fade-up"
//                       data-aos-delay="300"
//                     >
//                       {name1}
//                     </h2>
//                     <p
//                       className="max-w-[474px] mx-auto xl:mx-0"
//                       data-aos="fade-up"
//                       data-aos-delay="400"
//                     >
//                       {desc1}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>

//             <SwiperSlide>
//               <div className="h-96 flex">
//                 <div className={`card to-[#2D033B]`}>
//                   <div className="flex-1 ">
//                     <h2
//                       className="cardtitle"
//                       data-aos="fade-up"
//                       data-aos-delay="300"
//                     >
//                       {name2}
//                     </h2>
//                     <p
//                       className="max-w-[474px] mx-auto xl:mx-0"
//                       data-aos="fade-up"
//                       data-aos-delay="400"
//                     >
//                       {desc2}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>

//             <SwiperSlide>
//               <div className="h-96 flex">
//                 <div className={`card to-[#2D033B]`}>
//                   <div className="flex-1 ">
//                     <h2
//                       className="cardtitle"
//                       data-aos="fade-up"
//                       data-aos-delay="300"
//                     >
//                       {name3}
//                     </h2>
//                     <p
//                       className="max-w-[474px] mx-auto xl:mx-0"
//                       data-aos="fade-up"
//                       data-aos-delay="400"
//                     >
//                       {desc3}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Courses;
