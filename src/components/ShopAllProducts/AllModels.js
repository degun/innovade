import React from "react";
import BestModel from "../ShopNow/components/BestModel";


const AllModels = ({models}) => {
  return (
    <React.Fragment>
        {models.map(model => <BestModel key={model.handle} {...model} button />)}
    </React.Fragment>
  );
}

export default AllModels;
