'use strict';
//require('./config')

//Open and Close menu
$(document).ready(function () {
  $(".menu-icon").click(function () {
    $(this).toggleClass('open');
    $(".overlay-menu").removeClass('no-animation');
    $(".overlay-menu").toggleClass('visible');
    $(".overlay-menu").toggleClass('closemenu', 1);
  });


  // Variables for strokes animation
  var $evenStripe = $('.stroke:nth-child(even)');
  var $oddStripe = $('.stroke:nth-child(odd)');
  var $strokes = $('.stroke');
  var compensation = $(window).height() / 2;

  var teamshow=true;

  function calcAnimationValues (section) {
    //Variables for strokes animation
    var a = ($(section).offset().top) - compensation;
    //var a = ($('.know-more-about').offset().top) - compensation;
    var b = $(document).scrollTop();
    var c = $(section).height();


    var percentage = (((b - a) / c) * 100);
    var strokeopacity = (percentage / 25) - ((percentage * percentage) / 2500);
    var strokescale = (2 * percentage / 25) - ((percentage * percentage) / 1250);

    return {percentage, strokeopacity, strokescale};
  }

  //Change section title on scroll
  $(document).scroll(function () {
    // calculate half the viewport
    var scrollPos = $(document).scrollTop();
    var footer = ($('#page-footer').offset().top) - compensation;
    var landingpage = ($('.landingpage').offset().top);


    //Homepage %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    if ($('body').is('.body-homepage')) {
      // calculate where the sections start
      //Homepage
      var landingpage = ($('.landingpage').offset().top);
      var statement = ($('.internet-statement').offset().top) - (compensation / 2);
      var projects = ($('.projects').offset().top) - compensation;
      var knowmore = ($('.know-more-about').offset().top) - compensation;
      var landingpage = ($('.landingpage').offset().top);
      var knowmoreabout= ($('.know-more-about').offset().top);
      var body=$('body');


      // Apply text changes
      if (scrollPos >= projects && scrollPos < knowmore) {
        $('.section-title-underlay span').addClass('movecontainer');
        $('.section-title-underlay span').text('Work');
      } else {
        $('.section-title-underlay span').removeClass('movecontainer');
        $('.section-title-underlay span').text('');
      }

      // if (scrollPos >= knowmoreabout ) {
      //   body.css('transition', 'all 0.5s')
      //   body.addClass('know-more-about-red');
      // }
      //
      // else{
      //   body.removeClass('know-more-about-red');
      // }
      //movecontainerframes



       var animatecontainer=($('.wecanhelptext').offset().top)-compensation;
       if (scrollPos >= animatecontainer ) {


       }

      var container=$('.wecanhelptext');
      var containerchild=$('.wecanhelptext>*');
      var numofchild=$('.wecanhelptext >*').length;

      var i = 0;
      movecontainer();

      function movecontainer() {

          if (i < numofchild) {
            $(containerchild[i]).removeClass('animatecontainer');
            i++;
            setTimeout(movecontainer, 200);
          }
      }




      // Strokes animation
      if (scrollPos >= landingpage && scrollPos < projects+compensation) {
        let {percentage, strokeopacity, strokescale} = calcAnimationValues('.internet-statement');
        if (percentage >= 0 && percentage <= 100) {
          $evenStripe.css('visibility', 'visible');
          $evenStripe.css('bottom', percentage * 1.5 + '%');
          $evenStripe.css('transform', 'scaleY(' + strokescale + ') translateY(100%)');

          $oddStripe.css('visibility', 'visible');
          $oddStripe.css('top', percentage * 1.5 + '%');
          $oddStripe.css('transform', 'scaleY(' + strokescale + ') translateY(-100%)');
          $strokes.css('opacity', strokeopacity);

        } else {
          $evenStripe.css('visibility', 'hidden');
          $oddStripe.css('visibility', 'hidden');
        }
      } else if (scrollPos >= projects+compensation){
        let {percentage, strokeopacity, strokescale} = calcAnimationValues('.know-more-about');
        if (percentage >= 0 && percentage <= 100) {
          $evenStripe.css('visibility', 'visible');
          $evenStripe.css('bottom', percentage * 1.5 + '%');
          $evenStripe.css('transform', 'scaleY(' + 1 + ')');

          $oddStripe.css('visibility', 'visible');
          $oddStripe.css('top', percentage * 1.5 + '%');
          $oddStripe.css('transform', 'scaleY(' + 1 + ')');

          $strokes.css('opacity', strokeopacity);


        } else {
          $evenStripe.css('visibility', 'hidden');
          $oddStripe.css('visibility', 'hidden');
        }
      }
    }

    //About  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    else if ($('body').is('.body-about')) {


      var team = ($('.team').offset().top) - compensation;
      var services = ($('.services').offset().top) - compensation;
      var processs = ($('.process').offset().top) - compensation;
      var clients = ($('.clients').offset().top) - compensation;


      if (scrollPos >= team && scrollPos < services) {
        $('.section-title-underlay ul li:not(:nth-child(1))').removeClass("fadetext");
        $('.section-title-underlay ul li:nth-child(1)').addClass('fadetext');
      } else if (scrollPos >= services && scrollPos < processs) {
        $('.section-title-underlay ul li:not(:nth-child(2))').removeClass("fadetext");
        $('.section-title-underlay ul li:nth-child(2)').addClass("fadetext");
      } else if (scrollPos >= processs && scrollPos < clients) {
        $('.section-title-underlay ul li:not(:nth-child(3))').removeClass("fadetext");
        $('.section-title-underlay ul li:nth-child(3)').addClass("fadetext");
      } else if (scrollPos >= clients && scrollPos < footer) {
        $('.section-title-underlay ul li:not(:nth-child(4))').removeClass("fadetext");
        $('.section-title-underlay ul li:nth-child(4)').addClass("fadetext");
      } else {
        $('.section-title-underlay ul li').removeClass("fadetext");
      }

    }







    //Apply label guide disappear
    if (scrollPos > landingpage) {
      $('.label-guide ul').addClass('label-guide-animation');
    } else {
      $('.label-guide ul').removeClass('label-guide-animation');
    }


  }); // close scroll function

});
