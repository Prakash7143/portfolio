import React from 'react';

import img1 from './imgs/img1.png';
import img2 from "./imgs/img2.png";
import img3 from "./imgs/img3.png";
import img4 from "./imgs/img4.png";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

const Profile = () =>{
    return(
        <>
            <h1>Swipper</h1>
            
            <Swiper modules={[EffectFade]} effect="fade" style={{width:"500px"}}
            // install Swiper modules
            modules={[Navigation, Pagination, Autoplay, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            
            autoplay
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }} navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
            <SwiperSlide><img src={img1} alt="pic 1" style={{height:"400px"}} /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="pic 1" style={{height:"400px"}}/></SwiperSlide>
            <SwiperSlide><img src={img3} alt="pic 1" style={{height:"400px"}}/></SwiperSlide>
            <SwiperSlide><img src={img4} alt="pic 1" style={{height:"400px"}}/></SwiperSlide>
            
            </Swiper>
            
        </>
    )
}

export default Profile;
