import React from 'react'
import styled from 'styled-components'
import { Container } from '../styled/containers'
import Heading from '../styled/heading'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
import { ImagePlaceHolder } from './hero';
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const testimonies = [
    {
        id: 1,
        img: '',
        title: 'Amazing Customer Service',
        message: '“The customer service is second to none. Got paid as soon I sent my bitcoin confirmation. Great work guys.”',
        name: 'Israel Jamal'
    }
]

const Testimonials = () => {
    return (
        <>
            <StyledTestimonials className="testimonial-section">
                <Container>
                    <Heading centered title="What our customers are saying about us" fontSize="48px" color="#23262F" align="center" boundary="60%" />
                    <div className="slider-container">
                        <Swiper id="main-swiper" tag={'ul'} navigation spaceBetween={0} slidesPerView={1} >
                            {testimonies.map((testimony, index) => {
                                return (
                                    <SwiperSlide tag={'li'} key={index}>
                                        <div className={'swiper-wrap'}>
                                            <div className="swiper-item">
                                                <div className="content">
                                                    <div className="left">
                                                        {/* <img src={testimony.logo} alt="" width="100px" height="56px" /> */}
                                                        <ImagePlaceHolder height="303px" width="338px"></ImagePlaceHolder>
                                                    </div>
                                                    <div className="right">
                                                        <h5 style={{ lineHeight: "30px", color: "#12022F" }}>{testimony.title}</h5>
                                                        <p style={{ fontSize: "14px", letterSpacing: "-0px", color: "#594D6D" }}>{testimony.message}</p>
                                                        <p style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "-0.4px", color: "#12022F", marginBottom: "8px" }}>{testimony.name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </Container>
            </StyledTestimonials>
        </>
    )
}



export const StyledTestimonials = styled.section`
    min-height: calc(100vh - 215px);
    background-color: #F4F5F6;
    padding-top: 135px;
    padding-bottom: 80px;
`

export default Testimonials
