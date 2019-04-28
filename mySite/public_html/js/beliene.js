$(function() {
    $('.toggles button').click(function(){
        var get_id = this.id;
        var get_current = $('.posts .' + get_id);

        $('.post').not(get_current).hide();
        get_current.show();
    });

    $('#showall').click(function() {
        $('.post').show(500);
    });
});