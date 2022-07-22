const headerNavigation = document.querySelector(".header__navigation");
const headerNavBtn = document.querySelector(".header__nav-btn");

headerNavBtn.addEventListener("click", () => {
  headerNavigation.classList.toggle("header__navigation_open");
});
