import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import img from "../../public/images/products/nninw_400.webp";

function ProductCard() {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={img}
          alt="Product image"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="div">
            European station Summer new Fashion..
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography
              sx={{ textAlign: 'center', color: 'primary.main', fontWeight: 'bold', mr: 1 }}
              variant="body1"
            >
              $54
            </Typography>
            <Typography sx={{ textDecoration: 'line-through' }}>
              $45
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;
