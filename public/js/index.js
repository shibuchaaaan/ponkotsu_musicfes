$(window).on('load',function(){
    // 閲覧中のページメニューに下線をつける
    var loc = location.href;
    var file = loc.substring(loc.lastIndexOf("/")+1,loc.length);
    $('a[href$="'+file+'"]').addClass('active');

    // TOP画像表示アニメーション
    $('.baseImage').hide().fadeIn(2000);
    $('.coverImage').hide().fadeIn(3800);
    
    // 上から100pxスクロールした場合、TOPスクロールボタンを表示
    var scrollTop = $('.fa-chevron-circle-up');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 110) {
            scrollTop.fadeIn(2500);
        } else {
            scrollTop.fadeOut();
        }
    });
    // スクロールボタン押下時アニメーション
    scrollTop.click(function () {
        $('body, html').animate({scrollTop: 0}, 500);
        return false;
    });
});