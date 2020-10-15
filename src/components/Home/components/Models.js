import React, { Component } from "react";
import Model from "./Model";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Models.scss';

const Models = ({models}) => {
  
    const settings = {
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      draggable: true,
      autoplay: true,
      pauseOnFocus: true,

      responsive: [
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

    const modelItems = models.map((model, i) => <div key={`model-${i}`}>
        <Model
          key={model.id}
          model={model}
        />
      </div>
    );

    return (
      <React.Fragment>
        <div className="Models__wrapper" id="Models">
          <Slider {...settings} ref={(slider) => slider}>
            {modelItems}
          </Slider>
        </div>
      </React.Fragment>
    );
}

export default Models;
