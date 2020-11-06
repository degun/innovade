import React from "react";
import { Link } from 'react-router-dom';
import './Produkt.scss';

const Produkt = ({ id, title, description, image, price, handle, closeCart, addItem }) => {
  return (
    <React.Fragment>
      <div className="Produkt__wrapper">
        <div className="Produkt__photo">
          <img
            src={image}
            alt=""
          />
        </div>
        <div className="Produkt__title">{title}</div>
        <div className="Produkt__desc">
          {description}
        </div>
        <div style={{marginBottom: "20px"}} className="Produkt__price">{Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(price)}</div>
        <div className="Produkt__buttons">
          <Link className="cart-link" to={`/products/${handle}`} onClick={closeCart}>View</Link>
          <div className="cart-link" onClick={() => addItem(id, 1)}>Add</div>
        </div>
        
      </div>
    </React.Fragment>
  );
};
export default Produkt;
