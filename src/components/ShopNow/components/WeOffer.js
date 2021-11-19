import React from "react";

const WeOffer = (props) => {
  return (
    <div className="Offer-wrapper">
      <div className="Shipping">
        <img
          width="45px"
          height="45px"
          src={require("../../../photos/shipping.jpg")}
          alt=""
        />
        <br />
        <p className="Shipping-title">SHIPPING WORLDWIDE</p>
        <p className="Shipping-desc">We ship to all countries</p>
      </div>
      <div className="Shipping">
        <img
          width="45px"
          height="45px"
          src={require("../../../photos/quality.jpg")}
          alt=""
        />
        <br />
        <p className="Shipping-title">ENGINEERED IN GERMANY</p>
        <p className="Shipping-desc">Made in Italy</p>
      </div>
      <div className="Shipping">
        <img
          width="45px"
          height="45px"
          src={require("../../../photos/warranty.jpg")}
          alt=""
        />
        <br />
        <p className="Shipping-title">UNIQUE DESIGN</p>
        <p className="Shipping-desc">Registered and Patented</p>
      </div>
    </div>
  );
};
export default WeOffer;
