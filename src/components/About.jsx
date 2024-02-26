import React, { useEffect, useState } from "react";
import profilePicture from "../assets/profile.jpg";
import "../InfinityText.css";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineSpeed } from "react-icons/md";
import { LuMonitorSmartphone } from "react-icons/lu";
import { BsTools } from "react-icons/bs";
import { GoLightBulb } from "react-icons/go";
import { motion } from "framer-motion";

const About = ({ height, newHeight, onClick }) => {
  const [aboutHeight, setAboutHeight] = useState(height);

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

  useEffect(() => {
    setAboutHeight(newHeight);
  }, [newHeight]);
  //  ${aboutHeight}
  return (
    <div className="bg-lightGray border-b">
      <div className=" w-[65%] mx-auto">
        <motion.div
          whileInView={{ scale: [0.95, 1], opacity: [0, 0.3, 0.6] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="header-title"
        >
          <div className=" flex pt-20 justify-between pb-10">
            {items.map((item, index) => (
              <div key={index}>
                {item.icon}
                {item.text}
              </div>
            ))}
          </div>
        </motion.div>
        <div className="flex justify-center items-center ">
          <motion.div
            whileInView={{ x: [-150, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="text"
          >
            <div className="">
              <h6 className="text-[1.3vw] py-2 ml-[7.5vw] animate-pulse ">
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
              <h3 className="text-[1.3vw] text-center text-red-600 uppercase mb-[1vw]">
                Im always interested about
              </h3>
              <div className="flex ">
                <div className=" border-white border-[2px] ml-[4vw] rounded-full">
                  <p className="text-white font-bold text-[1.4vw] px-[1.1vw] py-[0.3vw]">
                    FRONTEND/BACKEND DEVELOPMENT
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className=" border-white border-[2px]  rounded-full">
                  <p className="text-white font-bold text-[1.4vw] border px-[1.1vw] py-[0.3vw] rounded-full">
                    WEBFLOW DEVELOPMENT
                  </p>
                </div>
              </div>
              <div className="mx-auto px-auto flex gap-10">
                <div className="flex border-white border-[2px]  rounded-full">
                  <p className="text-white font-bold text-[1.4vw] border px-[1.1vw] py-[0.3vw] rounded-full">
                    NEW BUSINESSES
                  </p>
                </div>
                <div className="flex border-white border-[2px]  rounded-full">
                  <p className="text-white font-bold text-[1.4vw] border px-[1.1vw] py-[0.3vw] rounded-full">
                    STARTAPS
                  </p>
                </div>
              </div>
              <div className="flex ml-[4vw]">
                <div className="flex border-white border-[2px]  rounded-full">
                  <p className="text-white font-bold mx-auto text-[1.4vw] border px-[1.1vw] py-[0.3vw] rounded-full">
                    EXTREME SPORTS
                  </p>
                </div>
              </div>
              <p className="text-[1.05vw] mt-[1vw] ">
                I'm a passionate Full-Stack web developer freelancer,
                specializing in crafting dynamic user experiences through
                innovative UI designs and seamless functionality. Dedicated to
                creating top-notch software that enhances lives, I work with a
                diverse range of clients, from individuals and small businesses
                to large enterprises. Let's work together to bring your digital
                vision to life!
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          whileInView={{ y: [80, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="card"
        >
          <div className="flex gap-[2vw] justify-between my-[3vw]">
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
    </div>
  );
};

export default About;

{
  /* <IoDiamondOutline className="text-[3vw] mx-auto" />
            <p className="py-[1vw] text-[1.05vw]">World class Apps</p> */
}

{
  /* <div className="">
            <BsTools className="text-[3vw] mx-auto" />
            <p className="py-[1vw] text-[1.05vw]">Tailored To Your Needs</p>
          </div>
          <div>
            <MdOutlineSpeed className="text-[3vw] mx-auto" />
            <p className="py-[1vw] text-[1.05vw]">Fast load times</p>
          </div>
          <div>
            <LuMonitorSmartphone className="text-[3vw] mx-auto" />

            <p className="py-[1vw] text-[1.05vw]">
              Responsive, work on all devices
            </p>
          </div>
          <div>
            <GoLightBulb className="text-[3vw] mx-auto" />
            <p className="py-[1vw] text-[1.05vw]">Intuitive and dynamic</p>
          </div> */
}
