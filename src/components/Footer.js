import React from "react";
import { Link } from 'react-router-dom'


const Footer = ({openContactForm}) => {
  return (
    <div className="footer_wrapper">
      <div className="footer_items">
        <div className="footer_logo">
          <img className="Logo__bottom"
                  src={require('./../photos/logo.png')} alt="INNOVADE LOGO" />
        </div>
        <div className="footer_link">
          <ul className="list__wrapper">
            <li className="link_item">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="link_item">
              <Link to="/about">About</Link>
            </li>
            <li className="link_item">
              <a onClick={openContactForm}>Contact</a>
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
          Copyright &#169; 2020 Innovade. All right deserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
