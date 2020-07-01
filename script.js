var swiper = new Swiper('.sw-icons', {
  slidesPerView: 1,
  spaceBetween: 1,
  init: true,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
},
normalizeSlideIndex: true,
autoplay: {
delay: 2500,
disableOnInteraction: false,
},
speed: 300,
});
