var navMain = document.querySelector(".main-nav__container");
var navToggle = document.querySelector(".main-nav__toggle");
var navLogo = document.querySelector(".logo__text");

navLogo.classList.remove("logo__text--nojs");
navToggle.classList.remove("main-nav__toggle--nojs");
navMain.classList.remove("main-nav__container--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav__container--closed")) {
    navMain.classList.remove("main-nav__container--closed");
    navMain.classList.add("main-nav__container--opened");
    navToggle.classList.remove("main-nav__toggle--closed");
    navToggle.classList.add("main-nav__toggle--opened");
  } else {
    navMain.classList.add("main-nav__container--closed");
    navMain.classList.remove("main-nav__container--opened");
    navToggle.classList.add("main-nav__toggle--closed");
    navToggle.classList.remove("main-nav__toggle--opened");
  }
});
