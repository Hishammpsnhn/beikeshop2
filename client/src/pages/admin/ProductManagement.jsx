import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  Input,
  MenuItem,
  Chip,
} from "@mui/material";
import Header from "../../components/admin/Header/AdminSubHeader";
import CategoryModal from "../../components/admin/CategoryModal/CategoryModal";
const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];
function ProductManagement() {
  const [open, setOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState();
  const handleClickOpen = (size) => {
    setSelectedSize(size);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box Box m="20px" width={"100%"}>
      <Header title="ADD PRODUCT" />
      <Box
        component="form"
        sx={{
          background: "white",
          padding: "20px",
          margin: "auto",
          width: "100%",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Product Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Price"
              variant="outlined"
              type="number"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-select-currency"
              select
              label="Category"
              defaultValue="EUR"
              helperText="Please select Category"
              sx={{ marginTop: "20px", width: "100%" }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Sub Category"
              defaultValue="EUR"
              helperText="Please select Sub Category"
              sx={{ marginTop: "20px", width: "100%" }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Fabric"
              variant="outlined"
              fullWidth
              sx={{ marginTop: "20px" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Sub Category"
              variant="outlined"
              fullWidth
              sx={{ marginTop: "20px" }}
            />
          </Grid>
        </Grid>
        <TextField
          label="Description"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          sx={{ marginTop: "20px" }}
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ marginTop: "20px" }}>
              <Typography variant="body1" gutterBottom>
                Upload Image
              </Typography>
              <Input type="file" fullWidth sx={{ display: "block" }} />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Chip label="M" onClick={() => handleClickOpen('M')} sx={{ marginRight: '10px' }} />
            <Chip label="L" onClick={() => handleClickOpen('L')} sx={{ marginRight: '10px' }} />
            <Chip label="S" onClick={() => handleClickOpen('S')} sx={{ marginRight: '10px' }} />
            <Chip label="XS" onClick={() => handleClickOpen('XS')} sx={{ marginRight: '10px' }} />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          sx={{
            width: "60%",
            marginX: "auto",
            display: "flex",
            marginTop: "30px",
          }}
        >
          Submit
        </Button>
      </Box>
      <CategoryModal open={open} handleClose={handleClose} selectedSize={selectedSize} />
    </Box>
  );
}

export default ProductManagement;
