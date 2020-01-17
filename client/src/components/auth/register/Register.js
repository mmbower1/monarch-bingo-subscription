import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// styles
import { DarkOverlay, FormGroupContainer } from '../../landing/Landing.styles';
import { BlackBox } from '../login/Login.styles';
import { RegisterButton, RegisterContainer, RegisterInner } from './Register.styles';
import { Footer } from '../../footer/Footer.styles';
// actions
import { register } from '../../../actions/auth';
import { setAlert } from '../../../actions/alert';
// components
import Navbar from '../../navbar/Navbar'
// import axios from 'axios';

const Register = ({ register, isAuthenticated, setAlert }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        btcAddress: '',
        password: '',
        password2: ''
    });

    const { name, email, btcAddress, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Passwords dont match', 'danger')
        } else {
            register({ name, email, btcAddress, password });
            setAlert('Register success', 'success')
        }
    }

    if (isAuthenticated) {
        return <Redirect to='/dashboard' />
    }

    return (
        <RegisterContainer>
            <Navbar />
            <DarkOverlay>
            <br />
            <br />
            <br />
            <br />
                <RegisterInner>
                    <p className="title"> CREATE YOUR ACCOUNT</p>
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
                        <input id='register-button' type="submit" value="REGISTER" />
                    </form>
                    <BlackBox>
                        Already have an account? <br /><Link to="/login">LOGIN</Link>
                    </BlackBox>
                    <Footer>© 2019 Copyright Bitcoin Bingo, all rights reserved</Footer>
                </RegisterInner>
            </DarkOverlay>
        </RegisterContainer>
    )
}

Register.propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    setAlert: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { register, setAlert })(Register)
