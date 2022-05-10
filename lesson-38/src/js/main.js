let header = document.querySelector('.header');
let navOpenBtn = document.querySelector('.nav-opener');

navOpenBtn.addEventListener('click', ()=> {
    header.classList.toggle('active');
})


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.hero-slider-btn',
    },

    pagination: {
        el: '.swiper-pagination',
      },
  });
  