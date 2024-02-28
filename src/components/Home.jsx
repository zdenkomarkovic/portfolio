import React, { useEffect, useState } from "react";
import backgroundPictureSm from "../assets/cover5.jpg";
import backgroundPictureMd from "../assets/cover.jpg";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const divStyle = {
    backgroundImage: `url(${
      windowWidth < 768 ? backgroundPictureSm : backgroundPictureMd
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "101vh",
    width: "100%",
    position: "relative",
  };
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  };

  return (
    <>
      <div className=" hidden md:block text-white" style={{ ...divStyle }}>
        <div style={overlayStyle}></div>
        <div className="flex z-20">
          <div className="flex  flex-col items-center mt-[15vw] ml-[20vw]">
            <h1 className="md:text-[2.5vw] z-10 ">
              Hello I'm <span className=" text-red-600">Zdenko Markovic</span>.
            </h1>
            <h2 className="md:text-[2.5vw] z-10">
              I'm a Full-Stack web developer
            </h2>
            <h2 className="md:text-[2.5vw] z-10">Nice to meet you!</h2>

            <h2 className="text-[1.1vw] mt-[5vw] px-[1.1vw] py-[0.35vw] z-10">
              Please take a look around
            </h2>
          </div>
          <div>
            <h2 className="md:text-[1.8vw] md:mt-[6vw] md:ml-[20vw] animate-pulse">
              That's me out of office hours
            </h2>
          </div>
        </div>
      </div>
      <div className=" md:hidden text-white" style={{ ...divStyle }}>
        <div style={overlayStyle}></div>
        <div>
          <h2 className="text-[18px] pt-[80px] animate-pulse text-right mr-[20px]">
            That's me out of office hours
          </h2>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center ml-[20px] justify-center  mt-[290px]">
            <h1 className="text-[21px] z-10 ">
              Hello I'm <span className=" text-red-600">Zdenko Markovic</span>.
            </h1>
            <h2 className="text-[21px] md:text-[2.5vw] z-10">
              I'm a Full-Stack web developer
            </h2>
            <h2 className="text-[21px] md:text-[2.5vw] z-10">
              Nice to meet you!
            </h2>

            <h2 className="text-[15px] mt-[50px] px-[1.1vw] py-[0.35vw] z-10">
              Please take a look around
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
