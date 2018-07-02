function slickSliderInit() {
    if($('.features-list').length) {
        var featuresSlider = $('.features-list').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 5000,
            speed: 800,
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        $('#nextSlide').on('click', function (e) {
           e.preventDefault();
            featuresSlider.slick('slickNext');
        });
    }
}

jQuery(document).ready(function () {
    slickSliderInit();
});

