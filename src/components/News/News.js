import React, {useState} from 'react';
import axios from 'axios';
import moment from 'moment';
import { WORDPRESS_HOST } from '../../config';
import './News.scss'
import SingleNews from './SingleNews'

const News = (props) => {
    const [posts, setPosts] = useState([]);
    const [called, setCalled] = useState(false);
    if(!called){
        axios.get(`${WORDPRESS_HOST}/wp-json/wp/v2/posts?_fields=title,date,id,link`)
        .then(({data}) => {
          setPosts(data.map(({id, title, date, link, counter}) => {
            return {
              id,
              title: title.rendered,
              date: moment(date).format("DD.MM"),
              link,
              counter: counter + 1
            }
          }
          ));
          setCalled(true);
        }).catch(e => {
          setCalled(true);
        })
      }
    return <React.Fragment>
    <div className="News-wrapper">
        <div className="Header-wrapper">
            <div><i className="fas fa-circle"></i></div>
            <div  className="News-header">NEWS</div> 
        </div>
           <div className="container">
           <div className="Border-alignment"></div>
              <div className="row">
                {posts.map(({id, title, date, link}) =>
                <React.Fragment>
                  <SingleNews key={id} id={id} title={title} date={date} link={link} />
                </React.Fragment>
                 )}
               </div>
        </div>
        <div className="Border-alignment" id="border_bottom"></div>
    </div>
    <div className="see-more"><a href="#"><span className="see_more">see more...</span></a></div>
    
    </React.Fragment>
}
export default News;

