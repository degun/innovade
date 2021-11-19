import React from 'react';
import { Link } from "react-scroll";
import { Link as RLink, withRouter } from 'react-router-dom';

const Navigation = ({click, closeMobileMenu, handleClick, handleCartOpen, match}) => {
    const { pathname } = window.location;
    return(
        <nav className="FrontPage__wrapper">
          <div
            className={
              click
                ? "Header__wrapper Header_active"
                : "Header__wrapper"
            }
          >
            <div className="Logo__wrapper">
              <RLink to="/" onClick={closeMobileMenu}>
                <img
                  className="Logo__top"
                  src={require('../../src/photos/logo.png')}
                  alt="INNOVADE LOGO"
                />
              </RLink>
            </div>
            <div className="Ham__wrapper" onClick={handleClick}>
              <i
                className={click ? "fas fa-times" : "fas fa-bars"}
              />
            </div>

            <ul
              className={
                click ? "List__wrapper Nav_active" : "List__wrapper"
              }
            >
              <li className="List__item">
                <Link
                    className={`click ${pathname === "/shop" ? "shop" : ""}`}
                    id="test"
                    onClick={closeMobileMenu}
                    offset={-100}
                    activeClass="active"
                    to="Story"
                    spy={true}
                    smooth={true}
                    duration={-50}
                >
                    <RLink to="/">Our Story</RLink><span className="yellow__dot">&nbsp;</span>
                </Link>
              </li>

              <li className="List__item">
                <Link
                    className={`click ${pathname === "/shop" ? "shop" : ""}`}
                    onClick={closeMobileMenu}
                    activeClass="active"
                    offset={-60}
                    duration={-20}
                    to="Models"
                    spy={true}
                    smooth={true}
                >
                    <RLink to="/">Models</RLink><span className="yellow__dot">&nbsp;</span>
                </Link>
              </li>
              <li className="List__item">
                <Link
                    className={`click ${pathname === "/shop" ? "shop" : ""}`}
                    onClick={closeMobileMenu}
                    activeClass="active"
                    offset={-5}
                    duration={100}
                    to="Accessories"
                    spy={true}
                    smooth={true}
                >
                    <RLink to="/">Explore</RLink><span className="yellow__dot">&nbsp;</span>
                </Link>
              </li>

              <li className="List__item">
                <Link
                    className={`click ${pathname === '/shop' ? "active" : ""}`}
                    onClick={closeMobileMenu}
                    activeClass="active"
                    to="Shop"
                >
                    <RLink to="/shop">Shop</RLink><span className="yellow__dot">&nbsp;</span>
                </Link>
              </li>
              <li className="List__item">
                  <div className="App__view-cart-wrapper click">
                    <button
                      className="App__view-cart"
                      onClick={handleCartOpen}
                    >
                      Cart
                    </button>
                  </div>
              </li>
              <li className="List__item_adj">
                {/* <img className="small__shisha"
                  style={{verticalAlign: "middle"}}
                  src={require('../../src/photos/small.png')}
                  alt="shisha_logo"
                /> */}
              </li>
            </ul>
          </div>
        </nav>
    )
}

export default withRouter(Navigation);