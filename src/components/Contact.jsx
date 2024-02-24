import React, { useEffect, useState } from "react";

const Contact = ({ height, newHeight, onClick }) => {
  const [aboutHeight, setAboutHeight] = useState(height);

  useEffect(() => {
    setAboutHeight(newHeight);
  }, [newHeight]);

  return (
    <div
      className={` ${aboutHeight} flex border-b`}
      onClick={onClick}
      style={{ cursor: "pointer" }} // Dodajemo stil da pokažemo da je ova komponenta klikabilna
    >
      <h1 className="text-[30px] my-auto">Contact</h1>
    </div>
  );
};

export default Contact;
