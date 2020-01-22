import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// pics
import logo from '../../img/bitcoinbingologo.png';
// modals
import SuccessModal from '../modals/successModal/SuccessModal';
import ErrorModal from '../modals/errorModal/ErrorModal';
import axios from 'axios';
// styles
import { FormGroupContainer, LandingContainer, LandingInner } from './Landing.styles.js';
import { Footer } from '../footer/Footer.styles'

const Landing = () => {
  let newUser;

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    username: '',
    email: ''
  });
  const { username, email } = formData;

  // for typing in input fields
  const onChange = e => {
    console.log("onChange called");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // for refreshing page after success trial
  const onSuccessModalClose = e => {
    setIsSuccessModalOpen(false);
    window.location.reload();
  }

  // submit button
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
            'Content-Type': 'application/json'
        }
      }
      newUser = {
        email: email.toLowerCase().trim(),
        username: username.toLowerCase().trim()
      };
      const body = JSON.stringify(newUser);

      console.log("Pre api call");
      console.log(' ');
      const res = await axios.post('/api/subscription', body, config);
      console.log("Post api call");
      console.log('res: ', res);
      const success = res.data.success;
      const subscription = res.data.subscription;

      // Show user not found if success false AND subscription is false
      if (success) {
        setIsSuccessModalOpen(true);
      } else {
        setIsErrorModalOpen(true);
      }

    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <LandingContainer>
        <LandingInner>
          <div id='landing-buttons'>
            <button id="top-landing-button-1">
              <Link to='/login'>LOGIN</Link>
            </button>
            <button id='top-landing-button-2'>
              <Link to='/register'>SIGN-UP</Link>
            </button>
          </div>
          <img src={logo} alt="landing-logo" className="landing-logo" />
            <div className="landing-text">
              <h5>A fun and easy way to earn crypto playing Bingo!</h5>
              <br />
              <h5>Coming soon in 2020.</h5>
              <br />
              <h5>Don't miss out on exciting news from
                Bitcoin Bingo. Subscribe to our newsletter
                for your chance at free Bingo cards and BIG rewards!
              </h5>
            </div>
          <form action="api/subscription" method="POST" onSubmit={e => onSubmit(e)}>
            <FormGroupContainer>
              {/* <Row>
                <img src={leftPicture} alt="left-picture" className="left-picture" />
                <img src={rightPicture} alt="right-picture" className="right-picture" />
              </Row> */}
              <input
                type="text"
                name="username"
                id="username"
                className="form-control"
                placeholder="Name"
                onChange={e => onChange(e)}
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email"
                onChange={e => onChange(e)}
                required
              />
              <button id="subscribe-button" type="submit" className="btn btn-danger btn-block">SUBSCRIBE</button>
            </FormGroupContainer>
          </form>
          <br />
          <br />
          <br />
          <br />
          <Footer>© 2019 Copyright Bitcoin Bingo, all rights reserved</Footer>
        </LandingInner>
      <ErrorModal open={isErrorModalOpen} onClose={() => setIsErrorModalOpen()}/>
      <SuccessModal open={isSuccessModalOpen} onClose={() => onSuccessModalClose()}/>
  </LandingContainer>
  )
}

export default Landing
