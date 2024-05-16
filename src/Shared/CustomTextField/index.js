import React from "react";
import TextField from "@mui/material/TextField";
import classNames from "classnames";

export const CustomTextField = ({
  variant = "outlined",
  placeholder = "",
  label = "",
  type = "",
  id = "",
  onChange,
  formik,
  className = "",
  multiline = false,
  rows = 1,
  value,
  disabled = false,
  color = "secondary",
}) => {
  return (
    <>
      <TextField
        className={classNames(className)}
        label={label}
        type={type}
        placeholder={placeholder}
        name={id}
        size="small"
        id={id}
        color={color}
        rows={rows}
        disabled={disabled}
        multiline={multiline}
        variant={variant}
        value={formik?.values[id] || value || ""}
        onChange={formik?.handleChange || onChange}
        onBlur={formik?.handleBlur}
        error={formik?.errors[id] && formik?.touched[id] ? true : false}
        helperText={formik?.touched[id] && formik?.errors[id]}
      />
    </>
  );
};
