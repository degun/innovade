import React from 'react';
import Produkt from './Produkt';
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


function Accessories ({addItem, closeCart}) { 

    const { data } = useQuery(getProductsByCollection, {variables: {handle: "feminine"}});

    const products = data?.collectionByHandle?.products?.edges?.map(({node}) => {
        const {title, description, images, handle, priceRange, variants} = node;
        return {
          id: variants.edges[0].node.id,
          title,
          handle,
          description,
          image: images?.edges[0]?.node?.src ?? "",
          price: priceRange?.minVariantPrice?.amount ?? 0
        }
      }) ?? []

    return(
        <div className="Accessories">
            <Slider {...settings} ref={(slider) => slider} arrows>
                {products.map(product => <Produkt addItem={addItem} closeCart={closeCart} {...product} button />)}
            </Slider>
        </div>
    )
}

export default Accessories