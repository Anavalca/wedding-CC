import galeryData from '../data/galeryData.json';
import { GaleryElement } from './GaleryElement';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";


export const SwiperGalery = () => {

  return (
    <section className="carouselContainer">
      <Swiper
        key={1}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        observer={true}
        observeParents={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {galeryData.map(elem =>
          <SwiperSlide key={elem.id} >
            <GaleryElement element={elem} key={elem.id} />
          </SwiperSlide>
        )}
      </Swiper>
    </section>
  )
}