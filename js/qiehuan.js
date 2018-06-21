$(document).ready(function () {
    $('.dz').on('click','img',function (e) {
        $('.dz img').removeClass('active');
        $(e.target).addClass('active');
        var src = $(this).attr('src');
        // $('.top_left img').attr('src','');
        $('.top_left img').attr('src',src);
    })
})