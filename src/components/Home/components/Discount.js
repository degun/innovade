import React from "react";

const Discount = ({discount}) => {
  return (
    <div className="Discount">
      <span className="Discount__text">
        <b style={{ fontSize: 13 }}>&nbsp;{discount}%</b>
        <br /> <span style={{ fontSize: 10 }}>discount</span>
      </span>
    </div>
  );
};

export default Discount;
