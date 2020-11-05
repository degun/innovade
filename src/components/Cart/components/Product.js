import React from "react";
import { Link } from 'react-router-dom';
import Button from '../../Button';
import './Product.scss';

const Product = ({ title, description, image, price, handle, button }) => {
  return (
    <React.Fragment>
      <div className="Product__wrapper">
        <div className="Product__photo">
          <img
            src={image}
            alt=""
          />
        </div>
        <div className="Product__title">{title}</div>
        <div className="Product__desc">
          {description}
        </div>
        <div style={{marginBottom: "20px"}} className="Product__price">{Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(price)}</div>
        {button ? <Link to={`/products/${handle}`}><Button>View</Button></Link> : null}
      </div>
    </React.Fragment>
  );
};
export default Product;
