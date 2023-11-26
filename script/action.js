

for(let i = 0; i < $('.sound_wave span').length; i++){
    $('.sound_wave span').eq(i).css({background:'rgba('+(255-i)+',200,'+(200+i)+',1)'})
}



let i = 0;

$('#visual .intro_box ul li').mouseover(function(){
    i = $(this).index();

    clearInterval(rolling)

    $('#visual .intro_box ul li').eq(i).addClass('on').siblings().removeClass('on');
    $('#visual .figure_box img').eq(i).show().siblings().hide();
}).mouseleave(function(){
    rolling = setInterval(changeClass, 3000)
})


let rolling = setInterval(changeClass, 3000)
function changeClass(){
    i++;
    if(i > 5){
        i = 0;
    }
    $('#visual .intro_box ul li').eq(i).addClass('on').siblings().removeClass('on');
    $('#visual .figure_box img').eq(i).show().siblings().hide();
}



$(window).scroll(function(){
    let scrollValue = $(document).scrollTop();
    let sec1Top = $('#section1').offset().top;
    if(scrollValue >= sec1Top / 2){
        $('header').addClass('on');
    } else{
        $('header').removeClass('on');
    }
})


$('header .cb_1260').mouseenter(function(){
    $('header').removeClass('on')
})
$('header .cb_1260').mouseleave(function(){
    let scrollValue = $(document).scrollTop();
    let sec1Top = $('#section1').offset().top;
    $('header').addClass('on')
    if(scrollValue < sec1Top / 2){
        $('header').removeClass('on')
    }
})




$('#section1 .content_box li').click(function(){
    let lnbIndex = $(this).index()
    if(lnbIndex != 2){
        $('#section1 .detail_box ul').eq(lnbIndex).show().siblings().hide();
    } else {
        $('#section1 .detail_box ul').eq(lnbIndex).css({display:'flex'}).siblings().hide();
        pie()
    }

    $(this).addClass('on').siblings().removeClass('on');

    return false
})



function pie(){
    $('.chart1').easyPieChart({
        size:180,
        barColor:'#0054a6',
        scaleColor:false,
        lineWidth:15,
        trackColor:'#f9f9f9',
        lineCap:'circle',
        animate:2000
    });
    $('.chart2').easyPieChart({
        size:180,
        barColor:'#ffb847',
        scaleColor:false,
        lineWidth:15,
        trackColor:'#f9f9f9',
        lineCap:'circle',
        animate:2000
    });
    $('.chart3').easyPieChart({
        size:180,
        barColor:'#f15b29',
        scaleColor:false,
        lineWidth:15,
        trackColor:'#f9f9f9',
        lineCap:'circle',
        animate:2000
    });
    $('.chart4').easyPieChart({
        size:180,
        barColor:'#4dc3c3',
        scaleColor:false,
        lineWidth:15,
        trackColor:'#f9f9f9',
        lineCap:'circle',
        animate:2000
    });
}

function subDetail(){
    let pageUrl = window.location.href;
    const url = new URL(pageUrl);

    // URLSearchParams 객체
    const urlParams = url.searchParams;
    const urlPara = urlParams.get('title')

   $.getJSON('json/file.json', function(data) {
    let k = ''
    $.each(data, function(index, item) {
        $('#sub .intro h2').text(item.info[urlPara].intro_text_h2);
        $('#sub .intro strong').text(item.info[urlPara].intro_text_strong);

        for(let i = 0; i < 10; i++){
            let text = eval('item.info[urlPara].intro_text_p'+i);
            $('.intro').append('<p>'+text+'</p>')
        }
        
        // $('#sub .intro p.sharp2').text(item.info[urlPara].intro_text_p2);
        // $('#sub .intro p.sharp3').text(item.info[urlPara].intro_text_p3);
        // $('#sub .intro p.sharp4').text(item.info[urlPara].intro_text_p4);
        // $('#sub .intro p.sharp5').text(item.info[urlPara].intro_text_p5);
        // $('#sub .intro p.sharp6').text(item.info[urlPara].intro_text_p6);
        // $('#sub .intro p.sharp7').text(item.info[urlPara].intro_text_p7);
        $('#sub .intro a').attr('href',item.info[urlPara].site_domain)

        $('#sub figure img').attr('src',item.info[urlPara].figure_img)
        $('#sub .workinfo p.concept').text(item.info[urlPara].workinfo_text_p);
        $('#sub .workinfo span.color1').css({background: item.info[urlPara].workinfo_color1});
        $('#sub .workinfo span.color2').css({background: item.info[urlPara].workinfo_color2});
        $('#sub .workinfo span.color3').css({background: item.info[urlPara].workinfo_color3});
        $('#sub .workinfo span.color4').css({background: item.info[urlPara].workinfo_color4});
        $('#sub .workinfo p.period').text(item.info[urlPara].workinfo_text_period);
        $('#sub .workinfo p.tool').text(item.info[urlPara].workinfo_text_tool);
     });
   }).done(function() {
        $('.intro p').each(function(){
            let pNull = $(this).text();
            console.log(pNull)
            if(pNull == '' || pNull == 'undefined'){
                $(this).css({display:'none'})
            } else{
                $(this).css({display:'inline-block'})
            }
        })
  });
}
    
let subPage = $('#sub').length;
if(subPage > 0){
    subDetail();
}


$('#section4 .hide_box figure').mouseover(function(){
    $('#section4 .hide_box figure img').eq(0).stop().fadeOut();
    $('#section4 .hide_box figure img').eq(1).stop().fadeIn();
})
$('#section4 .hide_box figure').mouseleave(function(){
    $('#section4 .hide_box figure img').eq(1).stop().fadeOut();
    $('#section4 .hide_box figure img').eq(0).stop().fadeIn();
})


$('#section3 ul li').click(function(){
    let ulIndex = $(this).index()
    if(ulIndex > 4){
        ulIndex = 0
    }
    $('#section3 .figure_box img').eq(ulIndex).show().siblings().hide();
    $(this).addClass('on').siblings().removeClass('on');

    return false
})


