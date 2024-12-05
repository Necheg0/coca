import '/scss/about.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { handleScroll } from './components/header.js';
import { useAboutSlider } from './components/about/slider.js';
import { useBottomSlider } from './components/about/slider.js';


window.onscroll = handleScroll;

useTheme();
useBurger();
handleScroll();
useAboutSlider();
useBottomSlider();
