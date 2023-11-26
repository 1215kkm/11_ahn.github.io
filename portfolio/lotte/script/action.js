$(function(){
    $(window).mousemove(function(e){    
        let mouseX = e.pageX;    
        let mouseY = e.pageY;
        let ddongH = $('.ddong').height();
        let ddongW = $('.ddong').width();

        let scrT = $(window).scrollTop();

        $('.ddong').css({left:mouseX - ddongW/2, top:mouseY - scrT - ddongH/2});
    });

    // $('.km').mouseover(function(){
    //     $('.ddong').css({border:'4px solid rgba(255,255,255,1)', backgroundColor: 'none'});
    // })
    // $('.km').mouseout(function(){
    //     $('.ddong').css({border:'4px solid rgba(0,0,0,0.3)', backgroundColor:'rgba(255,255,255,0.3)'});
    // })

    $('.lnb li').mouseover(function(){
        let lnbLiW = $(this).width();
        let lnbLiH = $(this).height();
        $('.ddong').css({width:lnbLiW, height:lnbLiH, borderRadius:10, backgroundColor: 'transparent', border:'4px solid rgba(255,255,255,0.3)'})
    }).mouseout(function(){
        $('.ddong').css({width:'', height:'', borderRadius:'', backgroundColor:'', border:''})
    })

    $('header nav > ul > li').mouseover(function(){
        $('.nav_bg').css({height:200})
        $(this).find('.lnb').stop().fadeIn(200);
        $(this).find('.lnb li').css({top:0});
    }).mouseleave(function(){
        $('.nav_bg').css({height:0})
        $('.lnb').stop().fadeOut(200);
        $(this).find('.lnb li').css({top:-50})
    })


    gnbMoNav();
    function gnbMoNav(){
        let navHtml = $('header nav').html();
        $('.gnb_mo').append(navHtml);

        $('.hamburger').click(function(){
            $('header aside').fadeIn(500);
            $('.side_menu').animate({left:'0%'});
        })

        $('.gnb_mo li').click(function(){
        $(this).find('.lnb').slideToggle();
        });

        $('header aside').click(function(e){
            if($(e.target).children('div').hasClass('side_menu')){
                $('header aside').fadeOut(800);
                $('.side_menu').animate({left:'-100%'});    
            }
        });

        $(window).resize(function(){
            if($(window).width() > 768){
                $('header aside').hide();
                $('.side_menu').css({left:'-100%'}); 
            }
        })

    }

    let scrollMenuTop = parseInt($('.scroll_menu').css('top'));
    nowSection();
    $(window).scroll(function(){
        nowSection();
    });
    
    /* 번호로 하는 방법 */
    // $('.scroll_menu a').click(function(){
    //     let scrollMenuIndex = $(this).index()+1;
    //     let goScr = $('#section'+scrollMenuIndex).offset().top;
    //     $('html').stop().animate({scrollTop:goScr+'px'});
    // })

    /* 이름으로 하는 방법 */
    $('.scroll_menu a').click(function(){
        let goHref = $(this).attr('href');
        let goScr = $(goHref).offset().top;
        $('html').stop().animate({scrollTop:goScr+'px'});
    });

 

    function nowSection(){
        if($('#section_main').length > 0){
            let sec1T = $('#section1').offset().top;
        let sec2T = $('#section2').offset().top;
        let sec3T = $('#section3').offset().top;
        let winH = $(window).height();
        let scrT = $(window).scrollTop();
        let footerTop = $('footer').offset().top - $(window).height() + $('footer').height();

        if($(window).width() > 768){
            if(scrT < footerTop){
                $('.scroll_menu').show().stop().animate({top:scrT+scrollMenuTop+'px'});
            }
        }

        
        if(scrT > 0){
            $('.gotop').stop().fadeOut(200);
            $('.scroll_menu').removeClass('on');
            $('.scroll_menu a').removeClass('on');
        }
        if(scrT >= sec1T - winH/2){
            $('.gotop').stop().fadeIn(200);
            $('.scroll_menu').addClass('on');
            $('.scroll_menu a').eq(0).addClass('on').siblings().removeClass('on');
        }
        if(scrT >= sec2T - winH/2){
            $('.scroll_menu').addClass('on');
            $('.scroll_menu a').eq(1).addClass('on').siblings().removeClass('on');
        }
        if(scrT >= sec3T - winH/2){
            $('.scroll_menu').removeClass('on');
            $('.scroll_menu a').eq(2).addClass('on').siblings().removeClass('on');
        }
        } 
    };
    
})