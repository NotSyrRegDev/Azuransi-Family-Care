const clientSwiper = new Swiper('.swiper-3', {

  speed: 400,
  spaceBetween: 20,
  slidesPerView: 3,
  allowSlideNext: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    100: {
      slidesPerView: 1,
      spaceBetween: 20,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    700: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }

});

setInterval(() => {
    clientSwiper.slideNext();
},  2500)
