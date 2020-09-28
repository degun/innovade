import React from "react";
import Button from "./Button";

const Flavor = (props) => {
  return (
    <div className="Flavor__wrapper">
      <div className="Photo__wrapper">
        <img
          className="Flavor__photo"
          src={props.photo}
          alt="Model__1"
        />
      </div>

      <div className="Flavor__title">{props.name}</div>
      <div className="Flavor__desc">
      {props.description}
      </div>
      <div className="Flavor__button">
        <Button  onAddCart={props.onAddCart}>Add to Cart</Button>
      </div>
    </div>
  );
};

export default Flavor;
