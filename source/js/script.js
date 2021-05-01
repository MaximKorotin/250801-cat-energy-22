var navMain = document.querySelector(".main-nav__container");
var navToggle = document.querySelector(".main-nav__toggle");
var navLogo = document.querySelector(".logo__text");
var example = document.querySelector(".example");
var form = document.querySelector(".main-form");

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

if (form) {
  var Name = form.querySelector(".questionnaire__input--name");
  var weight = form.querySelector(".questionnaire__input--weight");
  var email = form.querySelector(".input--email");
  var phone = form.querySelector(".input--phone");

  Name.removeAttribute("required");
  weight.removeAttribute("required");
  email.removeAttribute("required");
  phone.removeAttribute("required");

  form.addEventListener("submit", (e) => {
    if (!Name.value) {
      e.preventDefault();
      Name.classList.add("input-error");
    }

    if (!weight.value) {
      e.preventDefault();
      weight.classList.add("input-error");
    }

    if (!email.value) {
      e.preventDefault();
      email.classList.add("input-error");
    }

    if (!phone.value) {
      e.preventDefault();
      phone.classList.add("input-error");
    }

    if (!Name.value || !weight.value || !email.value || !phone.value) {
      e.preventDefault();
    }
  });
}
