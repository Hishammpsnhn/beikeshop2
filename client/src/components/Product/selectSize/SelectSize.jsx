import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import "../productName/productName.css";

function SelectSize() {
  return (
    <Paper elevation={6} sx={{ p: 2, marginY: 3, width: "100%" }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        Select Size
      </Typography>
      <Box display='flex' justifyContent={'space-evenly'}>
        <Button
          variant="outlined"
          sx={{ borderRadius: "100px", marginX: "5px" }}
          color="primary"
        >
          M
        </Button>
        <Button
          variant="outlined"
          sx={{ borderRadius: "100px", marginX: "5px" }}
          color="primary"
        >
          M
        </Button>
        <Button
          variant="outlined"
          sx={{ borderRadius: "100px", marginX: "5px" }}
          color="primary"
          disabled
        >
          M
        </Button>
        <Button
          variant="outlined"
          sx={{ borderRadius: "100px", marginX: "5px" }}
          color="primary"
          disabled
        >
          M
        </Button>
        <Button
          variant="outlined"
          sx={{ borderRadius: "100px", marginX: "5px" }}
          color="primary"
          disabled
        >
          M
        </Button>
      </Box>
    </Paper>
  );
}

export default SelectSize;
