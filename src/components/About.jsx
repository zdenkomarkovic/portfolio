import React, { useEffect, useState } from "react";
import profilePicture from "../assets/profile.jpg";
import "../InfinityText.css";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineSpeed } from "react-icons/md";
import { LuMonitorSmartphone } from "react-icons/lu";
import { BsTools } from "react-icons/bs";
import { GoLightBulb } from "react-icons/go";

const About = ({ height, newHeight, onClick }) => {
  const [aboutHeight, setAboutHeight] = useState(height);

  useEffect(() => {
    setAboutHeight(newHeight);
  }, [newHeight]);
  //  ${aboutHeight}
  return (
    <div className={` border-b bg-lightGray`}>
      <div className=" w-[80%] mx-auto">
        <div className=" flex gap-[3vw] py-10 justify-center">
          <div className="">
            <IoDiamondOutline className="text-[3vw] mx-auto" />
            <p className="py-[1vw] text-[0.9vw]">World class Apps</p>
          </div>
          <div className="">
            <BsTools className="text-[3vw] mx-auto" />
            <p className="py-[1vw] text-[0.9vw]">Tailored To Your Needs</p>
          </div>
          <div>
            <MdOutlineSpeed className="text-[3vw] mx-auto" />
            <p className="py-[1vw] text-[0.9vw]">Fast load times</p>
          </div>
          <div>
            <LuMonitorSmartphone className="text-[3vw] mx-auto" />
            <p className="py-[1vw] text-[0.9vw]">
              Responsive, work on all devices
            </p>
          </div>

          <div>
            <GoLightBulb className="text-[3vw] mx-auto" />
            <p className="py-[1vw] text-[0.9vw]">Intuitive and dynamic</p>
          </div>
          <div></div>
        </div>
        <div className="flex gap-[8vw] justify-center items-center ">
          <div className="">
            <h6 className="text-[1.3vw] py-2 ml-[10vw] animate-pulse ">
              That's me in the office
            </h6>
            <img
              className="w-[17vw] h-[17vw] object-cover rounded-full"
              src={profilePicture}
            />
          </div>

          <div className="flex flex-col gap-[1vw] ">
            <h3 className="text-[1.3vw] text-center text-red-600 uppercase mb-[2vw]">
              Im always interested about
            </h3>
            <div className="flex ">
              <div className=" border-white border-[2px] ml-[1vw] rounded-full">
                <p className="text-white font-bold text-[1.2vw] px-[1.1vw] py-[0.35vw]">
                  FRONTEND/BACKEND DEVELOPMENT
                </p>
              </div>
            </div>
            <div className="flex">
              <div className=" border-white border-[2px]  rounded-full">
                <p className="text-white font-bold text-[1.2vw] border px-[1.1vw] py-[0.35vw] rounded-full">
                  WEBFLOW DEVELOPMENT
                </p>
              </div>
            </div>
            <div className="mx-auto px-auto flex gap-10">
              <div className="flex border-white border-[2px]  rounded-full">
                <p className="text-white font-bold text-[1.2vw] border px-[1.1vw] py-[0.35vw] rounded-full">
                  NEW BUSINESSES
                </p>
              </div>
              <div className="flex border-white border-[2px]  rounded-full">
                <p className="text-white font-bold text-[1.2vw] border px-[1.1vw] py-[0.35vw] rounded-full">
                  STARTAPS
                </p>
              </div>
            </div>
            <div className="flex ml-[4vw]">
              <div className="flex border-white border-[2px]  rounded-full">
                <p className="text-white font-bold mx-auto text-[1.2vw] border px-[1.1vw] py-[0.35vw] rounded-full">
                  EXTREME SPORTS
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-[5vw] flex gap-[4vw] items-center justify-center">
          <div className="flex flex-col gap-[0.5vw]">
            <div className="flex gap-[1vw]">
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
            </div>

            <div className="flex gap-[1vw]">
              <p className=" text-[0.8vw] border-black border-[2px] font-bold px-[0.5vw] py-[0.1vw] rounded-full">
                Next.js
              </p>
              <p className=" text-[0.8vw] border-black border-[2px] font-bold px-[0.5vw] py-[0.1vw] rounded-full">
                Node.js
              </p>
              <p className=" text-[0.8vw] border-black border-[2px] font-bold px-[0.5vw] py-[0.1vw] rounded-full">
                MongoDB
              </p>
            </div>
            <div className="flex gap-[1vw]">
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
          </div>
          <p className="text-[0.9vw] w-[40vw]  ">
            I'm a passionate Full-Stack web developer freelancer, specializing
            in crafting dynamic user experiences through innovative UI designs
            and seamless functionality. Dedicated to creating top-notch software
            that enhances lives, I work with a diverse range of clients, from
            individuals and small businesses to large enterprises. Let's work
            together to bring your digital vision to life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
