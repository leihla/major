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
  var $evenLogo=$('.know-more-about .logo-container .logo:nth-child(even)');
  var $oddLogo=$('.know-more-about .logo-container .logo:nth-child(odd)');
  var $logo = $('.logo');
  var $strokes = $('.stroke');
  var compensation = $(window).height() / 2;

  var teamshow=true;

  function calcAnimationValues (section) {
    //Variables for strokes animation
    var a = ($(section).offset().top) - compensation;
    var b = $(document).scrollTop();
    var c = $(section).height();

    var percentage = parseInt((((b - a) / c) * 100));
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

  //Project 1
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
              setTimeout(function() {$projectimg.removeClass('animatecontainer');//$projectimg.addClass('animacao');
            }, 100);
        }, 100);
    }, 100);
  }, 100);
    }
  }, {offset: '60%'});

  //Project 2
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

//About the major_studio

const $studiophoto1 = $('.about-the-studio .row .studio-photo1');
const $abouttitle = $('.about-the-studio .about-text h1');
const $abouttdescription = $('.about-the-studio .about-text p');
const $studiophoto2 = $('.about-the-studio .row .studio-photo2');
$studiophoto1.waypoint(function(direction){
if (direction == 'down'){
$abouttitle.removeClass('animatecontainer');
$abouttitle.addClass('animacao')
setTimeout(function() {$abouttdescription.removeClass('animatecontainer'); $abouttdescription.addClass('animacao');
  setTimeout(function() {$studiophoto1.removeClass('animatecontainer'); //$studiophoto1.addClass('animacao');
    setTimeout(function() {$studiophoto2.removeClass('animatecontainer'); //$studiophoto2.addClass('animacao');
  }, 200);
}, 200);
}, 200);
}
}, {offset: '60%'});

//Team
const $teamtitle = $('.team h1');
const $teamdescription = $('.team p');
const $teammembdesc1  = $('.team li:nth-child(1) .member-description');
const $teammembfoto1  = $('.team li:nth-child(1) figure');
const $teammembdesc2  = $('.team li:nth-child(2) .member-description');
const $teammembfoto2  = $('.team li:nth-child(2) figure');
const $teammembdesc3  = $('.team li:nth-child(3) .member-description');
const $teammembfoto3  = $('.team li:nth-child(3) figure');
const $teammembdesc4  = $('.team li:nth-child(4) .member-description');
const $teammembfoto4  = $('.team li:nth-child(4) figure');

$teamtitle.waypoint(function(direction){
if (direction == 'down'){
$teamtitle.removeClass('animatecontainer');
$teamtitle.addClass('animacao')
setTimeout(function() {$teamdescription.removeClass('animatecontainer'); $teamdescription.addClass('animacao');
  setTimeout(function() {$teammembdesc1.removeClass('animatecontainer'); $teammembdesc1.addClass('animacao');
    setTimeout(function() {$teammembfoto1.removeClass('animatecontainer');
      setTimeout(function() {$teammembdesc2.removeClass('animatecontainer');$teammembdesc2.addClass('animacao');
        setTimeout(function() {$teammembfoto2.removeClass('animatecontainer');
        setTimeout(function() {$teammembdesc3.removeClass('animatecontainer');$teammembdesc3.addClass('animacao');
          setTimeout(function() {$teammembfoto3.removeClass('animatecontainer');
            setTimeout(function() {$teammembdesc4.removeClass('animatecontainer');$teammembdesc4.addClass('animacao');
              setTimeout(function() {$teammembfoto4.removeClass('animatecontainer');

    }, 100);

  }, 200);

  }, 200);

  }, 200);
  }, 200);
  }, 200);
  }, 200);
}, 200);
}, 200);
}
}, {offset: '60%'});


