

$(document).ready(function () {
    $(".dropdown-services, .dropdown-resources").hover(
        function () {
            $(this).find(".dropdown-content-services, .dropdown-menu-resources").show();
        },
        function () {
            $(this).find(".dropdown-content-services, .dropdown-menu-resources").hide();
        }
    );

    $(window).on("click", function (e) {
        if (!e.target.matches('.dropbtn-services, .dropbtn-resources')) {
            var dropdowns = $(".dropdown-content-services, .dropdown-menu-resources");
            if (dropdowns.is(":visible")) {
                dropdowns.hide();
            }
        }
    });
});






var lastScrollTop = 0;
$(window).scroll(function(event){
    const Header = $("nav");
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
        // Add your downscroll code here
        Header.removeClass('scrolled');
    } else {
        Header.addClass('scrolled');
    }
    lastScrollTop = st;
});


var imageSlider = new Swiper("#image-slider", {
    slidesPerView: 3,
    spaceBetween:30,
  centerSlide:true,
  loop: true,
  fade:true,
    grabCursor:true,
     autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
  
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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
          slidesPerView: 3,
      }
    },
  });

    var coverflowSlider  = new Swiper("#coverflow-slider", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
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
     
      },
    });