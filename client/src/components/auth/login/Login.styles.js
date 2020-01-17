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

export const LoginContainer = styled.div`
    position: relative;
    /* background: url('../img/showcase.jpg') no-repeat center center/cover; */
    height: 100vh;
`;

export const LoginInner = styled.div`
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

export const BlackBox = styled.div`
    background-color: #000000;
    border-radius: 4px;
    height: 120px;
    margin-top: 65px;
    opacity: 50%;
    padding-top: 20px;
    width: 25%;
`;