//services
const $servicestitle = $('.services h1');
const $servicesresearch = $('.services li:nth-child(1)');
const $servicesux =  $('.services li:nth-child(2)');
const $servicesui =  $('.services li:nth-child(3)');
const $servicesfe =  $('.services li:nth-child(4)');
$servicestitle.waypoint(function(direction){
if (direction == 'down'){
$servicestitle.removeClass('animatecontainer');
$servicestitle.addClass('animacao')
setTimeout(function() {$servicesresearch.removeClass('animatecontainer'); //$abouttdescription.addClass('animacao');
  setTimeout(function() {$servicesux.removeClass('animatecontainer'); //$studiophoto1.addClass('animacao');
    setTimeout(function() {$servicesui.removeClass('animatecontainer'); //$studiophoto2.addClass('animacao');
      setTimeout(function() {$servicesfe.removeClass('animatecontainer'); //$studiophoto2.addClass('animacao');
  }, 200);
  }, 200);
}, 200);
}, 200);
}
}, {offset: '60%'});

//process
const $processtitle = $('.process h1');
const $processdesc = $('.process p');
const $processfigure =  $('.process figure');
$processtitle.waypoint(function(direction){
if (direction == 'down'){
$processtitle.removeClass('animatecontainer');
$processtitle.addClass('animacao')
setTimeout(function() {$processdesc.removeClass('animatecontainer'); $processdesc.addClass('animacao');
  setTimeout(function() {$processfigure.removeClass('animatecontainer'); //$studiophoto1.addClass('animacao');

}, 200);
}, 200);
}
}, {offset: '60%'});


//clients
const $clientstitle = $('.clients h1');
const clientsdesc = $('.clients p');
const $clientslogos =  $('.clients ul');
$clientstitle.waypoint(function(direction){
if (direction == 'down'){
$clientstitle.removeClass('animatecontainer');
$clientstitle.addClass('animacao')
setTimeout(function() {clientsdesc.removeClass('animatecontainer'); clientsdesc.addClass('animacao');
  setTimeout(function() {$clientslogos.removeClass('animatecontainer'); //$studiophoto1.addClass('animacao');

}, 200);
}, 200);
}
}, {offset: '60%'});


  //END -----   Animate containers when scroll first time

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
      var projects = ($('.projects').offset().top) - compensation*1.5;
      var knowmore = ($('.know-more-about').offset().top) - compensation;
      var landingpage = ($('.landingpage').offset().top);
      var knowmoreabout= ($('.know-more-about').offset().top);
      var body=$('body');


      // Apply text changes
      if (scrollPos >= projects && scrollPos < knowmore) {
        $('.section-title-underlay span').addClass('fadetext');

      } else {
        $('.section-title-underlay span').removeClass('fadetext');
        //$('.section-title-underlay span').text('');
      }



      // Strokes animation - we know the internet
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
      // Strokes animation - major logo
      } else if (scrollPos >= projects+compensation){
        let {percentage, strokeopacity, strokescale} = calcAnimationValues('.know-more-about');
        if (percentage >= 0 && percentage <= 50) {
          console.log(percentage);
          // $oddLogo.css('visibility', 'visible');
           $('.know-more-about .logo:nth-child(1)').css('top', ((0.02020)*(percentage*percentage) - 0.5051) + '%');
           $('.know-more-about .logo:nth-child(3)').css('top', ((0.03125)*(percentage*percentage)-(0.625*percentage)+3.125) + '%');
           $('.know-more-about .logo:nth-child(5)').css('top', ((0.008929)*(percentage*percentage)+(0.4464*percentage)+5.357) + '%');
           $('.know-more-about .logo:nth-child(2)').css('bottom', ((0.008929)*(percentage*percentage)+(0.4464*percentage)+5.357) + '%');
           $('.know-more-about .logo:nth-child(4)').css('bottom', ((1/50)*(percentage*percentage)) + '%');

           // $evenLogo.css('visibility', 'visible');
          //$evenLogo.css('bottom', ((1/50)*(percentage*percentage)) + '%');
        //$('.logo-container').css('width', 0.5*percentage + '%');
           $logo.css('opacity', strokeopacity);

        } else {
          //$evenStripe.css('visibility', 'hidden');
          //$oddStripe.css('visibility', 'hidden');
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
