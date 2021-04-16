(function ($) {
    "use strict";


    $('.main-menu').on('click', 'li', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // slider
    $('.slider-active').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    // masonry-filtering

  // init Isotope
  var $grid = $('.portfolio-item').isotope({
    // options
});
// filter items on button click
$('.portfolio-list').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
        filter: filterValue
    });


    // filter items on button click active
    $('.portfolio-list').on('click', 'li', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});






    // Preloader
    $(window).load(function() {
        $(".preloader").fadeOut(500);
    });

    // active mobile-menu
	jQuery('#mobile-menu').meanmenu({
		meanScreenWidth: '991',
		meanMenuContainer: '.mobile-menu'
    });
    
    $('.main-menu').slicknav({
        prependTo: '.mobile-menu'
    });

    // Contact form validation
    $("#contact-form").validate({
        rules: {
            name: "required",
            email: "required",
            subject: "required",
            message: "required",
        }
    });

    //  Scrollup
    $.scrollUp({
        scrollName: 'scrollUp',
        topDistance: '300', 
        topSpeed: 300, 
        animation: 'fade',
        animationInSpeed: 200, 
        animationOutSpeed: 200, 
        scrollText: '<i class="fa fa-angle-up"></i>', 
        activeOverlay: false, 
    });







    
}) (jQuery);