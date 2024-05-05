

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

$(document).on("scroll", function() {
    const Header = $("nav");

    if ($(window).scrollTop() > 35) {
        Header.addClass('scrolled');
    } else {
        Header.removeClass('scrolled');
    }
});


var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween:25,
centerSlide:true,
fade:true,
  grabCursor:true,
   autoplay: {
        delay: 2500,
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
