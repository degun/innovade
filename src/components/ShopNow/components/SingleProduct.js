import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "../../Carousel/Carousel";
import Rate from "./Rate";
import Button from "../../Button";
import Accordation from "./Accordation";
import { useQuery } from "react-apollo";
import { getProduct } from "../../../graphql/queries";
import Loader from 'react-fullpage-custom-loader';
import "./SingleProduct.scss";

const SingleProduct = ({ match, addItem }) => {
  const { handle: h } = match.params;
  const [handle, setHandle] = useState(h);
  const { data, loading } = useQuery(getProduct, { variables: { handle } });
  const { title: name, description, images } = data?.productByHandle ?? {};
  const v = data?.productByHandle?.variants?.edges ?? [];
  const variants =
    v.map(({ node }) => {
      const { id, title, price, image } = node;
      return {
        id,
        title,
        price,
        image: image.src,
      };
    }) ?? [];
  const [selected, setSelected] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);

  useEffect(() => {
    setHandle(h);
    window.scrollTo(0, 0);
  }, [h]);

  const imgs = images?.edges?.map(({ node }) => node.transformedSrc) ?? [];

  const thisVariant = variants[selectedVariant] ?? {price: 0, title: "", id: undefined};

  if(loading)
  return <Loader color="#ffd527" fadeIn={true} wrapperBackgroundColor="#000" sentences={[]} loaderType="ball-grid-pulse" />

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
          <i class="fa fa-angle-left" onClick={() => setSelected(selected === 0 ? (imgs.length - 1) : (selected - 1))} id="left"></i>
          <img src={imgs[selected]} alt="product description" />
          <i class="fa fa-angle-right" onClick={() => setSelected(selected === (imgs.length - 1) ? 0 : (selected + 1))} id="right"></i>
        </div>
        <div className="Details-description">
          <div className="Model-name">{name}</div>
          <div className="BestModel__desc">{description}</div>
          <div className="Rate_wrapper">
            <Rate />
            <div style={{ paddingTop: 10, paddingLeft: 8 }}>6 Reviews</div>
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

export default withRouter(SingleProduct);
