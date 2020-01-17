import styled from 'styled-components';

export const DashboardContainer = styled.div`
    position: relative;
    /* background: url('../img/showcase.jpg') no-repeat center center/cover; */
    height: 100vh;
`;

export const DashboardInner = styled.div`
    align-items: center;
    color: #fff;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    text-align: center;
    width: 80%;
`;

export const DashboardButton = styled.div`
    border-radius: 6px;
    background: #ff9501;
	color: #fff;
    font-size: 20px;
    margin: auto;
    margin-top: 15px;
	padding: 11px;
	width: 170px;
`;