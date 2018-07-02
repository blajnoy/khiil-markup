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
