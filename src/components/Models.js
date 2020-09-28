import React, { Component } from "react";
import Model from "./Model";
import Slider from "react-slick";
import modelData from './ExampleModels'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Models extends Component {
  
  state = {
    models: modelData,
    quantity: 1,
  }

  render() {

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      draggable: true,
      autoplay: true,

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
    
   let quantity = this.state.quantity;
   let modelItems = this.state.models.map(model =>
    <div key={model.id} className={model.id % 2 === 1 ? 
        model.id === 1 ? "Grey__bg" : "Grey__bg_adj" : 
        "White__bg"}> 
      <Model onAddCart={() => this.props.addVariantToCart(model.id, quantity)}  key={model.id}  model={model}/>
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
