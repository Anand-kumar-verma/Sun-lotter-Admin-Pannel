import { Button } from "@mui/material";
import classNames from "classnames";
import React from "react";

const CustomButton = ({
  onClick,
  type,
  disabled,
  className = "",
  children,
  component,
  hidden,
  variant = "contained",
  startIcon,
  size = "small",
  endIcon,
  color = "primary",
}) => {
  return (
    <>
      <Button
        disableElevation
        type={type}
        size={size}
        onClick={onClick}
        hidden={hidden}
        disabled={disabled}
        component={component}
        variant={variant}
        color={color}
        startIcon={startIcon}
        endIcon={endIcon}
        className={classNames(
          "!text-black !border !border-solid !border-white !border-opacity-20 !capitalize !bg-white hover:!shadow-inner hover:!border-opacity-40 backdrop-blur-mk !bg-opacity-20 !px-2",
          className
        )}
      >
        {children}
      </Button>
    </>
  );
};

export default CustomButton;
