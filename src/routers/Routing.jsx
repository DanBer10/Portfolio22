import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import Home from "../pages/Home";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Mousewheel, Pagination } from "swiper";
import Projects from "../pages/Projects";
import Navbar from "../components/Navbar";

SwiperCore.use([Mousewheel, Pagination, EffectFade]);

const swiperOptions = {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: true,
  effect: "fade",
  speed: 1000,
};

const Routing = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Swiper {...swiperOptions}>
          <SwiperSlide>
            {({ isActive }) => <Home isActive={isActive} />}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => <About isActive={isActive} />}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => <Projects isActive={isActive} />}
          </SwiperSlide>
        </Swiper>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routing;
