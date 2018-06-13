function slickSliderInit() {
    if($('.features-list').length) {
        $('.features-list').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
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
    }
}


jQuery(document).ready(function () {
    slickSliderInit();
});

