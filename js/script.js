$(document).ready(function(){

  setTimeout(function(){
    $('#moving-header').animate({"top": "0"}, 1000, "swing",function(){
      setTimeout(function(){
        $('.entry-section').fadeIn(1000,"swing");
        console.log("fadeIn fired");
      }, 2000);
    });
  }, 1000)
});
