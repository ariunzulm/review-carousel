const allReviewButton$ = document.getElementById("allReviewsButton");
const amazonButtonButton$ = document.getElementById("amazonButton");
const googleButton$ = document.getElementById("googleButton");
const upworkButton$ = document.getElementById("upworkButton");

const writeButton$ = document.getElementById("writeButton");
const messageButton$ = document.getElementById("messageButton");

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
