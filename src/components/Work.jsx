import React, { useEffect, useState } from "react";
import furnitureStore from "../assets/furnitureStore.png";

const Work = ({ height, newHeight, onClick }) => {
  const [aboutHeight, setAboutHeight] = useState(height);

  useEffect(() => {
    setAboutHeight(newHeight);
  }, [newHeight]);
  // ${aboutHeight}
  return (
    <div
      className={` border-b`}
      onClick={onClick}
      style={{ cursor: "pointer" }} // Dodajemo stil da pokažemo da je ova komponenta klikabilna
    >
      <div className="w-[80%] mx-auto">
        <h1 className="text-[30px] my-10 text-center ">Projects</h1>
        <div>
          <div className="w-[20vw] h-[20vw]">
            <img src={furnitureStore} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
