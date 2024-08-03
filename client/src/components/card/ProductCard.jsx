import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import img from "../../public/images/products/nninw_400.webp";
import "./productCard.css";
function ProductCard() {
  return (
    <Card className="card-container">
      <CardActionArea>
        <CardMedia
          className="img-fluid"
          component="img"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="div">
            Europenan station Summer new Fashion..
          </Typography>
          <div className="d-flex justify-content-center">
            <Typography
              className="text-center text-primary fw-bold"
              variant="body1"
              style={{ marginRight: "8px" }} // Adjust spacing as needed
            >
              $54
            </Typography>
            <Typography className="text-decoration-line-through">
              $45
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;
