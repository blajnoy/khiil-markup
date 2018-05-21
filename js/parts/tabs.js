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