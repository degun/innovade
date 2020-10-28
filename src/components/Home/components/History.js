import React from "react";
import { Link } from 'react-router-dom';
import './History.scss';

const History = () => {
  return (
    <React.Fragment>
      <div className="History__wrapper">
        <div className="Exp__wrapper">
          <div className="Exp__padding">
            <div className="Exp__title">
              INNOVADE IS A CONTEMPORARY SHISHA EXPERIRENCE.
            </div>
            <div className="Exp__desc">
            Innovade is more than just a product - its a whole new experience for shisha enthusiasts. Our goal is about redefining the meaning of smoking shisha into an extraordinary moment. <br /><br /> Each moment spent smoking with Innovade shisha, is a moment of stress released and a kind of escape. We value people's time, their needs and feelings, so we produced an outstanding product that ensures an amazing time, everytime.
            </div>
            <div className="Explore__link">
              <Link to="/shop">
                explore
              </Link>
            </div>
          </div>
        </div>
        <div className="Philosophy">
          <div className="handp">
            <div className="history">history</div>
            <div className="and">&amp;</div>
            <div className="philosophy">philosophy</div>
          </div>
          <div className="invade">
            <h1 className="title">innovade</h1>
            <div className="pronunciation">[<strong>in</strong>-<em>uh</em>-veyd]</div>
            <p className="meaning"><em>verb</em>, <strong>in&middot;no&middot;va&middot;de,</strong><br />a combination of the word innovate and invade.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default History;
