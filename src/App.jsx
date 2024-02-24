import React, { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Work from "./components/Work";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [comHeights, setComHeights] = useState({
    Home: "h-[75vh]",
    About: "h-[10vh]",
    Work: "h-[10vh]",
    Contact: "h-[10vh]",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 0) {
        setActiveIndex(0); // Vrati se na početni indeks ako je skrol na vrhu
      } else if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight
      ) {
        setActiveIndex(1); // Postavi indeks na 1 (About) ako je skrol na dnu
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const newHeights = {};
    for (const key in comHeights) {
      newHeights[key] =
        key === Object.keys(comHeights)[activeIndex] ? "h-[75vh]" : "h-[10vh]";
    }
    setComHeights(newHeights);
  }, [activeIndex]);

  return (
    <>
      <Home
      // height={comHeights.Home}
      // onClick={() => setActiveIndex(0)}
      // newHeight={comHeights.Home}
      />
      <About
        height={comHeights.About}
        newHeight={comHeights.About}
        onClick={() => setActiveIndex(1)}
      />
      <Work
        height={comHeights.Work}
        onClick={() => setActiveIndex(2)}
        newHeight={comHeights.Work}
      />
      <Contact
        height={comHeights.Contact}
        onClick={() => setActiveIndex(3)}
        newHeight={comHeights.Contact}
      />
    </>
  );
}

export default App;
