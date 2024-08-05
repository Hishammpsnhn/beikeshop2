import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import StarIcon from '@mui/icons-material/Star';
import './productName.css';

function ProductName() {
  return (
    <Paper elevation={6} className="paper">
      <Typography variant="h4" className="text-muted">
        Banana Plug Men's Yellow Shirts
      </Typography>
      <Typography variant="h5" className="price">
        $ 299
      </Typography>
      <Button
        variant="contained"
        className="bg-primary btn_border"
        endIcon={<StarIcon />}
      >
        3.5
      </Button>
      <Typography variant="body2" className="text-danger">
        1 stock Left
      </Typography>
    </Paper>
  );
}

export default ProductName;
