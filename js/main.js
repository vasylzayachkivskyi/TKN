$(document).ready(function () {

    // MOBILE MENU ------------------- //
    $('.burger').click(function () {
        $(this).toggleClass('open');
        $('.header__nav').toggleClass('open');
        $('.header').toggleClass('white');
    });

    // LANG MENU ------------------- //
    $('.header__lang-mobile').click(function () {
        $(this).find('ul').slideToggle();
    });

    // CHANGE HEADER WITH SCROLL --------------------------- //
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.header').addClass('change-bg');
        } else {
            $('.header').removeClass('change-bg');
        }
    });

    // PADDING --------------------------- //
    var windowWidth = $(document).width(),
        containerWidth = $('.container').width(),
        paddingContainer = ((windowWidth - containerWidth) / 2);
    $('.padleft').css('padding-left', paddingContainer);
    $('.padright').css('padding-right', paddingContainer);

    $(window).resize(function () {
        var windowWidth = $(document).width(),
            containerWidth = $('.container').width(),
            paddingContainer = ((windowWidth - containerWidth) / 2);
        $('.padleft').css('padding-left', paddingContainer);
        $('.padright').css('padding-right', paddingContainer);
    });

    // PROPOSITION SLIDER ----- //
    var swiper = new Swiper(".proposition__slider", {
        slidesPerView: 1.1,
        speed: 600,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            576: {
                slidesPerView: 1.3,
            },
            768: {
                slidesPerView: 1.9,
            },
            992: {
                slidesPerView: 4.5,
                spaceBetween: 20,
            },
        }
    });

    // TEXTIMONIALS SLIDER ----- //
    var swiper = new Swiper(".textimonials__slider", {
        slidesPerView: 1.1,
        speed: 600,
        navigation: {
            nextEl: ".textimonials__slider-next",
            prevEl: ".textimonials__slider-prev",
        },
        breakpoints: {
            576: {
                slidesPerView: 1.3,
            },
            991: {
                slidesPerView: 2.1,
            },
            1400: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
        }
    });




});

