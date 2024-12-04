import Swiper from 'swiper';
import 'swiper/scss';
import {Navigation} from 'swiper/modules';

export const useAboutSlider = () => {
  new Swiper('.about__slider', {
    modules: [Navigation],
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    navigation: {
      prevEl: '.about__btn--prev',
      nextEl: '.about__btn--next',
    },
  });
};