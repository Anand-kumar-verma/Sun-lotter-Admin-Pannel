import { FormControl, FormHelperText, Select, styled } from "@mui/material";
import classNames from "classnames";
import React from "react";

const MuiSelect = ({
  value,
  id = "",
  name = "",
  onChange,
  children,
  className = "",
  hidden,
  formik,
  label = "",
  disabled = false,
  placeholder = "",
  defaultValue = "",
  multiple,
  className2,
}) => {
  const CssTextField = styled(Select)({
    "& .MuiSelect-select": {
      "& fieldset": {
        borderColor: "rgba(255, 255, 255, 0.1)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(255, 255, 255, 0.5)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(255, 255, 255, 0.7)",
      },
    },
  });
  const Placeholder = ({ children }) => {
    return <div className="text-gray-700">{children}</div>;
  };
  return (
    <>
      <div
        hidden={hidden}
        className={classNames("flex flex-col justify-center", className2)}
      >
        {label && (
          <p hidden={hidden} className="m-1 font-semibold">
            {label}
          </p>
        )}
        <FormControl>
          <CssTextField
            displayEmpty
            disabled={disabled}
            value={value}
            onChange={onChange}
            id={id}
            multiple={multiple}
            error={formik?.errors?.[id] && formik?.touched?.[id] ? true : false}
            onBlur={formik?.handleBlur}
            defaultValue={defaultValue}
            name={name}
            size="small"
            renderValue={
              value !== ""
                ? undefined
                : () => (
                    <Placeholder>
                      {!placeholder ? "Select" : placeholder}
                    </Placeholder>
                  )
            }
            className={classNames(
              "!rounded !min-w-[50%] !outline-none !capitalize !backdrop-blur-mk !bg-white !bg-opacity-20",
              className
            )}
          >
            {children}
          </CssTextField>
        </FormControl>
        {formik?.errors && (
          <FormHelperText className="!text-red-500 !mx-1">
            {formik?.touched?.[id] && formik?.errors?.[id]}
          </FormHelperText>
        )}
      </div>
    </>
  );
};

export default MuiSelect;
