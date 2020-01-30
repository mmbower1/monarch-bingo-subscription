import styled from 'styled-components';

export const BlackBoxRegister = styled.div`
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
        opacity: .75;
        width: 65%;
    }
`;

export const RegisterButton = styled.div`
    border-radius: 6px;
    background: #ff9501;
    color: #fff;
    font-size: 20px;
    margin: auto;
    margin-top: 15px;
    padding: 11px;
    width: 170px;
    @media (max-width: 700px) {
        font-size: 10px;
    }
`;

export const RegisterContainer = styled.div`
    position: relative;
    /* background: url('../img/showcase.jpg') no-repeat center center/cover; */
    height: 140vh;
    @media (max-width: 700px) {
        margin: auto;
        height: 165vh;
    }
`;

export const RegisterInner = styled.div`
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
        margin-top: 150px;
    }
`;