import React from "react";
import BestModel from "../ShopNow/components/BestModel";


const AllModels = ({models}) => {
  return (
    <React.Fragment>
        {models.map((model, i) => <BestModel style={{animationDelay: `${0.1 * i}s`}} key={model.handle} {...model} button />)}
    </React.Fragment>
  );
}

export default AllModels;
