import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Sidebar = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className=" fixed left-0 top-0 h-full w-64 ml-[2vw] flex gap-[1.1vw] text-[1vw] font-extralight italic uppercase">
          <Link to="home" smooth={true} duration={500}>
            <div className="cursor-pointer">
              <div className="h-[10vh] w-[1px] bg-black ml-[5px] mb-[4vh] mt-[4vh]"></div>
              <div className=" -rotate-90">e</div>
              <div className=" -rotate-90">m</div>
              <div className=" -rotate-90">o</div>
              <div className=" -rotate-90">h</div>
              <div className="h-[80vh] w-[1px] bg-black ml-[5px] mb-[4vh] mt-[4vh]"></div>
            </div>
          </Link>
          <Link to="about" smooth={true} duration={500}>
            <div className=" cursor-pointer">
              <div className="h-[22vh] w-[1px] bg-black ml-[5px] mb-[4vh] mt-[4vh]"></div>
              <div className=" -rotate-90">t</div>
              <div className=" -rotate-90">u</div>
              <div className=" -rotate-90">o</div>
              <div className=" -rotate-90">b</div>
              <div className=" -rotate-90">a</div>
              <div className="h-[60vh] w-[1px] bg-black ml-[5px] mb-[4vh] mt-[4vh]"></div>
            </div>
          </Link>
          <Link to="work" smooth={true} duration={500}>
            <div className=" cursor-pointer">
              <div className="h-[34vh] w-[1px] bg-black ml-[5px] mb-[4vh] mt-[4vh]"></div>
              <div className=" -rotate-90">k</div>
              <div className=" -rotate-90">r</div>
              <div className=" -rotate-90">o</div>
              <div className=" -rotate-90">w</div>
              <div className="h-[50vh] w-[1px] bg-black ml-[5px] mb-[4vh] mt-[4vh]"></div>
            </div>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <div className=" cursor-pointer">
              <div className="h-[46vh] w-[1px] bg-black ml-[5px] mb-[4vh] mt-[4vh]"></div>
              <div className=" -rotate-90">t</div>
              <div className=" -rotate-90">c</div>
              <div className=" -rotate-90">a</div>
              <div className=" -rotate-90">t</div>
              <div className=" -rotate-90">n</div>
              <div className=" -rotate-90">o</div>
              <div className=" -rotate-90">c</div>
              <div className="h-[40vh] w-[1px] bg-black ml-[5px] mb-[4vh] mt-[4vh]"></div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
