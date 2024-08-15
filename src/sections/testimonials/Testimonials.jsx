// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

import './testimonials.css'

const Testimonials = () => {
  return (
        <section id="testimonials">
          <h2>What My Clients Say</h2>
          <p>
            These are unbiased testmonials from some of my clients
          </p>
          <div className="container">

          </div>
          </section>
    )
}

export default Testimonials