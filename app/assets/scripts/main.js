'use strict';
//require('./config')

//Open and Close menu
$(document).ready(function() {
   $(".menu-icon").click(function() {
     $(this).toggleClass('open');
     $(".overlay-menu").removeClass('no-animation');
     $(".overlay-menu").toggleClass('visible');
     $(".overlay-menu").toggleClass('closemenu', 1);


  });


//Change section title on scroll
  $(document).scroll(function() {

    // calculate half the viewport
    var compensation = $(window).height() / 2;
    var scrollPos = $(document).scrollTop();
    var footer = ($('#page-footer').offset().top) - compensation;


    //Homepage %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    if ($('body').is('.body-homepage')) {

     // calculate where the sections start
     //Homepage
     var statement = ($('.internet-statement').offset().top) ;
     var projects = ($('.projects').offset().top) - compensation;
     var knowmore = ($('.know-more-about').offset().top) - compensation;
     $('.section-title-underlay span').text('Work');
     // Apply text changes
     if (scrollPos >= projects && scrollPos < knowmore) {
      // $('.section-title-underlay span').text('Work');

     }
     else {
       //$('.section-title-underlay span').text('');
     }


     $('.section-title-underlay .movecontainer').toggle(scrollPos >= projects && scrollPos < knowmore);

     $('.section-title-underlay .bars-container').toggle(scrollPos >= statement && scrollPos < projects);

     $('.section-title-underlay img').toggle(scrollPos >= knowmore && scrollPos < footer);



  }

  //About  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  else if ($('body').is('.body-about')) {


    var team = ($('.team').offset().top) - compensation;
    var services = ($('.services').offset().top) - compensation;
    var processs = ($('.process').offset().top) - compensation;
    var clients = ($('.clients').offset().top) - compensation;


    if (scrollPos >= team && scrollPos < services) {

      $('.section-title-underlay span').text('team');
    }
    else if (scrollPos >= services && scrollPos < processs) {

      $('.section-title-underlay span').text('services');
    }
    else if (scrollPos >= processs && scrollPos < clients) {
      $('.section-title-underlay span').text('process');
    }
    else if (scrollPos >= clients && scrollPos < footer) {
      $('.section-title-underlay span').text('clients');
    }
    else {
      $('.section-title-underlay span').text('');
    }

  }





 }); // close scroll function

});
