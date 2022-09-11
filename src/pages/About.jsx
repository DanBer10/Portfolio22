import { Box, Container, Stack, Typography } from "@mui/material";
import { LazyGroup } from "react-lazy";
import { MovingComponent } from "react-moving-text";
import { Swiper, SwiperSlide } from "swiper/react";
import computerBG from "../assets/2-laptops.png";
import portrait from "../assets/portrait.jpg";
import { imgData } from "../data/imgData";
import FadeInWhenVisible from "../components/FadeInWhenVisible";

const About = ({ isActive }) => {
  return (
    <>
      <section
        className={`credit about overlay ${isActive ? "active" : ""}`}
        id="about"
      >
        {isActive ? (
          <MovingComponent
            type="fadeIn"
            duration="1000ms"
            delay="2s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="both"
          >
            <h1 className="site-nav">ABOUT</h1>
          </MovingComponent>
        ) : null}
        <LazyGroup>
          <Container fixed maxWidth="xl">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              style={{ cursor: "grab" }}
            >
              <SwiperSlide>
                <Container
                  fixed
                  maxWidth="xl"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      flex: "0.4",
                      backgroundColor: "#ffd324",
                      height: "70vh",
                      marginTop: "150px",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      flex: "0.6",
                      padding: "50px",
                    }}
                  >
                    <Typography sx={{ color: "#3a3a3a" }}>
                      Knowledge is All
                    </Typography>
                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: "800",

                        fontSize: "85px",
                        color: "#3a3a3a",
                      }}
                    >
                      My <br />
                      Skills.
                    </Typography>
                    <Stack direction="row" spacing={7} mt="40px">
                      <Box maxWidth="33%">
                        <Typography mt="15px" fontWeight="800">
                          01.
                        </Typography>
                        <Typography
                          variant="h5"
                          mt="15px"
                          mb="15px"
                          sx={{ color: "#3a3a3a" }}
                        >
                          Web Development
                        </Typography>
                        <Typography
                          mt="15px"
                          mb="15px"
                          sx={{
                            fontSize: "16px",
                            color: "#3a3a3a",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </Typography>
                      </Box>
                      <Box maxWidth="33%">
                        <Typography
                          mt="15px"
                          fontWeight="800"
                          sx={{ color: "#3a3a3a" }}
                        >
                          02.
                        </Typography>
                        <Typography
                          variant="h5"
                          mt="15px"
                          mb="15px"
                          sx={{ color: "#3a3a3a" }}
                        >
                          Optimization
                        </Typography>
                        <Typography
                          mt="15px"
                          mb="15px"
                          sx={{
                            fontSize: "16px",
                            color: "#3a3a3a",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </Typography>
                      </Box>
                      <Box maxWidth="33%">
                        <Typography mt="15px" fontWeight="800">
                          03.
                        </Typography>
                        <Typography
                          variant="h5"
                          mt="15px"
                          mb="15px"
                          sx={{ color: "#3a3a3a" }}
                        >
                          Front End Development
                        </Typography>
                        <Typography
                          mt="15px"
                          mb="15px"
                          sx={{
                            fontSize: "16px",
                            color: "#3a3a3a",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Container>
              </SwiperSlide>
              <SwiperSlide>
                <Container
                  fixed
                  maxWidth="xl"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      flex: "0.4",
                      backgroundColor: "#FF6666",
                      height: "70vh",
                      marginTop: "150px",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      flex: "0.6",
                      padding: "50px",
                    }}
                  >
                    <Typography sx={{ color: "#3a3a3a" }}>
                      Work is my Passion
                    </Typography>
                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: "800",

                        fontSize: "85px",
                        color: "#3a3a3a",
                      }}
                    >
                      Get To <br /> Know Me.
                    </Typography>
                    <Stack direction="row" spacing={7} mt="40px">
                      <Box maxWidth="60%">
                        <Typography
                          mt="15px"
                          mb="15px"
                          sx={{
                            fontSize: "18px",
                            color: "#3a3a3a",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam mollis in orci et bibendum. Duis euisod
                          risus metus, a faucibus diam placerat sed. Suspendisse
                          gravida sit amet lorem id ultrices. Donec vehicula
                          odio eu nulla off vehicula vutate. Sed venenatis
                          aliquet.
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Container>
              </SwiperSlide>
              <SwiperSlide>
                <Container
                  fixed
                  maxWidth="xl"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      flex: "0.4",
                      backgroundColor: "#6f77f4",
                      height: "70vh",
                      marginTop: "150px",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      flex: "0.6",
                      padding: "50px",
                    }}
                  >
                    <Typography sx={{ color: "#3a3a3a" }}>
                      Practice Makes Perfect
                    </Typography>
                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: "800",

                        fontSize: "85px",
                        color: "#3a3a3a",
                      }}
                    >
                      Front End Developer
                    </Typography>
                    <Stack direction="row" spacing={7} mt="40px">
                      <Box maxWidth="60%">
                        <Typography
                          mt="15px"
                          mb="15px"
                          sx={{
                            fontSize: "20px",
                            fontWeight: "800",
                            textTransform: "uppercase",

                            color: "#3a3a3a",
                          }}
                        >
                          good to know.
                        </Typography>
                        <Typography sx={{ fontSize: "16px" }}>
                          Dolor sit amet ekolor aloma Cons ctetur the old what
                          adips Incidunt ullt labe the off Duis euisod risus
                          metus, a faucibus diam placerat sed Suspendisse
                          gravida sit amet.
                        </Typography>
                      </Box>
                      <Box maxWidth="60%">
                        <Typography
                          mt="15px"
                          mb="15px"
                          sx={{
                            fontSize: "20px",
                            fontWeight: "800",
                            textTransform: "uppercase",

                            color: "#3a3a3a",
                          }}
                        >
                          work experience.
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "16px",
                          }}
                        >
                          Dolor sit amet ekolor aloma Cons ctetur the old what
                          adips Incidunt ullt labe the off Duis euisod risus
                          metus, a faucibus diam placerat sed Suspendisse
                          gravida sit amet.
                        </Typography>
                      </Box>
                      <Box maxWidth="60%">
                        <Typography
                          mt="15px"
                          mb="15px"
                          sx={{
                            fontSize: "20px",
                            fontWeight: "800",
                            textTransform: "uppercase",

                            color: "#3a3a3a",
                          }}
                        >
                          education.
                        </Typography>
                        <Typography sx={{ fontSize: "16px" }}>
                          Dolor sit amet ekolor aloma Cons ctetur the old what
                          adips Incidunt ullt labe the off Duis euisod risus
                          metus, a faucibus diam placerat sed Suspendisse
                          gravida sit amet.
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Container>
              </SwiperSlide>
            </Swiper>
          </Container>
        </LazyGroup>
      </section>
      <section>
        <div>
          <div className="about-portrait">
            <h2 className="about-portrait__heading">
              Designing meaningful experiences for brands & businesses
            </h2>

            <div className="about-portrait__portrait">
              <LazyGroup>
                <FadeInWhenVisible>
                  <img src={portrait} alt="portrait of Daniel Bernhardt" />
                </FadeInWhenVisible>
              </LazyGroup>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-lightblue">
        <Container
          fixed
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "100px 30px",
          }}
        >
          <div className="about-information">
            <FadeInWhenVisible>
              <div className="description">
                <h2>
                  I'm Daniel Bernhardt, a visual & interactive designer.
                  Currently, Creative Director at ilovecreatives Studio.
                </h2>
              </div>
            </FadeInWhenVisible>
          </div>

          <div className="about-image">
            <LazyGroup>
              <img src={computerBG} />
            </LazyGroup>
          </div>
        </Container>
      </section>

      <section style={{ backgroundColor: "#181818" }}>
        <Container maxWidth="xl" fixed>
          <div className="stack-presentation">
            <h2>01</h2>

            <p className="site-nav">Stack</p>

            <LazyGroup>
              <div className="stack-presentation-container">
                <div className="stack-presentation-container_inner">
                  {imgData.map((item, key) => (
                    <div>
                      <FadeInWhenVisible>
                        <img src={item.img} key={key} />
                        <p
                          style={{
                            color: "#a0a0a0",

                            fontSize: "12px",
                          }}
                        >
                          {item.title}
                        </p>
                      </FadeInWhenVisible>
                    </div>
                  ))}
                </div>
              </div>
            </LazyGroup>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
