import React from 'react';
import {Link} from 'react-router-dom'

import './News.scss'

const SingleNews = ({id,title,date,image}) => {
    return (
        <div className="SingleNews-wrapper">
            <div className="Single-news">
                <div className="News-title">
                    {title}
                </div>
                <div className="More-news">
                    <div className="Read-more">
                        <Link to={`/news/${id}/`}>
                            <span className="read-more">
                            read more
                            </span>
                        </Link>
                    </div>
                    <div className="News-date">
                        {date}
                    </div>
                </div>
                <div className="Desc-pic">
                    <img src={image} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default SingleNews;