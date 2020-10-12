import React from "react";
import Rate from "./../components/Rate";

const BestModel = ({ model }) => {
  return (
    <React.Fragment>
      <div className="BestModel__wrapper">
        <div className="Model__photo">
          <img
            className="model_photo"
            src="http://via.placeholder.com/150x250"
            alt="Model__1"
          />
        </div>
        <div className="Rate_wrapper">
          <Rate />
          <div style={{ paddingTop: 10, paddingLeft: 8 }}>6 Reviews</div>
        </div>
        <div className="BestModel__title"> Innovade Model 1 </div>
        <div className="BestModel__desc">
          Lorem ipsum dolor sit amet <br />
          consectetur adipiscing elit
        </div>
        <div className="Model__price">1500.00 €</div>
      </div>
    </React.Fragment>
  );
};
export default BestModel;
