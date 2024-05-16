import React, { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { navItems1 } from "../../Mock";
import classNames from "classnames";
import { Logout } from "@mui/icons-material";
import {
  salesDropdown1,
  purchaseDropDown,
  inventoryDropDown,
  stockData
} from "../../Mock";
import loginLogo from "../../Assets/logoImage.png";
import BasicMenu from "../BasiMenu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Sidebar_ProjectBased = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openMenu, setopenMenu] = React.useState(false);
  const [value, setValue] = useState("");
  const [cickedData, setClickedData] = useState("");
  const [openSlide, setOpenSlide] = useState(true);
  const open = Boolean(anchorEl);
  const role = localStorage.getItem("role");

  const handleClick = (event) => {
    setopenMenu(true);
    setAnchorEl(event.currentTarget);
  };

  function doesExist(arr, items) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].navLink === items) {
        return true;
      }
    }
    return false;
  }
  //
  return (
    <List
      className={`${
        openSlide ? "!min-w-[16vw] max-w-[16vw]" : "!w-auto"
      }  shadow-md   !h-screen  !relative !overflow-y-auto !p-2`}
    >
      <ListItem className="!py-3 !flex !justify-center">
        {openSlide ? (
          <img alt="" className="Capture !w-60" src={loginLogo} />
        ) : (
          <img alt="" className="Capture !w-14 py-8" src={loginLogo} />
        )}
      </ListItem>

      <Divider />

      {navItems1?.map((nav) => {
        if (
          role !== "Company_Admin" &&
          nav?.navLink !== "/task-list" &&
          nav?.navLink !== "/dashboard"
        ) {
          return "";
        }
        return (
          <ListItemButton
            key={nav.id}
            onClick={() => {
              setClickedData(nav.navLink);
              navigate(nav.navLink);
            }}
            className={classNames(
              "!rounded-lg !p-2",
              window.location.pathname === nav.navLink && "!text-[#0561FC]"
            )}
          >
            <ListItemIcon
              className={`
              ${
                (nav.navItem === "Sales" &&
                  doesExist(salesDropdown1, cickedData)) ||
                (nav.navItem === "Purchase" &&
                  doesExist(purchaseDropDown, cickedData)) ||
               
                (nav.navItem === "Inventory" &&
                  doesExist(inventoryDropDown, cickedData))
                  ? "!text-[#0561FC]"
                  : window.location.pathname === nav.navLink &&
                    "!text-[#0561FC]"
              }
              `}
            >
              {nav.navIcon}
            </ListItemIcon>
            {openSlide && nav.navItem === "Sales" && (
              <span
                className={`${
                  doesExist(salesDropdown1, cickedData) && "!text-[#0561FC]"
                } w-full flex justify-between`}
                onClick={(e) => {
                  handleClick(e);
                  setValue("sales");
                }}
              >
                <span>{nav.navItem}</span>
                <span className="text-xl">
                  <MdArrowDropDown />
                </span>
              </span>
            )}

            {openSlide && nav.navItem === "Purchase" && (
              <span
                className={`${
                  doesExist(purchaseDropDown, cickedData) && "!text-[#0561FC]"
                } w-full flex justify-between`}
                onClick={(e) => {
                  handleClick(e);
                  setValue("purchase");
                }}
              >
                <span>{nav.navItem}</span>
                <span className="text-xl">
                  <MdArrowDropDown />
                </span>
              </span>
            )}

          
            {openSlide && nav.navItem === "Inventory" && (
              <span
                className={`${
                  doesExist(inventoryDropDown, cickedData) && "!text-[#0561FC]"
                } w-full flex justify-between`}
                onClick={(e) => {
                  handleClick(e);
                  setValue("inventory");
                }}
              >
                <span>{nav.navItem}</span>
                <span className="text-xl">
                  <MdArrowDropDown />
                </span>
              </span>
            )}

            {openSlide && nav.navItem === "Stock" && (
              <span
                className={`${
                  doesExist(inventoryDropDown, cickedData) && "!text-[#0561FC]"
                } w-full flex justify-between`}
                onClick={(e) => {
                  handleClick(e);
                  setValue("stock");
                }}
              >
                <span>{nav.navItem}</span>
                <span className="text-xl">
                  <MdArrowDropDown />
                </span>
              </span>
            )}

            {openSlide &&
              nav.navItem !== "Sales" &&
              nav.navItem !== "Purchase" &&
              nav.navItem !== "Inventory" &&
              nav.navItem !== "Stock" &&
              nav.navItem}
          </ListItemButton>
        );
      })}

      {
        <ListItemButton
          className="!text-white bg-white !rounded-lg !mt-4 !p-2 !w-full bg-gradient-to-r
         from-blue-500 to-purple-500 text-center self-end"
          onClick={() => {
            role !== "Company_Admin" ? navigate("/") : navigate("/emp-login");
            localStorage.clear();
          }}
        >
          <ListItemIcon className="!text-white">
            <Logout />
          </ListItemIcon>
          {openSlide && "Log Out"}
        </ListItemButton>
      }

      <ListItemButton
        className="!text-white bg-white !rounded-lg !mt-4 !p-2 !w-full bg-gradient-to-r
         from-blue-500 to-purple-500 text-center !flex !justify-center"
        onClick={() => setOpenSlide(!openSlide)}
      >
        <ListItemIcon className="!text-white ">
          {openSlide ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
        </ListItemIcon>
      </ListItemButton>

      {openMenu && (
        <BasicMenu
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          openMenu={openMenu}
          menu_list={
            (value === "sales" && salesDropdown1) ||
            (value === "purchase" && purchaseDropDown) ||
            
            (value === "inventory" && inventoryDropDown) ||
            (value === "stock" && stockData)
          }
          setopenMenu={setopenMenu}
          setClickedData={setClickedData}
        />
      )}
    </List>
  );
};

export default Sidebar_ProjectBased;
