import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import SwiperCore, { Autoplay, Pagination } from 'swiper';

import Image from "../../components/NetlifyCmsImage";
import "../../styles/swiper.scss"


SwiperCore.use([Autoplay, Pagination]);

const BgImgs = (props) => {
  const {content} = props;
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      effect="slide"
      autoplay={{
        delay: 5000
      }}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

        {content.sliderImage && content.sliderImage.map(data=>{
          return(
          <SwiperSlide><Image imageUrl={data.sliderBackground} className="object-cover"/></SwiperSlide>
          )
        })}
    </Swiper>
  );
};

export default BgImgs