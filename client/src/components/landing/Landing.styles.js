import styled from 'styled-components';

export const DarkOverlay = styled.div`
    background: transparent linear-gradient(180deg, #0089AA 0%, #003241 100%) 0% 0% no-repeat padding-box;
    height: 100%;
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

`;

export const FormGroupContainer = styled.div`
    display: grid;
    padding: 10px;
`;

export const LandingContainer = styled.div`
    height: 100vh;
    position: relative;
    /* background: url('../img/showcase.jpg') no-repeat center center/cover; */
`;

export const LandingInner = styled.div`
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

export const OrangeButton = styled.div`
    border-radius: 6px;
    background: #ff9501;
	color: #fff;
    font-size: 20px;
    margin: auto;
    margin-top: 15px;
	padding: 11px;
	width: 170px;
`;

export const Writing = styled.p`
    font-size: 20px;
    line-height: 35px;
`;