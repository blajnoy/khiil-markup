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


function focusAnim(){
    jQuery('input, textarea').each(function (i, el) {
        if(!jQuery(el).is('[type=checkbox]') && !jQuery(el).is('[type=radio]')){
            if (jQuery(el).val().trim() !== '' ) {
                jQuery(this).parents('.field-box').addClass('focus')
            } else {
                jQuery(this).parents('.field-box').removeClass('focus')
            }

            jQuery(el).focusout(function () {
                if (jQuery(el).val().trim() !== '' ){
                    jQuery(this).parents('.field-box').addClass('focus')
                } else {
                    jQuery(this).parents('.field-box').removeClass('focus')
                }
            });

            jQuery(el).focus(function () {
                jQuery(this).parents('.field-box').addClass('focus');
            });
        }
    });
}

jQuery(document).ready(function () {
    focusAnim();
});

function heightMainContent(){
    var headerHeight = jQuery('#header').outerHeight(),
        footerHeight =jQuery('#footer').outerHeight(),
        mainContent = jQuery('.main-content'),
        centeredBlock = jQuery('.js-centered'),
        contentHeight = window.innerHeight - footerHeight - headerHeight;

    mainContent.css({'min-height': contentHeight + 'px'});
    centeredBlock.css({
        'height': 'auto',
        'min-height': contentHeight + 'px'
    });

    if(mainContent.outerHeight(true) > contentHeight){
        centeredBlock.css('height', '100%')
    }else{
        centeredBlock.css('height', '1px')
    }
}

jQuery(document).ready(function () {
    heightMainContent();
});

jQuery(window).on('resize', function () {
    heightMainContent();
});
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {lat: 48.864716, lng: 2.349014}
    });

    var image = 'images/ico-marker.png';
    var objectMarker = new google.maps.Marker({
        position: {lat: 48.864716, lng: 2.309014},
        map: map,
        icon: image
    });
}


jQuery(document).ready(function () {
    initMap();
});

function restaurantCategory() {
    $('#restaurantCategorySlider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        centerPadding: 0,
        focusOnSelect: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3
                }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                variableWidth: true,
                arrows: false
            }
          }
        ]
    });
}


jQuery(document).ready(function () {
    restaurantCategory();
});

jQuery(window).on('resize', function () {
    $('#restaurantCategorySlider').slick('resize');
});
function tabs() {
    var body = jQuery('body');
    var elem = jQuery('[data-for]');

    elem.click(function () {
        var elemFor = jQuery(this).data('for');
        var willShowElem = body.find('[data-elem=' + elemFor + ']');
        jQuery(this).addClass('checked').siblings().removeClass('checked');
        willShowElem.addClass('active').siblings().removeClass('active');
    });
}

jQuery(document).ready(function () {
    tabs();
});