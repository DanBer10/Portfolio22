import { Button, Box, Stack, Container, Typography } from "@mui/material";

const Modal = (props) => {
  const { modalOpen, title, params, url, cardIndex, activeItem } = props;

  // const handleActiveCard = (cardId) => {
  //   setModalOpen(!t);
  //   let actualCardId = cardId;
  //   setActiveItem(actualCardId);
  // };

  return (
    <Box
      className={` ${modalOpen && cardIndex === activeItem && "modal"}`}
      // onClick={() => handleActiveCard(cardIndex)}
    >
      <Stack spacing={2}>
        <Container
          maxWidth="sm"
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Typography
            color="#3a3a3a"
            variant="h2"
            className={`${modalOpen ? "show" : "hidden"}`}
            sx={{ fontFamily: "Montserrat", fontWeight: "800" }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              variant: "body1",
              mt: "30px",
              mb: "30px",
              fontSize: "18px",
              fontFamily: "Montserrat",
            }}
            className={`${modalOpen ? "show" : "hidden"}`}
          >
            {params}
          </Typography>
          <Button
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            alt={`Couldn't load ${title} url`}
            sx={{
              color: "#3a3a3a",
              fontSize: "18px",
              fontWeight: "800",
              fontFamily: "Montserrat",
              backgroundColor: "#ffd324",
            }}
          >
            Visit Project
          </Button>
        </Container>
      </Stack>
    </Box>
  );
};

export default Modal;
