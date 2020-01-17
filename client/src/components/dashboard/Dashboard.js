import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
// styles
import { Footer } from '../footer/Footer.styles';
import { DashboardButton, DashboardContainer, DashboardInner } from './Dashboard.styles'
import { DarkOverlay, FormGroupContainer } from '../landing/Landing.styles'
// components
import Navbar from '../navbar/Navbar';

const Dashboard = () => {
    const [formData, setFormData] = useState({
        name: '',
        btcAddress: ''
    });

    const { name, btcAddress } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault();
        const { auth } = this.props;
        // Check which fields have been updated and then submit only those fields
        let userInfo = {}
        if (this.state.name !== ""){
            userInfo.name = this.state.name;
        }
        if (this.state.btcAddress !== ""){
            userInfo.btcAddress = this.state.btcAddress;
        }
        axios.put(`/api/users/${auth.user._id}`, userInfo)
        .then(() => {
          this.setState({
            name: "",
            btcAddress : "",
            phone : "",
          });
        //   this.props.setAlert('Account updated!', 'success');
          this.props.onClose();
        })
        .catch(err => {
          console.log(err);
        });
    }

    return (
        <DashboardContainer>
            <DarkOverlay>
                <DashboardInner>
                    <Navbar />
                    <form className='form' action="/api/subscription" method="POST" onSubmit={e => onSubmit(e)}>
                        <FormGroupContainer>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                placeholder="Name"
                                onChange={e => onChange(e)}
                            />
                            <br />
                            <input
                                type="text"
                                name="btcAddress"
                                id="btcAddress"
                                className="form-control"
                                placeholder="BTC Address"
                                onChange={e => onChange(e)}
                            />
                            <DashboardButton className="btn" type="submit">EDIT</DashboardButton>
                        </FormGroupContainer>
                    </form>
                    <Footer>© 2019 Copyright Bitcoin Bingo, all rights reserved</Footer>
                </DashboardInner>
            </DarkOverlay>
        </DashboardContainer>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
