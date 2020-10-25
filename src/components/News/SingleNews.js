import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

import './News.scss'

const SingleNews = (props) => {
    const [border, setBorder] = useState(false);
    const showBorder = () => {
        if (window.innerWidth <= 767){
         setBorder(false);
        }
        else {
            setBorder(true);
        }
    }

    useEffect(() => {
        showBorder()
    }, [])
    window.addEventListener('resize', showBorder);
    console.log(props)
    return <div className="SingleNews-wrapper" 
    style={{
        borderRight : border && props.id!==1 ? '2px solid #9B9B9B' : 'none'
    }}> 
            <div className="Single-news">
                <div className="News-title">
                    {props.title}
                </div>
                <div className="More-news">
                    <div className="Read-more">
                        <Link to={`/news/${props.id}/`}>
                            <span className="read-more">
                            read more
                            </span>
                        </Link>
                    </div>
                    <div className="News-date">
                        {props.date}
                        {props.content}
                    </div>
                </div>
                <div className="Desc-pic">
                    <img className="Desc-pic" src="https://via.placeholder.com/320x230"/>
                </div>
            </div>
        </div>
}

export default SingleNews;