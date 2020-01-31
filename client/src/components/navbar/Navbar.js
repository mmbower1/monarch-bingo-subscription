import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../../img/bitcoinbingologo.png'
import { withRouter } from 'react-router-dom';
// styles
import { NavbarContainer } from './Navbar.styles'
// actions
import { logout } from '../../actions/auth'


const Navbar = ({ auth: { isAuthenticated, loading }, logout, page }) => {
    const authLinks = (
        <ul>
            <p className='dashboard-title'>MY ACCOUNT</p>
            <a id='logout-button' onClick={logout}>
                <i className='fas fa-sign-out-alt' />{' '}
                <span>Logout</span>
            </a>
        </ul>
    )

    const guestLinksRegister = (
        <div>
            <p className='title'>CREATE YOUR ACCOUNT</p>
            {/* <ul><Link to="/login">Login</Link></ul>
            <ul><Link to="/register">/ &nbsp;&nbsp;&nbsp;Register</Link></ul> */}
        </div>
    )
    const guestLinksLogin = (
        <div>
            <p className='welcome-title'>WELCOME</p>
            {/* <ul><Link to="/login">Login</Link></ul>
            <ul><Link to="/register">/ &nbsp;&nbsp;&nbsp;Register</Link></ul> */}
        </div>
    )

    // console.log("props.location.pathname: " + this.props.location.pathname);
    let isRegisterPage = (page === "register");
    console.log("isRegisterPage: " + isRegisterPage);
    return (
        <NavbarContainer>
            <div className='nav-child'>
                <Link to="/"><img key='idk' id='navbar-logo' src={logo}></img></Link>
            </div>
            <div className='nav-child'>
                { !loading && (
                    <Fragment>{ isAuthenticated ? authLinks : isRegisterPage ? guestLinksRegister : guestLinksLogin  }</Fragment>
                )}
            </div>
        </NavbarContainer>
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
