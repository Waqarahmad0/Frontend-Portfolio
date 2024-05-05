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



var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
$(document).on("scroll", function() {
    const Header = $("nav");

    if ($(window).scrollTop() > 135) {
        Header.addClass('scrolled');
    } else {
        Header.removeClass('scrolled');
    }
});