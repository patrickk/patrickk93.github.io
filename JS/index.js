// //refresh document, scroll to top
// $(document).ready(function(){
//     
// });
  $(document).ready(function(){
    $(window).scrollTop(0);
  });
//adds smooth scrolling functionality
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  $('body').scrollspy({
    target: '.navbar',
    offset: 200
  });

});

