var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

var mySwiper = new Swiper(".swiper-container", {
  autoplay: {
    delay: 5000,
  },
});

let menuToggle = $('.header-menu-toggle');

menuToggle.on('click', function (event) {
  event.preventDefault();
  $('.header-menu').slideToggle(200);
});