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
        <p className="Shipping-title">REMARKABLE QUALITY</p>
        <p className="Shipping-desc">Build quality nowhere else to be found</p>
      </div>
      <div className="Shipping">
        <img
          width="45px"
          height="45px"
          src={require("../../../photos/warranty.jpg")}
          alt=""
        />
        <br />
        <p className="Shipping-title">ONE YEAR WARRANTY</p>
        <p className="Shipping-desc">Full covearage of any issues</p>
      </div>
    </div>
  );
};
export default WeOffer;
