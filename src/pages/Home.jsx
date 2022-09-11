import { MovingComponent } from "react-moving-text";
import { LazyGroup } from "react-lazy";
import { Container } from "@mui/system";
import { motion } from "framer-motion";
import ParticleEffectButton from "react-particle-effect-button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FadeInWhenVisible from "../components/FadeInWhenVisible";

const Home = ({ isActive }) => {
  const [activeSocial, setSocialActive] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false);
  const isOpen = JSON.parse(localStorage.getItem("first-load"));

  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen === null) {
      setFirstLoad(true);
      localStorage.setItem("first-load", JSON.stringify(!firstLoad));
    } else {
      setFirstLoad(false);
    }
  }, []);

  const handleContactMe = () => {
    setHidden(!hidden);
    setTimeout(() => {
      setSocialActive(!activeSocial);
    }, 1500);
  };

  return (
    <>
      {firstLoad && (
        <motion.div
          animate={{
            x: -12,
            y: 0,
            scale: 0,
            rotate: 0,
          }}
          transition={{
            delay: 2,
            x: { duration: 1 },
          }}
        >
          <div className="background-flip">
            <FadeInWhenVisible>
              <h1>Welcome to my portfolio!</h1>
            </FadeInWhenVisible>
          </div>
        </motion.div>
      )}

      <header className="home-header">
        {!activeSocial && (
          <ParticleEffectButton
            color="#dd545b"
            hidden={hidden}
            easing="easeInOutCubic"
          >
            <button
              className="btn btn-primary"
              onClick={() => handleContactMe()}
            >
              Contact me!
            </button>
          </ParticleEffectButton>
        )}

        <div className={`socialBar ${activeSocial ? "active" : "hidden"}`}>
          <MovingComponent
            type="fadeInFromTop"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="backwards"
          >
            <ul>
              <li>
                <a href="https://facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://facebook.com">Whatsapp</a>
              </li>
              <li>
                <a href="https://facebook.com">Mail</a>
              </li>
            </ul>
          </MovingComponent>
        </div>
      </header>

      <section className={`credit home overlay ${isActive ? "active" : ""}`}>
        <Container fixed maxWidth="xl" sx={{ height: "100vh" }}>
          <LazyGroup> </LazyGroup>

          <h1 className="site-nav">HOME</h1>

          <div className="home_container">
            <div className="information-text">
              <span className="clr-light-gray">Hello, im Daniel ✌</span>
              <MovingComponent
                type="fadeIn"
                duration="1000ms"
                delay="3s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="backwards"
              >
                <p>
                  I'm an interdisciplinary designer living in San Francisco,
                  California. Currently I work at{" "}
                  <span className="clr-light-gray">Carbon Health, </span>
                  transforming how we experience healthcare.
                </p>
              </MovingComponent>
            </div>
            <br />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
