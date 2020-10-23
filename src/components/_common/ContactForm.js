import React, {useState} from 'react';
import Modal from 'react-modal';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
// import Alert from '@material-ui/core/Alert';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { WORDPRESS_HOST } from '../../config';
import axios from 'axios';
import './ContactForm.scss';

function ContactForm({isOpen, closeModal}){

    const [thename, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);

    const darkTheme = createMuiTheme({
        palette: {
          type: 'dark',
        },
      });
  
    const customStyles = {
      overlay : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2
      },
      content : {
        position: 'relative',
        backgroundColor: "#000"
      }
    };

    const formData = new FormData();
    formData.append("thename", thename);
    formData.append("email", email);
    formData.append("message", message);

    function send(e){
      e.preventDefault();
      axios.post(`${WORDPRESS_HOST}/wp-json/contact-form-7/v1/contact-forms/11/feedback`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(({data}) => {
        const {status} = data;
        if(status === 'mail_sent'){
          setName("");
          setEmail("");
          setMessage("");
          setSent(true);
        }
      })
      .catch(e => console.log(e))
    }
  
    return(
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Contact"
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          style={customStyles}
        >
          <div className="left">
            <img className="Unique_product" src={require("../../photos/history.png")} alt="Unique_product" />
          </div>
          <div className="right">
            <div onClick={closeModal} className="x">x</div>
            <h2>Let's talk</h2>
            <h4>Drop us a few lines</h4>
            <form>
              <ThemeProvider theme={darkTheme}>
                <div className="row">
                  <TextField style={{width: "47.5%", marginRight: "2.5%"}} color="primary" id="name" label="name" value={thename} onChange={({target}) => setName(target.value)} />
                  <TextField style={{width: "47.5%", marginLeft: "2.5%"}} color="primary" id="email" type="email" label="email" value={email} onChange={({target}) => setEmail(target.value)} />
                </div>
                <div className="row">
                  <TextField style={{width: "100%", marginTop: "20px"}} rows={8} color="primary" id="message" label="message" variant="filled" multiline value={message} onChange={({target}) => setMessage(target.value)} />
                </div>
                <div className="row-three">
                  <button onClick={send}>Send</button>
                </div>
              </ThemeProvider>
          </form>
          </div>
          <Snackbar
            anchorOrigin={{ vertical:'bottom', horizontal:'center' }}
            open={sent}
            onClose={() => setSent(false)}
            message="Thank you for contacting us"
            key='snak'
          />
        </Modal>
    )
}

export default ContactForm;