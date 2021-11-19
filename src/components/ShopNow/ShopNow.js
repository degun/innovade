import React, {useEffect, useState} from "react";
import CustomerReview from "./components/CustomerReview";
import BestModels from "./components/BestModels";
import WeOffer from "./components/WeOffer";
import SingleProduct from "./components/SingleProduct";
import { useQuery } from "react-apollo";
import { getProduct } from "../../graphql/queries";
import { withRouter } from "react-router-dom";
import Loader from 'react-fullpage-custom-loader';
import "./ShopNow.scss";

const ShopNow = ({ match, addItem }) => {
  const { handle: h } = match.params;
  const [handle, setHandle] = useState(h);
  const { data, loading } = useQuery(getProduct, { variables: { handle } });
  const productData = data?.productByHandle ?? {};
  const v = data?.productByHandle?.variants?.edges ?? [];
  const variants =
    v.map(({ node }) => {
      const { id, title, priceV2, compareAtPriceV2, image, availableForSale, quantityAvailable } = node;
      return {
        id,
        title,
        price: priceV2?.amount,
        compareAtPrice: compareAtPriceV2?.amount,
        image: image.src,
        availableForSale,
        quantity: quantityAvailable
      };
  }) ?? [];
  
  useEffect(() => {
    setHandle(h);
    window.scrollTo(0, 0);
  }, [h]);

  if(loading)
  return <Loader color="#ffd527" fadeIn={true} wrapperBackgroundColor="#000" sentences={[]} loaderType="ball-grid-pulse" />

  return (
    <React.Fragment>
      <SingleProduct addItem={addItem} variants={variants} data={productData} />
      <WeOffer />
      <BestModels />
      <CustomerReview />
    </React.Fragment>
  );
};

export default withRouter(ShopNow);
