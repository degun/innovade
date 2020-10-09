import React, { Component } from "react";
import Model from "./Model";
import Slider from "react-slick";
// import modelData from './ExampleModels'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Models extends Component {
  
  state = {
    models: this.props.models,
    quantity: 1,
  }

  render() {

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
  //  let quantity = this.state.quantity;
   const modelItems = this.props.models.map((model, i) =>
    <div key={model.id} className={i % 2 === 1 ? 
        i === 1 ? "Grey__bg_adj" : "Grey__bg" : 
        "White__bg"}> 
      <Model onAddCart={this.props.addVariantToCart}  key={model.id}  model={model}/>
    </div> )

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
}

export default Models;
