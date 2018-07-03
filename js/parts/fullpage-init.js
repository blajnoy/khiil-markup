function fullpageInit() {
    var headerHeight = $('.header').outerHeight();

    $('.main-content').css('padding-top', headerHeight);

    if ($('#fullpage').length) {
        $('.main-content').css('padding-top', 0);
        $('#fullpage').fullpage({
            loopHorizontal: false,
            onLeave: function(index, nextIndex, direction){
                $('.fp-enabled .menu .current-menu-item.current-menu-ancestor li').removeClass('active');
                $('.fp-enabled .menu .current-menu-item.current-menu-ancestor li').eq(nextIndex - 1).addClass('active');
            }, afterRender: function(){
                $(".fp-enabled .menu .sub-menu a").filter(function() { return this.hash == location.hash; }).parent().addClass('active');
            },
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

            $('.fullpage').find('.section').removeClass('section').addClass('slide');
            $('.fullpage').wrapInner( "<div class='section'></div>")

            $('#fullpage').fullpage({
                loopHorizontal: false,
                controlArrows: false,
                afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
                    console.log(slideIndex);
                    $('.fp-customSlidesNav li').eq(slideIndex).find('a').addClass('active').end().siblings().find('a').removeClass('active');
                },
                afterRender: function(){
                    $(".fp-enabled .menu .sub-menu a").filter(function() { return this.hash == location.hash; }).parent().addClass('active');
                },
                paddingTop: headerHeight,
                slidesNavigation: true,
                slidesNavPosition: 'top',
            });

            $('.fp-customSlidesNav').find('a').click(function (e) {
                e.preventDefault();
                var index = $(this).parent('li').index();
                $.fn.fullpage.moveTo(1, index);
                $(this).addClass('active').parent('li').siblings().find('a').removeClass('active');
            })
        }

        $('.fp-customSlidesNav').find('li:first').find('a').addClass('active');

        $('.mobile-nav-toggle').on('click', function () {
            $(this).toggleClass('active');
            $('.navbar').toggleClass('active');
            $('.mobile-logo').toggleClass('active');
            $('.fp-customSlidesNav').toggle();
        });
    }
}

jQuery(document).ready(function () {
    fullpageInit();
});
