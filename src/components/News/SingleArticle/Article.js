import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import { WORDPRESS_HOST } from '../../../config';
import axios from 'axios';
import moment from 'moment';
import './Article.scss';

const Article = ({match}) => {
  const {id} = match.params;
  console.log(id)
  const [post, setPost] = useState({});
  const [called, setCalled] = useState(false);
  if (!called) {
    axios
      .get(`${WORDPRESS_HOST}/wp-json/wp/v2/posts/${id}?_fields=title,date,id,featured_media,content`)
      .then(async ({ data }) => {
        const { id, title, date, featured_media, content } = data;
        const post = await axios
        .get(`${WORDPRESS_HOST}/wp-json/wp/v2/media/${featured_media}?_fields=source_url`)
        .then(({ data }) => {
          return {
            id,
            title: title.rendered,
            date: moment(date).format("DD.MM"),
            image: data.source_url,
            content: content.rendered
          };
        });
        setPost(post)
        setCalled(true);
      })
      .catch((e) => {
        console.log(e)
        setCalled(true);
      });
    }
    console.log(post)
    return  <div className="News__screen">
          <div className="News__wrapper">
            <div className="News_photo">
              <img
                className="Photos"
                src={post.image}
                alt=""
              />
            </div>
               <div className="News_title">
                 <div className="Left_title">{post.title}</div>
                 <div className="Right_title">{post.date}</div> 
                </div>
            <div className="News_text" dangerouslySetInnerHTML={{__html: post.content}} />
          </div>
        </div>
}


export default withRouter(Article);