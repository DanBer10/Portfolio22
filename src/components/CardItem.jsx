import { useState, useEffect } from "react";
import { projectData } from "../data/data";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { motion } from "framer-motion";

const CardItem = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(projectData);
  }, []);

  return (
    <>
      <div className="card-container">
        {data?.map((item, key) => {
          return (
            <motion.div key={key} whileHover={{ scale: 1.04 }}>
              <Card
                sx={{
                  maxWidth: {
                    lg: "365px",
                    md: "280px",
                    xs: "350px",
                  },
                  margin: {
                    xs: "0 auto",
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image=""
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.subtitle}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default CardItem;
