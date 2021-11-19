import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '../Button';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { WORDPRESS_HOST } from '../../config';
import './Footer.scss';

const Footer = ({ openContactForm }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const newsletterLink = `${WORDPRESS_HOST}/wp-json/newsletter/v1/subscribe`;
  
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  function subscribe(){
    axios.post(newsletterLink, {email, name}, {headers: {"Content-Type": "application/json"}})
    .then(({status}) => {
      if(status === 200){
        setEmail("");
        setName("");
        setSent(true);
      }
    })
    .catch(e => {
      console.log(e);
      setError(true)
    })
  }

  return (
    <div className="footer_wrapper">
      <div className="footer_items">
        <div className="footer_logo">
          <Link to="/">
          <img
            className="Logo__bottom"
            src={require("../../photos/logo.png")}
            alt="INNOVADE LOGO"
          />
          </Link>
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
              <div onClick={openContactForm}>Contact</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__desc">
        {sent ? <div className="thankyou">
          Thank you for subscribing! Stay tuned!
        </div> : error ? <div className="thankyou">
          <div>There was an error during the subscription process.</div> <strong onClick={() => setError(false)}>Try again</strong>
        </div> : <div className="footer_text">
          Sign up to our newsletter,
          <span className="nobr">
            <br />
          </span>
          to get our latest news &amp; offers.
          <br />
          <div className="subscribe">
            <ThemeProvider theme={darkTheme}>
              <TextField type="email" placeholder="Your email" value={email} onChange={({target}) => setEmail(target.value)} style={{marginRight: "10px"}} /> 
              <TextField type="name" placeholder="Your name" onChange={({target}) => setName(target.value)} /> 
              <Button onClick={subscribe}>Sign up</Button>
            </ThemeProvider>
          </div> 
        </div>}
      </div>

      <div className="Copyright">
        <div className="Text__bottom">
          {/* *Lorem ipsum is placeholder text commonly used in the graphic. */}
        </div>
        <div className="Copyright__text">
          Copyright &#169; 2020 Innovade. All right deserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
