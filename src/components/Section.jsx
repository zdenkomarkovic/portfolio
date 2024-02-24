import React, { useEffect, useState, forwardRef } from "react";

const Section = forwardRef(({ height, active, onClick, id }, ref) => {
  const [sectionHeight, setSectionHeight] = useState(height);

  useEffect(() => {
    setSectionHeight(active ? "h-[75vh]" : "h-[10vh]");
  }, [active]);

  return (
    <div
      ref={ref}
      className={` ${sectionHeight} flex border-b`}
      onClick={onClick}
      id={id}
    >
      <h1 className="text-[30px] my-auto">Section</h1>
    </div>
  );
});

export default Section;
