import React, { useState } from "react";

import marbleImg from "../assets/marble.jpg";

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Divider,
  Container,
  Stack,
} from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Navbar = () => {
  const [state, setState] = useState({ right: false });
  const [active, setActive] = useState(false);

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
    setActive(!active);
  };

  const texted = {
    color: "black",
    fontSize: "65px",
    fontWeight: 800,
    textTransform: "uppercase",
    fontFamily: "Montserrat",
    color: "#3a3a3a",
  };

  const list = () => (
    <Container
      fixed
      maxWidth="xl"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ flex: "0.5" }}>
        <img src={marbleImg} alt="navbar-image" className="nav-hero_img" />
        <Box
          sx={{ display: "flex", justifyContent: "space-between" }}
          className="nav-hero_text"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flex: 0.5,
            }}
          >
            <Typography
              variant="h2"
              mb="25px"
              sx={{
                textTransform: "capitalize",
                fontWeight: "700",
                fontSize: "30px",
                fontFamily: "Montserrat",
              }}
            >
              Stay in touch.
            </Typography>
            <Typography
              sx={{
                marginBottom: "15px",
                fontWeight: "300",
                fontSize: "16px",
                fontFamily: "Montserrat",
              }}
            >
              danielbernhardt1996@outlook.com
            </Typography>
            <Typography
              sx={{
                marginBottom: "15px",
                fontWeight: "300",
                fontSize: "16px",
                fontFamily: "Montserrat",
              }}
            >
              070-5189424
            </Typography>
            <Typography
              sx={{
                marginBottom: "15px",
                fontWeight: "300",
                fontSize: "16px",
                fontFamily: "Montserrat",
              }}
            >
              Stockholm, Sweden
            </Typography>
          </Box>
          <Box sx={{ flex: "0.4", flexDirection: "column" }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Montserrat",
                fontWeight: "800",
                fontSize: "55px",
              }}
            >
              DB.
            </Typography>

            <Typography
              sx={{
                fontSize: "18px",
                fontFamily: "Montserrat",
                fontWeight: "500",
                marginTop: "15px",
              }}
            >
              Let's connect.
            </Typography>
            <Box>
              <Stack direction="row" spacing={2} mt="15px">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://linkedin.com/in/danielbernhardtt"
                  className="social-link"
                >
                  <LinkedInIcon />
                </a>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ flex: "0.4" }}>
        <Typography sx={{ fontFamily: "Montserrat" }}>
          This portfolio contains:
        </Typography>
        <List sx={{ display: "flex", flexDirection: "column" }}>
          {["Home.", "About.", "Projects."].map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemText
                primaryTypographyProps={{ style: texted }}
                primary={text}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );

  return (
    <>
      <nav>
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <div
              className={`${active ? "menu btn5 open" : "menu btn5 "}`}
              data-menu="5"
              onClick={toggleDrawer(anchor, !active)}
            >
              <div className="icon"></div>
            </div>
            {/* </Button> */}
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              <Divider />
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
