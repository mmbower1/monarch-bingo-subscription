import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// styles
import { FormGroupContainer } from '../../layout/Landing.styles';
import { BlackBoxRegister } from '../register/Register.styles';
import { RegisterButton, RegisterContainer, RegisterInner } from './Register.styles';
import { Footer } from '../../footer/Footer.styles';
// actions
import { register } from '../../../actions/auth';
// components
import Navbar from '../../navbar/Navbar'
// import axios from 'axios';

const Register = ({ register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        btcAddress: '',
        password: '',
        password2: '',
        subscription: false
    });

    const { name, email, btcAddress, password, password2, subscription } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            console.log('Passwords dont match', 'danger');
        } else {
            register({ name, email, btcAddress, password, subscription });
        }
    }

    if (isAuthenticated) {
        return <Redirect to='/dashboard' />
    }

    return (
        <RegisterContainer>
            <Navbar page={"register"} /> 
            <div>
                <RegisterInner>
                    {/* <p className="title"> CREATE YOUR ACCOUNT</p> */}
                    <form className="form" onSubmit={e => onSubmit(e)}>
                        <FormGroupContainer>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={name}
                                onChange={(e) => onChange(e)}
                                required
                            />
                        </FormGroupContainer>
                        <FormGroupContainer>
                            <input
                                type="email"
                                placeholder="Email Address"
                                name="email"
                                value={email}
                                onChange={(e) => onChange(e)}
                                required
                            />
                        </FormGroupContainer>
                        <FormGroupContainer>
                            <input
                                type="text"
                                placeholder="BTC Address"
                                name="btcAddress"
                                minLength="34"
                                value={btcAddress}
                                onChange={(e) => onChange(e)}
                            />
                        </FormGroupContainer>
                        <FormGroupContainer>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                minLength="6"
                                value={password}
                                onChange={(e) => onChange(e)}
                            />
                        </FormGroupContainer>
                        <FormGroupContainer>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="password2"
                                minLength="6"
                                value={password2}
                                onChange={(e) => onChange(e)}
                            />
                        </FormGroupContainer>
                        <br />
                        <input type="checkbox" value={subscription} /> Subscribe to our newsletter for my chance at free Bingo cards and BIG rewards!
                        <br /><br />
                        <input id='register-button' type="submit" value="REGISTER" />
                    </form>
                    <BlackBoxRegister>
                        Already have an account? <br />
                        <span className='blackbox-links'><Link to="/login">LOGIN</Link></span>
                    </BlackBoxRegister>
                    <Footer>© 2019 Copyright Bitcoin Bingo, all rights reserved</Footer>
                </RegisterInner>
            </div>
        </RegisterContainer>
    )
}

Register.propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { register })(Register)