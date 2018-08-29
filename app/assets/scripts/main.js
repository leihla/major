'use strict';
//require('./config')

//Open and Close menu
$(document).ready(function() {
   $(".menu-icon").click(function() {
     $(this).toggleClass('open');
     $(".overlay-menu").toggleClass('visible');

  });



  var tophome = ($('.landingpage').offset().top);
  var tophelp = ($('.wecanhelp').offset().top);
  var topstatement = ($('.internet-statement').offset().top);
  var topprojects = ($('.projects').offset().top);
  var topknowmore = ($('.know-more-about').offset().top);


  $(document).scroll(function() {

      var scrollPos = $(document).scrollTop();


      if (scrollPos <= tophome) {
          $('.mainnav ul li a').css('color', '#F9F7F2');

      }

      else if (scrollPos >= tophome && scrollPos < toppoem) {
          $('.mainnav ul li a').css('color', '#F9F7F2');

      }


       else {

          $('.mainnav ul li a').css('color', '#111110');


      }

    });








});
