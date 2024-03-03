import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };
  return (
    <>
      <div className=" bg-black opacity-70 " style={overlayStyle}></div>
      <div>
        <h2 className="text-[18px] pt-[80px] mr-[20px] md:text-[1.8vw] md:pt-[6vw] text-right md:mr-[7vw] animate-pulse">
          That's me out of office hours
        </h2>
      </div>
      <div className="flex z-20">
        <div className="flex  flex-col items-center ml-[20px] mt-[290px] md:mt-[10vw] md:ml-[15vw]">
          <h1 className="italic text-[21px] md:text-[2.5vw] z-10 ">
            Hello I'm <span className=" text-red-600">Zdenko Markovic</span>.
          </h1>
          <h2 className="italic text-[21px] md:text-[2.5vw] z-10">
            I'm a Full-Stack web developer
          </h2>
          <h2 className="italic text-[21px] md:text-[2.5vw] z-10">
            Nice to meet you!
          </h2>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer z-10"
          >
            <h2 className="text-[15px] mt-[50px] md:text-[1.1vw] md:mt-[2vw] border-[1.5px] rounded-full px-[10px] py-[3px] md:px-[1.1vw] md:py-[0.35vw]">
              Please take a look around
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
