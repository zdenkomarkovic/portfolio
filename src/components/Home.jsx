import React, { useEffect, useState } from "react";
import backgroundPictureSm from "../assets/cover5.jpg";
import backgroundPictureMd from "../assets/cover.jpg";
import { Link } from "react-scroll";
import Hero from "./Hero";

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
  };

  return (
    <>
      <div
        id="home"
        className="hidden md:block z-10 text-white"
        style={{ ...divStyle }}
      >
        <Hero />
      </div>
      <div className=" md:hidden text-white" style={{ ...divStyle }}>
        <Hero />
      </div>
    </>
  );
};

export default Home;
