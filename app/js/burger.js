$(function() {
    $('.burger__menu').click(function(){
        $('.header__list').toggleClass('active');
        $('.burger__menu').toggleClass('active');
        $('.header__content').toggleClass('active');
    });
});