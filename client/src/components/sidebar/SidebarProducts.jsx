import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Checkbox, Divider, FormControlLabel, Typography, Box, Slider } from "@mui/material";
import './SidebarProducts.css';

function SidebarProducts() {
  // For the RangeSlider, ensure you have a compatible component or use MUI's Slider
  const [priceRange, setPriceRange] = React.useState([20, 80]);

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <Sidebar className="sidebar-container">
      <Menu>
        <Box px={2} py={1}>
          <Typography variant="h6" color="primary" fontWeight="bold">
            Category
          </Typography>
        </Box>
        <MenuItem> Sports </MenuItem>
        <MenuItem> Jackets </MenuItem>
        <MenuItem> Jeans </MenuItem>
        <MenuItem> Shorts </MenuItem>
        <MenuItem> Track pants </MenuItem>
        <SubMenu label={<Typography variant="body1">Accessories</Typography>}>
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <Divider />
        
        <Box px={2} py={1}>
          <Typography variant="h6" color="primary" fontWeight="bold">
            Price
          </Typography>
        </Box>
        <Box px={2} py={1}>
          <Slider
            value={priceRange}
            onChange={handlePriceRangeChange}
            valueLabelDisplay="auto"
            min={0}
            max={100}
            aria-labelledby="range-slider"
          />
        </Box>
        <Divider />

        <Box px={2} py={1}>
          <Typography variant="h6" color="primary" fontWeight="bold">
            Fabric
          </Typography>
        </Box>
        <MenuItem>
          <FormControlLabel
            control={<Checkbox />}
            label="Silk"
          />
        </MenuItem>
        <MenuItem>
          <FormControlLabel
            control={<Checkbox />}
            label="Chemical Fiber"
          />
        </MenuItem>
        <MenuItem>
          <FormControlLabel
            control={<Checkbox />}
            label="Cotton"
          />
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default SidebarProducts;
