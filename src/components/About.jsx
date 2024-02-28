import React, { useEffect, useState } from "react";
import profilePicture from "../assets/profile.jpg";
import "../InfinityText.css";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineSpeed } from "react-icons/md";
import { LuMonitorSmartphone } from "react-icons/lu";
import { BsTools } from "react-icons/bs";
import { GoLightBulb } from "react-icons/go";
import { motion } from "framer-motion";

const About = () => {
  const items = [
    {
      icon: <IoDiamondOutline className="text-[3vw] mx-auto" />,
      text: <p className="py-[1vw] text-[1.05vw]">World class Apps</p>,
    },
    {
      icon: <BsTools className="text-[3vw] mx-auto" />,
      text: <p className="py-[1vw] text-[1.05vw]">Tailored To Your Needs</p>,
    },
    {
      icon: <MdOutlineSpeed className="text-[3vw] mx-auto" />,
      text: <p className="py-[1vw] text-[1.05vw]">Fast load times</p>,
    },
    {
      icon: <LuMonitorSmartphone className="text-[3vw] mx-auto" />,
      text: (
        <p className="py-[1vw] text-[1.05vw]">
          Responsive, work on all devices
        </p>
      ),
    },
    {
      icon: <GoLightBulb className="text-[3vw] mx-auto" />,
      text: <p className="py-[1vw] text-[1.05vw]">Intuitive and dynamic</p>,
    },
  ];

  return (
    <div className="bg-stone-400 ">
      <div className="">
        <motion.div
          whileInView={{ scale: [0.95, 1], opacity: [0, 0.3, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="header-title"
        >
          <div className=" flex py-[5vw] justify-between  w-[65%] mx-auto">
            {items.map((item, index) => (
              <div key={index}>
                {item.icon}
                {item.text}
              </div>
            ))}
          </div>
        </motion.div>
        <div className="flex justify-center items-center  w-[72%] mx-auto ">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="text"
          >
            <div className="mr-[-4vw]">
              <h6 className="text-[1.3vw] py-2 animate-pulse ">
                That's me in the office
              </h6>
              <img
                className="w-[20vw] h-[20vw] object-cover rounded-full rounded-l-none"
                src={profilePicture}
              />
            </div>
          </motion.div>
          <motion.div
            whileInView={{ x: [200, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="text  w-[67%]"
          >
            <div className="flex flex-col gap-[0.7vw]">
              <h3 className="text-[1.3vw] text-red-600 uppercase mb-[1vw]">
                Im always interested about
              </h3>
              <div className="flex  ml-[2vw]">
                <div className=" border-white border-[2px] rounded-full">
                  <p className="text-white font-bold text-[1.4vw] px-[1.1vw] py-[0.3vw]">
                    FRONTEND/BACKEND DEVELOPMENT
                  </p>
                </div>
              </div>
              <div className=" ml-[4.2vw] px-auto flex gap-[1vw]">
                <div className="flex  ">
                  <div className=" border-white border-[2px]  rounded-full">
                    <p className="text-white font-bold text-[1.4vw] border px-[1.1vw] py-[0.3vw] rounded-full">
                      WEBFLOW DEVELOPMENT
                    </p>
                  </div>
                </div>
                <div className="flex border-white border-[2px]  rounded-full">
                  <p className="text-white font-bold text-[1.4vw] border px-[1.1vw] py-[0.3vw] rounded-full">
                    STARTAPS
                  </p>
                </div>
              </div>
              <div className="ml-[5.2vw] px-auto flex gap-[1vw]">
                <div className="flex border-white border-[2px]  rounded-full">
                  <p className="text-white font-bold text-[1.4vw] border px-[1.1vw] py-[0.3vw] rounded-full">
                    NEW BUSINESSES
                  </p>
                </div>
                <div className="flex">
                  <div className="flex border-white border-[2px]  rounded-full">
                    <p className="text-white font-bold mx-auto text-[1.4vw] border px-[1.1vw] py-[0.3vw] rounded-full">
                      EXTREME SPORTS
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-[1.05vw] mt-[0.7vw] ml-[5.2vw] ">
                I'm a passionate Full-Stack web developer freelancer,
                specializing in crafting dynamic user experiences through
                innovative UI designs and seamless functionality.
              </p>
              <p className="text-[1.05vw] ml-[3.2vw]">
                Dedicated to creating top-notch software that enhances lives, I
                work with a diverse range of clients, from individuals and small
                businesses to large enterprises.
              </p>
              <p className="text-[1.05vw] ">
                Let's work together to bring your digital vision to life!
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          whileInView={{ y: [80, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="card"
        >
          <div className="flex gap-[2vw] justify-between py-[6vw]  w-[65%] mx-auto">
            <p className=" text-[0.8vw] border-black border-[2px] font-bold px-[0.5vw] py-[0.1vw] rounded-full">
              HTML
            </p>
            <p className="text-[0.8vw] border-black border-[2px] font-bold px-[0.5vw] py-[0.1vw] rounded-full">
              CSS
            </p>
            <p className="text-[0.8vw] border-black border-[2px] font-bold px-[0.5vw] py-[0.1vw] rounded-full">
              JavaScript
            </p>
            <p className=" text-[0.8vw] border-black border-[2px] font-bold px-[0.5vw] py-[0.1vw] rounded-full">
              React.js
            </p>

            <p className=" text-[0.8vw] border-black border-[2px] font-bold px-[0.5vw] py-[0.1vw] rounded-full">
              Next.js
            </p>
            <p className=" text-[0.8vw] border-black border-[2px] font-bold px-[0.5vw] py-[0.1vw] rounded-full">
              Node.js
            </p>
            <p className=" text-[0.8vw] border-black border-[2px] font-bold px-[0.5vw] py-[0.1vw] rounded-full">
              MongoDB
            </p>

            <p className=" text-[0.8vw] border-black border-[2px] font-bold px-[0.5vw] py-[0.1vw] rounded-full">
              Figma
            </p>
            <p className=" text-[0.8vw] border-black border-[2px] font-bold px-[0.5vw] py-[0.1vw] rounded-full">
              Tailwind
            </p>
            <p className=" text-[0.8vw] border-black border-[2px] font-bold px-[0.5vw] py-[0.1vw] rounded-full">
              SCSS
            </p>
          </div>
        </motion.div>
      </div>
      <div className="w-[75%] h-[2.5px] bg-stone-500 mx-auto "></div>
    </div>
  );
};

export default About;
