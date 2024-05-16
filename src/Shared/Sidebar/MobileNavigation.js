import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Sidebar from ".";
import { all_Data } from "../../mockdata/MockData";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
export default function MobileNavigation() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();
  const [openCollapse, setOpenCollapse] = React.useState({});

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCollapse = (navLink) => {
    setOpenCollapse((prevState) => ({
      ...prevState,
      [navLink]: !prevState[navLink],
    }));
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={"!bg-white !bg-opacity-50"}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="blue"
            aria-label="menu"
            sx={{ mr: 2, color: "inherit" }}
            onClick={(e) => handleClick(e)}
          >
            <MenuIcon className="!text-blue-900"/>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            className="!text-blue-800"
          >
            Admin
          </Typography>
          <Button color="inherit" className="!text-blue-800">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        // onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            color: "inherit",

            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              left: 14,
              width: 10,
              height: 10,
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        className="!overflow-y-scroll glass"
      >
        <List className={` shadow-md !relative !overflow-y-scroll !p-2  `}>
          {all_Data?.map((nav) => (
            <React.Fragment key={nav.id}>
              <ListItemButton
                onClick={() => {
                  navigate(nav.navLink);
                  if (nav.subcomponent?.length > 0) {
                    handleCollapse(nav.navLink);
                  } else {
                    handleClose();
                  }
                }}
                className={classNames(
                  "!rounded-lg !p-2",
                  window.location.pathname === nav.navLink && "!text-[#0561FC]"
                )}
              >
                <ListItemText primary={nav.navItem} />
                {nav.subcomponent?.length > 0 && (
                  <span>
                    {openCollapse[nav.navLink] ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )}
                  </span>
                )}
              </ListItemButton>
              <Collapse
                in={openCollapse[nav.navLink]}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {nav.subcomponent?.map((subNav) => (
                    <ListItemButton
                      key={subNav.id}
                      onClick={() => {
                        navigate(subNav.navLink);
                        handleClose();
                      }}
                      className={classNames(
                        "!rounded-lg",
                        window.location.pathname === subNav.navLink &&
                          "!text-[#0561FC]"
                      )}
                      sx={{ pl: 4 }}
                    >
                      <ListItemText primary={subNav.navItem} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
      </Menu>
    </Box>
  );
}
