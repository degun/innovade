import React from "react";
import { Link } from 'react-router-dom';
import Button from '../../Button';
import Rate from "./Rate";

const BestModel = ({ title, description, image, price, handle, button }) => {
  return (
    <React.Fragment>
      <div className="BestModel__wrapper">
        <div className="Model__photo">
          <img
            className="model_photo"
            src={image}
            alt="Model__1"
          />
        </div>
        <div className="Rate_wrapper">
          <div style={{ paddingTop: 10, paddingLeft: 8 }}></div>
        </div>
        <div className="BestModel__title">{title}</div>
        <div className="BestModel__desc">
          {description}
        </div>
        <div style={{marginBottom: "20px"}} className="Model__price">{Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(price)}</div>
        {button ? <Link to={`/products/${handle}`}><Button>Buy now</Button></Link> : null}
      </div>
    </React.Fragment>
  );
};
export default BestModel;
