$(document).ready(function ($) {

    "use strict";

    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#ftco-loader').length > 0) {
                $('#ftco-loader').removeClass('show');
            }
        }, 1);
    };
    loader();

    $('.slideshow').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer',
    });
    $grid.imagesLoaded().progress(function () {
        $grid.masonry();
    });

    var c = $(".ftco-counter");
    var w = c.width();
    c.css("height", w);

    $(function () {
        $('a.scroll').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
        });
    });

    // scroll
    var scrollWindow = function () {
        $(window).scroll(function () {
            var $w = $(this),
                st = $w.scrollTop(),
                navbar = $('.ftco_navbar'),
                sd = $('.js-scroll-wrap');

            if (st > 150) {
                if (!navbar.hasClass('scrolled')) {
                    navbar.addClass('scrolled');
                }
            }
            if (st < 150) {
                if (navbar.hasClass('scrolled')) {
                    navbar.removeClass('scrolled sleep');
                }
            }
            if (st > 350) {
                if (!navbar.hasClass('awake')) {
                    navbar.addClass('awake');
                }

                if (sd.length > 0) {
                    sd.addClass('sleep');
                }
            }
            if (st < 350) {
                if (navbar.hasClass('awake')) {
                    navbar.removeClass('awake');
                    navbar.addClass('sleep');
                }
                if (sd.length > 0) {
                    sd.removeClass('sleep');
                }
            }
        });
    };
    scrollWindow();

    var counter = function () {

        $('#section-counter').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                $('.ftco-number').each(function () {
                    var $this = $(this),
                        num = $this.data('number');
                    $this.animateNumber(
                        {
                            number: num,
                            numberStep: comma_separator_number_step
                        }, 2000
                    );
                });

            }

        }, {offset: '95%'});

    }
    counter();

    var contentWayPoint = function () {
        var i = 0;
        $('.ftco-animate').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .ftco-animate.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn ftco-animated');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft ftco-animated');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight ftco-animated');
                            } else {
                                el.addClass('fadeInUp ftco-animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 50, 'easeInOutExpo');
                    });

                }, 100);

            }

        }, {offset: '95%'});
    };
    contentWayPoint();

    var imageWayPoint = function () {
        var i = 0;
        $('#section-cta').waypoint(function (direction) {

            if (direction === 'down' && !$("#section-cta .image-animate").hasClass('image-animated')) {

                i++;

                $("#section-cta .image-animate").addClass('item-animate');
                setTimeout(function () {

                    $('body .image-animate.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            el.addClass('image image-animated');
                            el.removeClass('image-animate');
                        }, k * 50, 'easeInOutExpo');
                    });

                }, 300);

            }

        }, {offset: '95%'});
    };
    imageWayPoint();

    // navigation
    var OnePageNav = function () {
        $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function (e) {
            e.preventDefault();

            var hash = this.hash,
                navToggler = $('.navbar-toggler');
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, 'easeInOutExpo', function () {
                window.location.hash = hash;
            });


            if (navToggler.is(':visible')) {
                navToggler.click();
            }
        });
        $('body').on('activate.bs.scrollspy', function () {
        })
    };
    OnePageNav();


    // Grid modal handler
    $('.grid-picture').click(function(evt){
        var imageSrc = $(this).find('img').first().prop('src');
        $('#modal-image').prop('src', imageSrc);
    });

    // add custom font async
    $(function () {
        var fonts = 'https://fonts.googleapis.com/css?family=Raleway';
        if (document.createStyleSheet) document.createStyleSheet(fonts);
        else $("head").append($("<link rel='stylesheet' href='" + fonts + "' type='text/css' media='screen' />"));
    });
});