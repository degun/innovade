import React, { useState } from "react";
import Rate from "./Rate";
import Button from "../../Button";
import Accordation from "./Accordation";
import "./SingleProduct.scss";

const SingleProduct = ({ addItem, variants, data }) => {
  
  const [selected, setSelected] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);

  const { title: name, description, images } = data;

  const imgs = images?.edges?.map(({ node }) => node.transformedSrc) ?? [];

  const thisVariant = variants[selectedVariant] ?? {price: 0, title: "", id: undefined};

  return (
    <React.Fragment>
      <main id="Single-product">
        <ul id="Description-photos">
          {imgs.map((src, i) => 
            <li key={`variant-${i}`}>
              <img onClick={() => setSelected(i)} src={src} />
            </li>
          )}
        </ul>
        <div className="Scroll-wrapper">
          <i class="fa fa-angle-left left-arrow" onClick={() => setSelected(selected === 0 ? (imgs.length - 1) : (selected - 1))}></i>
          <img src={imgs[selected]} alt="product description" />
          <i class="fa fa-angle-right right-arrow" onClick={() => setSelected(selected === (imgs.length - 1) ? 0 : (selected + 1))}></i>
        </div>
        <div className="Details-description">
          <div className="Model-name">{name}</div>
          <div className="BestModel__desc">{description}</div>
          <div className="Rate_wrapper">
            <div style={{ paddingTop: 10, paddingLeft: 8 }}></div>
          </div>
          <div className="Model__price">
            {Intl.NumberFormat("it-IT", {
              style: "currency",
              currency: "EUR",
            }).format(thisVariant.price)}
          </div>
          <div className="Colors-available">
            <p className="Color-text">
              <b>Variant</b> {thisVariant.title}
            </p>
            <ul id="colors">
              {variants.map(({ image }, i) => (
                <li key={`variant-${i}`}>
                  <img onClick={() => setSelectedVariant(i)} src={image} />
                </li>
              ))}
            </ul>
          </div>
          <Button disabled={!thisVariant.id} onClick={() => addItem(thisVariant.id, 1)}>
            Add to Cart
          </Button>
          <div className="Product-desc">
            <Accordation />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default SingleProduct;
