$(window).on('load',function(){
    var loc = location.href;
    var file = loc.substring(loc.lastIndexOf("/")+1,loc.length);
    $('a[href$="'+file+'"]').addClass('active');

    // slider
    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    alert($("h1").text());
});