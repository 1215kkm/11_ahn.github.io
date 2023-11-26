$(document).ready(function(){
    // $('.lang_sel > a').on('click mouseenter', function(){
    //     $('.lang').show();
    // });
    $('.lang_sel > a').click(function(){
        $('.lang').show();
    });
    $('.lang').mouseleave(function(){
        $('.lang').fadeOut(200);
    });


    // lnb 높이 최대값 구하기 1
/*     $('.gnb').mouseenter(function(){
        var totalHeight = 0;
        $('.lnb').each(function(){
            if(totalHeight < $(this).height()){
                totalHeight = $(this).height();
            }
        });
        $('.lnb').height(totalHeight);
    }); */

    // lnb 높이 최대값 구하기2
    $('.gnb').mouseenter(function(){
        var baeyeol = [];
        $('.lnb').each(function(){
            baeyeol.push($(this).height())
        });
        var maxLnb = Math.max(...baeyeol);
        $('.lnb').height(maxLnb);
    })


    $('#section5 li').each(function(index){
        // var s5Index = $(this).index()+1;
        // var km = '0' + (index+1)
        // $(this).find('span.number').text(km.slice(-2));
        // -> 100의 자리가 있을 때 문제가 됨

        if(index+1 < 10){
            $(this).find('span.number').text('0' + (index+1))
        } else{
            $(this).find('span.number').text(index+1)
        }
    })
});
