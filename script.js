/*$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});*/
$(document).ready(function() {
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

    $(".zoom").hover(function() {

        $(this).addClass('transition');
    }, function() {

        $(this).removeClass('transition');
    });
});