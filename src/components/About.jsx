import React, { useEffect, useRef, useState } from "react";
import profilePicture from "../assets/profile.jpg";
import "../InfinityText.css";

import { motion } from "framer-motion";
import { items } from "../constants/constants";

const About = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const headerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleHeaderScroll = () => {
      const headerElement = headerRef.current;
      if (headerElement) {
        const rect = headerElement.getBoundingClientRect();
        const isInView = rect.bottom >= 0 && rect.top <= window.innerHeight;
        setIsHeaderVisible(isInView);
      }
    };

    const handleCardScroll = () => {
      const cardElement = cardRef.current;
      if (cardElement) {
        const rect = cardElement.getBoundingClientRect();
        const isInView = rect.bottom >= 0 && rect.top <= window.innerHeight;
        setIsCardVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleHeaderScroll);
    window.addEventListener("scroll", handleCardScroll);

    return () => {
      window.removeEventListener("scroll", handleHeaderScroll);
      window.removeEventListener("scroll", handleCardScroll);
    };
  }, [scroll]);

  return (
    <div id="about" className="bg-stone-400 py-[20px] md:py-0 ">
      <div className="">
        <motion.div
          whileInView={{ scale: [0.95, 1], opacity: [0, 0.3, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-col md:flex-row w-[90%] md:w-[65%] mx-auto"
        >
          <div className=" py-[20px] flex text-center justify-between w-full md:py-[5vw] mx-auto">
            {items.map((item, i) => (
              <div key={i} className={` ${i > 2 ? "hidden md:block" : ""}`}>
                {item.icon}
                {item.text}
              </div>
            ))}
          </div>
          <div className=" pb-[30px] flex text-center justify-around w-full md:w-0 md:py-[5vw]">
            {items.map((item, i) => (
              <div
                key={i}
                className={` ${i > 2 ? "inline-block" : "hidden"} md:hidden`}
              >
                {item.icon}
                {item.text}
              </div>
            ))}
          </div>
        </motion.div>
        <div className="relative w-[90%] flex flex-col gap-[30px] md:gap-0 md:flex-row justify-center items-center  md:w-[72%] mx-auto ">
          <motion.div
            whileInView={{ scale: [0.2, 1], opacity: [0, 0.3, 1] }}
            transition={{ duration: 2 }}
            className="mt-[3vw]"
          >
            <div className="md:mr-[-4.2vw] relative">
              <h6 className="absolute text-[15px] left-16 top-4 md:left-3 md:top-0 text-white md:text-left md:text-[1.4vw] py-2 animate-pulse ">
                That's me in the office
              </h6>
              <img
                className="w-[280px] h-[280px] md:w-[20vw] md:h-[20vw] object-cover rounded-full md:rounded-l-none"
                src={profilePicture}
              />
            </div>
          </motion.div>
          <div
            ref={cardRef}
            className={`${
              isCardVisible ? "animate-slide-in-right-light" : ""
            }  md:w-[67%]`}
          >
            <div className="flex flex-col gap-[10px] md:gap-[0.7vw] text-center md:text-left">
              <h3 className="italic  text-[20px] text-center md:text-left md:text-[1.5vw] md:tracking-widest font-semibold mb-[10px] md:mb-[1vw]">
                IM ALWAYS INTERESTED ABOUT
              </h3>
              <div className="flex justify-center md:justify-start md:ml-[2vw]">
                <div
                  ref={headerRef}
                  className={`${
                    isHeaderVisible ? "" : ""
                  } border-white border-[1px] md:border-[2px] rounded-full`}
                >
                  <p className="text-white font-bold text-[15px] md:tracking-widest md:text-[1.4vw] px-[8px] py-[1.5px] md:px-[1.1vw] md:py-[0.3vw]">
                    FRONTEND/BACKEND DEVELOPMENT
                  </p>
                </div>
              </div>
              <div className=" md:ml-[4.2vw] justify-center  md:justify-start flex gap-[10px] md:gap-[1vw]">
                <div className="flex  ">
                  <div
                    className={`${
                      isHeaderVisible ? "" : ""
                    } border-white border-[1px] md:border-[2px] rounded-full`}
                  >
                    <p className="text-white font-bold text-[15px] md:text-[1.4vw] md:tracking-widest px-[8px] py-[1.5px] md:px-[1.1vw] md:py-[0.3vw]">
                      WEBFLOW DEVELOPMENT
                    </p>
                  </div>
                </div>
                <div
                  className={`${
                    isHeaderVisible ? "" : ""
                  } border-white border-[1px] md:border-[2px] rounded-full`}
                >
                  <p className="text-white font-bold text-[15px] md:text-[1.4vw] md:tracking-widest px-[8px] py-[1.5px] md:px-[1.1vw] md:py-[0.3vw]">
                    STARTAPS
                  </p>
                </div>
              </div>
              <div className="md:ml-[5.2vw] justify-center  md:justify-start flex gap-[10px] md:gap-[1vw]">
                <div className="border-white border-[1px] md:border-[2px] rounded-full">
                  <p className="text-white font-bold text-[15px] md:text-[1.4vw] md:tracking-widest px-[8px] py-[1.5px] md:px-[1.1vw] md:py-[0.3vw]">
                    NEW BUSINESSES
                  </p>
                </div>
                <div className="flex">
                  <div className="border-white border-[1px] md:border-[2px] rounded-full">
                    <p className="text-white font-bold text-[15px] md:text-[1.4vw] md:tracking-widest px-[8px] py-[1.5px] md:px-[1.1vw] md:py-[0.3vw]">
                      EXTREME SPORTS
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-[15px] md:text-[1.05vw] md:mt-[0.7vw] md:ml-[5.2vw] ">
                I'm a passionate Full-Stack web developer freelancer,
                specializing in crafting dynamic user experiences through
                innovative UI designs and seamless functionality.
              </p>
              <p className="text-[15px] md:text-[1.05vw] md:ml-[3.2vw]">
                Dedicated to creating top-notch software that enhances lives, I
                work with a diverse range of clients, from individuals and small
                businesses to large enterprises.
              </p>
              <p className="text-[15px] md:text-[1.05vw] ">
                Let's work together to bring your digital vision to life!
              </p>
            </div>
          </div>
          {/* </motion.div> */}
        </div>
        <motion.div
          whileInView={{ y: [80, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="card"
        >
          <div className="flex flex-col gap-[10px]  md:gap-[2vw] md:flex-row py-[6vw] w-[95%]  md:w-[65%] mx-auto text-center">
            <div className="flex gap-[10px]  md:gap-[2vw] mx-auto">
              <p className="text-[12px] md:text-[1vw] border-black border-[1px] md:border-[2px] font-bold px-[5px] py-[1px] md:px-[0.5vw] md:py-[0.1vw] rounded-full">
                HTML
              </p>
              <p className="text-[12px] md:text-[1vw] border-black border-[1px] md:border-[2px] font-bold px-[5px] py-[1px] md:px-[0.5vw] md:py-[0.1vw] rounded-full">
                CSS
              </p>
              <p className="text-[12px] md:text-[1vw] border-black border-[1px] md:border-[2px] font-bold px-[5px] py-[1px] md:px-[0.5vw] md:py-[0.1vw] rounded-full">
                JavaScript
              </p>
              <p className="text-[12px] md:text-[1vw] border-black border-[1px] md:border-[2px] font-bold px-[5px] py-[1px] md:px-[0.5vw] md:py-[0.1vw] rounded-full">
                React.js
              </p>

              <p className="text-[12px] md:text-[1vw] border-black border-[1px] md:border-[2px] font-bold px-[5px] py-[1px] md:px-[0.5vw] md:py-[0.1vw] rounded-full">
                Next.js
              </p>
            </div>
            <div className="flex gap-[10px] md:gap-[2vw] mx-auto">
              <p className="text-[12px] md:text-[1vw] border-black border-[1px] md:border-[2px] font-bold px-[5px] py-[1px] md:px-[0.5vw] md:py-[0.1vw] rounded-full">
                Node.js
              </p>
              <p className="text-[12px] md:text-[1vw] border-black border-[1px] md:border-[2px] font-bold px-[5px] py-[1px] md:px-[0.5vw] md:py-[0.1vw] rounded-full">
                MongoDB
              </p>

              <p className="text-[12px] md:text-[1vw] border-black border-[1px] md:border-[2px] font-bold px-[5px] py-[1px] md:px-[0.5vw] md:py-[0.1vw] rounded-full">
                Figma
              </p>
              <p className="text-[12px] md:text-[1vw] border-black border-[1px] md:border-[2px] font-bold px-[5px] py-[1px] md:px-[0.5vw] md:py-[0.1vw] rounded-full">
                Tailwind
              </p>
              <p className="text-[12px] md:text-[1vw] border-black border-[1px] md:border-[2px] font-bold px-[5px] py-[1px] md:px-[0.5vw] md:py-[0.1vw] rounded-full">
                SCSS
              </p>
            </div>
          </div>
          <div className="w-[75%] h-[2px] bg-stone-500 mx-auto "></div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
