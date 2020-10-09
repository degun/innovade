import React from "react";
import { Link } from 'react-router-dom';

const History = (props) => {
  return (
    <React.Fragment>
      <div className="History__wrapper">
        <div className="Exp__wrapper">
          <div className="Exp__padding">
            <div className="Exp__title">
              INNOVADE IS A CONTEMPORARY SHISHA EXPERIRENCE.
            </div>
            <div className="Exp__desc">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
              <br />
              <br />
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </div>

            <div className="Explore__link">
              <Link to="/experience" style={{ color: "#8b8b8b" }}>
                explore
              </Link>
            </div>
          </div>
        </div>
        <Link to="/philosophy" className="Philosophy">
          <div className="History__text">
            history
          </div>

          <div className="And__prop">&#38;</div>
          <div className="Philosophy__text">philosophy</div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default History;
