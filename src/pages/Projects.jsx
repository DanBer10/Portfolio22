// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Deck from "../components/Deck";
import { LazyGroup } from "react-lazy";
import { MovingComponent } from "react-moving-text";
import { Card, CardMedia, Container, Typography } from "@mui/material";

import books from "../assets/books.jpg";
import waterbuilding from "../assets/water-building.jpg";
import { projectData } from "../data/data";
import { Box } from "@mui/system";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import FadeInWhenVisible from "../components/FadeInWhenVisible";

const Projects = ({ isActive }) => {
  const [selected, setSelected] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("PROJECTS RENDERED");
  }, []);

  return (
    <>
      <section
        className={`credit projects overlay ${isActive ? "active" : ""}`}
      >
        {isActive ? (
          <MovingComponent
            type="fadeIn"
            duration="1000ms"
            delay="1s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="both"
          >
            <h1 className="site-nav">Projects</h1>
          </MovingComponent>
        ) : null}

        <div className="projects-hero">
          <div className="projects-hero-img1">
            <img src={books} alt="didnt find water drops image" />
          </div>
          {isActive ? (
            <MovingComponent
              type="fadeIn"
              duration="1200ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              <h1>
                Projects
                <br />
                Graphique
              </h1>
            </MovingComponent>
          ) : null}
          <div className="projects-hero-img2">
            <img src={waterbuilding} alt="didnt find water drops image" />
          </div>
        </div>

        <Container sx={{ marginTop: "300px" }}>
          <Box ref={ref}>
            {isInView ? (
              <MovingComponent
                type="fadeIn"
                duration="1200ms"
                delay="0s"
                direction="normal"
                timing="ease-in-out"
                iteration="1"
                fillMode="none"
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "clamp(45px, 5vw, 67px)",
                    color: "#ff6666",
                  }}
                >
                  These are my projects made in various stacks over a year.
                </Typography>
              </MovingComponent>
            ) : (
              ""
            )}
          </Box>
        </Container>
        <br />
        <Container sx={{ marginTop: "300px" }}>
          <Box className="card-grid">
            {projectData.map((item, id) => {
              const { img, title, right, small, positionRight, positionLeft } =
                item;
              return (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                >
                  <FadeInWhenVisible>
                    <Card
                      className={`card-container ${small ? "small" : ""} ${
                        isInView ? "inview" : "notinview"
                      }
                  `}
                      key={id}
                      sx={{
                        maxWidth: "520px",
                        maxHeight: "675px",
                        width: "100%",
                        height: "100%",
                        right: positionRight,
                        left: positionLeft,
                      }}
                      onMouseOver={() => setSelected(id)}
                      onMouseLeave={() => setSelected(null)}
                    >
                      <div className="card-content">
                        <CardMedia
                          component="img"
                          image={img}
                          alt="Card image missing"
                          className="card-image"
                        />

                        {selected === id && (
                          <div
                            className={`card-title ${right ? "right" : "left"}`}
                          >
                            <p
                              className={`card-header ${
                                right ? "active" : "active-left"
                              }`}
                            >
                              {title}
                            </p>
                          </div>
                        )}
                      </div>
                    </Card>
                  </FadeInWhenVisible>
                </motion.div>
              );
            })}
          </Box>
          <div className="projects-container">
            <FadeInWhenVisible>
              <LazyGroup style={{ marginBottom: "150px" }}>
                <Deck />
              </LazyGroup>
            </FadeInWhenVisible>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Projects;
