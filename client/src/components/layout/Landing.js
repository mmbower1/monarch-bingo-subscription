import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// img
import layoutLogo from '../../img/bingo-left.jpeg';
import mainLogo from '../../img/bitcoinbingologo.png';
// modals
import SuccessModal from '../modals/successModal/SuccessModal';
import ErrorModal from '../modals/errorModal/ErrorModal';
// styles
import { Footer } from '../footer/Footer.styles'
import {
  FormGroupContainer,
  LandingBody,
  LandingContainer,
  LandingEnd,
  LandingInner,
  LandingParagraph,
  LandingTitle,
  LandingTitle2,
  LeftSide,
  RightSide
} from './Landing.styles';

const Landing = () => {
  let newUser;

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    email: ''
  });
  const { email } = formData;

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
        // username: username.toLowerCase().trim()
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
    <LandingBody>
      <LandingContainer>
        <LandingInner>
          <LeftSide>
            <img src={mainLogo} alt='' className='landing-img' />
            <LandingTitle>PLAY BINGO.<br /></LandingTitle>
            <LandingTitle2>EARN BITCOIN!</LandingTitle2>
            <LandingParagraph>We're building a better Lottery, <br /> and we want <span id='you'>YOU</span> to be a part of it.</LandingParagraph><br />
            <LandingEnd>Join our community to get access to FREE games<br /> when we launch!</LandingEnd>
            <form action="api/subscription" method="POST" onSubmit={e => onSubmit(e)}>
              <FormGroupContainer>
                {/* <input
                  type="text"
                  name="username"
                  id="username"
                  className="form-control"
                  placeholder="NAME"
                  onChange={e => onChange(e)}
                /> */}
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="EMAIL"
                  onChange={e => onChange(e)}
                  required
                />
                <button id="layout-button" type="submit" className="btn btn-danger btn-block">GET EARLY ACCESS</button>
                <div id='landing-buttons'>
                  <button id="top-landing-button-1">
                    <Link to='/login'>LOGIN</Link>
                  </button>
                  <button id='top-landing-button-2'>
                    <Link to='/register'>SIGN-UP</Link>
                  </button>
                </div>
                <Footer>© 2020 Copyright. Bitcoin Bingo, all rights reserved.</Footer>
              </FormGroupContainer>
            </form>
          </LeftSide>
          <RightSide>
            <img src={layoutLogo} alt='landing-img' className='landing-rightImg' />
          </RightSide>
        </LandingInner>
        <ErrorModal open={isErrorModalOpen} onClose={() => setIsErrorModalOpen()} />
        <SuccessModal open={isSuccessModalOpen} onClose={() => onSuccessModalClose()} />
      </LandingContainer>
    </LandingBody>
  )
}

export default Landing;
