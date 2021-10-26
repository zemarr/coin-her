import React from 'react'
import styled from 'styled-components'
import { Container } from '../styled/containers'
import Heading from '../styled/heading'

const HowItWorks = () => {
    return (
        <>
            <StyledHowItWorks>
                <Container>
                    <Heading centered title="How it works" subTitle="Coin heroes is a web based platform that allows you the user to lorem ipsum dolor amet." fontSize="48px" color="#23262F" align="center" boundary="544px" />
                </Container>
            </StyledHowItWorks>
        </>
    )
}


export const StyledHowItWorks = styled.section`
    min-height: calc(100vh - 215px);
    background-color: var(--background-color);
    padding-top: 135px;
    padding-bottom: 80px;
`

export default HowItWorks
