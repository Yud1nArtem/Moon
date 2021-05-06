$(function() {
    $('.slider__nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider',
        arrows: true,
        dots: true,
        infinite: true,
        draggable: false,
        swipe: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            }
        ],
    });
    $('.slider').slick({
        arrows: false,
        adaptiveHeight: true,
        adaptiveWidth: true,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnFocus: true,
        pauseOnHover: true,
        draggable: false,
        swipe: true,
        fade: true,
        asNavFor: '.slider__nav',
    });
});