import Swiper from 'swiper';
import 'swiper/scss';
import {Navigation,EffectCoverflow} from 'swiper/modules';

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

export const useBottomSlider = () => {
  new Swiper('.bottom__slider', {
    modules: [EffectCoverflow,Navigation],
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 50,       
      depth: 100,       
      modifier: 1,    
    },
    breakpoints:{
      751:{
        centeredSlides: false,
      }
    },
    navigation: {
      prevEl: '.bottom__btn--prev',
      nextEl: '.bottom__btn--next',
    },
  });
};