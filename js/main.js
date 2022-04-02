;
(function ($) {
    "use strict";
    $(document).on('ready', function () {



        $('.sponsor-slider').slick({
            dots: false,
            arrows: false,
            prevArrow: '<button class="slick-prev"  type="button"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button class="slick-next" type="button"><i class="fa fa-angle-right"></i></button>',
            infinite: true,
            centerMode: false,
            autoplay: true,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });


    });



    /*-- Mobile-Menu-Active --*/

    $('.menu-triger').on('click', function () {
        $(this).toggleClass('active');
    });


    $('.primary-menu').slicknav({
        label: '',
        duration: 500,
        prependTo: '',
        closedSymbol: '<i class="fa fa-angle-right"></i>',
        openedSymbol: '<i class="fa fa-angle-right"></i>',
        appendTo: '.mainmenu-area',
        menuButton: '.menu-triger',
        closeOnClick: 'true' // Close menu when a link is clicked.
    });



})(jQuery);



;
(function ($) {
    "use strict";
    $(document).on('ready', function () {


        // Portfolio Image Loded with Masonry
        if (typeof imagesLoaded == 'function') {
            imagesLoaded($('.work-items'), function () {
                setTimeout(function () {
                    $('.work-items').isotope({
                        itemSelector: '.work-items .work-item',
                        resizesContainer: false,
                        layoutMode: 'masonry',
                        filter: '*'
                    });
                }, 500);

            });
        };


        // Set Active Class for Portfolio filter
        $('.work-filter li').on('click', function (event) {
            $('.work-filter li').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });



        // Filter JS for Porrtfolio
        $('.work-filter').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $('.work-items').isotope({
                filter: filterValue
            });
        });


        $(window).on("load", function () {
            /*-- Preloader-Fade-Out-After-Load-Window --*/
            $('#scrollUp').on('click', function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 500);
                return false;
            });

            $('.preloader').fadeOut(500);

        });

        /*-- WoW-Animation-JS --*/
        new WOW().init();

        $('.count').counterUp({
            delay: 5,
            time: 1000
        });


        $('.slider-active').slick({
            dots: false,
            arrows: false,
            prevArrow: '<button class=".slider-control .left-arrow"  type="button"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button class=".slider-control .right-arrow" type="button"><i class="fa fa-angle-right"></i></button>',
            infinite: true,
            centerMode: false,
            autoplay: true,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

    });

})(jQuery);



;
(function ($) {
    "use strict";
    $(document).on('ready', function () {


        $('.blog-slider').slick({
            dots: false,
            arrows: false,
            prevArrow: '<button class="slick-prev"  type="button"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button class="slick-next" type="button"><i class="fa fa-angle-right"></i></button>',
            infinite: true,
            centerMode: false,
            autoplay: true,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });


    });


})(jQuery);
