import React from 'react'
import styled from 'styled-components'
import { Container } from '../styled/containers'
import Heading from '../styled/heading'

const MarketTrends = () => {
    return (
        <>
            <StyledMarketTrends className="market-trends">
                <Container>
                    <Heading title="Market trend" fontSize="48px" color="#23262F" />
                </Container>
            </StyledMarketTrends>
        </>
    )
}


export const StyledMarketTrends = styled.section`
    padding-top: 135px;
    min-height: calc(100vh - 215px);
    padding-bottom: 80px;
`

export default MarketTrends
