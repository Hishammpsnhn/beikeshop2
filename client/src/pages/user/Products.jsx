import React from "react";
import SidebarProducts from "../../components/sidebar/SidebarProducts";
import RangeSlider from "../../components/slider/RangeSlider";
import ProductCard from "../../components/card/ProductCard";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";

function Products() {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  let sidebarWidth;
  if (isTablet) {
    sidebarWidth = 250;
  } else if (isLargeScreen) {
    sidebarWidth = 350;
  }

  return (
    <Box sx={{ display: "flex" }}>
      {!isPhone && (
        <Box sx={{ flex: `0 0 ${sidebarWidth}px`, padding: 2 }}>
          <SidebarProducts />
        </Box>
      )}
      <Box sx={{ flex: 1, padding: 2 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <ProductCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Products;

