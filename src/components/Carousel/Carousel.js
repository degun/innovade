import React from "react";
import "./Carousel.scss";

var hasOwn = {}.hasOwnProperty;

class Carousel extends React.Component {
  constructor() {
    super();

    this.state = {
      currentIndex: 0,
      isTransitioning: false,
      goingLeft: false,
    };
  }

  componentDidMount() {
    window.addEventListener("keyup", this.onKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.onKeyUp);
  }

  onKeyUp = (e) => {
    if (e.keyCode) {
      if (e.keyCode === 39) {
        this.showNextSet();
      } else if (e.keyCode === 37) {
        this.showPrevSet();
      }
    }
  };

  render() {
    const { images } = this.props;
    const { currentIndex, isTransitioning, goingLeft } = this.state;

    return (
      <div className="carousel__wrapper">
        <div className="carousel__container">
          <i
            className="fa fa-angle-left"
            id="left"
            onClick={this.showPrevSet}
          ></i>
          <div className="Displayed-image">
            {images.map((img, index) => {
              let className = "carousel__image not-displayed";
              if (index === currentIndex) className = "carousel__image active";

              return (
                <img src={img} className={className} key={`img-${index}`} />
              );
            })}
          </div>

          <i
            className="fa fa-angle-right"
            id="right"
            onClick={this.showNextSet}
          ></i>
        </div>
      </div>
    );
  }

  showPrevSet = () => {
    const currentIndex =
      (this.state.currentIndex - 1 + this.props.images.length) %
      this.props.images.length;
    this.setState({ currentIndex });
  };

  showNextSet = () => {
    const currentIndex =
      (this.state.currentIndex + 1) % this.props.images.length;
    this.setState({ currentIndex });
  };
}

export default Carousel;
