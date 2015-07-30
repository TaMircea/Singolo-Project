$(document).ready(function() {
  var flag=0;
  $('.navigation_responsive').click(function() {
    $(this).toggleClass('active');
    if(flag==0){
      $('.navigation ul').slideDown( 400 );
      flag=1;
    }
    else{
      $('.navigation ul').slideUp( 400 );
      flag=0;
    }
    });
   window.addEventListener('resize', function(event){
    if($(window).width()>700){
    $('.navigation ul').css('display','inline-block')
    }
    else $('.navigation ul').css('display','none')
  });
});