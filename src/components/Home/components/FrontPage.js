import React, { useState } from "react";
import TextTransition from "react-text-transition";
import { Link } from "react-router-dom";
import './FrontPage.scss';

const FrontPage = ({ models }) => {
  const [selected, setSelected] = useState(0);
  const {name, description, handle} = models[selected];
  return (
    <React.Fragment>
      <div className="Our__story" id="Story">
        <div className="smoke"></div>
        <div className="Story__wrapper">
          <div className="reverse">
            <div className="Model__content">
              <span className="Model__X">
                <TextTransition
                  noOverflow
                  text={name}
                  springConfig={{ mass: 1, tension: 280, friction: 40 }}
                />
              </span>
              <br />
              <span className="ModelX__desc">
                <TextTransition
                  noOverflow
                  text={description}
                  springConfig={{ mass: 1, tension: 280, friction: 40 }}
                />
              </span>
              <br />
              <br />
              <Link to={`/products/${handle}`} className="Shop__now">
                shop now
              </Link>
            </div>
            <div className="Title">INNOVADE</div>
            <div className="Slider__wrapper">
            <div className="Model__name">
              <TextTransition
                noOverflow
                text={name}
                springConfig={{ mass: 1, tension: 280, friction: 40 }}
              />
            </div>
            <div className="Angle__wrapper">
              <div
                className="Arrow__wrapper"
                onClick={() =>
                  setSelected(selected === 0 ? models.length - 1 : selected - 1)
                }
              >
                <i className="fa fa-angle-up"></i>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 20,
                }}
              >
                <TextTransition
                  noOverflow
                  text={String(selected + 1).padStart(2, "0")}
                  springConfig={{ mass: 1, tension: 280, friction: 40 }}
                />
              </div>
              <div
                className="Arrow__wrapper"
                onClick={() =>
                  setSelected(selected === models.length - 1 ? 0 : selected + 1)
                }
              >
                <i className="fa fa-angle-down"></i>
              </div>
            </div>
          </div>
        </div>
          </div>
        <div className="Height"></div>
        <div className="Social__section">
          <a href="https://www.instagram.com/">Instagram</a>&nbsp;/&nbsp;
          <a href="https://www.facebook.com/">Facebook</a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FrontPage;
