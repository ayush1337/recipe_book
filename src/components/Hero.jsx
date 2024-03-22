import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import data from '../../data';
import BlackCard from './BlackCard';

const Hero = () => {
  return (
    <section className="w-full">
      <div className="hidden md:block">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          style={{
            '--swiper-pagination-color': '#F97416',
            '--swiper-navigation-color': '#F97416',
            '--swiper-pagination-bullet-inactive-color': '#fff',
          }}
        >
          {data.recipes.map((recipe) => {
            return (
              <SwiperSlide>
                <BlackCard key={recipe.id} {...recipe} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          style={{
            '--swiper-pagination-color': '#F97416',
            '--swiper-navigation-color': '#F97416',
            '--swiper-pagination-bullet-inactive-color': '#fff',
          }}
        >
          {data.recipes.map((recipe) => {
            return (
              <SwiperSlide>
                <BlackCard key={recipe.id} {...recipe} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
