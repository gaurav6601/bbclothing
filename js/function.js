$(window).scroll(function() {
  var scrlval=$(this).scrollTop();
  $('.logo').css({
    'transform': 'translate(0px,'+ scrlval/2 +'px)'
  });
  $('.backbird').css({
    'transform': 'translate(0px,'+ scrlval/4 +'px)'
  });
  $('.frontbird').css({
      'transform' : 'translate(0px, -'+ scrlval /40 +'%)'
    });
    if(scrlval > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {
      $('.clothes-pics figure').each(function(i) {
        setTimeout(function(){
          $('.clothes-pics figure').eq(i).addClass('landing');
        },(700 * (Math.exp(i * 0.14))) - 700)
      });
    }

});
