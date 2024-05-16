import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import classNames from "classnames";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginLogo from "../../Assets/logoImage.png";
import { all_Data } from "../../mockdata/MockData";

const Sidebar = () => {
  const navigate = useNavigate();

  const [openSlide, setOpenSlide] = useState(true);
  const [openCollapse, setOpenCollapse] = useState({});

  const handleCollapse = (navLink) => {
    setOpenCollapse((prevState) => ({
      ...prevState,
      [navLink]: !prevState[navLink],
    }));
  };

  return (
    <List
      className={`${
        openSlide ? "!min-w-[16vw] max-w-[16vw]" : "!w-auto"
      }  shadow-md   !h-screen  !relative !overflow-y-auto !p-2 glass`}
    >
      <ListItem className="!py-3 !flex !justify-center">
        {openSlide ? (
          <img alt="" className="Capture !w-32" src={loginLogo} />
        ) : (
          <img alt="" className="Capture !w-14 py-8" src={loginLogo} />
        )}
      </ListItem>
      <Divider />

      {all_Data?.map((nav) => (
        <React.Fragment key={nav.id}>
          <ListItemButton
            onClick={() => {
              navigate(nav.navLink);
              if (nav.subcomponent?.length > 0) {
                handleCollapse(nav.navLink);
              }
            }}
            className={classNames(
              "!rounded-lg !p-2",
              window.location.pathname === nav.navLink && "!text-[#0561FC]"
            )}
          >
            <ListItemIcon>{nav.navIcon}</ListItemIcon>
            <ListItemText primary={nav.navItem} />
            {nav.subcomponent?.length > 0 && (
              <span>
                {openCollapse[nav.navLink] ? <ExpandLess /> : <ExpandMore />}
              </span>
            )}
          </ListItemButton>
          <Collapse in={openCollapse[nav.navLink]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {nav.subcomponent?.map((subNav) => (
                <ListItemButton
                  key={subNav.id}
                  onClick={() => navigate(subNav.navLink)}
                  className={classNames(
                    "!rounded-lg",
                    window.location.pathname === subNav.navLink &&
                      "!text-[#0561FC]"
                  )}
                  sx={{ pl: 4 }}
                >
                  <ListItemIcon>{subNav.navIcon}</ListItemIcon>
                  <ListItemText primary={subNav.navItem} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default Sidebar;
