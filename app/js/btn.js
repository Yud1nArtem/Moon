$(function () {
    $('.header__btn').click(() => {
        $('html, body').animate({
            scrollTop: $('.menu__section').offset().top
        }, 1000);
    });
    $('#menu').click(() => {
        $('html, body').animate({
            scrollTop: $('.menu__section').offset().top
        }, 1000);
    });
    $('#gallery').click(() => {
        $('html, body').animate({
            scrollTop: $('.gallery').offset().top
        }, 2000);
    });
    $('#holidays').click(() => {
        $('html, body').animate({
            scrollTop: $('.holidays').offset().top
        }, 2500);
    });
    $('#contacts').click(() => {
        $('html, body').animate({
            scrollTop: $('.contacts').offset().top
        }, 3000);
    });
});