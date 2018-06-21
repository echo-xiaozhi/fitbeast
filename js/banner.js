
let fir = $('.bar ul li:first').clone();
let las = $('.bar ul li:last').clone();
$('.bar ul').append(fir);
$('.bar ul').prepend(las);
let m=1,n=1;
let timer=null;
$('.bar').height($('.bar ul li img').height())
$('.bar').stop().animate({ scrollTop: $('.bar ul li').height()*m },500)
$('.num').children('.prev').html(m)
$('.num').children('.next').html($('.bar-list').children('li').length-2)
$('.bar-con .bar-lis').eq(m-1).show().siblings().hide()
$('.bar-prev').click(function(){
    clearInterval(timer);
    m--;
    if (m<1){
        m = $('.bar ul li').length-2;
        $('.bar').scrollTop($('.bar ul li').eq(0).height()*(m+1));
    }
    public();
    run();
})

$('.bar-next').click(function(){
    clearInterval(timer);
    m++;
    if (m>$('.bar ul li').length-2) {
        m = 1;
        $('.bar').scrollTop($('.bar ul li').eq(0).height()*(m-1));
    }
    public();
    run();
    $('.bar').stop().animate({ scrollTop: $('.bar ul li').height()*m },500);
})

function run (){
    timer=setInterval(function(){
        m++;
        if (m>$('.bar ul li').length-2) {
            m = 1;
            $('.bar').scrollTop($('.bar ul li').eq(0).height()*(m-1));
        }
        public();
    },2500)
}
run();

$('.num li').click(function  () {
    clearInterval(timer);
    var i=$('.num li').index(this);
    m = i+1;
    n = i;
    $('.bar').stop().animate({ scrollTop: $('.bar ul li').height()*m },500);
    public();
    run();
})

function public (){
    $('.bar').stop().animate({ scrollTop: $('.bar ul li').height()*m },500);
    $('.num').children('.prev').html(m)
    $('.num').children('.next').html($('.bar-list').children('li').length-2)
    $('.bar-con .bar-lis').eq(m-1).show().siblings().hide()
}
function shows(){
    $('.zhezhao').show()
}
$(document).ready(function () {
    $('#close').click(function () {
        $('.top').hide();
    })
    $('.close').click(function () {
        $('.zhezhao').hide();
    })
    setTimeout("shows()",20000)
})
