$(function () {

    "use strict";

    // Pre Loader 
    // var loader = document.getElementById("loader");
    // window.addEventListener("load", function () {

    //     loader.style.visibility = "hidden";

    // });

    // Menufix

    //    var navoff = $(".main_menu").offset().top;
    
    //    $(window).scroll(function () {
    //        var scrolling = $(this).scrollTop();
    
    //        if (scrolling > navoff) {
    //            $(".main_menu").addClass("menu_fix");
    //        } else {
    //            $(".main_menu").removeClass("menu_fix");
    //        }
    //    });

    // Smooth Scroll

    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });

    // Work Slider

    $('.work_slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,
        speed: 1300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    }
  ]

    });



    // Testimonial Slider

    $('.news_slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,
        speed: 1300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    }
  ]

    });

    // Clients slider

    $('.client_slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,
        speed: 1300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    }
  ]
    });

    // Featured slider

    $('.featured_slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,
        speed: 1300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
    }, {
                breakpoint:575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    }
  ]
    });


    // scroll top 


    $(".scroll_top").on('click', function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 800);
    });
    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            $(".scroll_top").fadeIn();
        } else {
            $(".scroll_top").fadeOut();
        }
    });

    // Closes responsive menu when a scroll link is clicked

    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    // Wow js

    new WOW().init();


    //Fact Counter + Text Count

    if ($('.count-box').length) {

        $('.count-box').appear(function () {
            var $t = $(this),

                n = $t.find(".count-text").attr("data-stop"),

                r = parseInt($t.find(".count-text").attr("data-speed"), 10);

            if (!$t.hasClass("counted")) {
                $t.addClass("counted");
                $({
                    countNum: $t.find(".count-text").text()
                }).animate({
                    countNum: n
                }, {
                    duration: r,
                    easing: "linear",
                    step: function () {
                        $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $t.find(".count-text").text(this.countNum);
                    }
                });
            }

        }, {
            accY: 0
        });

    }

});
