import React, { useEffect } from "react";
import AllModels from "./AllModels";
import ShishaCollection from "./ShishaCollection";
import CustomerReview from "./../ShopNow/components/CustomerReview";
import WeOffer from "../ShopNow/components/WeOffer";
import "./ShopAllProducts.scss";

const ShopAllProducts = ({models}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main id="ShopAllProducts">
      <div className="Innovade-banner">
        <div className="Banner-title">INNOVADE</div>
      </div>
      <div className="BestModel-wrapper">
        <aside id="ShishaCollection">
          <ShishaCollection />
        </aside>
        <main id="AllModels">
          <AllModels models={models} />
        </main>
      </div>
      <WeOffer />
      <CustomerReview />
    </main>
  );
};

export default ShopAllProducts;
