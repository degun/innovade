import React from "react";
import Rate from "./Rate";

const CustomerReview = (props) => {
  return (
    <div className="Review-section">
      <div className="Review-title">Customer's review</div>
      <div id="Rate-wrapper">
        <Rate />
      </div>
      <div className="Review-wrapper">
        <div className="Customer-name">Name Surname</div>
        <div className="Customer-review">
          <div className="review-alignment">
            <div className="CReview-title">I recommend this product</div>
            <div id="Rate-wrapper">
              <Rate />
            </div>
          </div>

          <div className="CReview-desc">
            I recommend this product, I really liked it.
          </div>
        </div>
      </div>
      <div className="Review-wrapper">
        <div className="Customer-name">Name Surname</div>
        <div className="Customer-review">
          <div className="review-alignment">
            <div className="CReview-title">I recommend this product</div>
            <div id="Rate-wrapper">
              <Rate />
            </div>
          </div>
          <div className="CReview-desc">
            I recommend this product, I really liked it.
          </div>
        </div>
      </div>
      <div className="Review-wrapper">
        <div className="Customer-name">Name Surname</div>
        <div className="Customer-review">
          <div className="review-alignment">
            <div className="CReview-title">I recommend this product</div>
            <div id="Rate-wrapper">
              <Rate />
            </div>
          </div>
          <div className="CReview-desc">
            I recommend this product, I really liked it.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
