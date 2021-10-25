import React from 'react'
import styled from 'styled-components'
import { Container, StyledCol, StyledRow } from '../styled/containers'
import { FeaturesCard } from './card'

const Why = () => {
    return (
        <>
            <StyledWhySection>
                <Container>
                    <div className="heading">
                        <h2>Why Choose Coin Heroes?</h2>
                        <span>We've got everything you need to start trading.</span>
                    </div>
                    <StyledRow justifyContent="space-between">
                        <StyledCol max-width="30%" width="30%">
                            <FeaturesCard title="Fast & Easy To Use" description="A simple interface and easy navigation that offers a seamless trading experience." />
                        </StyledCol>
                        <StyledCol max-width="30%" width="30%">
                            <FeaturesCard title="Fast Payment" description="Sell or exchange your currencies and get paid in no time." />
                        </StyledCol>
                        <StyledCol max-width="30%" width="30%">
                            <FeaturesCard title="Safe & Secure" description="A trusted environment where customers feel confident in making transactions" />
                        </StyledCol>
                    </StyledRow>
                    <div className="cta">
                        <button>Get started For Free</button>
                    </div>
                </Container>
            </StyledWhySection>
        </>
    )
}


export const StyledWhySection = styled.div`
    min-height: calc(100vh - 135px);
    background-color: #F4F5F6;
    padding-top: 135px;
    padding-bottom: 80px;

    .heading {
        text-align: center;
        margin-bottom: 64px;

        h2 {
            font-size: 48px;
            margin: 0;
        }

        span {
            font-size: 16px;
            line-height: 24px;
        }
    }

    .cta {
        margin-top: 45px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;


        button {
            border: solid 2px transparent;
            background-color: var(--primary-color);
            border-radius: 90px;
            max-width: 200px;
            max-height: 52px;
            padding: 16px 24px;
            font-weight: 700;
            font-size: 16px;
            font-family: var(--text-font);
            line-height: 20px;
            color: var(--background-color);
            cursor: pointer;
            transition: all .5s cubic-bezier(0.42, 0.01, 0, 1.04);

            :hover {
                transition: all .5s cubic-bezier(0.42, 0.01, 0, 1.04);
                color: var(--primary-color);
                background-color: var(--background-color);
                border: solid 2px var(--primary-color);
            }
        }
    }
`

export default Why
