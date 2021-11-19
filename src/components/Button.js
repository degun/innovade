import React from "react";

const Button = ({onClick, children, disabled}) => {
  return (
    <div className="Button_wrapper">
      <button disabled={disabled} onClick={onClick} className="Button">{children}</button>
    </div>
  );
};

export default Button;
