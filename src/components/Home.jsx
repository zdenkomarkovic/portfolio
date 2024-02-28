import React, { useEffect, useState } from "react";
import backgroundPicture from "../assets/cover.jpg";

const Home = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundPicture})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "101vh",
    width: "100%",
    position: "relative",
    color: "white",
  };
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  };

  return (
    <>
      <div className="flex" style={{ ...divStyle }}>
        <div style={overlayStyle}></div>
        <div className="flex z-20">
          <div className="flex  flex-col items-center ml-[15px] mt-[400px] md:mt-[10vw] md:ml-[20vw] justify-center">
            <h1 className="text-[20px] md:text-[2.5vw] z-10 ">
              Hello I'm <span className=" text-red-600">Zdenko Markovic</span>.
            </h1>
            <h2 className="text-[20px] md:text-[2.5vw] z-10">
              I'm a Full-Stack web developer
            </h2>
            <h2 className="text-[20px] md:text-[2.5vw] z-10">
              Nice to meet you!
            </h2>

            <h2 className="text-[1.1vw] mt-[5vw] border rounded-full px-[1.1vw] py-[0.35vw] z-10">
              Please take a look around
            </h2>
          </div>
          <div>
            <h2 className=" absolute text-[18px] md:text-[1.8vw] md:mt-[6vw] md:ml-[20vw] animate-pulse">
              That's me out of office hours
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
