var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 4,
        slideShadows: true,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    keyboard: {
      enabled: true
    },
    mousewheel: {
      thresholdDelta: 70
    },
    breakpoints: {
      560: { slidesPerView: 2 },  // For smaller screens, show 2 slides
      768: { slidesPerView: 3 },  // For medium screens, show 3 slides
      1024: { slidesPerView: 3 }  // For larger screens, show 5 slides
    }
  });