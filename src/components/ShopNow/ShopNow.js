import React from "react";
import CustomerReview from "./../CustomerReview";
import BestModel from "./../BestModel";
import WeOffer from "./../WeOffer";
import SingleProduct from "./../ShopNow/SingleProduct";
import "./ShopNow.scss";

const ShopNow = (props) => {
  return (
    <React.Fragment>
      <SingleProduct />
      <WeOffer />
      <div id="Reviewed-models">
        <div className="DarkGrey-bg">
          <BestModel />
        </div>
        <div className="Grey-bg">
          <BestModel />
        </div>
      </div>
      <CustomerReview />
    </React.Fragment>
  );
};

export default ShopNow;
