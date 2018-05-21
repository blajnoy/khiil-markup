function sliderAbout() {
    $('#sliderAbout').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: false,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        appendDots: $('.desc-about'),
        dotsClass: 'slick-dots01',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    appendDots: $('.slider-about'),
                    fade: false
                }
            }
        ]
    });
}


jQuery(document).ready(function () {
    sliderAbout();
});

