import React from 'react';
import Modal from 'react-modal';
import TextField from '@material-ui/core/TextField'
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'

function ContactForm({isOpen}){

    const darkTheme = createMuiTheme({
        palette: {
          type: 'dark',
        },
      });
  
      const customStyles = {
        overlay : {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
        content : {
          position: 'relative',
          backgroundColor: "#000"
        }
      };
  
    return(
        <Modal
          isOpen={isOpen}
          onRequestClose={() => this.setState({contact: false})}
          contentLabel="Contact"
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          style={customStyles}
        >
          <div className="left">
            <img className="Unique_product" src={require("../photos/history.png")} alt="Unique_product" />
          </div>
          <div className="right">
            <h2>Let's talk</h2>
            <h4>Drop us a few lines</h4>
            <form>
              <ThemeProvider theme={darkTheme}>
                <div className="row">
                  <TextField style={{width: "47.5%", marginRight: "2.5%"}} color="primary" id="name" label="name" />
                  <TextField style={{width: "47.5%", marginLeft: "2.5%"}} color="primary" id="email" type="email" label="email" />
                </div>
                <div className="row">
                  <TextField style={{width: "100%", marginTop: "20px"}} rows={8} color="primary" id="message" label="message" variant="filled" multiline />
                </div>
                <div className="row-three">
                  <button>Send</button>
                  <div className="contacts">
                    <a href="tel:+44 7800 600001">+44 7800 600001</a>
                    <a href="mailto:info@innovade.com">info@innovade.com</a>
                  </div>
                </div>
              </ThemeProvider>
          </form>
          </div>
        </Modal>
    )
}

export default ContactForm;