import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography } from "@mui/material";

function Carouse({ Banner1, Banner2, Banner3 }) {
  const items = [
    { img: Banner1, alt: "First slide" },
    { img: Banner2, alt: "Second slide" },
    { img: Banner3, alt: "Third slide" },
  ];

  return (
    <Carousel interval={3000} indicators={false} navButtonsAlwaysInvisible>
      {items.map((item, index) => (
        <Paper key={index} elevation={3}>
          <img
            src={item.img}
            alt={item.alt}
            style={{ width: "100%", height: "auto" }}
          />
        </Paper>
      ))}
    </Carousel>
  );
}

export default Carouse;
