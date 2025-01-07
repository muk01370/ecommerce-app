import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [priceRange, setPriceRange] = useState([10, 100]);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
      <div className="sidebar">
        {/* Product Categories */}
        <div className="filterBox">
          <h6>PRODUCT CATEGORIES</h6>
          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Beverages" />
              </li>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Biscuit & Snacks" />
              </li>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Breads & Bakery" />
              </li>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Breakfast & Dairy" />
              </li>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Frozen Foods" />
              </li>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Fruits & Vegetables" />
              </li>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Grocery & Staples" />
              </li>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Household Needs" />
              </li>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Meats & Seafood" />
              </li>
            </ul>
          </div>
        </div>

        {/* Filter by Price */}
        <div className="filterBox mt-4">
          <h6>FILTER BY PRICE</h6>
          <div className="scroll">
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={100}
              max={60000}
            />
            <div className="price-range-labels">
              <span>Price:₹{priceRange[0]}</span> - <span>₹{priceRange[1]}</span>
            </div>
            <Button variant="contained" color="primary" className="mt-4">
              Apply Filter
            </Button>
          </div>
        </div>

        <div className="filterBox">
          <h6>PRODUCT STATUS</h6>
          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="In Stock" />
              </li>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="On Sale" />
              </li>
            </ul>
          </div>
        </div>

        <div className="filterBox">
          <h6>BRANDS</h6>
          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Frito Lay" />
              </li>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Nespresso" />
              </li>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Oreo" />
              </li>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Quaker" />
              </li>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Welch's" />
              </li>
              
            </ul>
          </div>
        </div>

        <br/>

        <Link to="#"><img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif" className="w-100"/></Link>
      </div>

  );
};

export default Sidebar;
