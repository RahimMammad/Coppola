import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useFetchData from '../../hooks/useFetch';
import "./Slider.scss"

const Slider = () => {
    const { data, isLoading, error } = useFetchData("actors")

  return (
    <section id='slider'>
        <div className="slider-main">
            <h6>SPEAKERS</h6>
            <div className="slider-text">
                <h3>LEARNING FROM EXPERTS</h3>
                <p>Et pri magna evertitur. Ne qui doctus interesset, ad eum ullum accusam, te nam iusto iisque omittam. Elit nobis magnas iust.</p>
            </div>
            <div className="slider-main-container">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    {
                    isLoading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        data && data.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <img src={slide.image} alt={slide.title} />
                                <h5>{slide.name}</h5>
                                <p>{slide.job}</p>
                            </SwiperSlide>
                        ))
                    )
                }
                </Swiper>
                </div>
        </div>
    </section>
  )
}

export default Slider