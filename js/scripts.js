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

}

jQuery(document).ready(function () {
    fullpageInit();
});


function slickSliderInit() {
    if($('.features-list').length) {
        $('.features-list').slick();
    }
}

jQuery(document).ready(function () {
    slickSliderInit();
});

