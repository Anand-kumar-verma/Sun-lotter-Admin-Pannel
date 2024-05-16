import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
} from "@mui/material";
import classNames from "classnames";

const Placeholder = ({ children }) => {
  return <div className="text-gray-700">{children}</div>;
};

const CustomSelect = ({
  value,
  id = "",
  onChange,
  children,
  className = "",
  formik,
  isLoading = false,
  disabled = false,
  placeholder = "Select",
  defaultValue = "",
  multiple = false,
  options,
  label = "",
  color = "secondary",
  ...rest
}) => {
  const selectedValue = formik?.values[id] || value || "";
  const handleChange = formik?.handleChange || onChange;

  return (
    <FormControl>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        displayEmpty
        color={color}
        value={selectedValue}
        onChange={handleChange}
        id={id}
        label={label}
        error={formik?.errors[id] && formik?.touched[id]}
        onBlur={formik?.handleBlur}
        name={id}
        sx={{ minWidth: "240px" }}
        renderValue={
          selectedValue !== ""
            ? undefined
            : () => <Placeholder>{placeholder}</Placeholder>
        }
        className={classNames("", className)}
        {...rest}
      >
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <MenuItem key={index} disabled>
                <Skeleton style={{ width: "100%" }} />
              </MenuItem>
            ))
          : options
          ? options.map((select) => (
              <MenuItem key={select?.value} value={select?.value}>
                {select?.label}
              </MenuItem>
            ))
          : children}
      </Select>
      {formik?.errors && (
        <FormHelperText sx={{ color: "red" }}>
          {formik?.touched[id] && formik?.errors[id]}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default CustomSelect;
