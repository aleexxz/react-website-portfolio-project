import React from 'react'
import "./testimonials.css"
import TestimonialsData from './TestimonialsData'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/autoplay';

// import required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                className="container testimonials__container">
                {
                    TestimonialsData.map(testimonial => {
                        return (
                            <SwiperSlide key={testimonial.index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={testimonial.avatar} alt="Avatar image" />
                                </div>
                                <h5 className='client__name'>{testimonial.name}</h5>
                                <small className="client__review">{testimonial.review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials