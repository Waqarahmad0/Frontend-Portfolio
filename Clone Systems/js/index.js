

$(document).ready(function () {
    $(" .dropdown, .dropdownn, .dropdown-about, .dropdown-insight, .dropdown-industries, .dropdown-services").hover(
        function () {
            $(this).find(" .dropdown-content, .dropdown-content-1, .dropdown-content-about, .dropdown-content-insight, .dropdown-content-industries, .dropdown-content-services").show();
        },
        function () {
            $(this).find(".dropdown-content, .dropdown-content-1, .dropdown-content-about, .dropdown-content-insight, .dropdown-content-industries, .dropdown-content-services").hide();
        }
    );

    $(window).on("click", function (e) {
        if (!e.target.matches('.dropbtn, .dropbtn-1, .dropbtn-about, .dropbtn-insight, .dropbtn-industries, .dropbtn-services')) {
            var dropdowns = $(".dropdown-content .dropdown-content-1, .dropdown-content-about, .dropdown-content-insight, .dropdown-content-industries, .dropdown-content-services");
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



$(window).on('scroll', function() {
    var st = $(this).scrollTop();
    var wh = $(document).height() - $(window).height();
    var percent = (st*100)/wh;
    $('#scrollBar').css('width', percent+'%');
});



$(document).ready(function() {
    var paragraphs = $(".paragraph");

    function isElementInViewport(el) {
        var rect = el[0].getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkVisibility() {
        paragraphs.each(function() {
            if (isElementInViewport($(this))) {
                $(this).addClass("animated");
            }
        });
    }

    checkVisibility();

    $(window).on("scroll", checkVisibility);
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
  