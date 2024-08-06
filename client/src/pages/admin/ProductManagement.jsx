import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  Input,
  MenuItem,
  Chip,
  CircularProgress,
} from "@mui/material";
import Header from "../../components/admin/Header/AdminSubHeader";
import SizeModel from "../../components/admin/CategoryModal/SizeModal";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../actions/categoryActions";
import { uploadFile } from "../../actions/productActions";

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
  const initialData = {
    productName: "",
    price: "",
    category: "",
    subCategory: "",
    fabric: "",
    description: "",
    image: null,
    size: [{ size: "M", stock: 0, price: 19 }],
  };

  const [formData, setFormData] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState();
  const [selectedFile, setSelectedFile] = useState(null);
  const { categories, error, loading } = useSelector((state) => state.category);
  const [imagePreviews, setImagePreviews] = useState([]);
  const dispatch = useDispatch();
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleClickOpen = (size) => {
    setSelectedSize(size);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(selectedFile);
    const imagePreviews = await uploadFile(
      formData,
      selectedFile,
      setUploadProgress
    );
    setImagePreviews(imagePreviews.files);
  };
  const handleSave = (detail) => {
    console.log(detail);
    let exists = false;
    formData.size.some((item) => {
      if (item.size === detail.size) {
        item.stock = detail.stock;
        item.price = detail.price;
        exists = true;
        return true; // This breaks out of the loop
      }
      return false;
    });

    if (!exists) {
      formData.size.push(detail);
    }

    console.log(formData);
  };
  let obj = null;
  useEffect(() => {
    obj = formData.size.find((item) => item.size === selectedSize);
  }, [selectedSize]);

  console.log(uploadProgress);

  return (
    <Box m="20px" width={"100%"}>
      <Header title="ADD PRODUCT" />
      <Box
        component="form"
        sx={{
          background: "white",
          padding: "20px",
          margin: "auto",
          width: "90%",
        }}
        onSubmit={handleFormSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              label="Product Name"
              variant="outlined"
              fullWidth
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              helperText="Please select Category"
              sx={{ marginTop: "20px", width: "100%" }}
            >
              {categories.map((option) => (
                <MenuItem key={option._id} value={option.category}>
                  {option.category}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Fabric"
              variant="outlined"
              fullWidth
              name="fabric"
              value={formData.fabric}
              onChange={handleInputChange}
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
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          sx={{ marginTop: "20px" }}
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ marginTop: "20px" }}>
              <Typography variant="body1" gutterBottom>
                Upload Image
              </Typography>
              <Input
                type="file"
                fullWidth
                inputProps={{ multiple: true }}
                sx={{ display: "block" }}
                onChange={handleFileChange}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Chip
              label="M"
              onClick={() => handleClickOpen("M")}
              sx={{ marginRight: "10px" }}
            />
            <Chip
              label="L"
              onClick={() => handleClickOpen("L")}
              sx={{ marginRight: "10px" }}
            />
            <Chip
              label="S"
              onClick={() => handleClickOpen("S")}
              sx={{ marginRight: "10px" }}
            />
            <Chip
              label="XS"
              onClick={() => handleClickOpen("XS")}
              sx={{ marginRight: "10px" }}
            />
          </Grid>
        </Grid>
        <div>
          {imagePreviews.length > 0 && (
            <div>
              {imagePreviews.map((file, index) => (
                <div key={index}>
                  <img
                    src={`http://localhost:4000/${file.path}`}
                    alt={`http://localhost:4000/${file.path}`}
                    style={{ width: "200px", height: "auto", margin: "10px" }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        {uploadProgress < 100 && (
          <CircularProgress variant="determinate" value={uploadProgress} />
        )}
        <Button
          variant="contained"
          color="primary"
          type="submit"
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
      <SizeModel
        open={open}
        handleClose={handleClose}
        selectedSize={selectedSize}
        // obj =  formData.size.find(item => item.size === seletedSize);
        obj={obj}
        onSave={handleSave}
      />
    </Box>
  );
}

export default ProductManagement;
