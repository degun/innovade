import React from "react";


const Footer = (props) => {
  return (
    <div className="footer_wrapper">
      <div className="footer_items">
        <div className="footer_logo">
          <img src="https://via.placeholder.com/167x30" alt="INNOVADE LOGO" />
        </div>
        <div className="footer_link">
          <ul className="list__wrapper">
            <li className="link_item">
              <a href="https://www.google.com/">Shop</a>
            </li>
            <li className="link_item">
              <a href="https://www.google.com/">About</a>
            </li>
            <li className="link_item">
              <a href="https://www.google.com/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__desc">
        <div className="footer_text">
        Sign up for exclusive discounts, rewards,
          <span className="nobr">
            <br />
          </span>
          invitations and the chance to test new.
        </div>
      </div>

      <div className="Copyright">
        <div className="Text__bottom">
          *Lorem ipsum is placeholder text commonly used in the graphic.
        </div>
        <div className="Copyright__text">
          Copyright &#169; 2020 FloriFarma. All right deserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
