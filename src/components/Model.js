import Discount from "./Discount";
import React from "react";
import Button from "./Button";

const Model = (props) => {
  return ( <React.Fragment>
      <Discount />
      <div className = "Model__wrapper">
              <div className = "Model__photo">
                  <img className="model_photo" src={props.model.photo} alt="Model__1" / >
              </div>

              <div className = "Model__title"> {props.model.name} </div> 
                  <div className = "Model__desc">
                  {props.model.description}
                     </div> 
              <div className = "Model__button" >
              <Button onAddCart={props.onAddCart}>Add to Cart </Button> </div> 
    </div>
      </React.Fragment>)
}
export default Model;