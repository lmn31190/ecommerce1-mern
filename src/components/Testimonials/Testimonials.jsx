import React from "react";
import css from "./Testimonials.module.css";
import Hero from "../../assets/testimonialHero.png";
import { TestimonialsData } from "../../data/testimonials"
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  return (
    <div className={css.Testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Les mieux notés</span>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            beatae!
          </span>
        </div>

        <img src={Hero} alt="" />

        <div className={css.container}>
          <span>100k</span>
          <span>Clients satisfaits chez nous</span>
        </div>
      </div>

    <div className={css.reviews}>Commentaires</div>

      <div className={css.carousel}>
        <Swiper
        slidesPerGroup={1}
        slidesPerView={3}
        spaceBetween={20}
        className={css.tCarousel}>
            {TestimonialsData.map((testimonial, i) => (
                <SwiperSlide>
                    <div className={css.testimonial}>
                        <img src={testimonial.image} alt="" />
                        <span>{testimonial.comment}</span>
                        <hr />
                        <span>{testimonial.name}</span>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
