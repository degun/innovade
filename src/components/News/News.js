import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import { WORDPRESS_HOST } from "../../config";
import "./News.scss";
import SingleNews from "./SingleNews";

const News = () => {
  const [posts, setPosts] = useState([]);
  const [called, setCalled] = useState(false);
  const [perPage, setPerPage] = useState(9);
  const [total, setTotal] = useState(0);
  if (!called) {
    axios
      .get(`${WORDPRESS_HOST}/wp-json/wp/v2/posts?_fields=title,date,id,featured_media&per_page=${perPage}&_embed`)
      .then(async ({ data, headers }) => {
        setTotal(headers['x-wp-total']);
        const posts = await Promise.all(data.map(async (posttt) => {
          const { id, title, date, featured_media } = posttt;
          console.log(posttt);
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
          .catch(() => {
            return {
              id,
              title: title.rendered,
              date: moment(date).format("DD.MM"),
              image: ""
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

  const tailLength = posts.length % 3 || 3;

  console.log(posts)

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
            {posts.map((post, i) => <SingleNews {...post} last={(posts.length - i - 1) < tailLength} />)}
          </div>
          <div className="see-more">
            {total > perPage ? <a onClick={() => {
              setPerPage(perPage + 9);
              setCalled(false);
            }} href="#">
              <span className="see_more">see more...</span>
            </a> : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default News;
