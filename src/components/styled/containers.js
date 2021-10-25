import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    @media screen and (max-width: 425px) {
        padding: 0 32px;
    }
`

export const StyledHamburger = styled.div`
    position: relative;
    flex-direction: column;
    padding: 16px 2px;
    opacity: 0;
    display: none;

    @media screen and (max-width: 900px) {
        opacity: 1;
        display: flex;
    }
    
    .line {
        width: 28px;
        height: 2px;
        background-color: transparent;
        box-shadow: 0 2px rgba(transparent);
        transition: all .5s cubic-bezier(0.42, 0.01, 0, 1.04);
        opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")}
    }

    ::before, ::after {
        content: "";
        position: absolute;
        width: 28px;
        height: 2px;
        background-color: #030303;
        box-shadow: 0 2px rgba(255,101,47,.1);
        transition: all .5s cubic-bezier(0.42, 0.01, 0, 1.04);

    }

    ::before {
        /* transform: ${({ menuOpen }) => (menuOpen ? "" : "translateY(4px)")}; */
        transform: ${({ menuOpen }) => (menuOpen ? "translateY(2px)" : "translateY(4px)")};
        transform: ${({ menuOpen }) => (menuOpen ? "rotate(-45deg)" : "")};
        transition: all .5s cubic-bezier(0.42, 0.01, 0, 1.04);

    }
    ::after {
        /* transform: translateY(-4px); */
        transform: ${({ menuOpen }) => (menuOpen ? "translateY(-2px)" : "translateY(-4px)")};
        transform: ${({ menuOpen }) => (menuOpen ? "rotate(45deg)" : "")};
        transition: all .5s cubic-bezier(0.42, 0.01, 0, 1.04);

    }   

`

export const StyledCol = styled.div`
    max-width: ${props => props.maxWidth};
    width: ${props => props.width};
    display: flex;
    flex-direction: column;
    position: relative;

    @media screen and (max-width: 768px) {
        max-width: 100% !important;
    }
`

export const StyledRow = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: ${props => props.justifyContent};
    max-width: 100%;

    background-color: ${({heroMetrics}) => heroMetrics ? "#F4F5F6" : ""};
    border-radius: ${({heroMetrics}) => heroMetrics ? "24px" : ""};
    padding: ${({heroMetrics}) => heroMetrics ? "14px" : ""};
    margin-top: ${({heroMetrics}) => heroMetrics ? "180px" : ""};
    overflow: ${({heroMetrics}) => heroMetrics ? "hidden" : ""};
`