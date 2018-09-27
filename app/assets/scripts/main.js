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


// Variables for strokes animation
  var $evenStripe = $('.stroke:nth-child(even)');
  var $oddStripe = $('.stroke:nth-child(odd)');
  var $strokes=$('.stroke');

  var a,
    b,
    c,
    compensation,
    second,
    last,
    percentage;
  //var elHeight = $('.internet-statement').height();
  //var elHeight = $('.know-more-about').height();



//Change section title on scroll
  $(document).scroll(function() {

    // calculate half the viewport
    var compensation = $(window).height()/ 2;
    var scrollPos = $(document).scrollTop();
    var footer = ($('#page-footer').offset().top) - compensation;



  //Variables for strokes animation
      var a = ($('.internet-statement').offset().top) - compensation;
      //var a = ($('.know-more-about').offset().top) - compensation;
      var b = $(document).scrollTop();
      var c = $('.internet-statement').height();


      var percentage = (((b-a)/c)*100);
      var strokeopacity=(percentage/25)-((percentage*percentage)/2500);
      var strokescale=(2*percentage/25)-((percentage*percentage)/1250);




    console.log(percentage);



    //Homepage %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    if ($('body').is('.body-homepage')) {

     // calculate where the sections start
     //Homepage
     var statement = ($('.internet-statement').offset().top) - (compensation/2) ;
     var projects = ($('.projects').offset().top) - compensation;
     var knowmore = ($('.know-more-about').offset().top) - compensation;
     var landingpage = ($('.landingpage').offset().top);
     //$('.section-title-underlay span').text('Work');

     // Apply text changes
     if (scrollPos >= projects && scrollPos < knowmore) {
      $('.section-title-underlay span').addClass('movecontainer');
      $('.section-title-underlay span').text('Work');
     }
     else {
       $('.section-title-underlay span').removeClass('movecontainer');
       $('.section-title-underlay span').text('');
     }

     //Apply label guide disappear
     if (scrollPos > landingpage) {
      $('.label-guide ul').addClass('label-guide-animation');
     }
     else {
       $('.label-guide ul').removeClass('label-guide-animation');
     }

//     $('.section-title-underlay .bars-container').toggle(scrollPos >= statement && scrollPos < projects);

     //$('.section-title-underlay img').toggle(scrollPos >= knowmore && scrollPos < footer);

// Strokes animation
//
if (percentage >= 0 && percentage <=100){
    $evenStripe.css('visibility','visible');
    $evenStripe.css('bottom', percentage*1.5 + '%');
     $evenStripe.css('transform', 'scaleY(' + strokescale + ') translateY(100%)');
    // $evenStripe.css('transform', 'scaleY(' + strokeopacity + ') translateY(50%)');

    $oddStripe.css('visibility','visible');
    $oddStripe.css('top', percentage*1.5 + '%');
     $oddStripe.css('transform', 'scaleY(' + strokescale + ') translateY(-100%)');
    // $oddStripe.css('transform', 'scaleY(' + strokeopacity + ') translateY(-50%)');
    $strokes.css('opacity',strokeopacity);

   }

   else{
    $evenStripe.css('visibility','hidden');
    $oddStripe.css('visibility','hidden');
   }


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
