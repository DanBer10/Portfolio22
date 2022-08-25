import { LazyGroup } from "react-lazy";

const About = ({ isActive }) => {
  return (
    <>
      {isActive ? (
        <section
          className={`credit about overlay ${isActive ? "active" : ""}`}
          id="about"
        >
          <LazyGroup>
            <div className="section-container">
              <h1>ABOUT</h1>
            </div>
          </LazyGroup>
        </section>
      ) : null}
    </>
  );
};

export default About;
