import React from 'react';
import Product from './Product';
import { useQuery } from 'react-apollo';
import { getProductsByCollection } from '../../../graphql/queries';
import Slider from "react-slick";

const settings = {
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    draggable: true,
    autoplay: true,
    pauseOnFocus: true,
    height: "100px !important"
  };


function Accessories () { 

    const { data } = useQuery(getProductsByCollection, {variables: {handle: "feminine"}});

    const products = data?.collectionByHandle?.products?.edges?.map(({node}) => {
        const {title, description, images, handle, priceRange} = node;
        return {
          title,
          handle,
          description,
          image: images?.edges[0]?.node?.src ?? "",
          price: priceRange?.minVariantPrice?.amount ?? 0
        }
      }) ?? []

    console.log(products, data)

    return(
        <div className="Accessories">
            <Slider {...settings} ref={(slider) => slider} arrows>
                {products.map(product => <Product {...product} button />)}
            </Slider>
        </div>
    )
}

export default Accessories