import React from "react";

const WeOffer = (props) => {
  return (
    <div className="Offer-wrapper">
      <div className="Shipping">
        <img
          width="45px"
          height="45px"
          src={require("../../../photos/shipping.jpg")}
        />
        <br />
        <p className="Shipping-title">SHIPPING WORLDWIDE</p>
        <p className="Shipping-desc">Lorem ipsum is a placeholder</p>
      </div>
      <div className="Shipping">
        <img
          width="45px"
          height="45px"
          src={require("../../../photos/quality.jpg")}
        />
        <br />
        <p className="Shipping-title">REMARKABLE QUALITY</p>
        <p className="Shipping-desc">Lorem ipsum is a placeholder</p>
      </div>
      <div className="Shipping">
        <img
          width="45px"
          height="45px"
          src={require("../../../photos/warranty.jpg")}
        />
        <br />
        <p className="Shipping-title">ONE YEAR WARRANTY</p>
        <p className="Shipping-desc">Lorem ipsum is a placeholder</p>
      </div>
    </div>
  );
};
export default WeOffer;
