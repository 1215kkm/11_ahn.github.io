$('header nav i.fa-bars').click(function(){
    $('.lnb_bg').stop().fadeToggle(200);
    $('nav').toggleClass('on')
    $('.lnb').stop().slideUp();
    $('nav > ul > li').removeClass('on');
});

$('nav > ul > li').click(function(){
    $('.lnb').stop().slideUp();
    $('nav > ul > li').removeClass('on');
    $(this).toggleClass('on').find('.lnb').stop().slideToggle()
})


$('#section2 .tit li').click(function(){
    
    var styleImg = $(this).index()

    $('#section2 article ul').hide()
    $('#section2 article ul').eq(styleImg).show()
})
