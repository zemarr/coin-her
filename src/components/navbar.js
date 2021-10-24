import React, { useState } from 'react'
import styled from 'styled-components'

import logoImg from '../assets/images/coin-logo.svg'
import { Container, StyledHamburger } from './styled/containers'

import { KeyboardArrowDown } from '@material-ui/icons'

const Navbar = () => {
    const [sidebarActive, setSidebarActive] = useState(false);

    const handleSidebarActive = (e) => {
        if (e.type === "click") {
            setSidebarActive(!sidebarActive)
        }
    }
    return (
        <>
            <StyledNavbar>
                <div className="logo">
                    <img src={logoImg} alt="" height="100%" width="100%" />
                    {" "}
                    <span>LOGO</span>
                </div>

                <StyledNavigation className="navigation-wrapper">
                    <ul className="navlinks">
                        <li>About Us</li>
                        <li>
                            <div className="dropdown-wrapper">
                                <button className="uk-button uk-button-default" type="button">Services</button>
                                <KeyboardArrowDown />
                            </div>
                            <div uk-dropdown="mode: click" style={{ background: "red", zIndex: "1000" }}>
                                Hello World
                            </div>
                        </li>
                        <li>Market</li>
                        <li>Contact</li>
                    </ul>
                    <div className="locale-login-wrapper">
                        <div className="locale">
                            <ul>
                                <li className="locale-dropdown">EN/USD</li>
                                <li>
                                    <button className="sign-in">Sign in</button>
                                </li>
                                <li>
                                    <button className="get-started">Get started</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </StyledNavigation>

                <StyledHamburger onClick={handleSidebarActive} menuOpen={sidebarActive}>
                    <div className="line"></div>
                </StyledHamburger>
            </StyledNavbar>
        </>
    )
}

export const StyledNavbar = styled.div`
    padding: 24px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    border-bottom: solid 1px #80808029;

    @media screen and (max-width: 375px) {
        padding: 36px 20px;
    }

    .logo {
        height: 32px;
        max-height: 32px;
        width: fit-content;
        padding-right: 32px;
        border-right: solid 1px #80808029;
        max-width: max-content;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        cursor: pointer;

        @media screen and (max-width: 900px) {
            border-right: solid 1px transparent;
        }

        @media screen and (max-width: 425px) {
            height: 27px;
            width: 27px;
        }

        span {
            font-size: 1.7rem;
            font-weight: 700;
            margin-left: 10px;

            @media screen and (max-width: 425px) {
                font-size: 1.4rem;
                font-weight: 600;
            }
        }
    }

`

export const StyledNavigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: calc(100% - 300px);

    @media screen and (max-width: 900px) {
        display: none;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
    }

    .navlinks {
        display: flex;
        align-items: center;
        
        li {
            margin-right: 32px;
            color: #777E90;
            cursor: pointer;

            .uk-button, .uk-button-default {

            }

            button {
                border: solid 1px #E6E8EC;
                background: transparent;
                color: inherit;
                font-size: 15px;
                font-family: var(--text-font);
                text-transform: capitalize;
                line-height: 16px;
                border: solid 1px transparent;
                min-height: 48px;
                min-width: 89px;
                padding: 0;
                margin: 0;
                border-radius: 90px;
                cursor: pointer;
            }
        }
    }

    .locale {
        ul {
            li {
                font-weight: 700;
                cursor: pointer;

                button {
                    font-size: 14px;
                    font-weight: 700;
                    line-height: 16px;
                    border: solid 1px transparent;
                    min-height: 48px;
                    min-width: 89px;
                    padding: 12px 1.1rem;
                    border-radius: 90px;
                    margin-right: 8px;
                    cursor: pointer;
                }

                .sign-in {
                    border: solid 1px #E6E8EC;
                    background: transparent;
                    color: #030303;
                }
                .get-started {
                    border: solid 1px transparent;
                    background: #F1A801;
                    color: #fafafa;
                }
            }

            .locale-dropdown {
                margin-right: 24px;
            }
        }
    }
`



export default Navbar
