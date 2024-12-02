import '/scss/main.scss';


import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { handleScroll } from './components/header.js';
import { useInsightSlider } from './components/home/slider.js';
import { usePartnersSlider } from './components/home/slider.js';
import { useTestimonialsSlider } from './components/home/slider.js';
import { initializeFooterAccordion } from './components/home/accordion.js';

window.onscroll = handleScroll;

useTheme();
useBurger();
handleScroll();
useInsightSlider();
usePartnersSlider();
useTestimonialsSlider();
initializeFooterAccordion();