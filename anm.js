var content = 'Samet Karabulut // Font-End Developer.';

var ele = '<span>' + content.split('').join('</span><span>') + '</span>';


$(ele).hide().appendTo('p').each(function (i) {
    $(this).delay(150 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 150);
});