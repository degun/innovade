import React, { Component } from "react";
import BestModel from "../ShopNow/components/BestModel";
import Slider from "react-slick";
import Model from "../Home/components/Model";

const AllModels = ({models}) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
    autoplay: true,
    pauseOnFocus: true,

    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          speed: 500,
          dots: false,
          draggable: true,
          autoplay: true,
          pauseOnFocus: true,
        },
      },

      {
        breakpoint: 766,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          speed: 500,
          dots: false,
          draggable: true,
          autoplay: true,
          pauseOnFocus: true,
        },
      },

      {
        breakpoint: 459,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed: 500,
          dots: false,
          draggable: true,
          autoplay: true,
          pauseOnFocus: true,
        },
      },
    ],
  };

  return (
    <React.Fragment>
        {models.map(model => <BestModel key={model.handle} {...model} button />)}
    </React.Fragment>
  );
}

export default AllModels;
