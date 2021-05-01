var navMain = document.querySelector(".main-nav__container");
var navToggle = document.querySelector(".main-nav__toggle");
var navLogo = document.querySelector(".logo__text");
var example = document.querySelector(".example");

navLogo.classList.remove("logo__text--nojs");
navToggle.classList.remove("main-nav__toggle--nojs");
navMain.classList.remove("main-nav__container--nojs");

navToggle.addEventListener("click", () => {
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

if (example) {
  var before = example.querySelector(".compare__label--before");
  var after = example.querySelector(".compare__label--after");
  var fat = example.querySelector(".compare__item--before");
  var fatTablet = example.querySelector(".compare__item--fat");
  var skinny = example.querySelector(".compare__item--after");
  var rangePin = example.querySelector(".compare__pin");

  before.addEventListener("click", () => {
    after.classList.remove("compare__label--after-curent");
    skinny.classList.remove("compare__item--after-curent");
    before.classList.add("compare__label--before-curent");
    fat.classList.add("compare__item--before");
    fatTablet.classList.add("compare__item--fat-curent");
    rangePin.style.left = 0;
  });

  after.addEventListener("click", () => {
    after.classList.add("compare__label--after-curent");
    skinny.classList.add("compare__item--after-curent");
    before.classList.remove("compare__label--before-curent");
    fat.classList.remove("compare__item--before");
    rangePin.style.left = 402 + "px";
  });
}
