$(document).ready(function(){
    // document.body.style.overflow = "hidden";
    
    // window.addEventListener('wheel', function(i){
    //     i.preventDefault();
    // },{passive : false});
    
    // let $html = $('html');
    // let page = 1;
    // $html.animate({scrollTop:0},10);

    // $(window).on('wheel',function(i){
    //     if($html.is(':animated')) return;
    //     if(i.originalEvent.deltaY > 0){
    //         if(page == 6) return;
    //         page++;
    //     } else if(i.originalEvent.deltaY < 0){
    //         if(page == 1) return;
    //         page--;
    //     }
    //     let posTop = (page-1) * $(window).height();
    //     $html.animate({scrollTop : posTop});
    // });

    $('header nav li').click(function(){
        page = $(this).index()+2
    })


     /* section1 */
     let date = new Date(); //날짜시~~작
     let year = date.getFullYear(); //년도
     let month = date.getMonth()+1; //월
     let day = date.getDate();  //일

     $('.section1 span.date').text(`${year}년 ${month}월 ${day}일 기준`)

    

    $(window).scroll(function(){
        let scrT = $(window).scrollTop();
        let sec1T = $('.section1').offset().top;
        if(scrT >= sec1T){
            numIncrease();
        }
    });


    /* section2 */
    
    let viewNum = 0;
    let exLength = $('.ex').length;

    $('.figure_box div ul').each(function(){
        let divW = $(this).parent('div').width();
        $(this).find('li').width(divW);
        $(this).width(divW * exLength);
    });
    
    $('.section2 .btn_box .next').click(function(){
        viewNum++;
        if(viewNum >= exLength-1){
            viewNum = exLength-1
        }
        slider();
    });

    $('.section2 .btn_box .prev').click(function(){
        viewNum--;
        if(viewNum < 0){
            viewNum = 0
        }
        slider();
    });

    function slider(){
        $('.explain_box .ex').eq(viewNum).fadeIn().siblings().fadeOut();
        $('.figure_box div ul').each(function(){
            let divW = $(this).parent('div').width();
            $(this).css({marginLeft: -divW * viewNum})
        })
    };


    /* section3 */

    $('.section3 nav li').click(function(){
        let sec3NavIdx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');

        let textBoxH = $('.cont').height();
        $('.section3 .text_box').css({marginTop: -sec3NavIdx * textBoxH});
        $('.section3 .img_box').css({marginTop: -sec3NavIdx * textBoxH});

        return false;
    })



});
