import React, { useState } from 'react';
import {logo} from '../../img/bitcoinbingologo.png';
import axios from 'axios';
// styles
import { DarkOverlay, FormGroupContainer, LandingContainer, LandingInner } from './Landing.styles';
import { Footer } from '../footer/Footer.styles';
// modals
import SuccessModal from '../modals/successModal/SuccessModal';
import ErrorModal from '../modals/errorModal/ErrorModal';

const Landing = () => {
//     let newUser;
//     const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
//     const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

//     const [formData, setFormData] = useState({
//         username: '',
//         email: ''
//     });
//     const { username, email } = formData;

//     // for typing in input fields
//     const onChange = e => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     }

//     // for refreshing page after success trial
//     const onSuccessModalClose = e => {
//         setIsSuccessModalOpen(false);
//         window.location.reload();
//     }

//       // submit button
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//       }
//       newUser = {
//         email: email.toLowerCase().trim(),
//         username: username.toLowerCase().trim()
//       };
//       const body = JSON.stringify(newUser);

//       console.log("Pre api call");
//       console.log(' ');
//       const res = await axios.post('/api/users', body, config);
//       console.log("Post api call");
//       console.log(' ');
//       const success = res.data.success;
//       const subscription = res.data.subscription;

//       // Show user not found if success false AND subscription is false
//       if (success) {
//         setIsSuccessModalOpen(true);
//       } else {
//         setIsErrorModalOpen(true);
//       }

//     } catch (err) {
//       console.error(err.message);
//     }
//   }

    return (
        <LandingContainer>
            <DarkOverlay>
                <LandingInner>
                    <img src={logo}></img>
                    <p>
                        A fun and easy way to earn crypto by playing Bingo!<br />
                        Coming soon this year!<br />
                        Don't miss out on exciting news from Bitcoin Bingo.
                        Subscribe to our newsletter for your chance at free Bingo cards and BIG rewards!
                    </p>
                    <form action="/api/subscribe" method="POST" onSubmit={(e) => console.log(e)}>
                        <FormGroupContainer>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                className="form-control"
                                placeholder="Name"
                                // onChange={e => onChange(e)}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                placeholder="Email"
                                // onChange={e => onChange(e)}
                                required
                            />
                            <button id="subscribe-button" type="submit" className="btn btn-danger btn-block">SUBSCRIBE</button>
                        </FormGroupContainer>
                    </form>
                    {/* <Footer>© 2019 Copyright Bitcoin Bingo, all rights reserved</Footer> */}
                    <Footer>© 2019 Copyright Bitcoin Bingo, all rights reserved</Footer>
                </LandingInner>
            </DarkOverlay>
            {/* <ErrorModal open={isErrorModalOpen} onClose={() => setIsErrorModalOpen(false)}/>
            <SuccessModal open={isSuccessModalOpen} onClose={() => onSuccessModalClose()}/> */}
        </LandingContainer>
    )
}

export default Landing;
