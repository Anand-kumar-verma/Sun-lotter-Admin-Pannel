import { FormHelperText, TextField } from "@mui/material";
import classNames from "classnames";
import React from "react";

const CustomInput = ({
  type = "",
  value,
  onChange,
  placeholder = "",
  label = "",
  className = "",
  id = "",
  disabled,
  hidden,
  formik,
  multiline = false,
  variant = "outlined",
  rows = 1,
  size = "small",
  InputProps,
  accept,
  onFocus,
  multiple = false,
  onBlur,
}) => {
  const selectedValue = formik?.values[id] || value;
  const handleChange = formik?.handleChange || onChange;

  return (
    <div className="flex flex-col justify-center">
      {label && <p className="m-1 whitespace-nowrap font-semibold">{label}</p>}
      <TextField
        id={id}
        name={id}
        type={type}
        disabled={disabled}
        hidden={hidden}
        size={size}
        multiple={multiple}
        InputProps={InputProps}
        variant={variant}
        onFocus={onFocus}
        multiline={multiline}
        rows={rows}
        error={formik?.errors?.[id] && formik?.touched?.[id] ? true : false}
        onBlur={onBlur || formik?.handleBlur}
        value={selectedValue}
        accept={accept}
        onChange={handleChange}
        placeholder={placeholder}
        className={classNames(
          "!outline-none placeholder:!text-gray-100 !capitalize !backdrop-blur-mk !bg-white !bg-opacity-20 !border-opacity-30 !border !border-white",
          className
        )}
      />
      {formik && (
        <FormHelperText className="!text-red-500 !mx-1">
          {formik?.touched?.[id] && formik?.errors?.[id]}
        </FormHelperText>
      )}
    </div>
  );
};

export default CustomInput;
