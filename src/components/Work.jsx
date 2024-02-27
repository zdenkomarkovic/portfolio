import React, { useEffect, useRef, useState } from "react";
// import furnitureStore from "../assets/furnitureStore.png";
import Card from "./Card";
import { cardData } from "../constants/constants";

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
        const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setIsHeaderVisible(isInView);
      }
    };

    const handleCardScroll = () => {
      const cardElement = cardRef.current;
      if (cardElement) {
        const rect = cardElement.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
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
    <div className="bg-stone-400 text-white">
      <div className="w-[65%] mx-auto pt-[6vw] pb-[10vw]">
        <div className=" mb-[8vw]">
          <h2
            ref={headerRef}
            className={`text-[2.5vw] font-bold text-center ${
              isHeaderVisible ? " animate-slide-in-left" : ""
            }`}
          >
            PROJECTS
          </h2>

          <div
            className={`${
              isHeaderVisible ? " animate-slide-in-right" : ""
            } w-[15vw] h-[0.2vw] bg-white mx-auto`}
          ></div>
        </div>
        <div
          ref={cardRef}
          className={`flex justify-between transition-opacity duration-1000 ${
            isCardVisible ? "" : ""
          } `}
        >
          {cardData.map((data, i) => {
            return <Card key={i} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
