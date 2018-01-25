$(document).ready(function(){

  $(document).scroll(function(){
    var s1top = $('section:first-of-type').offset().top - $(window).scrollTop();
    var s2top = $('section:nth-of-type(2)').offset().top - $(window).scrollTop();
    var s3top = $('section:nth-of-type(3)').offset().top - $(window).scrollTop();
    if(s1top < 200 && $('section:first-of-type').css("opacity") == 1) {
      console.log('disappear s1');
      $('section:first-of-type').animate({opacity: "0"});
    } else if (s1top > 200 && $('section:first-of-type').css("opacity") == 0) {
      $('section:first-of-type').animate({opacity: "1"});
    }
    if(s2top < 200 && $('section:nth-of-type(2)').css("opacity") == 1) {
      console.log('disappear s2');
      $('section:nth-of-type(2)').animate({opacity: "0"});
    } else if (s2top > 200 && $('section:nth-of-type(2)').css("opacity") == 0) {
        $('section:nth-of-type(2)').animate({opacity: "1"});
    }
    if(s3top < 200 && $('section:nth-of-type(3)').css("opacity") == 1) {
      console.log('disappear s3');
      $('section:nth-of-type(3)').animate({opacity: "0"});
    } else if (s3top > 200 && $('section:nth-of-type(3)').css("opacity") == 0) {
      $('section:nth-of-type(3)').animate({opacity: "1"});
    }
  });

});
