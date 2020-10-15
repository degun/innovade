import React from "react";

const Button = ({onClick, children}) => {
  return (
    <div className="Button_wrapper">
      <button onClick={onClick} className="Button">{children}</button>
    </div>
  );
};

export default Button;
