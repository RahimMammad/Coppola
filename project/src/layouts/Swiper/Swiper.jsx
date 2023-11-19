import React from 'react';
import BestDirector from "../../assets/h4-rev-icon1.png";
import BestActress from "../../assets/h4-rev-icon2.png";
import FestivalWinner from "../../assets/h4-rev-icon3.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Swiper.scss"


const MySwiper = () => {
  const slidesData = [
    {
      id: 1,
      backgroundImage: 'url("https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-img1.jpg")'
    },
    {
      id: 2,
      backgroundImage: 'url("https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-img2.jpg")'
    },
    {
      id: 3,
      backgroundImage: 'url("https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-img3.jpg")'
    },
  ];

  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1} 
    effect="coverflow"  
    coverflowEffect={{
      rotate: 0, 
      stretch: 100, 
      depth: 100, 
      modifier: 1, 
      slideShadows: false,
    }}
    navigation
    pagination={{ clickable: true }}
    // scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
      {slidesData.map((slide) => (
        <SwiperSlide key={slide.id} style={{ width: "100%", height: "80vh", overflow: "hidden", backgroundImage: slide.backgroundImage }}>
          <div className="header-main-desc">
            <div className="header-left">
              <h3>SELECT PRODUCTION PRESENTS</h3>
              <h1>BACK TO NATURE</h1>
              <p>Written and directed by Haruki Tanaka/ Ireland 2012</p>
              <div className="medal-container">
                <img src={BestDirector} alt="Best Director" />
                <img src={BestActress} alt="Best Actress" />
                <img src={FestivalWinner} alt="Festival Winner" />
              </div>
            </div>
            <div className="header-right">
              <div className="right-text-top">
                <h2>FILM FESTIVAL 2022 STARTS APRIL</h2>
                <p>- - - - - - - - - - - - - - - - - - - - - -</p>
                <span>Rome / 3 Locations / Seven days</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiper;
