import React, { useEffect } from "react";
import AllModels from "../AllModels";
import ShishaCollection from "./ShishaCollection";
import CustomerReview from "./../CustomerReview";
import WeOffer from "././../WeOffer";
import "./ShopAllProducts.scss";

const ShopAllProducts = (model) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main id="ShopAllProducts">
      <div className="Innovade-banner">
        <div className="Banner-title">INNOVADE</div>
      </div>
      <div className="BestModel-wrapper">
        <div id="ShishaCollection">
          <ShishaCollection />
        </div>
        <div id="AllModels">
          <AllModels />
        </div>
      </div>
      <WeOffer />
      <CustomerReview />
    </main>
  );
};

export default ShopAllProducts;
