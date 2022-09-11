import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

import Navbar from "../components/Navbar";

const Routing = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <BrowserRouter>
        <Navbar isActive={isActive} />

        <Routes>
          <Route path="/" element={<Home isActive={isActive} />} />
          <Route path="/about" element={<About isActive={isActive} />} />
          <Route path="/projects" element={<Projects isActive={isActive} />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
