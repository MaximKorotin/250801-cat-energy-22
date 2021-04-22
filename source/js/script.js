var navMain = document.querySelector(".main-nav__container");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav__container--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav__container--closed")) {
    navMain.classList.remove("main-nav__container--closed");
    navMain.classList.add("main-nav__container--opened");
  } else {
    navMain.classList.add("main-nav__container--closed");
    navMain.classList.remove("main-nav__container--opened");
  }
});
