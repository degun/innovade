import React, {  useState } from "react";
import Rate from "./Rate";
import axios from 'axios';
import { STAMPED_HOST, STAMPED_USERNAME, STAMPED_PASSWORD } from '../../../config';

const CustomerReview = () => {

  const [reviews, setReviews] = useState([]);

  const token = Buffer.from(`${STAMPED_USERNAME}:${STAMPED_PASSWORD}`, 'utf8').toString('base64');

  axios.get(`${STAMPED_HOST}?productId=`, {headers: {
    "Authorization": `Basic ${token}`
  }}).then(({data}) => {
    setReviews(data.results.map(({review}) => {
      const {author, body, rating, title, productTitle} = review;
      return {author, body, rating, title, productTitle}
    }))
  })
  .catch(e => console.log(e))
  
  return (
    <div className="Review-section">
      <div className="Review-title">Customers reviews</div>
      <div id="Rate-wrapper">
        <Rate />
      </div>
      {reviews.map(({author, body, rating, title, productTitle}) => <div className="Review-wrapper">
        <div className="Customer-name">{author}</div>
        <div className="Customer-review">
          <div className="review-alignment">
            <div className="CReview-title">{title}</div>
            <div id="Rate-wrapper">
              <Rate rating={rating} />
            </div>
          </div>

          <div className="CReview-desc">
            <div>{body}</div> <div className="product">{productTitle}</div>
          </div>
        </div>
      </div>)}
    </div>
  );
};

export default CustomerReview;
