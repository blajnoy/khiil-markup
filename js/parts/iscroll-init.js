function iscrollInit() {
    $('.section-holder').each(function () {
        new IScroll(this, {
            mouseWheel: true,
            scrollbars: true,
            fadeScrollbars: true,
        });
    });
}
jQuery(document).ready(function () {
    iscrollInit();
});
