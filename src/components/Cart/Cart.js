import React from 'react';
import LineItem from '../LineItem';
import Accessories from './components/Accessories';

function Cart ({checkout, removeLineItemInCart, updateLineItemInCart, isCartOpen, handleCartClose, addItem}) {

  const { subtotalPrice, totalTax, totalPrice } = checkout;

  let line_items = checkout.lineItems.edges.map((line_item) => {
    return (
      <LineItem
        removeLineItemInCart={removeLineItemInCart}
        updateLineItemInCart={updateLineItemInCart}
        key={line_item.node.id.toString()}
        line_item={line_item.node}
      />
    );
  });

  return (
    <div className={`Cart ${isCartOpen ? 'Cart--open' : ''}`}>
      <header className="Cart__header">
        <h2>Cart</h2>
        <button
          onClick={handleCartClose}
          className="Cart__close">
          ×
        </button>
      </header>
      <ul className="Cart__line-items">
        {line_items}
      </ul>
      {checkout.lineItems.edges.length ? <div className="extras">
          <h4>People have also bought:</h4>
          <Accessories closeCart={handleCartClose} addItem={addItem} />
      </div> : null}
      <footer className="Cart__footer">
        <div className="Cart-info clearfix">
          <div className="Cart-info__total Cart-info__small">Subtotal</div>
          <div className="Cart-info__pricing">
            <span className="pricing">€ {parseInt(subtotalPrice)}</span>
          </div>
        </div>
        <div className="Cart-info clearfix">
          <div className="Cart-info__total Cart-info__small">Taxes</div>
          <div className="Cart-info__pricing">
            <span className="pricing">€ {parseInt(totalTax)}</span>
          </div>
        </div>
        <div className="Cart-info clearfix">
          <div className="Cart-info__total Cart-info__small">Total</div>
          <div className="Cart-info__pricing">
            <span className="pricing">€ {parseInt(totalPrice)}</span>
          </div>
        </div>
        <div className="Button_wrapper" style={{paddingTop: "40px", width: "100%"}}>
          <button className="Button" style={{width: "100%"}} onClick={() => window.open(checkout.webUrl)}>Checkout</button>
        </div>
      </footer>
    </div>
  )
}

export default Cart;
