import styled from 'styled-components';

export const DashboardContainer = styled.div`
    /* background: url('../img/showcase.jpg') no-repeat center center/cover; */
    height: 110vh;
    @media (max-width: 700px) {
        height: 150vh;
    }
`;

export const DashboardInner = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    margin-top: 150px;
    text-align: center;
    width: 80%;
    @media (max-width: 700px) {
        
    }
`;