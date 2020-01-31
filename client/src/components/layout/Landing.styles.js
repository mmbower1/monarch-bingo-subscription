import styled from 'styled-components';

export const LandingBody = styled.div`
    background-image: url(../../img/img_bingo-left.png), url(../../img/img_bingo-right.png),
        linear-gradient(180deg, #0089aa 0%, #003241 90%);
    background-color: rgba(255, 255, 255, 0.4);
    background-size: auto, 680px;
    background-repeat: no-repeat;
    background-position: bottom left, bottom right -180px;
    color: #fff;
    display: block;
    font-family: "Roboto", sans-serif;
    line-height: 1.6;
    @media (max-width: 768px) {
        height: 130vh;
    }

`;

export const LandingContainer = styled.div`
    height: 110vh;
    position: relative;
    @media (max-width: 768px) {
        height: 100%;
    }
`;

export const LandingInner = styled.div`
    align-items: center;
    color: #fff;
    display: flex;
    height: 100%;
    justify-content: space-between;
    margin: auto;
    text-align: center;
    width: 60%;
    @media (max-width: 768px) {
        height: 120vh;
        text-align: center;
        width: 90%;
    }
`;

export const FormGroupContainer = styled.h1`
    margin-top: 20px;
    text-align: left;
    @media (max-width: 768px) {
        width: 50%;
    }

`;

export const LandingTitle = styled.h1`
    font-size: 45px;
    font-family: Regular, Luckiest Guy;
    text-align: left;
    @media (max-width: 768px) {
        font-size: 35px;
        text-align: center;
    }
`;
export const LandingTitle2 = styled.p`
    color: #FFB73C;
    font-size: 45px;
    font-family: Regular, Luckiest Guy;
    text-align: left;
    @media (max-width: 768px) {
        font-size: 35px;
        text-align: center;
    }
`;

export const LandingParagraph = styled.h1`
    color: #B1E7F7;
    font-family: 'Roboto', 'Bold Italic';
    font-size: 20px;
    font-style: italic;
    text-align: left;
    @media (max-width: 768px) {
        font-size: 15px;
        text-align: center;
    }
`;

export const LandingEnd = styled.h1`
    font-size: 12px;
    text-align: left;
    @media (max-width: 768px) {
        font-size: 11px;
        text-align: center;
    }
`;

export const LeftSide = styled.div`
    line-height: 1.5;
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;


export const RightSide = styled.div`
    margin-left: 100px;
    @media (max-width: 768px) {
      display: none;
    }
`;
