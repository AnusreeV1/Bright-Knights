import React, { useRef, useState } from "react";

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

// import home data
import { homeData } from "../../data";

//import icons
import { BsArrowRight } from "react-icons/bs";
import { Modal } from "@mui/material";
import SignupLogin from "../Login/SignupLogin";
import MyDialog from "./components/MyDialog";
import MyStepper from "./components/MyStepper";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import TextField from "@mui/material/TextField";

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChess } from '@fortawesome/fontawesome-free-solid'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Home = () => {
  const { title, subtitle, book, login, image, bgimg, logo } = homeData;

  const [formData, setFormData] = useState({ name: "", email: "", contact: "", level: "", inspiration: "", experience: "", experienceYear: "0", interest: "0", demoTime: "", contactTime: "" })
  const [dropTitle, setDropTitle] = useState("Select")
  const [interest, setInterest] = useState(0)


  const modalRef = useRef();

  const [open, setOpen] = useState(false);


  const marks = [
    {
      value: 1,
      label: 'Less interested',
    },

    {
      value: 10,
      label: 'Very much interested',
    },
  ];

  const handleOpen = () => {
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  const handleDataChange = (field, value) => {

    formData[field] = value

    setFormData(formData)

  }
  const showDialog = () => {
    console.log("hello")
  }

  const [stepCount, setStepCount] = useState(1);



  const setLevel = (field, usrLevel, event) => {

    // formData[field] = usrLevel
    let stepSize = 1

    if (field === "inspiration") stepSize = 2


    console.log(field)
    console.log(usrLevel)
    formData[field] = usrLevel

    setFormData((formData) => ({ field: usrLevel, ...formData }))



    setDropTitle("Select")
    setStepCount((stepCount) => (stepCount + stepSize))



  }


  const submitDemo = () => {
    console.log(formData)
    console.log("Demo booked")

    handleClose()
  }

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
                Young Visionaries Chess Club
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
              {/* <button
                className="float-left btn btn-primary flex items-center gap-x-[20px] group font-bold hover:text-secondary"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                {book}
                <BsArrowRight className="text-2xl text-accent-quaternary group-hover:text-primary transition" />
              </button> */}
              {/* {/* <Dialog title={book} content={"hello"}/> */}

              {/* <MyDialog className="w-9/12" title={"Book a demo"} content={""}/> */}

              <button
                className="float-left btn btn-primary flex items-center gap-x-[20px] group font-bold hover:text-secondary"
                data-aos="fade-up"
                data-aos-delay="600"
                onClick={handleOpen}
              >
                Book a demo
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
      <Modal
        open={open}
        onClose={handleClose}
      >

        <div className="grid h-screen place-items-center">

          <div className="h-4/6 w-8/12 bg-white flex flex-row">
            <div className="h-full w-4/12 bg-primary grid place-items-center">
              <FontAwesomeIcon className="text-white" icon={faChess} bounce size="10x" />
            </div>
            <div className="w-8/12 h-full flex flex-col items-center">

              <div className="h-1 w-3/4 mt-5 bg-neutral-200">
                <div className="h-1 bg-primary" style={{ width: `${100 * stepCount / 6}%` }}></div>
              </div>

              {stepCount == 1 && (
                <div className="mt-16 h-full w-full flex flex-col items-center">
                  <label class="block text-slate-700 text-2xl font-semibold mb-2" for="name">
                    Select skill level
                  </label>
                  <div className="mt-16 w-full flex flex-col items-center">
                    <button name="level" class="block w-6/12 px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-lg  hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={(e) => setLevel("level", "beginner", e)}>
                      Beginner
                    </button>
                    <button name="level" class="block  w-6/12 mt-2 px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-lg  hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={(e) => setLevel("level", "intermediate", e)}>
                      Intermediate
                    </button>
                    <button name="level" class="block  w-6/12 mt-2 px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-lg  hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={(e) => setLevel("level", "advanced", e)}>
                      Advanced
                    </button>
                  </div>
                </div>
              )}

              {stepCount == 2 && (formData.level === "intermediate" || formData.level === "advanced") && (
                <div className="mt-16 h-full w-full flex flex-col items-center">

                  <label class="block text-slate-700 text-2xl font-semibold mb-2" for="message">


                    How did you/your child child begin learning chess?

                  </label>
                  <div className="mt-16 w-full flex flex-col items-center">
                    <button name="experience" class="block w-6/12 px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-lg  hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={(e) => setLevel("experience", "School/chess club", e)}>
                      School/chess club
                    </button>
                    <button name="experience" class="block  w-6/12 mt-2 px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-lg  hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={(e) => setLevel("experience", "Self-taught", e)}>
                      Self-taught
                    </button>
                    <button name="experience" class="block  w-6/12 mt-2 px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-lg  hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={(e) => setLevel("experience", "Mentored by family/coach", e)}>
                      Mentored by family/coach
                    </button>
                  </div>

                  <div className="mt-20 flex flex-row justify-between w-11/12">
                    <IconButton aria-label="previous" onClick={(e) => setStepCount((stepCount) => (stepCount - 1))}>
                      <ArrowBackIosIcon />
                    </IconButton>
                    {/* <IconButton aria-label="next" onClick={(e) => setLevel("experience", dropTitle, e)}>
                      <ArrowForwardIosIcon />
                    </IconButton>
                     */}
                    <div></div>
                  </div>


                </div>
              )}

              {stepCount == 2 && formData.level === "beginner" && (
                <div className="mt-16 h-full w-full flex flex-col items-center">

                  <label class="block text-slate-700 text-2xl font-semibold mb-2" for="message">


                    What inspired you/your child to learn chess?

                  </label>
                  <div className="mt-16 w-full flex flex-col items-center">
                    <button name="inspiration" class="block w-6/12 px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-lg  hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={(e) => setLevel("inspiration", "Inspired by family/friend", e)}>
                      Inspired by family/friend
                    </button>
                    <button name="inspiration" class="block  w-6/12 mt-2 px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-lg  hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={(e) => setLevel("inspiration", "Chess in movies/TV", e)}>
                      Chess in movies/TV
                    </button>
                    <button name="inspiration" class="block  w-6/12 mt-2 px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-lg  hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={(e) => setLevel("inspiration", "Improve cognitive skills", e)}>
                      Improve cognitive skills
                    </button>
                  </div>

                  <div className="mt-20 flex flex-row justify-between w-11/12">
                    <IconButton aria-label="previous" onClick={(e) => setStepCount((stepCount) => (stepCount - 1))}>
                      <ArrowBackIosIcon />
                    </IconButton>
                    {/* <IconButton aria-label="next" onClick={(e) => setLevel("experience", dropTitle, e)}>
                      <ArrowForwardIosIcon />
                    </IconButton>
                     */}
                    <div></div>
                  </div>


                </div>
              )}

              {stepCount == 3 && (formData.level === "intermediate" || formData.level === "advanced") && (
                <div className="mt-16 h-full w-full flex flex-col items-center">

                  <label class="block text-slate-700 text-2xl font-semibold mb-2" for="message">


                    When did you/your child started playing chess?

                  </label>
                  <div className="mt-16 w-full flex flex-col items-center">
                    <button name="inspiration" class="block w-6/12 px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-lg  hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={(e) => setLevel("experienceYear", "less than 2", e)}>
                      &lt;2 years ago
                    </button>
                    <button name="inspiration" class="block  w-6/12 mt-2 px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-lg  hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={(e) => setLevel("experienceYear", "2 to 5", e)}>
                      2-5 years ago
                    </button>
                    <button name="inspiration" class="block  w-6/12 mt-2 px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-300 rounded-lg  hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={(e) => setLevel("experienceYear", "more than 5", e)}>
                      &gt;5 years ago
                    </button>
                  </div>

                  <div className="mt-20 flex flex-row justify-between w-11/12">
                    <IconButton aria-label="previous" onClick={(e) => setStepCount((stepCount) => (stepCount - 1))}>
                      <ArrowBackIosIcon />
                    </IconButton>
                    {/* <IconButton aria-label="next" onClick={(e) => setLevel("experience", dropTitle, e)}>
                      <ArrowForwardIosIcon />
                    </IconButton>
                     */}
                    <div></div>
                  </div>


                </div>
              )}

              {stepCount == 4 && (
                <div className="mt-16 h-full w-full flex flex-col items-center">

                  <label class="block text-slate-700 text-2xl font-semibold mb-2" for="message">


                    On a scale of 1-19 how passionate are you/your child about chess

                  </label>

                  <Slider
                    aria-label="Interest"
                    defaultValue={5}
                    getAriaValueText={() => interest}
                    valueLabelDisplay="auto"
                    step={1}
                    marks={marks}
                    min={1}
                    max={10}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-9/12 mt-16"
                    sx={{
                      '& .MuiSlider-thumb': {
                        color: 'white',
                        '& .MuiSlider-valueLabelOpen': {
                          backgroundColor: 'white',
                          border: 1,
                          borderColor: "gray",
                        },
                        '& .MuiSlider-valueLabel': {
                          backgroundColor: 'white',
                          border: 1,
                          borderColor: "gray"
                        },
                      },

                    }}
                  />


                  <div className="mt-20 flex flex-row justify-between w-11/12">
                    <IconButton aria-label="previous" onClick={(e) => {

                      if (formData.level === "beginner") {
                        setStepCount((stepCount) => (stepCount - 2))
                      } else {
                        setStepCount((stepCount) => (stepCount - 1))
                      }

                    }}>
                      <ArrowBackIosIcon />
                    </IconButton>
                    <IconButton name="interest" aria-label="next" onClick={(e) => setLevel("interest", interest, e)}>
                      <ArrowForwardIosIcon />
                    </IconButton>
                  </div>


                </div>
              )}

              {stepCount == 5 && (
                <div className="mt-16 h-full w-full flex flex-col items-center">

                  <label class="block text-slate-700 text-2xl font-semibold mb-2" for="message">


                    Please share your demo preferences

                  </label>

                  <div className="mt-16 flex flex-col gap-5">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DateTimePicker']}>
                        <DateTimePicker label="Demo date and Time" onChange={(value) => handleDataChange("demoTime", value)} />
                      </DemoContainer>
                    </LocalizationProvider>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['TimePicker']}>
                        <TimePicker label="Preferred time to contact" onChange={(value) => handleDataChange("contactTime", value)} />
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>




                  <div className="mt-20 flex flex-row justify-between w-11/12">
                    <IconButton aria-label="previous" onClick={(e) => setStepCount((stepCount) => (stepCount - 1))}>
                      <ArrowBackIosIcon />
                    </IconButton>
                    <IconButton name="interest" aria-label="next" onClick={() => setStepCount((stepCount) => (stepCount + 1))
                    }>
                      <ArrowForwardIosIcon />
                    </IconButton>
                  </div>


                </div>
              )}

              {stepCount == 6 && (
                <div className="mt-16 h-full w-full flex flex-col items-center">

                  <label class="block text-slate-700 text-2xl font-semibold mb-2" for="message">


                    Please share your contact details

                  </label>

                  <div className="mt-16 flex flex-col gap-5 w-9/12">
                    <div class="mb-4 w-9/12">
                      <label class="block text-slate-700 text-sm font-bold mb-2" for="name">
                        Name
                      </label>
                      <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" id="name" type="text" placeholder="Name" onChange={(e) => handleDataChange(e.target.id, e.target.value)} />
                    </div>
                    <div class="mb-4 w-9/12">
                      <label class="block text-slate-700 text-sm font-bold mb-2" for="email">
                        Email
                      </label>
                      <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" id="email" type="text" placeholder="Email" onChange={(e) => handleDataChange(e.target.id, e.target.value)} />
                    </div>
                    <div class="mb-4 w-9/12">
                      <label class="block text-slate-700 text-sm font-bold mb-2" for="age">
                        Contact
                      </label>
                      <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" id="contact" type="text" placeholder="Contact" onChange={(e) => handleDataChange(e.target.id, e.target.value)} />
                    </div>
                  </div>


                  <a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-primary rounded-full shadow-md group" onClick={submitDemo}>
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="absolute flex items-center justify-center w-full h-full text-primary transition-all duration-300 transform group-hover:translate-x-full ease">Book my demo</span>
                    <span class="relative invisible">Book my demo</span>
                  </a>

                  <div className="mt-12 flex flex-row justify-between w-11/12">
                    <IconButton aria-label="previous" onClick={(e) => setStepCount((stepCount) => (stepCount - 1))}>
                      <ArrowBackIosIcon />
                    </IconButton>
                    {/* <IconButton name="interest" aria-label="next" onClick={() => setStepCount((stepCount) => (stepCount + 1))
                    }>
                      <ArrowForwardIosIcon />
                    </IconButton> */}
                    <div></div>
                  </div>


                </div>
              )}
            </div>
          </div>

        </div>

      </Modal>

    </div>
  );
};
export default Home;
