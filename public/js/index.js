$(window).on('load',function(){
    var loc = location.href;
    var file = loc.substring(loc.lastIndexOf("/")+1,loc.length);
    $('a[href$="'+file+'"]').addClass('active');
});