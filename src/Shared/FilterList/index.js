import React from "react";

import { FilterList } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
const FilterList = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {/* <IconButton onClick={handleClick}>
        <FilterList />
      </IconButton>
      <Menu
        id="basic-menu"
        className="dashboard"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <input
            className=" bg-gradient-to-r from-purple-200 to-purple-200 p-3"
            placeholder="Search Here"
          />
        </MenuItem>

        <MenuItem className="flex ">
          <p className="font-bold text-md">
            <ArrowDropDownIcon />
            Filter by Field
          </p>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
            />
            <span className="ml-2"></span>
          </label>
          Account Owner
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
            />
            <span className="ml-2"></span>
          </label>
          Account Name
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
            />
            <span className="ml-2"></span>
          </label>
          Rating Name
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
            />
            <span className="ml-2"></span>
          </label>
          Website
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
            />
            <span className="ml-2"></span>
          </label>
          Industry
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
            />
            <span className="ml-2"></span>
          </label>
          Employees No
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
            />
            <span className="ml-2"></span>
          </label>
          Annual Revenue
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
            />
            <span className="ml-2"></span>
          </label>
          Account Site
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
            />
            <span className="ml-2"></span>
          </label>
          Sic Code
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
            />
            <span className="ml-2"></span>
          </label>
          Ownerships
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
            />
            <span className="ml-2"></span>
          </label>
          Account Type
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
            />
            <span className="ml-2"></span>
          </label>
          Account Number
        </MenuItem>

        <div className="flex justify-center p-1 space-x-2">
          <div className="">
            <button className=" bg-gradient-to-r from-purple-500 to-purple-300 p-2 rounded-md">
              <span className="text-white font-bold text-sm">Search</span>
            </button>
          </div>

          <button className=" bg-gradient-to-r from-purple-500 to-purple-300 p-2 rounded-md">
            <span className="text-white font-bold">Clear</span>
          </button>
        </div>
      </Menu> */}
      ;
    </>
  );
};

export default FilterList;
