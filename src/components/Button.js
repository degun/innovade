import React from "react";

const Button = (props) => {
  return (
    <div className="Button_wrapper">
      <button onClick={props.onAddCart} className="Button">{props.children}</button>
    </div>
  );
};

export default Button;
