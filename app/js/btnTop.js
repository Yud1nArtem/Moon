$(function () {
    let btnTop = $('.btn__to_top');
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 50) {
            btnTop.removeClass('active');
        }else {
            btnTop.addClass('active');
        }
    });
    btnTop.click(function() {
        $('html, body').animate({scrollTop: 0}, 2000)
    });
});