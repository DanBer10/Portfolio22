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
        <Container maxWidth="sm">
          <Typography
            color="#fff"
            variant="h1"
            className={`${modalOpen ? "show" : "hidden"}`}
          >
            {title}
          </Typography>
          <Typography
            sx={{ variant: "body1", mt: "30px", mb: "30px" }}
            className={`${modalOpen ? "show" : "hidden"}`}
          >
            {params}
          </Typography>
          <Button
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            alt={`Couldn't load ${title} url`}
            sx={{ color: "#fff", fontSize: "20px" }}
          >
            Visit Project
          </Button>
        </Container>
      </Stack>
    </Box>
  );
};

export default Modal;
