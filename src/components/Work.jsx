import React, { useEffect, useRef, useState } from "react";
import { cardData } from "../constants/constants";
// import furnitureStore from "../assets/furnitureStore.png";
import Card from "./Card";

const Work = () => {
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
  }, []);

  return (
    <div id="work" className="bg-stone-400 text-white">
      <div className="w-[90%] md:w-[65%] mx-auto pt-[60px] pb-[70px] md:pt-[6vw] md:pb-[8vw]">
        <div className="mb-[60px] md:mb-[8vw]">
          <h2
            ref={headerRef}
            className={`text-[30px] md:text-[2.5vw] font-bold text-center ${
              isHeaderVisible ? " animate-slide-in-left" : ""
            }`}
          >
            PROJECTS
          </h2>

          <div
            className={`${
              isHeaderVisible ? " animate-slide-in-right" : ""
            } w-[160px] md:w-[15vw] h-[2.5px] md:h-[0.2vw] bg-white mx-auto`}
          ></div>
        </div>
        <div
          ref={cardRef}
          className={`flex pb-[25px]  flex-col gap-[40px] md:pb-[5vw] md:gap-0 md:flex-row justify-between transition-opacity duration-1000 ${
            isCardVisible ? "" : ""
          } `}
        >
          {cardData.map((data, i) => {
            return <Card key={i} data={data} />;
          })}
        </div>
        <div className="w-[70%] h-[2px] bg-stone-500 mx-auto"></div>
      </div>
    </div>
  );
};

export default Work;
