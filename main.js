$(function () {


  $('.humberger_btn').click(function(){
    $(this).toggleClass('humberger_active');
    if($(this).hasClass('humberger_active')){
      $('.hunberger_menu').addClass('hunbergermenu_active');
    }else{
      $('.hunberger_menu').removeClass('hunbergermenu_active');
      }
  });

 // $('.under_white').hide();
  $(window).scroll(function () {
    var $value = $(window).scrollTop();
  var scrollPos = $(window).height() + $value;
  if( scrollPos > 4000){
    $('.content').addClass('content_active');
    $('.logo_black').addClass('fadeout_opacity');
    $('.logo_white').addClass('fadein_opacity');
  }else{
    $('.content').removeClass('content_active');
   // $('.content').removeClass('content_notfixed');
    }

    if( scrollPos > 7500){
     
      $('.filter_text').fadeOut(500);
      $('.scloll_icon ').fadeOut(500);

      $('.content').removeClass('content_active');
    }else{
      $('.filter_text').fadeIn(500);
      $('.scloll_icon ').fadeIn(500);
    
     // $('.content').removeClass('content_notfixed');
      }
//会社概要についたら初め上白矢印を表示する
   //   if( scrollPos > 8000){
     //   $('.fast_white_fixed').fadeIn();
      
    //  }
      //else{
      
       // $('.fast_white_fixed ').hide();
       // $('.content').removeClass('content_notfixed');
      //  }

  });

//左からフェードイン
  $(window).scroll(function () {
    $(".left_fadein").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 80) {
        $(this).addClass("scrollin");
      }else{
        $(this).removeClass("scrollin");
      }
    });
//右からフェードイン

    $(".right_fadein").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 80) {
        $(this).addClass("scrollin");
      }else{
        $(this).removeClass("scrollin");
      }
    });

   





  });

//＃のついたスムーススクロールに飛ぶ時の全ての条件の時
  $('a[href^="#"]').click(function () {
    //上からスムーススクロールする時はanimate()の前にstop()を挟まないとスクロール先からスクロールできない
    var speed = 1000;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    $("html, body").stop().animate({ scrollTop: target.offset().top }, speed, "swing");
    return false;
  });

 // $('.hunberger_menu a').click(function () {
    //上からスムーススクロールする時はanimate()の前にstop()を挟まないとスクロール先からスクロールできない
   
    $('.hunberger_menu a[href*="#"]').on('click', function() {
      //$('#drawer').removeClass('open');
      $('.hunberger_menu').removeClass('hunbergermenu_active');
    });
  //46});


 
    // ページ下部固定ボタン表示非表示
        $(window).on('load resize',function(){
            newsOffset = $('.latestnews').offset().top;
            companyOffset = $('.companyprofile').offset().top;
            businessOffset = $('.business_redion').offset().top;
            winH = $(window).height();
        });
        $(function() {

                  $(window).scroll(function () {
                if ($(this).scrollTop() > businessOffset  - 100 ) {
                  $('.logo_black').addClass('fadeout_opacity');
                  $('.logo_white').addClass('fadein_opacity');
                 // $('.fast_white_fixed').fadeOut();
                //  $('.second_white_fixed').fadeIn();

                }else {
                  $('.logo_black').removeClass('fadeout_opacity');
                  $('.logo_white').removeClass('fadein_opacity');
                }



                if ($(this).scrollTop() > companyOffset - 100) {

                //  $('.second_white_fixed').fadeOut();
                //  $('.thired_white_fixed').fadeIn();
                  $('.logo_black').removeClass('fadeout_opacity');
                  $('.logo_white').removeClass('fadein_opacity');

                }
            });
        });
   



//   $(window).on("load scroll",function(e){
//     if(window.matchMedia("(max-width: 520px) ").matches){



      //    }
 //       });

 $(window).on('load resize', function() {
  $(window).on('load scroll', function(){
    var $winTop = $(window).scrollTop();
    var $target = $('.cd-fixed-bg');
    var $winWidth = $(window).width();
    if($winWidth < 530) {
      $target.each(function(index){
        var $position = $winTop - $target.eq(index).offset().top;
        if($winTop > $target.eq(index).offset().top -  300) {
          $target.eq(index).css({
            'background-position-y': $position * .4
          });
        }
      });
    }
  });
});



});