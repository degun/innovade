import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import { WORDPRESS_HOST } from '../../../config';
import axios from 'axios';
import moment from 'moment';
import './Article.scss';

const Article = (props) => {
  const [posts, setPosts] = useState([]);
  const [called, setCalled] = useState(false);
  if(!called){
      axios.get(`${WORDPRESS_HOST}/wp-json/wp/v2/posts?_fields=title,date,id,content`)
      .then(({data}) => {
        setPosts(data.map(({id, title, date, content}) => {
          return {
            id,
            title: title.rendered,
            date: moment(date).format("DD.MM"),
            content: content.rendered,
          }
        }));
        setCalled(true);
      }).catch(e => {
        setCalled(true);
      })
    }
    return  <div className="News__screen">
          <div className="News__wrapper">
            <div className="News_photo">
              <img
                className="Photos"
                src="http://placehold.jp/750x550.png"
                alt="photo"
                id="photo"
              />
            </div>
           
              {posts.map(({id, title, date, content}) => id==props.match.params.id ?
              <React.Fragment>
               <div className="News_title">
                 <div className="Left_title">{title}</div>
                 <div className="Right_title">{date}</div> 
                </div>
            <div className="News_text">
            
                {content}
             
            </div>
            </React.Fragment>
             : null)}
            <div className="News_photo">
              <img
                className="Photos"
                src="http://placehold.jp/750x550.png"
                alt="photo"
              />
            </div>
            <div className="News_text">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <br />
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum."
              </p>
            </div>
          </div>
        </div>
}


export default withRouter(Article);