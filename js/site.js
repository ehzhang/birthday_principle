// Custom javascript for each site and stuff and whatnot

$(document).ready(function(){
  $('.window').windows({
    snapping: true,
    snapSpeed: 400,
    snapInterval: 700,
  });

  // Smooth Scroll to location
  $(".scroll").click(function(event){
     event.preventDefault();
     //calculate destination place
     var dest=0;
     if($(this.hash).offset().top > $(document).height()-$(window).height()){
          dest=$(document).height()-$(window).height();
     }else{
          dest=$(this.hash).offset().top;
     }
     //go to destination
     $('html,body').animate({scrollTop:dest}, 500,'swing');
  })

  $('.ui.accordion')
    .accordion()
  ;  
  
});

