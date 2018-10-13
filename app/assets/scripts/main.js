'use strict';
//require('./config')

require('./jquery.waypoints.min')

//Open and Close menu
$(document).ready(function () {
  $(".menu-icon").click(function () {
    $(this).toggleClass('open');
    $(".overlay-menu").removeClass('no-animation');
    $(".overlay-menu").toggleClass('visible');
    $(".overlay-menu").toggleClass('closemenu', 1);
    $('body').toggleClass('lock-scrol');

    setTimeout(function() {
      $(".overlay-menu li:nth-child(1) a").toggleClass('animatecontainer');
      $(".overlay-menu li:nth-child(1) a").toggleClass('animacao');
      $(".overlay-menu li:nth-child(1) a").toggleClass('animacao2');

      setTimeout(function() {
        $(".overlay-menu li:nth-child(2) a").toggleClass('animatecontainer');
        $(".overlay-menu li:nth-child(2) a").toggleClass('animacao');
        $(".overlay-menu li:nth-child(2) a").toggleClass('animacao2');

          setTimeout(function() {
            $(".overlay-menu li:nth-child(3) a").toggleClass('animatecontainer');
            $(".overlay-menu li:nth-child(3) a").toggleClass('animacao');
            $(".overlay-menu li:nth-child(3) a").toggleClass('animacao2');

          }, 300);
      }, 300);
    }, 500);

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

  //Animate containers when scroll first time
    //Landing page
    const $homelandh1 = $('.landingpage h1');
    const $homelandp = $('.landingpage p');
    const $redblock = $('.wecanhelp .redblock');
    const $labelguide = $('.label-guide ul');
    $homelandh1.waypoint(function(direction){
    if (direction == 'down'){
    $homelandh1.removeClass('animatecontainer');
    $redblock.removeClass('animatecontainer');
    $homelandh1.addClass('animacao');
    $labelguide.removeClass('label-guide-animation');
    setTimeout(function() {
      $homelandp.removeClass('animatecontainer');
      $homelandp.addClass('animacao');
  }, 200);
    }
  }, {offset: '60%'});

    //wecan help
    const $wecanhelp = $('.wecanhelptext h1');
    const $wecanhelpp = $('.wecanhelptext p');
    $wecanhelp.waypoint(function(direction){
    if (direction == 'down'){
    $wecanhelp.removeClass('animatecontainer')
    $wecanhelp.addClass('animacao')
    setTimeout(function() {
      $wecanhelpp.removeClass('animatecontainer');
      $wecanhelpp.addClass('animacao');
  }, 200);
    }
  }, {offset: '60%'});


    //internet statment
    const $internet = $('.internet-statement h1');
    $internet.waypoint(function(direction){
    if (direction == 'down'){
    $internet.removeClass('animatecontainer');
    $internet.addClass('animacao')
    }
  }, {offset: '60%'});

    const $project = $('.projects li:nth-child(1)');
    const $projectname = $('.projects li:nth-child(1) article .card-resume .card-name');
    const $projectstatement = $('.projects li:nth-child(1) article .card-resume h2');
    const $projectdescription = $('.projects li:nth-child(1) article .card-resume .description');
    const $projectdetail = $('.projects li:nth-child(1) article .card-resume .small');
    const $projectimg = $('.projects li:nth-child(1) article .card-shot');
    $project.waypoint(function(direction){
    if (direction == 'down'){
    $projectname.removeClass('animatecontainer')
    $projectname.addClass('animacao');
    setTimeout(function() {$projectstatement.removeClass('animatecontainer');$projectstatement.addClass('animacao');
      setTimeout(function() {$projectdescription.removeClass('animatecontainer');$projectdescription.addClass('animacao');
          setTimeout(function() {$projectdetail.removeClass('animatecontainer');$projectdetail.addClass('animacao');
              setTimeout(function() {$projectimg.removeClass('animatecontainer');$projectimg.addClass('animacao');
            }, 100);
        }, 100);
    }, 100);
  }, 100);
    }
  }, {offset: '60%'});


    const $project2 = $('.projects li:nth-child(2)');
    const $projectname2 = $('.projects li:nth-child(2) article .card-resume .card-name');
    const $projectstatement2 = $('.projects li:nth-child(2) article .card-resume h2');
    const $projectdescription2 = $('.projects li:nth-child(2) article .card-resume .description');
    const $projectdetail2 = $('.projects li:nth-child(2) article .card-resume .small');
    const $projectimg2 = $('.projects li:nth-child(2) article .card-shot');
    $project2.waypoint(function(direction){
    if (direction == 'down'){
    $projectname2.removeClass('animatecontainer');
    $projectname2.addClass('animacao');
    setTimeout(function() {$projectstatement2.removeClass('animatecontainer');$projectstatement2.addClass('animacao');
      setTimeout(function() {$projectdescription2.removeClass('animatecontainer');$projectdescription2.addClass('animacao');
          setTimeout(function() {$projectdetail2.removeClass('animatecontainer');$projectdetail2.addClass('animacao');
              setTimeout(function() {$projectimg2.removeClass('animatecontainer');$projectimg2.addClass('animacao');
            }, 100);
        }, 100);
    }, 100);
  }, 100);
    }
  }, {offset: '60%'});



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
