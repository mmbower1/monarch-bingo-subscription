import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import sweetAlert from 'sweetalert'
// actions
import { auth } from '../../actions/auth';
// styles
import { Footer } from '../footer/Footer.styles';
import { DashboardButton, DashboardContainer, DashboardInner } from './Dashboard.styles'
import { FormGroupContainer } from '../layout/Landing.styles'
// components
import Navbar from '../navbar/Navbar';

const Dashboard = ({ auth: { user } }) => {
    const [formData, setFormData] = useState({
        name: '',
        btcAddress: ''
    });

    const { name, btcAddress } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault();
        // Check which fields have been updated and then submit only those fields
        let userInfo = {}
        if (name !== ""){
            userInfo.name = name;
        }
        if (btcAddress !== ""){
            userInfo.btcAddress = btcAddress;
        }
        axios.put(`/api/users/${user._id}`, userInfo)
        .then(() => {
            this.setState({
                name: "",
                btcAddress : "",
            });
            alert('Account updated.');
        //   this.props.onClose();
        })
        .catch(err => {
          console.log(err);
        });
    }

    return (
        <DashboardContainer>
            <Navbar page={"dashboard"} />
            <div>
                <DashboardInner>
                    <form className='form' action="/api/subscription" method="POST" onSubmit={e => onSubmit(e)}>
                        <FormGroupContainer>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control-dashboard"
                                placeholder="Name"
                                onChange={e => onChange(e)}
                            />
                            <br />
                            <input
                                type="text"
                                name="btcAddress"
                                id="btcAddress"
                                className="form-control-dashboard"
                                placeholder="BTC Address"
                                onChange={e => onChange(e)}
                            />
                            {/* <DashboardButton className="btn" type="submit">EDIT</DashboardButton> */}
                            <input id='dashboard-button' type="submit" value="EDIT" />
                        </FormGroupContainer>
                    </form>
                    <Footer>© 2019 Copyright Bitcoin Bingo, all rights reserved</Footer>
                </DashboardInner>
            </div>
        </DashboardContainer>
    )
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
    console.log('state.auth: ', state.auth.user)
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(Dashboard)
