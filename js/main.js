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
        $(this).next('.dropdown-box').slideToggle();
    });
    $('.dropdown-btn').on('click', function () {
        var budgetMin = $(this).closest('.dropdown-box').find('.js-input-from').val();
        var budgetMax = $(this).closest('.dropdown-box').find('.js-input-to').val();
        var inputSymbol = $(this).closest('.dropdown-box').attr('data-symbol');
        $(this).closest('.dropdown-box').slideUp();
        $(this).closest('.dropdown-box').removeClass('active');
        $(this).closest('.inputfield').find('.has-dropdown input').val(budgetMin + '-' + budgetMax + inputSymbol);
    });
    $(document).on('click', function (event) {
        var target = $(event.target);
        if (!target.closest('.has-dropdown, .sliderange').length) {
            $('.has-dropdown').removeClass('active');
            $('.has-dropdown').next('.dropdown-box').slideUp();
        }
    });

    $('.dropdown-box li').on('click', function () {
        $('.dropdown-box li').removeClass('active');
        $(this).addClass('active');
        var operation = $(this).text().trim();
        $(this).closest('.inputfield').find('.has-dropdown input').val(operation);
    });

    // PHONE CODE DROPDOWN ----------- //
    $('.phone-field input').on('click', function () {
        $(this).closest('.phone-field').find('ul').slideToggle();
    });

    $('.inputfield.phone-field ul li').click(function () {
        var imgSrc = $(this).find('img').attr('src');
        var code = $(this).find('.code').text().trim();
        $('.inputfield.phone-field .flag').attr('src', imgSrc);
        $('.inputfield.phone-field input').val(code);
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

        var prevButton = $(this).find('.slider-prev');
        var nextButton = $(this).find('.slider-next');
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
                    }, 1);
                }
            });
        });
    }

    // about-agents SLIDER ----- //
    var swiper = new Swiper(".about-agents__slider", {
        slidesPerView: 'auto',
        spaceBetween: 15,
        speed: 800,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });

    //  SEND BUTTON ANIMATION ---- //
    $('.sendbtn').on('click', function () {
        $(this).addClass('sending');
        setTimeout(() => $(this).addClass('done'), 1500);
        // setTimeout(() => window.location.reload(), 2500);
    });

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




    $('.sliderange').each(function () {
        var $sliderange = $(this),
            $range = $sliderange.find(".js-range-slider"),
            $inputFrom = $sliderange.find(".js-input-from"),
            $inputTo = $sliderange.find(".js-input-to"),
            instance,
            min = $sliderange.attr('data-min'),
            max = $sliderange.attr('data-max'),
            from = $sliderange.attr('data-min'),
            to = $sliderange.attr('data-max');
        console.log($sliderange);

        $range.ionRangeSlider({
            skin: "round",
            type: "double",
            min: min,
            max: max,
            from: from,
            to: to,
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


        // Plyr.js 
        if($('#video-player').length){
            const player = new Plyr("#video-player");
        }





});

