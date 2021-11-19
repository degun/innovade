import Discount from "./Discount";
import React from "react";
import Button from "../../Button";
import { Link } from 'react-router-dom';

const Model = ({model}) => {
  const {image, name, description, handle, discount} = model;
  return ( 
  <React.Fragment>
    <div className = "Model__wrapper">
      {discount ? <Discount discount={discount} /> : null}
        <div className = "Model__photo">
            <img className="model_photo" src={image} alt="" />
        </div>

        <div className = "Model__title"> {name} </div> 
            <div className = "Model__desc">
              {description}
            </div> 
        <Link to={`/products/${handle}`} className = "Model__button" >
          <Button>Buy now</Button> 
        </Link> 
    </div>
  </React.Fragment>)
}
export default Model;