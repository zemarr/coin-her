import React from 'react'
import styled from 'styled-components'

const Heading = ({ title, subTitle, fontSize, fontWeight, color, align, boundary }) => {
    return (
        <>
            <StyledHeading size={fontSize} weight={fontWeight} tint={color} align={align} boundary={boundary}>
                <h3>{title}</h3>
                {subTitle ? (<p>{subTitle}</p>) : null}
            </StyledHeading>
        </>
    )
}

export const StyledHeading = styled.div`
    margin: 0 auto;
    margin-bottom: 65px;
    max-width: ${props => props.boundary};
    text-align: ${props => props.align};
    
    h3 {
        font-size: ${props => props.size};
        font-weight: ${props => props.weight};
        line-height: 56px;
        letter-spacing: -2;
        color: ${props => props.tint};
    }
`

export default Heading
