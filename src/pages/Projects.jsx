// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Deck from "../components/Deck";
import { LazyGroup } from "react-lazy";

const Projects = ({ isActive }) => {
  return (
    <>
      {isActive ? (
        <section
          className={`credit projects overlay ${isActive ? "active" : ""}`}
        >
          <div className="section-container ">
            <h1>PROJECTS</h1>
            <div className="projects-container">
              <LazyGroup style={{ marginBottom: "150px" }}>
                <Deck />
              </LazyGroup>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Projects;
