$(function(){
  $(window).scroll(function(){
    if($(window).scrollTop()>30){
        $("#main-nav").addClass("shrink");
    } else {$("#main-nav").removeClass("shrink");}
  });
});
