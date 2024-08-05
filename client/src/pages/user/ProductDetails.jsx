import React from "react";
import ProductName from "../../components/Product/productName/ProductName";
import ProductDetailsSection from "../../components/Product/productDetail/ProductDetailsSection";
import SelectSize from "../../components/Product/selectSize/SelectSize";
import { Box, Container } from "@mui/material";
import images from "../../public/images/products/nninw_400.webp";
import img from '../../public/images/proudctDetials/-473Wx593H-466797453-blue-MODEL.avif'

function ProductDetails() {
  return (
    //  <ProductName/>
    // <ProductDetailsSection/>
    // <SelectSize/>
    <Container maxWidth='lg' sx={{display:'flex',marginTop:'22px'}}>
      <Box sx={{ width: "50%",  }}>
        <Box sx={{ display: "flex",justifyContent:'space-between' }}>
          <Box>
            <div>
              <img
                style={{ width: "70px", height: "70px", objectFit: "contain",marginBottom:'10px' }}
                src={images}
                alt="dd"
              />
            </div>
            <div>
              <img
                style={{ width: "70px", height: "70px", objectFit: "contain",marginBottom:'10px'  }}
                src={images}
                alt="dd"
              />
            </div>
            <div>
              <img
                style={{ width: "70px", height: "70px", objectFit: "contain",marginBottom:'10px'  }}
                src={images}
                alt="dd"
              />
            </div>
            <div>
              <img
                style={{ width: "70px", height: "70px", objectFit: "contain",marginBottom:'10px'  }}
                src={images}
                alt="dd"
              />
            </div>
          </Box>
          <Box>
            <img style={{ width: "100%" }} src={img} alt="dd" />
          </Box>
        </Box>
        <SelectSize />
      </Box>
      <Box width={'50%'}>
        <ProductName />
        <ProductDetailsSection />
      </Box>
    </Container>
  );
}

export default ProductDetails;
