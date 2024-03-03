import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { TfiControlBackward } from "react-icons/tfi";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 1000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuad",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="rotate-90 fixed bottom-[2vw] right-[2vw] text-white border-[2px] py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
        >
          <TfiControlBackward />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
