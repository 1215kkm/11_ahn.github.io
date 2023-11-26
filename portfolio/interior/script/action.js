

$('#joa_top').load('include/header.html', function(){
    $('header nav').mouseenter(function(){
        $('.lnb').stop().slideDown(400);
        $('.lnb_bg').stop().slideDown(400);
    });
    
    $('header nav').mouseleave(function(){
        $('.lnb').stop().slideUp(400);
        $('.lnb_bg').stop().slideUp(400);
    });
    
    $('a.search').click(function(){
        $('#search').fadeIn(200);
    });
    $('a.btn_close').click(function(){
        $('#search').fadeOut(200);
    });
});
$('#joa_bottom').load('include/footer.html');



$('#section2 .tit li').click(function(){
    
    var styleImg = $(this).index()

    $('#section2 article ul').hide()
    $('#section2 article ul').eq(styleImg).show()
})


    
$('.call').click(function(){
    $('.call').toggleClass('on');
});


// $('.call').mouseleave(function(){
//     $('.call').removeClass('on');
// })


/* 도메인 값을 알아내는 명령어 */
var pageUrl = window.location.href

/* 대상.indexOf()   대상안에 있는 글자의 위치번호 구하기
있으면 0보다 크고 없으면 무조건 -1 */
// pageUrl.indexOf('02')

/* attr: 속성값을 구할때 쓰는 명령어 */
$('.snb li a').each(function(){
    var snbHref = $(this).attr('href') 
    /* a태그 마다의 href 속성값을 구하라 */

    if(pageUrl.indexOf(snbHref) > -1){
        $(this).parent().addClass('on')
    }
})



var liOnLeftPos;
var liOnW;

function snbUnderline(){
    liOnLeftPos = $('.snb li.on').offset().left;
    liOnW = $('.snb li.on').width();
    $('.underline').css({left:liOnLeftPos, width:liOnW});
}

// 리셋할 때
var subCheck = $('#section_box_sub').length;

if(subCheck > 0){
    snbUnderline();
}



$('.snb li').mouseenter(function(){
    var liLeftPos = $(this).offset().left;
    var liW = $(this).width();

    console.log(liLeftPos);

    $('.underline').css({left:liLeftPos, width:liW});
});

$('.snb').mouseleave(function(){
    $('.underline').css({left:liOnLeftPos, width:liOnW});
});

// 반응형
$(window).resize(snbUnderline);

/* 
$('.snb li.on').text() : on클래스를 가진 li의 글자를 구하라
$('.snb li.on').text('메롱') : on클래스를 가진 li안에 '메롱'을 써라
*/


/* snb누르면 자동으로 article의 제목 글씨를 바꿔주는 명령어 */
// var snbOnText = $('.snb li.on').text()
// $('.content_box h2').html(snbOnText+'<span>INTERIOR</span>');

