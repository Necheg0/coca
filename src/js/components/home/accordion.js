export function initializeFooterAccordion() {
  const mobileItems = document.querySelectorAll('.footer__nav--mobile .footer__item');

  // Функция для закрытия всех аккордеонов
  function closeAllAccordions() {
    mobileItems.forEach(item => {
      item.classList.remove('footer__item--active');
      const sublist = item.querySelector('.footer__sublist');
      if (sublist) sublist.style.display = 'none';
    });
  }

  // Управление кликами
  mobileItems.forEach(item => {
    const title = item.querySelector('.footer__item-title');
    if (title) {
      title.addEventListener('click', () => {
        const isActive = item.classList.contains('footer__item--active');
        closeAllAccordions(); // Закрыть все аккордеоны
        if (!isActive) {
          item.classList.add('footer__item--active');
          const sublist = item.querySelector('.footer__sublist');
          if (sublist) sublist.style.display = 'block';
        }
      });
    }
  });
}
