import React from 'react'
import styled from 'styled-components'

const Heading = ({ title, fontSize, fontWeight, color, align, boundary }) => {
    return (
        <>
            <StyledHeading size={fontSize} weight={fontWeight} tint={color} align={align} boundary={boundary}>
                <h3>{title}</h3>
            </StyledHeading>
        </>
    )
}

export const StyledHeading = styled.div`
    margin: 0 auto;
    margin-bottom: 65px;
    max-width: ${props => props.boundary};
    
    h3 {
        font-size: ${props => props.size};
        font-weight: ${props => props.weight};
        text-align: ${props => props.align};
        line-height: 56px;
        letter-spacing: -2;
        color: ${props => props.tint};
    }
`

export default Heading
