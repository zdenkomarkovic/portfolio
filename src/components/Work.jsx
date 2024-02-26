import React, { useEffect, useRef, useState } from "react";
// import furnitureStore from "../assets/furnitureStore.png";
import Card from "./Card";
import { cardData } from "../constants/constants";

const Work = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = headerRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-[65%] mx-auto border-b-2">
      <div className="mt-[5vw] mb-[10vw]">
        <h1
          ref={headerRef}
          className={`text-[2.5vw] font-bold text-center ${
            isVisible ? " animate-slide-in-left" : ""
          }`}
        >
          PROJECTS
        </h1>

        <div
          className={`${
            isVisible ? " animate-slide-in-right" : ""
          } w-[15vw] h-[0.2vw] bg-black mx-auto`}
        ></div>
      </div>
      <div className="flex justify-between mb-[10vw]">
        {/* <div
          className="w-[30vw] relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <a
            href="https://furniture-store-r4p8.vercel.app"
            target="blank"
            className="cursor-pointer"
          >
            <img src={furnitureStore} alt="furniture store" />
          </a>
          {isHovered && (
            <div className="absolute w-[100%] h-[100%] inset-0 bg-slate-100  ">
              <p>Furniture store</p>
              <p>React/Node/MongoDB</p>
              <button>Learn more</button>
            </div>
          )}
        </div> */}
        {cardData.map((data, i) => {
          return <Card key={i} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Work;
