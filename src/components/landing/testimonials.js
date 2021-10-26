import React from 'react'
import styled from 'styled-components'
import { Container } from '../styled/containers'
import Heading from '../styled/heading'
import { ImagePlaceHolder } from './hero';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

const testimonies = [
    {
        id: 1,
        img: '',
        title: 'Amazing Customer Service',
        message: '“The customer service is second to none. Got paid as soon I sent my bitcoin confirmation. Great work guys.”',
        name: 'Israel Jamal'
    },
    {
        id: 2,
        img: '',
        title: 'Amazing Customer Service',
        message: '“The customer service is second to none. Got paid as soon I sent my bitcoin confirmation. Great work guys.”',
        name: 'Israel Jamal'
    },
]

const Testimonials = () => {

    return (
        <>
            <StyledTestimonials className="testimonial-section">
                <Container>
                    <Heading centered title="What our customers are saying about us" fontSize="48px" color="#23262F" align="center" boundary="544px" />
                    <div className="slider-container">
                        <Carousel dynamicHeight={true} infiniteLoop={false} showStatus={false} showThumbs={false} showIndicators={false}>
                            {testimonies.map((testimony) => {
                                return (
                                    <div className="swiper-item">
                                        <div className="content">
                                            <div className="left">
                                                {/* <img src={testimony.logo} alt="" width="100px" height="56px" /> */}
                                                <ImagePlaceHolder height="303px" width="338px"></ImagePlaceHolder>
                                            </div>
                                            <div className="right">
                                                <h5 style={{ lineHeight: "24px", color: "#141416" }}>{testimony.title}</h5>
                                                <p style={{ fontSize: "16px", letterSpacing: "-0px", color: "#777E90" }}>{testimony.message}</p>
                                                <p style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "-0.4px", color: "#777E90", marginBottom: "8px" }}>{testimony.name}</p>
                                            </div>
                                            {/* <div className="swiper-lazy-preloader swiper-lazy-preloader-white" style={{ width: "100%", height: "100%", backgroundColor: "yellow" }}></div> */}
                                        </div>
                                    </div>
                                )
                            })}
                        </Carousel>
                    </div>
                </Container>
            </StyledTestimonials>
        </>
    )
}



export const StyledTestimonials = styled.section`
    min-height: calc(100vh - 215px);
    background-color: var(--alt-background-color);
    padding-top: 135px;
    padding-bottom: 80px;

    .swiper-item {
        max-width: 80%;
        margin: 0 auto;
        
        .content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 75px 95px;
            border-radius: 24px;
            box-shadow: 0px 64px 64px -48px rgba(15, 15, 15, 0.2);
            background-color: var(--background-color);

        .left, .right {
            max-width: 50%;
        }

        .right {
            text-align: left;
            padding-left: 30px;
        }
    }
    }
`

export default Testimonials
