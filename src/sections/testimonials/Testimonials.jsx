// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

import testimonials from './data'
import Testimonialfrom from './Testimonial';
import './testimonials.css'


const Testimonials = () => {
  return (
        <section id="testimonials">
          <h2>What My Clients Say</h2>
          <p>
            These are unbiased testmonials from some of my clients
          </p>
          <div className="container">
                <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {
                testimonials.map(testimonial => (
                  <SwiperSlide key={testimonial.id}>
                    <Testimonial/>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
          </section>
    )
}

export default Testimonials