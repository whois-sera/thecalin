$(document).ready(function () {

    var btn = $('.nav-btn');
    var nav = $('.top-nav');

    btn.click(function () {
        nav.toggleClass('open');
    });

    var prev = $('.control-prev');
    var next = $('.control-next');
    var slider = $('#slider');
    var posts = $('#slider article');

    if (parseInt($('.recipes article').css('width')) > 600) {
        var limit = 1;
    } else {
        var limit = 2;
    }

    console.log(parseInt($('.recipes article').css('width')))
    console.log(limit);

    prev.click(function () {
        console.log(limit);
        var dot = $('#slider article:first')
        var dotSize = parseInt($('#slider article:first').css('width'), 10);
        var dotMargin = parseInt($('#slider article:first').css('marginLeft'), 10);
        if (dotMargin > (((posts.length)-limit)*dotSize)*-1) {
            dot.animate({marginLeft: dotMargin - dotSize});
            console.log('Catch !');
        }
    });

    next.click(function () {
        var dot = $('#slider article:first')
        var dotSize = parseInt($('#slider article:first').css('width'), 10);
        var dotMargin = parseInt($('#slider article:first').css('marginLeft'), 10);
        if (dotMargin < 0){
            dot.animate({marginLeft: dotMargin + dotSize});
            console.log('Catch !');
        }
    });

})