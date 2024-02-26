import React, { useState } from "react";

const Card = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    window.open(data.url, "_blank");
  };
  const handleContentClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div>
      {" "}
      <div
        className="w-[30vw] relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={data.image} alt="furniture store" />

        {isHovered && (
          <div className="absolute w-[100%] h-[100%] inset-0 bg-slate-100 text-right ">
            <p className="text-[2vw] my-[2vw] text-center">{data.title}</p>
            <p className="text-[1vw] font-thin text-center">{data.subTitle}</p>

            <button
              className=" items-center text-[1vw] mt-[7vw] mr-[2vw] border-2 px-[0.8vw] py-[0.2vw] rounded-full"
              onClick={openModal}
            >
              LEARN MORE
            </button>
          </div>
        )}
      </div>
      {isModalOpen && (
        <div
          className="
         fixed top-0 left-0 w-[100%] h-[100%] bg-slate-300  z-10 opacity-90 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="w-48 h-48 bg-gray-400  z-50"
            onClick={handleContentClick}
          >
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>Ovo je sadržaj modala.</p>
            <button>Visit site</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
