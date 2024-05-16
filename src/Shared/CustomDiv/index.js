import classNames from "classnames";
import React from "react";

const CustomDiv = ({ children, className = "", onClick, style }) => {
  return (
    <div className={classNames("", className)} onClick={onClick} style={style}>
      {children}
    </div>
  );
};

export default CustomDiv;
