/* 반복함수 사용법! */
// var merong = 0;
// setInterval(function(){
//     var banbok = console.log(merong++)

//     if(merong >= 3){
//         clearInterval(banbok)
//     }
// }, 3000)

$('header nav').mouseenter(function(){
    $('.lnb_bg').stop().slideDown(400);
    $('.lnb').stop().slideDown(450);
    
});
$('header nav').mouseleave(function(){
    $('.lnb_bg').stop().slideUp(450);
    $('.lnb').stop().slideUp(400);
});





$('#section1 .small_img li').eq(0).addClass('on');
var smallImgSrc = $('#section1 .small_img li').eq(0).find('img').attr('src');
var smallImgAlt = $('#section1 .small_img li').eq(0).find('img').attr('alt');
$('.big_img img').attr('src',smallImgSrc);
$('.big_img p').text(smallImgAlt);
    

var merong = 0;
var rollingImg = setInterval(autoRolling, 2000)
function autoRolling(){
    merong++
    if(merong >= 4){
        merong = 0
    }
    $('#section1 .small_img li').eq(merong).addClass('on').siblings().removeClass('on');

    var changeImg = $('#section1 .small_img li').eq(merong).find('img').attr('src');
    var changeAlt = $('#section1 .small_img li').eq(merong).find('img').attr('alt');
    $('.big_img img').attr('src',changeImg)
    $('.big_img p').text(changeAlt)    
}


$('#section1 .small_img li').mouseenter(function(){
    clearInterval(rollingImg);
    merong = $(this).index(); //순서 차례대로 가기 위한 !!!

    var smallImgSrc = $(this).find('img').attr('src');
    var smallImgAlt = $(this).find('img').attr('alt');
    $('.big_img img').attr('src',smallImgSrc);
    $('.big_img p').text(smallImgAlt);
    
   /*  $('#section1 .small_img li').removeClass('on') */
    $(this).addClass('on').siblings().removeClass('on');
});

$('#section1 .small_img').mouseleave(function(){
    rollingImg = setInterval(autoRolling, 2000)
})



$('.quick li').eq(0).addClass('on').siblings().removeClass('on');

$('.quick li').click(function(){
    var quickIndex = $(this).index()-1
    var liT = $('section').eq(quickIndex).offset().top;
    if(quickIndex == -1){
        $('html').animate({scrollTop:0})
    } else{
        $('html').animate({scrollTop:liT})
    }

    // var quickThis = $(this).index()
    // $('.quick li').removeClass()
    // $('.quick li').eq(quickThis).addClass('on');
})




$(window).scroll(function(){
    quickLi()
})


function quickLi(){
    var scrT = $(window).scrollTop();

    $('#section_box > section').each(function(){
        var sectionTop = $(this).offset().top-400
        if(scrT < 500){
            $('.quick li').eq(0).addClass('on').siblings().removeClass('on');
        }
        if(scrT > sectionTop){
            var thisIndex = $(this).index()+1;
            $('.quick li').eq(thisIndex).addClass('on').siblings().removeClass('on');
        }


    })
}



if($('.quick').length > 0){
    $(window).scroll(function(){
    
        var scrollValue = $(document).scrollTop();
        var sec1Top = $('#section1').offset().top;
        if(scrollValue > 850){
            $('video').get(0).pause();
        } else {
            $('video').get(0).play();
        }
        if(scrollValue >= sec1Top){
            $('header').addClass('on').find('.lnb_bg').height(225);
        } else{
            $('header').removeClass('on').find('.lnb_bg').height(370);
        }
    })
}





// .index() : 형제간의 번호 -> 0부터 시작함
// .length : 개수 -> 1부터 시작함
// var = const = let


// 이름 줄이는 방법 (강*모 라고 나타내는 방법)
// $('#section3 li.date').each(function(){
//    var dateText = $(this).text();
//    $(this).text(dateText.substr(0,4) + '~.' + dateText.substr(9,11))
// })








// Initialize Swiper
$(document).ready(function(){
    if($('.swiper').length > 0){
        
        var swiper = new Swiper(".mySwiper", {
            pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            },
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
        });
        
    }
})


$('#section_sub .view_more').click(function(){
    $('.content_box .more').slideDown()
    $('#section_sub .view_more').hide()
})

$('.content_box li').click(function(){
    var imgAlt = $(this).find('img').attr('alt');
    
    $('#section_detail').show();
    $('#section_detail .'+imgAlt).show();

    return false
});

$('.btn_close').click(function(){
    $('#section_detail').hide();
    $('#section_detail .cont_detail').hide();
})


