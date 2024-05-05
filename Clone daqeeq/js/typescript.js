var swiper = new Swiper(".slide-content", {
    slidesPerView: 5,
    spaceBetween:25,
  centerSlide:true,
  fade:true,
    grabCursor:true,
     loop:true,
  
    
    navigation: {
      nextEl: ".swiper-button-next-2",
      prevEl: ".swiper-button-prev-2",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    breakpoints: {
      0:{
          slidesPerView: 1,
      },
      520:{
          slidesPerView: 2,
      },
      769: {
        slidesPerView: 2,
      },
      950: {
          slidesPerView: 5,
      }
    },
  });
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,

      },
      
      keyboard: true,
      mousewheel: true,
      keyboard: true,
      clickable: true,
      dynamicBullets:true,

  });  


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centerSlide:true,
   
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0:{
            slidesPerView: 1,
        },
        520:{
            slidesPerView: 2,
        },
        769: {
          slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        }
      },
  });