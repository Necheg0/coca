import '../assets/scss/main.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { handleScroll } from './components/header.js';
import { useInsightSlider } from './components/slider.js';

window.onscroll = handleScroll;

useTheme();
useBurger();
handleScroll();
useInsightSlider();
