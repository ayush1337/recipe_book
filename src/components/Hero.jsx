import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

import data from '../../data';
import BlackCard from './BlackCard';

const Hero = () => {
  return (
    <section className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
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
    </section>
  );
};

export default Hero;
