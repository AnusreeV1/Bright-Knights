// import icons
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FaChessKnight, FaChessBoard, FaBook, FaChess } from "react-icons/fa";
import {
  BsFillFileEarmarkBarGraphFill,
  BsFillTelephoneFill,
} from "react-icons/bs";

// import images
import AboutImg from "../src/assets/img/about.png";
import Benefit1Img from "../src/assets/img/benefits/benefit1.png";
import Benefit2Img from "../src/assets/img/benefits/benefit2.png";
import Benefit3Img from "../src/assets/img/benefits/benefit3.png";
import Benefit4Img from "../src/assets/img/benefits/benefit4.png";
import RathishImg from "../src/assets/img/coaches/Rathish.png";

import Testi1Img from "../src/assets/img/coaches/testi1.png";
import Testi2Img from "../src/assets/img/coaches/testi2.png";
import Testi3Img from "../src/assets/img/coaches/testi3.png";
import Logoblack from "../src/assets/img/logoblack.png";
import Logop3 from "../src/assets/img/logop3.png";
import Home from "../src/assets/img/home.png";
import Bgimg from "../src/assets/img/bg.png";
import Benefit1BgImg from "../src/assets/img/benefits/benefit1_bg.png";
import Benefit2BgImg from "../src/assets/img/benefits/benefit2_bg.png";
import Benefit3BgImg from "../src/assets/img/benefits/benefit3_bg.png";
import Benefit4BgImg from "../src/assets/img/benefits/benefit4_bg.png";

export const navigationData = [
  { name: "Home", link: "#home", icon: AiFillHome },
  { name: "About Us", link: "#about", icon: FaChessKnight },
  { name: "Why Chess?", link: "#whychess", icon: FaChess },
  { name: "Courses", link: "#courses", icon: FaBook },
  {
    name: "Coaches",
    link: "#coaches",
    icon: BsFillFileEarmarkBarGraphFill,
  },
  // { name: "Contact", link: "#contact", icon: BsFillTelephoneFill },
];

export const homeData = {
  title: ` Checkmate your boredom with our Chess classes!`,
  subtitle: "Experience hybrid classes (online and offline)",
  book: "Book a free demo",
  login: "Login",
  image: Home,
  bgimg: Bgimg,
  logo: Logop3,
};

export const aboutData = {
  image: AboutImg,
  title: "Find Out A Little More About Us",
  subtitle:
    "Our platform is specifically designed to help children learn how to play chess in a fun and engaging way. Our platform offers a variety of resources to help kids learn the game, including interactive lessons, puzzles, and practice exercises. Our team is made up of experienced chess coaches who specialize in teaching children. We understand that kids learn best when they are having fun, so we have designed our platform to be both entertaining and educational.",
};

export const benefitsData = {
  title: "Why Chess?",
  subtitle1: "Chess isn't just a game, it's a brain workout!",
  subtitle2:
    "Besides being a fun game, playing chess has many benefits for the brain.",
  list: [
    {
      image: Benefit1Img,
      bgImage: Benefit1BgImg,
      title: "Improves critical thinking and problem-solving skills",
      description: "",
      linkText: "",
      delay: "400",
    },
    {
      image: Benefit2Img,
      bgImage: Benefit2BgImg,
      title: "Boosts memory and concentration",
      description: "",
      linkText: "",
      delay: "700",
    },
    {
      image: Benefit3Img,
      bgImage: Benefit3BgImg,
      title: "Enhances creativity and imagination",
      description: "",
      linkText: "",
      delay: "800",
    },
    {
      image: Benefit4Img,
      bgImage: Benefit4BgImg,
      title: "Boosts confidence and self-esteem",
      description: "",
      linkText: "",
      delay: "1000",
    },
  ],
};

export const coursesData = {
  subtitle1: "More than just moves, we teach strategy!",
  subtitle2: "We'll cover a variety of topics in the class.",
  list: [
    {
      title: "Silver",
      description: "A beginner level course",
      price: 10000,
      currency: "INR",
      classes: "for 15 classes",
      features: [
        "1 on 1",
        "Live online classes",
        "1 hr / session",
        "Analysis sessions",
        "Review sessions",
      ],
      cta: "Book",
      delay: "300",
    },
    {
      title: "Gold",
      description: "An intermediate level course",
      price: 15000,
      currency: "INR",
      classes: "for 15 classes",
      features: [
        "1 on 1",
        "Live online classes",
        "1 hr / session",
        "Analysis sessions",
        "Review sessions",
      ],
      cta: "Book",
      delay: "600",
    },
    {
      title: "Platinum",
      description: "Advanced level course",
      price: 20000,
      currency: "INR",
      classes: "for 20 classes",
      features: [
        "1 on 1",
        "Live online classes",
        "1 hr / session",
        "Analysis sessions",
        "Review sessions",
      ],
      cta: "Book",
      delay: "900",
    },
  ],
};

export const coachesData = [
  {
    image: RathishImg,
    name: "Rathish R",
    web: "International Chess Player (FIDE)",
    message: "Contact - 8637442848",
    delay: "300",
  },
  {
    image: Testi1Img,
    name: "Samaksh",
    web: "International Chess Player (FIDE)",
    message: "Contact - 7767942420",
    delay: "600",
  },
  // {
  //   image: Testi3Img,
  //   name: "C",
  //   web: "",
  //   message: "Some text",
  //   delay: "900",
  // },
];

export const ctaData = {
  title: "Bright Knights",
  subtitle:
    "Address : A331, Wing 6, Innovative Oak Garden, Bhoganhalli, Bengaluru, Karnataka 560103",
  btnText1: "",
  btnText2: "Book a free Demo",
  logo: Logop3,
};

export const footerData = {
  logo: Logop3,
  address: "",
  email: "",
  phone: "",

  socialList: [
    // {
    //   icon: <FaFacebook />,
    //   href: "#",
    //   delay: "300",
    // },
    // {
    //   icon: <FaInstagram />,
    //   href: "#",
    //   delay: "500",
    // },
    // {
    //   icon: <FaLinkedin />,
    //   href: "#",
    //   delay: "700",
    // },
    {
      icon: <FaEnvelope />,
      href: "#",
      delay: "900",
      mailid: "brightknights05@gmail.com",
    },
  ],
};

export const copyrightData = {
  // text: "© Product Texas, 2022. All rights reserved. Company Registration Number: 09833888.",
  icon: <BsChatDotsFill />,
};
