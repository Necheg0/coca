import '../assets/scss/pricing.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { handleScroll } from './components/header.js';


window.onscroll = handleScroll;

useTheme();
useBurger();
handleScroll();
