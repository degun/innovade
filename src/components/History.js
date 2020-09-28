import React from "react";

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
              <a href="www.google.com" style={{ color: "#8b8b8b" }}>
                explore
              </a>
            </div>
          </div>
        </div>
        <div className="Philosophy">
          <div className="History__text">
            innovade
            <br />
            <br />
            history
          </div>

          <div className="And__prop">&#38;</div>

          <div className="Philosophy__text">philosophy</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default History;
