// swiper - background
const bgSlide = new Swiper("#bgSlide", {
  slidesPerView: 1,
  // loop: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  direction: "vertical",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// swiper - text
const textSlide = new Swiper("#textSlide", {
  slidesPerView: 1,
  // loop: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});

// page
const swiper3 = new Swiper(".mySwiper", {
  // loop: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination-2",
    type: "fraction",
  },
});

// collection-slide
const photoSlide = new Swiper("#photoSlide", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
const titleSlide = new Swiper("#title-slide", {
  slidesPerView: 3,
  direction: "vertical",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  }
});

let slides = titleSlide.slides;
console.log(slides)

// wow.js
var wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animate__animated",
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});
wow.init();
