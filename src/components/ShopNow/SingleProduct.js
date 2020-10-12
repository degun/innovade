import React, { useState } from "react";
import "./ShopNow.scss";
import Carousel from "../Carousel/Carousel";
import Rate from "./../Rate";
import Buttons from "./../Button";
import Accordation from "./Accordation";

const ShopNow = (props) => {
  const images = [
    require("./../../photos/Group 54@2x.png"),
    require("./../../photos/product.png"),
    require("./../../photos/Group 54@2x.png"),
    require("./../../photos/product.png"),
  ];
  const [selected, setSelected] = useState(false);

  return (
    <React.Fragment>
      <main id="Single-product">
        <ul id="Description-photos">
          <li>
            <img src={require("./../../photos/first.png")} />
          </li>
          <li>
            <img src={require("./../../photos/second.png")} />
          </li>
          <li>
            <img src={require("./../../photos/third.png")} />
          </li>
          <li>
            <img src={require("./../../photos/fourth.png")} />
          </li>
        </ul>
        <div className="Scroll-wrapper">
          <Carousel images={images} />
        </div>

        <div className="Details-description">
          <div className="Model-name">Model Original</div>
          <div className="BestModel__desc">
            Lorem ipsum dolor sit ame, consectetur adipiscing elit
          </div>
          <div className="Rate_wrapper">
            <Rate />
            <div style={{ paddingTop: 10, paddingLeft: 8 }}>6 Reviews</div>
          </div>
          <div className="Model__price">1500.00 €</div>
          <div className="Colors-available">
            <p className="Color-text">
              <b>Color</b> Space Grey
            </p>
            <ul id="colors">
              <li>
                <img src={require("./../../photos/light-violet.png")} />
              </li>
              <li>
                <img src={require("./../../photos/light-red.png")} />
              </li>
              <li>
                <img src={require("./../../photos/black.png")} />
              </li>
            </ul>
          </div>
          <Buttons> Add to Cart</Buttons>
          <div className="Product-desc">
            <Accordation />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default ShopNow;
