import React from 'react'
import styled from 'styled-components'
import Card from './card'
import { Container, StyledCol, StyledRow } from '../styled/containers'

import landingPageImage from '../../assets/images/landing-image1.png';
import coinLogo from '../../assets/images/coin-symbol.svg';
import chartImg from '../../assets/images/Graph-template.svg';

const Hero = () => {
    return (
        <>
            <StyledHero className="hero-section">
                <Container>
                    <StyledRow className="hero-main" justifyContent="space-between">
                        <StyledCol maxWidth="50%">
                            <div className="left-hero">
                                <HeroHeading>Trade, Invest & <br /> Exchange crypto</HeroHeading>
                                <span>Trade Bitcoin, Ethereum, USDT and other crypto currencies easily, faster, safely at the best rate using our platform.</span>
                                <button>Get started now</button>
                            </div>
                        </StyledCol>
                        <StyledCol maxWidth="50%" width="50%">
                            <div className="hero-right"></div>
                            {/* ImagePlaceHolder */}
                        </StyledCol>
                    </StyledRow>
                    <StyledRow className="hero-metrics" justifyContent="space-between" heroMetrics>
                        <Card coinImg={coinLogo} chartImg={chartImg} coinName="LINK/USDT" coinPrice="15,000.27" />
                        <Card coinImg={coinLogo} chartImg={chartImg} coinName="LINK/USDT" coinPrice="15,000.27" />
                        <Card coinImg={coinLogo} chartImg={chartImg} coinName="LINK/USDT" coinPrice="15,000.27" />
                        <Card coinImg={coinLogo} chartImg={chartImg} coinName="LINK/USDT" coinPrice="15,000.27" />
                    </StyledRow>
                </Container>
            </StyledHero>
        </>
    )
}

export const StyledHero = styled.section`
    min-height: calc(100vh - 180px);
    padding-top: 90px;
    padding-bottom: 95px;

    .left-hero {
        span {
            display: block;
            font-size: 18px;
            font-weight: 400;
            line-height: 28px;
            color: #777E90;
            margin-bottom: 32px;
        }

        button {
            border: solid 2px transparent;
            background-color: var(--primary-color);
            border-radius: 90px;
            min-width: 198px;
            min-height: 52px;
            padding: 16px 24px;
            font-weight: 700;
            font-size: 20px;
            font-family: var(--text-font);
            line-height: 20px;
            color: var(--background-color);
            cursor: pointer;

            :hover {
                transition: all .5s cubic-bezier(0.42, 0.01, 0, 1.04);
                color: var(--primary-color);
                background-color: var(--background-color);
                border: solid 2px var(--primary-color);
            }
        }
    }

    .hero-right {
        background-image: url(${landingPageImage});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        height: 580px;
        padding: 0 20px;
        position: absolute;
        top: -120px;
        left: 0;
        z-index: 10;
    }
`

export const HeroHeading = styled.h1`
    font-size: 64px;
    font-family: var(--heading-font);
    line-height: 76.8px;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
    color: var(--black-font-color);
`

export const ImagePlaceHolder = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    border-radius: 8px;
    background-color: #80808033;
    margin: 0 auto;
`

export default Hero
