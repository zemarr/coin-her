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
        transform: ${({ menuOpen }) => (menuOpen ? "" : "translateY(-4px)")};
        transform: ${({ menuOpen }) => (menuOpen ? "rotate(45deg)" : "")};
    }
        ::after {
        transform: translateY(4px);
        transform: ${({ menuOpen }) => (menuOpen ? "rotate(-45deg)" : "")};
    }   

`