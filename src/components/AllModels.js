import React, { Component } from "react";
import BestModel from "./../components/BestModel";
import Slider from "react-slick";
// import modelData from './ExampleModels'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class AllModels extends Component {
  state = {
    models: this.props.models,
    quantity: 1,
  };

  render() {
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
    //  let quantity = this.state.quantity;

    {
      /*const modelItems = this.props.models.map((model, i) => (
      <div
        key={model.id}
        className={
          i % 2 === 1 ? (i === 1 ? "Grey__bg_adj" : "Grey__bg") : "White__bg"
        }
      >
        <BestModel key={model.id} model={model} />
      </div>
    ));*/
    }

    return (
      <React.Fragment>
        <Slider {...settings} ref={(slider) => slider}>
          <BestModel /> <BestModel />
          <BestModel /> <BestModel />
          <BestModel /> <BestModel />
        </Slider>
      </React.Fragment>
    );
  }
}

export default AllModels;
