import styled from 'styled-components';

export const BlackBoxLogin = styled.div`
    background-color: #000000;
    border-radius: 4px;
    height: 80px;
    font-size: 12px;
    margin-top: 45px;
    opacity: 50%;
    padding-top: 10px;
    width: 15%;
    @media (max-width: 700px) {
        font-size: 13px;
        height: 100px;
        margin-bottom: 150px;
        padding-bottom: 30px;
        padding-top: 20px;
        opacity: .75;
        width: 75%;
    }
`;

export const LoginContainer = styled.div`
    position: relative;
    height: 145vh;
    @media (max-width: 700px) {
        margin: auto;
        height: 160vh;
    }
`;

export const LoginInner = styled.div`
    align-items: center;
    color: #fff;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    margin-top: 100px;
    text-align: center;
    width: 80%;
    @media (max-width: 700px) {
        height: 30%;
        margin-top: 150px;
    }
`;