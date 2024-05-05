
$(document).ready(function () {
    $(".dropdown-link").hover(
        function () {
            $(this).find(".dropdown-menu").show();
        },
        function () {
            $(this).find(".dropdown-menu").hide();
        }
    );

    $(window).on("click", function (e) {
        if (!e.target.matches('.dropbtn')) {
            var dropdowns = $(".dropdown-menu");
            if (dropdowns.is(":visible")) {
                dropdowns.hide();
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
  
    function showNextSlide() {
      slides[currentIndex].classList.remove("active");
      currentIndex++;
      if (currentIndex >= slides.length) {
        currentIndex = 0;
      }
      slides[currentIndex].classList.add("active");
    }
  
    // Loop through slides with a 4 second interval
    setInterval(showNextSlide, 4000); // Change slide every 4 seconds
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
 