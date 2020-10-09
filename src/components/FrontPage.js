import React, {useState} from "react";
import TextTransition from "react-text-transition";

const FrontPage = ({models}) => {

  const [selected, setSelected] = useState(0);

  return (
    <React.Fragment>
      <div className="Our__story" id="Story">
        <div className="Story__wrapper">
          <div className="reverse">
            <div className="Model__content">
              <span className="Model__X">
                <TextTransition noOverflow text={models[selected].name} springConfig={ 	{ mass: 1, tension: 280, friction: 40 } } />
              </span>
              <br />
              <span className="ModelX__desc">
                <TextTransition noOverflow text={models[selected].description} springConfig={ 	{ mass: 1, tension: 280, friction: 40 } } />
              </span>
              <br />
              <br />
              <a className="Shop__now" href="https://www.youtube.com/">
                shop now
              </a>
            </div>
            <div className="Title">INNOVADE</div>
          </div>
          <div className="Slider__wrapper">
            <div className="Model__name"><TextTransition noOverflow text={models[selected].name} springConfig={ 	{ mass: 1, tension: 280, friction: 40 } } /></div>
            <div className="Angle__wrapper">
              <div className="Arrow__wrapper" onClick={() => setSelected(selected === 0 ? models.length - 1 : selected - 1)}>
                <i className="fa fa-angle-up"></i>
              </div>
              <div style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: 20}}>
                <TextTransition noOverflow text={String(selected + 1).padStart(2, "0")} springConfig={ 	{ mass: 1, tension: 280, friction: 40 } } />
              </div>
              <div className="Arrow__wrapper" onClick={() => setSelected(selected === models.length - 1 ? 0 : selected + 1)}>
                <i className="fa fa-angle-down"></i>
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
  )
}

export default FrontPage
