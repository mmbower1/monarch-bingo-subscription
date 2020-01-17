import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../../img/bitcoinbingologo.png'
// actions
import { logout } from '../../actions/auth'


const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <ul>
            <a onClick={logout}>
                <i className='fas fa-sign-out-alt' />{' '}
                <span className='hide-sm'>Logout</span>
            </a>
        </ul>
    )

    const guestLinks = (
        <ul className='guest-links'>
            <ul><Link to="/login">Login</Link></ul>
            <ul><Link to="/register">/ &nbsp;&nbsp;&nbsp;Register</Link></ul>
        </ul>
    )

    return (
        <nav className="navbar">
            <h1>
                <Link to="/"><img id='auth-logo' src={logo}></img></Link>
            </h1>
            { !loading && (
                <Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>
            )}
        </nav>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar);
