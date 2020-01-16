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
    position: relative;
    /* background: url('../img/showcase.jpg') no-repeat center center/cover; */
    height: 100vh;
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