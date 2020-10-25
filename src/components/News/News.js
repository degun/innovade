import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import { WORDPRESS_HOST } from "../../config";
import "./News.scss";
import SingleNews from "./SingleNews";

const News = () => {
  const [posts, setPosts] = useState([]);
  const [called, setCalled] = useState(false);

  if (!called) {
    axios
      .get(`${WORDPRESS_HOST}/wp-json/wp/v2/posts?_fields=title,date,id,featured_media`)
      .then(async ({ data }) => {
        const posts = await Promise.all(data.map(async ({ id, title, date, featured_media }) => {
          let image = "";
          return await axios
            .get(`${WORDPRESS_HOST}/wp-json/wp/v2/media/${featured_media}?_fields=source_url`)
            .then(({ data }) => {
              return {
                id,
                title: title.rendered,
                date: moment(date).format("DD.MM"),
                image: data.source_url
              };
            })
        }));
        setPosts(posts)
        setCalled(true);
      })
      .catch((e) => {
        console.log(e)
        setCalled(true);
      });
  }
  return (
    <React.Fragment>
      <div className="News-wrapper">
        <div className="Header-wrapper">
          <div>
            <i className="fas fa-circle"></i>
          </div>
          <div className="News-header">NEWS</div>
        </div>
        <div className="container">
          <div className="row">
            {posts.map(post => <SingleNews {...post} />)}
          </div>
          <div className="see-more">
            <a href="#">
              <span className="see_more">see more...</span>
            </a>
          </div>
        </div>
      </div>
      
    </React.Fragment>
  );
};
export default News;
