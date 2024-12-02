import '/scss/pricing.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { handleScroll } from './components/header.js';
import { initPricingSwitcher } from './components/pricing/changer.js';

window.onscroll = handleScroll;

document.addEventListener('DOMContentLoaded', () => {
  initPricingSwitcher();
});

useTheme();
useBurger();
handleScroll();
