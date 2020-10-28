import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '../Button';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useMutation } from 'react-apollo';
import { createCustomer } from '../../graphql/mutations';
import './Footer.scss';

const Footer = ({ openContactForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createCustomerMutation, createdCustomer] = useMutation(createCustomer);

  console.log(createdCustomer)
  
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  function customerCreate(){
    createCustomerMutation({variables: {input: {email, password}}})
    .then(res => console.log(res))
    .catch(e => console.log(e))
  }

  return (
    <div className="footer_wrapper">
      <div className="footer_items">
        <div className="footer_logo">
          <img
            className="Logo__bottom"
            src={require("../../photos/logo.png")}
            alt="INNOVADE LOGO"
          />
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
          <br />
          <div className="subscribe">
            <ThemeProvider theme={darkTheme}>
              <TextField type="email" placeholder="Your email" value={email} onChange={({target}) => setEmail(target.value)} style={{marginRight: "10px"}} /> 
              <TextField type="password" placeholder="Choose a password" onChange={({target}) => setPassword(target.value)} /> 
              <Button onClick={customerCreate}>Sign up</Button>
            </ThemeProvider>
          </div> 
        </div>
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
