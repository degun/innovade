import Discount from "./Discount";
import React from "react";
import Button from "./Button";

const Model = ({model, onAddCart}) => {
  return ( <React.Fragment>
      <Discount />
      <div className = "Model__wrapper">
              <div className = "Model__photo">
                  <img className="model_photo" src={model.image} alt="Model__1" / >
              </div>

              <div className = "Model__title"> {model.name} </div> 
                  <div className = "Model__desc">
                  {model.description}
                     </div> 
              <div className = "Model__button" >
              <Button onAddCart={() => onAddCart(model.id, 1)}>Add to Cart </Button> </div> 
    </div>
      </React.Fragment>)
}
export default Model;