import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Sidebar from "./components/Sidebar";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Home />
      <Sidebar />
      <About />
      <Work />
      <Contact />
      <ScrollToTopButton />
    </>
  );
}

export default App;
