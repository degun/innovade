import React, { useState } from "react";
import axios from 'axios';
import moment from 'moment';
import { WORDPRESS_HOST } from '../../../config';
import './ProductDescription.scss';

const ProductDescription = () => {
  const [posts, setPosts] = useState([]);
  const [called, setCalled] = useState(false);
  if(!called){
    axios.get(`${WORDPRESS_HOST}/wp-json/wp/v2/posts?_fields=title,date,id,link`)
    .then(({data}) => {
      setPosts(data.map(({id, title, date, link}) => {
        return {
          id,
          title: title.rendered,
          date: moment(date).format("DD.MM.YYYY"),
          link
        }
      }));
      setCalled(true);
    }).catch(e => {
      setCalled(true);
    })
  }
  return (
    <div className="Product__wrapper">
      <div className="Tech__wrapper">
          <div className="Text__wraper">
          <div className="Join__text">
          Join the Experience
        </div>
        <div className="Shisha__enthusiast">
          for shisha<br/>enthusiasts
        </div>
          </div>
          <div className="Text__tech">
          We 
          <br />
          created a<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;feeling <br/>
          {/* <div className="Technology__text">Technology</div> */}
        </div>
      </div>
      <div className="Details__wrapper">
        <div className="News__wrapper">
        <div className="News__title">NEWS</div>
        {posts.map(({id, title, date, link}) => <a href={link} key={id} className="News__item">
          <div className="news">{title}</div>
          <div className="date">{date}</div>
        </a>)}
        <div className="News__link"><a  className="News__link" href={WORDPRESS_HOST}>see all</a></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
