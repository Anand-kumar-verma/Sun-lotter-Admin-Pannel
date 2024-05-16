import { CloseTwoTone } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { Chip } from "@mui/material";

const BreadCrumbs = ({ navItem, navLink, id }) => {
  const [breadCrumbs, setBreadCrumbs] = useState([]);
  const navigate = useNavigate();

  const handleClose = (event, id, index) => {
    event.stopPropagation();
    setBreadCrumbs(breadCrumbs.filter((item) => item?.id !== id));
    navigate(breadCrumbs[index - 1]?.navLink);
  };

  useEffect(
    () => {
      if (
        breadCrumbs.length === 0 ||
        breadCrumbs.filter((item) => item.id === id).length === 0
      ) {
        setBreadCrumbs([
          ...breadCrumbs,
          { id: id, navItem: navItem, navLink: navLink },
        ]);
      }
    },
    [id]
  );
  
  useEffect(() => {
    document.title = navItem;
  }, [navItem]);

  return (
    <div className="flex !p-0 items-center gap-1 !shadow-none overflow-x-auto breadcrambs bg-white !bg-opacity-20 border border-white border-opacity-30 rounded-lg">
      <div className="flex items-center gap-1 w-[80vw] overflow-x-auto breadcrambs border border-white border-opacity-30 rounded-lg p-0.5">
        {breadCrumbs.map((item, index) => {
          return (
            <Chip
              label={item.navItem}
              className={classNames(
                "!bg-white !bg-opacity-50  backdrop-blur-mk !rounded-md h-full flex items-center px-2 py-1 !font-bold ",
                item.id === id ? "!bg-opacity-100" : "!bg-opacity-50"
              )}
              // color={item.id === id ? "primary" : "secondary"}
              onClick={() => {
                navigate(item.navLink);
              }}
              onDelete={(e) => handleClose(e, item.id, index)}
              deleteIcon={<CloseTwoTone />}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BreadCrumbs;
