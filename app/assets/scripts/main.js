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


  //Variables for stripes moving
  var $evenStripe = $('.internet-statement li:nth-child(even)');
  var $oddStripe = $('.internet-statement li:nth-child(odd)');
  var $widthpercentage= $('.internet-statement ul');

  var a,
      b,
      c,
      compensation,
      second,
      last,
      percentage;

  var elHeight = $('.internet-statement').height();

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
     var statement = ($('.internet-statement').offset().top) - compensation;
     var projects = ($('.projects').offset().top) - compensation;
     var knowmore = ($('.know-more-about').offset().top) - compensation;

     // Apply text changes
     if (scrollPos >= projects && scrollPos < knowmore) {
       $('.section-title-underlay span').text('Work');
     }
     else {
       $('.section-title-underlay span').text('');
     }

     $('.section-title-underlay .bars-animation').toggle(scrollPos >= statement && scrollPos < projects);

     $('.section-title-underlay img').toggle(scrollPos >= knowmore && scrollPos < footer);


     var scroll = $(window).scrollTop();
     $(".coisas").css({'margin-left': scroll*10});


  }

  //About
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


//Stripes animation

  //var compensation = ($(window).height()) / 2;
   //var second = ($('.second').offset().top) - compensation;
   //var last = ($('.last').offset().top) - compensation;

   var a = ($('.internet-statement').offset().top) - compensation; // section distance from top
   var b = $(document).scrollTop();
   var c = elHeight;
   var percentageb;

   var percentage = (((b-a)/c)*100);
   var position=(a+(c/2))-b;

   var elWidth=$('.internet-statement ul').width();


   var currentwidth= (($('.internet-statement ul').width())/($(window).width()))*100;

   //if (elWidth>230 && position>=0){
   percentageb = 100-percentage*1.5;
    //$widthpercentage.css('width', percentageb + '%');


   $evenStripe.css('top', percentage + '%');
   $oddStripe.css('bottom', percentage + '%');



 }); // close scroll function

});
