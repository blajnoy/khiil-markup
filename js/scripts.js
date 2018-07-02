var $dropzone = null;

Dropzone.options.contactForm = {
    url: 'fake',
    autoProcessQueue: false,
    uploadMultiple: true,
    maxFiles: 10,
    parallelUploads: 10,
    addRemoveLinks: true,
    autoDiscover: false,
    maxFilesize: 25,
    previewsContainer: '#dropzonePreview',
    clickable:'#dropzonePreview',
    init: function () {
        $dropzone = this;
        this.options.url = "";
        /*$('#lets_do_this').click(function(e){
         e.preventDefault();
         e.stopPropagation();
         if (!validator.isValid){
         setInputState('name');
         //alert(validator.emailIsValid);
         setInputState('email', !validator.emailIsValid);
         setInputState('website');
         setInputState('description');
         inputStatesSet=true;

         return;

         }
         else {

         if (!$dropzone.getAcceptedFiles().length){
         //document.forms[0].submit();
         var formData = new FormData();
         formData.append("name", $('#name').val());
         formData.append("email", $('#email').val());
         formData.append("website", $('#website').val());
         formData.append("description", $('#description').val());
         var req = new XMLHttpRequest();
         req.open("POST","");
         req.send(formData);
         }
         else {
         $dropzone.processQueue();
         }
         setTimeout(function(){
         $('#success_container').show();
         $('#my-form').hide();
         }, 3000);
         }
         });*/
    }
};
function fullpageInit() {
    var headerHeight = $('.header').outerHeight();
    var windowHeight = $(window).outerHeight();
    console.log(windowHeight);
    //$('#fullpage .section').find('.content-col').css('padding-bottom', headerHeight);

    if ($('#fullpage').length) {
        $('#fullpage').fullpage({
            loopHorizontal: false,
            onLeave: function(index, nextIndex, direction){
                $('.fp-enabled .menu .current-menu-item.current-menu-ancestor li').removeClass('active');
                $('.fp-enabled .menu .current-menu-item.current-menu-ancestor li').eq(nextIndex - 1).addClass('active');
            }, afterRender: function(){
                $(".fp-enabled .menu .sub-menu a").filter(function() { return this.hash == location.hash; }).parent().addClass('active');
                //$('.section .section-wrapper').css('padding-top', headerHeight + 'px');
            },
            //scrollOverflow: true,
            paddingTop: headerHeight
        });

        $.fn.fullpage.setMouseWheelScrolling(false);
        $.fn.fullpage.setAllowScrolling(false);

        $(document).on('click', '.lnk-next', function(e){
            e.preventDefault();
            $.fn.fullpage.moveSectionDown();
        });
    }

    /*--- Mobile menu ------------------------------------------*/
    if ( $(window).width() < 768 ) {
        if ($(".fp-enabled").length) {
            $.fn.fullpage.destroy('all');
            $('body').addClass('mobile-disabled-fullpage');
        }

        $('.mobile-nav-toggle').on('click', function () {
            $(this).toggleClass('active');
            $('.navbar').toggleClass('active');
            $('.mobile-logo').toggleClass('active');
        });
    }
}

jQuery(document).ready(function () {
    fullpageInit();
});

function iscrollInit() {
    $('.section-holder').each(function () {
        new IScroll(this, {
            mouseWheel: true,
            scrollbars: true
        });
    });
}
jQuery(document).ready(function () {
    iscrollInit();
});

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
                        slidesToShow: 1,
                        slidesToScroll: 1
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

