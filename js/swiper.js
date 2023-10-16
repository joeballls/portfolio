var swiper = new Swiper(".swiper", {
    direction: 'horizontal',
    autoplay: {
      delay: 1500,
    },
    loop: true,
          pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
  });