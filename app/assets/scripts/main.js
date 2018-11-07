'use strict';
//require('./config')

require('./jquery.waypoints.min')

function onPageLoad(){

$(document).ready(function () {
//Open and Close menu
  $(".menu-icon, #contact" ).click(function () {
    $('.menu-icon').toggleClass('open');
    $(".overlay-menu").removeClass('no-animation');
    $(".overlay-menu").toggleClass('visible');
    $(".overlay-menu").toggleClass('closemenu', 1);
    $('body').toggleClass('lock-scrol');
    $(".overlay-menu svg").toggleClass('animatelogo');
    $(".body-about header .row nav .menu-icon rect").toggleClass('menudark');

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


//Change menu color -  ABOUT menu
// const $menu = $('.body-about header .row nav .menu-icon rect');
// const $aboutthestudio = $('.about-the-studio');
// $('.body-about header .row nav .menu-icon rect').addClass('menuwhite')
// $aboutthestudio.waypoint(function(direction){
//   if (direction == 'down'){
//   $menu.removeClass('menuwhite')
//   } else {
//     $menu.addClass('menuwhite')
//   }
// }, {offset: '7%'});

//Change menu color -  ABOUT label guide
// $('.label-guide').addClass('.label-guide-white');
// if ($('body').is('.body-about')) {
//
//   $('.label-guide').addClass('label-guide-white');
//
// }


$('.wecanhelp .redblock').addClass('redblockscale');
setTimeout(function() {
  $('.wecanhelp .redblock').removeClass('redblockscale');
}, 5000);


  //Animate containers when scroll first time
    //Landing page
    const $homelandh1 = $('.landingpage h1');
    const $homelandp = $('.landingpage p');
    const $redblock = $('.wecanhelp .redblock');
    const $labelguide = $('.label-guide ul');
    $homelandh1.waypoint(function(direction){
    if (direction == 'down'){
    $homelandh1.removeClass('container-invisible');
    $redblock.removeClass('animatecontainer');
    $homelandh1.addClass('animacao');
    $labelguide.removeClass('label-guide-animation');
    setTimeout(function() {
      $homelandp.removeClass('container-invisible');
      $homelandp.addClass('animacao');
  }, 200);
    }
  }, {offset: '60%'});

    //wecan help
    const $wecanhelp = $('.wecanhelptext h1');
    const $wecanhelpp = $('.wecanhelptext p');
    const $wecanhelpillust = $('.wecanhelp .redblock img');
    $wecanhelp.waypoint(function(direction){
    if (direction == 'down'){
    $wecanhelp.removeClass('container-invisible')
    $wecanhelp.addClass('animacao')
    setTimeout(function() {
      $wecanhelpp.removeClass('container-invisible');
      $wecanhelpp.addClass('animacao');
      $wecanhelpillust.removeClass('animate-help');
  }, 200);
    }
  }, {offset: '60%'});


    //internet statment
    const $internet = $('.internet-statement h1');
    $internet.waypoint(function(direction){
    if (direction == 'down'){
    $internet.removeClass('container-invisible');
    $internet.addClass('animacao')
    }
  }, {offset: '60%'});


// Projects
  function projectsvariables(article) {
    var project = ('.projects'+' '+article);
    var projectname = ('.projects'+' '+article+' '+'article .card-resume .card-name');
    var projectstatement = ('.projects'+' '+article+' '+'article .card-resume h2');
    var projectdescription = ('.projects'+' '+article+' '+'article .card-resume .description');
    var projectdetail = ('.projects'+' '+article+' '+'article .card-resume .small');
    var projectimg = ('.projects'+' '+article+' '+'article .card-shot');

  setTimeout(function() {$(projectname).removeClass('container-invisible'); $(projectname).addClass('animacao');
    setTimeout(function() {$(projectstatement).removeClass('container-invisible');$(projectstatement).addClass('animacao');
      setTimeout(function() {$(projectdescription).removeClass('container-invisible');$(projectdescription).addClass('animacao');
          setTimeout(function() {$(projectdetail).removeClass('container-invisible');$(projectdetail).addClass('animacao');
              setTimeout(function() {$(projectimg).removeClass('animatecontainer');
            }, 100);
        }, 100);
    }, 100);
  }, 100);
}, 100);

  return;

  }

//Project 1
    $('.projects li:nth-child(1)').waypoint(function(direction){
      if (direction == 'down'){
      projectsvariables('li:nth-child(1)');
        }
      }, {offset: '60%'});

//Project 2
    $('.projects li:nth-child(2)').waypoint(function(direction){
      if (direction == 'down'){
      projectsvariables('li:nth-child(2)');
        }
      }, {offset: '60%'});

//Project 3
    $('.projects li:nth-child(3)').waypoint(function(direction){
      if (direction == 'down'){
      projectsvariables('li:nth-child(3)');
        }
      }, {offset: '60%'});

//Project 4
    $('.projects li:nth-child(4)').waypoint(function(direction){
      if (direction == 'down'){
      projectsvariables('li:nth-child(4)');
        }
      }, {offset: '60%'});

//Project 5
    $('.projects li:nth-child(5)').waypoint(function(direction){
      if (direction == 'down'){
      projectsvariables('li:nth-child(5)');
        }
      }, {offset: '60%'});

//Project 6
    $('.projects li:nth-child(6)').waypoint(function(direction){
      if (direction == 'down'){
      projectsvariables('li:nth-child(6)');
        }
      }, {offset: '60%'});

//Project 7
    $('.projects li:nth-child(7)').waypoint(function(direction){
      if (direction == 'down'){
      projectsvariables('li:nth-child(7)');
        }
      }, {offset: '60%'});

//About the major_studio

const $studiophoto1 = $('.about-the-studio .row .studio-photo1');
const $abouttitle = $('.about-the-studio .about-text h1');
const $abouttdescription = $('.about-the-studio .about-text p');
const $studiophoto2 = $('.about-the-studio .row .studio-photo2');
$studiophoto1.waypoint(function(direction){
if (direction == 'down'){
$abouttitle.removeClass('container-invisible');
$abouttitle.addClass('animacao')
setTimeout(function() {$abouttdescription.removeClass('container-invisible'); $abouttdescription.addClass('animacao');
  setTimeout(function() {$studiophoto1.removeClass('animatecontainer'); //$studiophoto1.addClass('animacao');
    setTimeout(function() {$studiophoto2.removeClass('animatecontainer'); //$studiophoto2.addClass('animacao');
  }, 200);
}, 200);
}, 200);
}
}, {offset: '60%'});

//Studio philosophy
const $studiolongdescription = $('.about-the-studio .studio-description h2');
$studiolongdescription.waypoint(function(direction){
if (direction == 'down'){
$studiolongdescription.removeClass('container-invisible');
$studiolongdescription.addClass('animacao');
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
$teamtitle.removeClass('container-invisible');
$teamtitle.addClass('animacao')
setTimeout(function() {$teamdescription.removeClass('container-invisible'); $teamdescription.addClass('animacao');
  setTimeout(function() {$teammembdesc1.removeClass('container-invisible'); $teammembdesc1.addClass('animacao');
    setTimeout(function() {$teammembfoto1.removeClass('animatecontainer');
      setTimeout(function() {$teammembdesc2.removeClass('container-invisible');$teammembdesc2.addClass('animacao');
        setTimeout(function() {$teammembfoto2.removeClass('animatecontainer');
        setTimeout(function() {$teammembdesc3.removeClass('container-invisible');$teammembdesc3.addClass('animacao');
          setTimeout(function() {$teammembfoto3.removeClass('animatecontainer');
            setTimeout(function() {$teammembdesc4.removeClass('container-invisible');$teammembdesc4.addClass('animacao');
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
$servicestitle.removeClass('container-invisible');
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
$processfigure.waypoint(function(direction){
if (direction == 'down'){
$processtitle.removeClass('container-invisible');
$processtitle.addClass('animacao')
setTimeout(function() {$processdesc.removeClass('container-invisible'); $processdesc.addClass('animacao');
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
$clientstitle.removeClass('container-invisible');
$clientstitle.addClass('animacao')
setTimeout(function() {clientsdesc.removeClass('container-invisible'); clientsdesc.addClass('animacao');
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
        if (percentage >= 0 && percentage <=45) {

           $('.know-more-about .logo:nth-child(1)').css('top', ((0.02020)*(percentage*percentage) - 0.5051)+5 + '%');
           $('.know-more-about .logo:nth-child(3)').css('top', ((0.03125)*(percentage*percentage)-(0.625*percentage)+3.125)+5 + '%');
           $('.know-more-about .logo:nth-child(5)').css('top', ((0.008929)*(percentage*percentage)+(0.4464*percentage)+5.357)+5 + '%');
           $('.know-more-about .logo:nth-child(2)').css('bottom', ((0.008929)*(percentage*percentage)+(0.4464*percentage)+5.357)+5 + '%');
           $('.know-more-about .logo:nth-child(4)').css('bottom', ((1/50)*(percentage*percentage))+5 + '%');
           $logo.css('opacity', strokeopacity);

        } else {
          $('.know-more-about .logo:nth-child(1)').css('top','50%');
          $('.know-more-about .logo:nth-child(3)').css('top','50%');
          $('.know-more-about .logo:nth-child(5)').css('top','50%');
          $('.know-more-about .logo:nth-child(2)').css('bottom','50%');
          $('.know-more-about .logo:nth-child(4)').css('bottom','50%');
        }
      }
    }

    //About  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    else if ($('body').is('.body-about')) {

      var compensationabout = $(window).height() / 1.2;
      var team = ($('.team').offset().top) - compensationabout;
      var services = ($('.services').offset().top) - compensationabout;
      var processs = ($('.process').offset().top) - compensationabout;
      var clients = ($('.clients').offset().top) - compensationabout;


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






  $('header .row h1 a,.overlay-menu .menu li:not(:last-child) a').click(function(event){
    event.preventDefault();
    var self = this;

    $('#page-transition-wrap').addClass('page-transition-wrap');
    $('#page-transition').addClass('page-transition');
    $('#page-transition').addClass('page-transition-animation');
    setTimeout(function() {
         window.location.replace(self);
    }, 1000);
    });


}); //close document ready

} // close onPageLoad function



//Loading Animation
 function preloader() {
     document.getElementById("page-loader-wrap").scrollTop = 0;
     document.getElementById("page-loader-wrap").style.display = "none";
     document.getElementById("page-loader-wrap").style.overflow = "hidden";
     $('#page-transition').addClass('page-transition-animation-after');
     setTimeout(function() { // delays everything for the animation loading
     $('#page-transition').removeClass('page-transition-animation-after');
     $('#page-transition').removeClass('page-transition');
     $('#page-transition-wrap').removeClass('page-transition-wrap');
        onPageLoad();
      }, 500); //close transition loading



}


window.onload = preloader;
