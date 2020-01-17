import React from 'react'
import PropTypes from 'prop-types'
// styles
import { Footer } from '../footer/Footer.styles';
import { DashboardContainer } from './Dashboard.styles'
import { DarkOverlay } from '../landing/Landing.styles'
// components
import Navbar from '../navbar/Navbar';

const Dashboard = props => {
    return (
        <DashboardContainer>
            <DarkOverlay>
                <Navbar />
                    MY ACCOUNT
                <Footer>© 2019 Copyright Bitcoin Bingo, all rights reserved</Footer>
            </DarkOverlay>
        </DashboardContainer>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
