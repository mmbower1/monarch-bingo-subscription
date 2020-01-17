import styled, { createGlobalStyle } from 'styled-components';

// export const LandingBody = createGlobalStyle`
//     body {
//         background-image: url(../../img/img_bingo-left.png), url(../../img/img_bingo-right.png),
//             linear-gradient(180deg, #0089aa 0%, #003241 90%);
//         background-color: rgba(255, 255, 255, 0.4);
//         background-size: auto, 680px;
//         background-repeat: no-repeat;
//         background-position: bottom left, bottom right -180px;
//     }

// `;

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
    @media (max-width: 768px) {
        height: 130vh
    }
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
    @media (max-width: 768px) {
        height: 100%;
        width: 100%;
    }
`;

export const SubscribeButton = styled.div`
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