import React, { useState } from "react";

const Card = ({ data }) => {
  const [isHovered, setIsHovered] = useState(true);

  const handleClick = () => {
    window.open(data.url, "_blank");
  };

  return (
    <div>
      {" "}
      <div
        className="w-full h-[250px] md:w-[30vw] md:h-[22vw] relative rounded-lg md:rounded-3xl bg-white overflow-hidden text-white flex flex-col justify-between "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={data.image}
          alt="furniture store"
          className="w-full h-[250px] md:w-[30vw] md:h-[22vw] rounded-lg md:rounded-3xl"
        />

        {isHovered && (
          <div
            onClick={data.click ? handleClick : null}
            className={`${
              data.click ? "cursor-pointer" : "cursor-not-allowed"
            }   absolute flex flex-col justify-between w-[100%] h-[100%] inset-0 bg-stone-500 text-center duration-700 opacity-0 hover:opacity-95`}
          >
            <div>
              <p className="text-[28px] md:text-[2.5vw] mt-[20px] md:mt-[1.3vw] text-center">
                {data.title}
              </p>
              <p className="text-[15px] md:text-[1.5vw] font-thin text-center">
                {data.subTitle}
              </p>
              <p className="text-[13px] leading-tight mt-[10px] px-[5px] md:mt-[1vw] md:leading-normal md:px-[1vw] md:text-[1.1vw] font-thin text-center">
                {data.info}
              </p>
            </div>
            <button
              className={`${
                data.click ? "cursor-pointer" : "cursor-not-allowed"
              } mb-[15px] md:mb-[1vw] text-[20px] font-light md:text-[1.7vw]`}
            >
              {data.buttonText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
