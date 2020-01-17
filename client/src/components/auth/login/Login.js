import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// styles
import { DarkOverlay, FormGroupContainer } from '../../landing/Landing.styles';
import { BlackBox, LoginContainer, LoginInner } from './Login.styles';
import { Footer } from '../../footer/Footer.styles';
// actions
import { login } from '../../../actions/auth';
// components
import Navbar from '../../navbar/Navbar'
// import axios from 'axios';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault();
        login(email, password)
    }

    if (isAuthenticated) {
        return <Redirect to='/dashboard' />
    }

    return (
        <LoginContainer>
            <Navbar />
            <DarkOverlay>
            <br />
            <br />
            <br />
            <br />
                <LoginInner>
                    <form className="form" onSubmit={e => onSubmit(e)}>
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
                                type="password"
                                placeholder="Password"
                                name="password"
                                minLength="6"
                                value={password}
                                onChange={(e) => onChange(e)}
                            />
                        </FormGroupContainer>
                            <input id='login-button' type="submit" value="LOGIN" />
                        <br />
                        <br />
                        <h4>Forgot Password?</h4>
                    </form>
                    <BlackBox>
                        Don't have an account? <br /><Link to="/register">REGISTER</Link>
                    </BlackBox>
                    <Footer>© 2019 Copyright Bitcoin Bingo, all rights reserved</Footer>
                </LoginInner>
            </DarkOverlay>
        </LoginContainer>
    )
}

// props get added here
Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)
