// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import galeryData from './../data/galeryData.json';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import "swiper/swiper-bundle.css";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
let slides = Array(10).fill(true);

slides = galeryData.map((element, i) => (
  <SwiperSlide key={`slide-${i}`} tag="li" virtualIndex={i}>
    <img
      // src={`https://picsum.photos/id/${i + 1}/600/400`}
      src={element.img}
      height={550}
      style={{ listStyle: "none" }}
      alt={`Slide ${i}`}
    />
  </SwiperSlide>
));

const Carousel = ({ initial }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      initialSlide={initial - 1}
      id="mainCarousel"
      tag="section"
      wrapperTag="ul"
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      className={'swiper-container'}
    >
      {slides}
    </Swiper>
  );
};

export default Carousel;