
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
