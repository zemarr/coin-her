import React from 'react'
import styled from 'styled-components'
import { Container, StyledCol, StyledRow } from '../styled/containers'
import Heading from '../styled/heading'

// Images
import Image1 from '../../assets/images/progress-image-1.png'
import Image2 from '../../assets/images/progress-image-2.png'
import Image3 from '../../assets/images/progress-image-3.png'
import Image4 from '../../assets/images/progress-image-4.png'
import connectLine from '../../assets/images/connect-line.svg'

const processTracking = [
    {
        id: 1,
        step: "Step 1",
        title: "Sign up",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
    },
    {
        id: 2,
        step: "Step 2",
        title: "Connect wallet",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
    },
    {
        id: 3,
        step: "Step 3",
        title: "Start trading",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
    },
    {
        id: 4,
        step: "Step 4",
        title: "Earn money",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
    },
]

const HowItWorks = () => {
    return (
        <>
            <StyledHowItWorks className="hiw">
                <Container>
                    <Heading centered title="How it works" subTitle="Coin heroes is a web based platform that allows you the user to lorem ipsum dolor amet." fontSize="48px" color="#23262F" align="center" boundary="544px" />
                    <div className="cards-container">
                        {/* <ProcessItems /> */}
                        <ul className="process-images">
                            <li className="img">
                                <img src={Image1} alt="" width="100%" height="100%" />
                            </li>
                            <li className="seperator"></li>
                            <li className="img">
                                <img src={Image2} alt="" width="100%" height="100%" />
                            </li>
                            <li className="seperator"></li>
                            <li className="img">
                                <img src={Image3} alt="" width="100%" height="100%" />
                            </li>
                            <li className="seperator"></li>
                            <li className="img">
                                <img src={Image4} alt="" width="100%" height="100%" />
                            </li>
                        </ul>

                        {/* Cards */}
                        <div className="process-cards">
                            {processTracking.map((process) => {
                                return (
                                    <ProcessDetails key={process.id} step={process.step} title={process.title} description={process.details} />
                                )
                            })}

                        </div>

                    </div>
                </Container>
            </StyledHowItWorks>
        </>
    )
}


const ProcessDetails = ({ step, title, description, key }) => {
    return (
        <>
            <div className="card" key={key}>
                <span className="step">{step}</span>
                <h6 className="title">{title}</h6>
                <p className="desc">{description}</p>
            </div>
        </>
    )
}



export const StyledHowItWorks = styled.section`
    min-height: calc(100vh - 215px);
    background-color: var(--background-color);
    padding-top: 135px;
    padding-bottom: 80px;

    .cards-container {
        overflow-y: auto;
    }

    .process-images {
        width: 930px;
        display: grid;
        justify-content: center;
        align-items: center;
        grid-template-columns: 10% 19% 10% 19% 10% 19% 10%;
        gap: 10px;
        row-gap: 10px;
        margin: 0 auto !important;
        padding: 0%;

        /* list-style: none;
        margin: 0%;
        padding: 0;
        width: 1120px;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center; */

        li {
            list-style: none!important;
            position: relative;
        }
        
        .img {
            width: 85px;
            max-width: 96px;
            height: 85px;
            max-height: 96px;
            margin: 0 10px;
        }

        .seperator {
            display: flex;
            align-items: center;
            font-weight: 900;
            color: var(--alt-font-color);
            word-break: keep-all;
            width: 160px;
            height: 12px;
            max-width: 160px;
            max-height: 160px;
            background-image: url(${connectLine});
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            margin: 0 10px;
        }
    }

    .process-cards {
        width: 1120px;
        display: grid;
        justify-content: space-between;
        align-items: center;
        grid-template-columns: 22% 22% 22% 22%;
        gap: 32px;
        row-gap: 10px;

        .card {
            transition: all 350ms cubic-bezier(0.42, 0.01, 0, 1.04);
            cursor: pointer;
            position: relative;
            overflow: hidden;
            width: 100%;
            max-width: 270px;
            height: 164px;
            max-height: 165px;
            margin-top: 2rem;

            .step {
                display: block;
                font-size: 12px;
                text-align: center;
                margin-bottom: 32px;
            }

            .title {
                font-size: 16px;
                color: var(--font-color);
                line-height: 24px;
                text-align: center;
            }

            .desc {
                text-align: center;
                font-size: 14px;
                color: var(--alt-font-color);
            }
        }
    }
`

export default HowItWorks
