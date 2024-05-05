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


function animateCounter(element, start, end, duration) {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      $(element).text(Math.floor(start + (end - start) * percentage));
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
}

$(document).ready(function() {

    const counterElements = $('.counter');
    
    const duration = 4000; 

    // Animate each counter
    animateCounter(counterElements[0], 0, 200, duration);
    animateCounter(counterElements[1], 0, 4, duration);
    animateCounter(counterElements[2], 0, 2000, duration);
});


  $(document).on("scroll", function() {
    const Header = $("nav");

    if ($(window).scrollTop() > 100) {
        Header.addClass('scrolled');
    } else {
        Header.removeClass('scrolled');
    }
});