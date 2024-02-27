import React, { useState } from "react";

const Card = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  const handleClick = () => {
    window.open(data.url, "_blank");
  };
  // const handleContentClick = (e) => {
  //   e.stopPropagation();
  // };
  return (
    <div>
      {" "}
      <div
        className="md:w-[30vw] md:h-[20vw] relative rounded-3xl bg-white overflow-hidden text-white flex flex-col justify-between "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={data.image}
          alt="furniture store"
          className="md:w-[30vw] md:h-[20vw] rounded-3xl"
        />

        {isHovered && (
          <div
            onClick={data.click ? handleClick : null}
            className={`${
              data.click ? "cursor-pointer" : "cursor-not-allowed"
            }   absolute flex flex-col justify-between w-[100%] h-[100%] inset-0 bg-stone-500 text-center duration-700 opacity-0 hover:opacity-95`}
          >
            <div>
              <p className="text-[2vw] mt-[2vw] text-center">{data.title}</p>
              <p className="text-[1vw]  my-[1vw] font-thin text-center">
                {data.subTitle}
              </p>
              <p className="px-[1vw] text-[0.8vw] font-thin text-center">
                {data.info}
              </p>
            </div>
            <button
              className={`${
                data.click ? "cursor-pointer" : "cursor-not-allowed"
              }  mb-[1vw] font-light text-[1.5vw]`}
            >
              {data.buttonText}
            </button>
          </div>
        )}
      </div>
      {/* {isModalOpen && (
        <div
          className="
         fixed top-0 left-0 w-[100%] h-[100%] bg-stone-400  z-1000 z-50 bg-opacity-90 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="w-[30vw] h-[30vw] bg-stone-900  z-50 opacity-100"
            onClick={handleContentClick}
          >
            <span className="cursor-pointer mx-auto" onClick={closeModal}>
              &times;
            </span>
            
            <button
              className="item- items-center align-bottom mx-auto mr-auto"
              onClick={handleClick}
            >
              Visit site
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Card;
