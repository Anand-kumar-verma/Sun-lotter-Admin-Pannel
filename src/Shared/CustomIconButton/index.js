import { IconButton } from "@mui/material";
import classNames from "classnames";
import React from "react";

const CustomIconButton = ({
  onClick,
  type,
  disabled,
  className,
  children,
  component,
  hidden,
}) => {
  return (
    <>
      <IconButton
        onClick={onClick}
        disabled={disabled}
        size="small"
        className={classNames(
          "!capitalize w-10 h-10 !font-semibold !backdrop-blur-mk",
          className
        )}
        type={type}
        component={component}
      >
        {children}
      </IconButton>
    </>
  );
};

export default CustomIconButton;
