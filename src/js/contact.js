import '/scss/contact.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { handleScroll } from './components/header.js';
import { usePartnersSlider } from './components/home/slider.js';
import { usePhone } from './components/contact/phone.js';

window.onscroll = handleScroll;

useTheme();
useBurger();
usePartnersSlider(); 
handleScroll();
usePhone();