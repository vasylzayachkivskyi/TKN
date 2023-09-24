$(document).ready(function () {

    // MOBILE MENU ------------------- //
    $('.burger').click(function () {
        $(this).toggleClass('open');
        $('.header__nav').toggleClass('open');
        $('.header').toggleClass('white-bg');
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
    $('.padleft').css('margin-left', paddingContainer);
    $('.padright').css('margin-right', paddingContainer);

    $(window).resize(function () {
        var windowWidth = $(document).width(),
            containerWidth = $('.container').width(),
            paddingContainer = ((windowWidth - containerWidth) / 2);
        $('.padleft').css('margin-left', paddingContainer);
        $('.padright').css('margin-right', paddingContainer);
    });

    // PROPOSITION SLIDER ----- //
    var swiper = new Swiper(".proposition__slider", {
        slidesPerView: 'auto',
        spaceBetween: 15,
        speed: 600,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            991: {
                spaceBetween: 16,
            },
        }
    });

    // TEXTIMONIALS SLIDER ----- //
    var swiper = new Swiper(".textimonials__slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 600,
        navigation: {
            nextEl: ".textimonials__slider-next",
            prevEl: ".textimonials__slider-prev",
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1.2,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 1.8,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 2.1,
                spaceBetween: 20,
            },
            1600: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
        }
    });

    // OBJECTS SLIDER ----- //
    var swiper = new Swiper(".objects__slider", {
        slidesPerView: 'auto',
        spaceBetween: 15,
        speed: 600,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            991: {
                spaceBetween: 20,
            },
        }
    });


    // ACCORDEON ------------ //
    $('.accordeon-head').on('click', function () {
        $(this).toggleClass('active');
        $(this).next('.descr').slideToggle();
    });

    // DROPDOWN MENU ------------ //
    $('.has-dropdown').on('click', function () {
        $(this).toggleClass('active');
        $(this).find('.dropdown-box').slideToggle();
    });
    $(document).on('click', function (event) {
        var target = $(event.target);
        if (!target.closest('.has-dropdown').length) {
            $('.has-dropdown').removeClass('active');
            $('.has-dropdown').find('.dropdown-box').slideUp();
        }
    });

    // slider ---- //
    $('.gallery-slider').each(function () {

        var swiper = new Swiper(this, {
            loop: true,
            navigation: {
                nextEl: ".slider-next",
                prevEl: ".slider-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
        });

        // Отримуємо кнопки прокручування для поточного слайдера
        var prevButton = $(this).find('.slider-prev');
        var nextButton = $(this).find('.slider-next');

        // Додаємо обробники подій на кнопки для поточного слайдера
        prevButton.on('click', function () {
            swiper.slidePrev();
        });

        nextButton.on('click', function () {
            swiper.slideNext();
        });
    });

    // counter -------------- //
    if ($('.counter-numbers').length) {
        $('.counter-numbers').each(function () {
            var number = $(this)[0],
                numberTop = number.getBoundingClientRect().top,
                start = +number.innerHTML, 
                end = +number.dataset.max;

            window.addEventListener('scroll', function onScroll() {
                if (window.pageYOffset > numberTop - window.innerHeight) {
                    this.removeEventListener('scroll', onScroll);
                    var interval = setInterval(function () {
                        number.innerHTML = ++start;
                        if (start == end) {
                            clearInterval(interval);
                        }
                    }, 20);
                }
            });
        });
    }

    // -------------------- POPUP ------------------------ //
    $('.popup__btn').on('click', function () {
        var indexPopup = $(this).attr('data-popup');
        $('.popup__window').removeClass('active');
        $('.' + indexPopup).addClass('active');
        return false;
    });

    $('.popup__close').on('click', function () {
        $('.popup__window').removeClass('active');
    });

    // close popup -------- //
    $(document).on('click', function (event) {
        var target = $(event.target);

        if (!target.closest('.popup__body').length) {
            $('.popup__window').removeClass('active');
        }
    });


    //  RANGE SLIDER

    var $range = $(".js-range-slider"),
        $inputFrom = $(".js-input-from"),
        $inputTo = $(".js-input-to"),
        instance,
        min = 0,
        max = 1000,
        from = 0,
        to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 200,
        to: 800,
        onStart: updateInputs,
        onChange: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }

    $inputFrom.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });
    });

    $inputTo.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });
    });





});

