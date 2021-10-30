import React from 'react'
import styled from 'styled-components'
import { Container, StyledRow } from '../styled/containers'

// Images
import logoImg from '../../assets/images/coin-logo.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <StyledFooter>
                <Container className="container">
                    <div className="footer-wrapper">
                        <div className="logo">
                            <img src={logoImg} alt="" width="50px" height="auto" />
                        </div>
                        <ul className="navigation">
                            <li>
                                <Link to="/about-us">About</Link>
                            </li>
                            <li>
                                <Link to="/services">Services</Link>
                            </li>
                            <li>
                                <Link to="/market">Market</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <div className="contact">
                            <h5>CONTACT</h5>
                            <p>43252 Borer Mountains</p>
                            <p>Zackerychester</p>
                            <p>732-528-4945</p>
                        </div>
                        <div className="newsletter">
                            <h5>NEWSLETTER</h5>
                            <form>
                                <label>Subscribe to our newsletter and we will notify you about latest news in the market</label>
                                <div className="input-container">
                                    <input type="email" placeholder="Enter your email" />
                                    <span className="submit-btn"></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </Container>
            </StyledFooter>
            <StyledCopyright>
                <Container>
                    <div className="copyright-wrapper">
                        <div className="left">
                            <p>Copyright &copy; 2021 Coinheroes. All rights reserved</p>
                        </div>
                        <div className="right">
                            <div className="socials">
                                <ul>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </StyledCopyright>
        </>
    )
}


export const StyledFooter = styled.section`
    border-top: solid 1px var(--primary-accent);
    border-bottom: solid 1px var(--primary-accent);

    .footer-wrapper {
        width: 100%;
        display: grid;
        justify-content: space-around;
        align-items: flex-start;
        grid-template-columns: 15% 20% 30% 35%;
        gap: 0px;
        row-gap: 0px;
    }

    .logo {
        margin-top: 86px;
    }

    .navigation {
        margin: 0;
        padding: 86px 0;
        padding-right: 86px;
        border-right: solid 1px var(--primary-accent);
        height: -webkit-fill-available;
        list-style: none;

        li {
            margin-bottom: 24px;

            a   {
                font-size: 14px;
                font-weight: 700;
                line-height: 16px;
                color: var(--alt-font-color);
                text-decoration: none;
            }
        }
    }

    .contact {
        padding: 86px;
        border-right: solid 1px var(--primary-accent);

        h5 {
            font-size: 12px;
            line-height: 12px;
            margin-bottom: 40px;
        }

        p {
            font-size: 14px;
            line-height: 24px;
            color: var(--font-color);
        }
    }

    .newsletter {
        padding: 86px;

        h5 {
            font-size: 12px;
            line-height: 12px;
            margin-bottom: 40px;
        }

        form {
            

            label {
                display: block;
                font-size: 14px;
                line-height: 24px;
                color: var(--font-color);
                margin-bottom: 24px;
            }

            .input-container {
                border: solid 1px var(--primary-accent);
                width: 100%;
                border-radius: 50px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 10px 0 16px;
                
                input {
                    height: 100%;
                    color: #777E90;
                    border: none;
                    padding: 15px 0;
                    font-size: 14px;
                    outline: none;
                }

                .submit-btn {
                    height: 30px;
                    width: 30px;
                    background-color: var(--primary-color);
                    border-radius: 90px;
                }
            }
        }
    }


`

const StyledCopyright = styled.div`
    

    .copyright-wrapper {
        width: 100%;
        display: grid;
        justify-content: space-between;
        align-items: center;
        grid-template-columns: 50% 50%;
        gap: 0;
        row-gap: 0;
        border-top: solid 1px var(--alt-background-color);
        border-bottom: solid 1px var(--alt-background-color);
    }
`

export default Footer
