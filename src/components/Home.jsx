import React, { useEffect, useState } from "react";
import backgroundPicture from "../assets/cover.jpg";

const Home = ({ height, newHeight, onClick }) => {
  const [aboutHeight, setAboutHeight] = useState(height);

  useEffect(() => {
    setAboutHeight(newHeight);
  }, [newHeight]);

  const divStyle = {
    backgroundImage: `url(${backgroundPicture})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
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
    backgroundColor: "rgba(0, 0, 0, 0.75)", // crna boja sa 50% prozirnošću
  };

  return (
    <div className={` border-b flex`} style={{ ...divStyle }}>
      <div style={overlayStyle}></div>
      <div className="flex z-20">
        <div className="flex  flex-col items-center mt-[10vw] ml-[20vw] justify-center">
          <h1 className="text-[2.5vw] ">
            Hello I'm <span className=" text-red-600">Zdenko Markovic</span>.
          </h1>
          <h2 className="text-[2.5vw] z-10">I'm a Full-Stack web developer</h2>
          <h2 className="text-[2.5vw] z-10">Nice to meet you!</h2>

          <h2 className="text-[1.1vw] mt-[5vw] border rounded-full px-[1.1vw] py-[0.35vw]">
            Please take a look around
          </h2>
        </div>
        <div>
          <h2 className="text-[1.3vw] mt-[6vw] ml-[20vw] animate-pulse">
            That's me out of office hours
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;