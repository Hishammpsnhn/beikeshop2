import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import RangeSlider from "../slider/RangeSlider";
import './SidebarProducts.css'
function SidebarProducts() {
  return (
    
    <Sidebar className="sidebar-container" >
      <Menu>
        <h3 className="fs-4 text-primary fw-bold">Category</h3>
        <MenuItem className="p-0"> Sports </MenuItem>
        <MenuItem> Jackets </MenuItem>
        <MenuItem> Jeans </MenuItem>
        <MenuItem> Shorts </MenuItem>
        <MenuItem> Track pants </MenuItem>
        <SubMenu className="fs-6" label="Accessories">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <hr></hr>

        <h3 className="fs-4 text-primary fw-bold">Price</h3>
        <RangeSlider />
        <hr></hr>
        <h3 className="fs-4 text-primary fw-bold">Fabric</h3>
        <MenuItem>
          {" "}
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            {" "}
          Silk{" "}
        </MenuItem>
        <MenuItem>
          {" "}
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            {" "}
          Chemical Fiber{" "}
        </MenuItem>
        <MenuItem>
          {" "}
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            {" "}
          Cotton{" "}
        </MenuItem>
      
      </Menu>
    </Sidebar>
  );
}

export default SidebarProducts;
