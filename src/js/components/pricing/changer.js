export function initPricingSwitcher() {
  // Получение переключателя
  const switcher = document.querySelector('.hero__swticher-checkbox');
  if (!switcher) return;

  // Функция для изменения цен
  const updatePrices = (isAnnual) => {
    const priceElements = document.querySelectorAll('[data-price]');
    priceElements.forEach((priceElement) => {
      const plan = priceElement.getAttribute('data-price');
      let monthlyPrice = 0;
      let annualPrice = 0;

      // Устанавливаем цены для каждого плана
      switch (plan) {
        case 'starter':
          monthlyPrice = 100;
          annualPrice = monthlyPrice * 0.8; // скидка 20%
          break;
        case 'popular':
          monthlyPrice = 1400;
          annualPrice = monthlyPrice * 0.8; // скидка 20%
          break;
        case 'enterprise':
          monthlyPrice = 2100;
          annualPrice = monthlyPrice * 0.8; // скидка 20%
          break;
        default:
          return;
      }

      // Обновление текста цены и периода
      priceElement.textContent = `$${isAnnual ? annualPrice.toFixed(0) : monthlyPrice.toFixed(0)}`;
      const periodElement = priceElement.nextElementSibling;
      if (periodElement && periodElement.classList.contains('hero__plans-price-text')) {
        periodElement.textContent = isAnnual ? '/yr' : '/mo';
      }
    });
  };

  // Обработчик изменения состояния переключателя
  switcher.addEventListener('change', () => {
    const isAnnual = switcher.checked;
    updatePrices(isAnnual);
  });

  // Устанавливаем начальные значения (по умолчанию ежемесячные цены)
  updatePrices(false);
}
