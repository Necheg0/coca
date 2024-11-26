import Swiper from 'swiper';
import 'swiper/css';
import {Autoplay} from 'swiper/modules';
import { Navigation } from 'swiper/modules';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    breakpoints:{
      993:{
        centeredSlides: false,
      }
    }   
  });
};

export const usePartnersSlider = () => {
  new Swiper('.partners__slider', {
      modules: [Autoplay],
      slidesPerView: 4,
      spaceBetween: 80,
      centeredSlides: true,
      loop: true,
      autoplay: {
          delay: 0,
      },
      speed: 2500,
      reverseDirection: true,
      allowTouchMove: false,
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 22,
    loop: true,
    navigation: {
      prevEl: '.testimonials__btn--prev',
      nextEl: '.testimonials__btn--next',
    },
  });
};