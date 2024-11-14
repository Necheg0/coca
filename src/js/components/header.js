// file.js

// Экспортируем функцию handleScroll
export function handleScroll() {
  const header = document.querySelector(".header");
  const stickyOffset = header.offsetTop; // Определяем исходную позицию header

  if (window.pageYOffset > stickyOffset) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
