var $dropzone = null;

Dropzone.options.contactForm = {
    autoProcessQueue: false,
    uploadMultiple: true,
    maxFiles: 10,
    parallelUploads: 10,
    addRemoveLinks: true,
    autoDiscover: false,
    maxFilesize: 25,
    previewsContainer: '#dropzonePreview',
    clickable:'#dropzonePreview'
};
function fullpageInit() {
    $('#fullpage').fullpage();
}

jQuery(document).ready(function () {
    fullpageInit();


    /*--- Mobile menu ------------------------------------------*/
    if ( $(window).width() < 768 ) {

        if (!$('.fp-enabled').length) {
            $.fn.fullpage.destroy('all');
            $('body').addClass('mobile-disabled-fullpage');
        }

        $('.mobile-nav-toggle').on('click', function () {
            $(this).toggleClass('active');
            $('.navbar').toggleClass('active');
        });

    }
});

