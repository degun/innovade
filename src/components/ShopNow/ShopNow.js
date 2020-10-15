import React, {useEffect} from "react";
import CustomerReview from "./components/CustomerReview";
import BestModels from "./components/BestModels";
import WeOffer from "./components/WeOffer";
import SingleProduct from "./components/SingleProduct";
import "./ShopNow.scss";

const ShopNow = ({addItem}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <SingleProduct addItem={addItem} />
      <WeOffer />
      <BestModels />
      <CustomerReview />
    </React.Fragment>
  );
};

export default ShopNow;
