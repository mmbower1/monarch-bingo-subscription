import styled from 'styled-components';

export const NavbarContainer = styled.div`
    background-color: #004A60;
    display: grid;
    grid-template-columns: 42.3% 24.3% 33.3%;
    height: 320px;
    margin: 0 auto;
    // position: fixed;
    width: 100%;
    z-index: 1;

    @media (max-width: 700px) {
        height: 250px;
        display: block;
    }
`;