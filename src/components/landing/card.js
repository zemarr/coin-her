import React from 'react'
import styled from 'styled-components'
import { StyledCol } from '../styled/containers'
import { ImagePlaceHolder } from './hero'

const Card = ({ coinImg, chartImg, coinName, coinPrice }) => {
    return (
        <>
            <StyledCol width="23%">
                <StyledCard className="card" coinLogo={coinImg} chart={chartImg}>
                    <div className="coin-logo"></div>
                    <div className="chart"></div>
                    <div className="coin-info">
                        <span className="coin-name">{coinName}</span>
                        <span className="rate-of-change">+0.79%</span>
                    </div>
                    <h2>{coinPrice}</h2>
                </StyledCard>
            </StyledCol>
        </>
    )
}

export const FeaturesCard = ({title, description}) => {
    return (
        <>
            <StyledFeaturesCard className="features-card">
                <div className="card-img">
                    <ImagePlaceHolder width="160px" height="160px"></ImagePlaceHolder>
                </div>
                <div className="content">
                    <h6>{title}</h6>
                    <p>{description}</p>
                </div>
            </StyledFeaturesCard>
        </>
    )
}

export const StyledCard = styled.div`
    height: fit-content; 
    background-color: transparent;
    border-radius: 16px;
    padding: 32px;
    margin: 10px;
    transition: all .5s cubic-bezier(0.42, 0.01, 0, 1.04);

    :hover {
        background-color: white;
        transform: scale(1.10);
        transition: all .5s cubic-bezier(0.42, 0.01, 0, 1.04);
        box-shadow: 0px 16px 10px -11px #1f2f463b;
    }

    .coin-logo {
        height: 30px;
        width: 30px;
        background-image: url(${props => props.coinLogo});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .chart {
        height: 60px;
        width: 100%;
        background-image: url(${props => props.chart});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .coin-info {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .coin-name {
            font-size: 12px;
            line-height: 20px;
        }
        
        .rate-of-change {
            font-size: 10px;
            display: inline;
            padding: 5px 10px 3px;
            background-color: green;
            color: white;
            border-radius: 15px;
        }
    }

    h2 {
        margin: 0;
    }
`

export const StyledFeaturesCard = styled.div`
    padding: 62px 32px;
    min-height: 300px;
    background-color: white;
    border-radius: 20px;
    transition: all .5s cubic-bezier(0.42, 0.01, 0, 1.04);

    :hover {
        transform: scale(1.01);
        box-shadow: 0px 64px 64px -48px rgba(15, 15, 15, 0.2);
        transition: all .5s cubic-bezier(0.42, 0.01, 0, 1.04);
    }

    .card-img {

    }

    .content {
        text-align: center;
        margin-top: 32px;

        h6 {
            font-size: 16px;
            line-height: 24px;
        }

        p {
            font-size: 14px;
            line-height: 24px;
            margin: 0;
            color: var(--alt-font-color);
        }

        
    }
`

export default Card
