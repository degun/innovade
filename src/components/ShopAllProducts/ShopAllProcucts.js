import React, { useEffect, useState } from "react";
import AllModels from "./AllModels";
import ShishaCollection from "./ShishaCollection";
import CustomerReview from "./../ShopNow/components/CustomerReview";
import WeOffer from "../ShopNow/components/WeOffer";
import { useQuery } from 'react-apollo';
import { getProducts, getProductsByCollection } from '../../graphql/queries';
import "./ShopAllProducts.scss";

const ShopAllProducts = () => {
  const [collection, setCollection] = useState(undefined);
  const [tag, setTag] = useState(undefined);
  const { data: productsData } = useQuery(getProducts, {variables: {first: 100, query: tag ? `query=tag:${tag}` : undefined}});
  const { data: byCollectionData} = useQuery(getProductsByCollection, {variables: {handle: collection}})

  const products = productsData?.products?.edges?.map(({node}) => {
    const {handle, description, title, images, priceRange, compareAtPriceRange} = node;
    const compareAtPrice = compareAtPriceRange?.minVariantPrice?.amount ?? 0;
    const price = priceRange?.minVariantPrice?.amount ?? 0;
    return {
      title,
      handle,
      description,
      image: images?.edges[0]?.node?.src ?? "",
      price,
      discount: price === compareAtPrice ? 0 : Math.round((1 - parseFloat(compareAtPrice)/parseFloat(price)) * 100)
    }
  }) ?? []

  const productsByCollection = byCollectionData?.collectionByHandle?.products?.edges?.map(({node}) => {
    const {handle, description, title, images, priceRange, compareAtPriceRange} = node;
    const compareAtPrice = compareAtPriceRange?.minVariantPrice?.amount ?? 0;
    const price = priceRange?.minVariantPrice?.amount ?? 0;
    return {
      title,
      handle,
      description,
      name: title,
      image: images?.edges[0]?.node?.src ?? "",
      price,
      discount: price === compareAtPrice ? 0 : Math.round((1 - parseFloat(compareAtPrice)/parseFloat(price)) * 100)
    }
  }) ?? []

  const models = collection ? productsByCollection : products;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="ShopAllProducts">
      <div className="Innovade-banner">
        <div className="Banner-title">INNOVADE</div>
      </div>
      <div className="BestModel-wrapper">
        <aside id="ShishaCollection">
          <ShishaCollection setCollection={setCollection} setTag={setTag} collection={collection} tag={tag} />
        </aside>
        <main id="AllModels">
          <AllModels models={models} />
        </main>
      </div>
      <WeOffer />
      <CustomerReview />
    </main>
  );
};

export default ShopAllProducts;
