$(function() {
  if(!$('body.body-homepage')) return;

// Animations for text and images when scroll
const $homelandh1 = $('.landingpage h1');
const $homelandp = $('.landingpage p');
const $labelguide = $('.label-guide ul');
$homelandh1.waypoint(
  function (direction) {
    if (direction === 'down') {
      $homelandh1.removeClass('container-invisible');
      $redblock.removeClass('animatecontainer');
      $homelandh1.addClass('animacao');
      $labelguide.removeClass('label-guide-animation');
      setTimeout(function () {
        if ($('body').is('.body-homepage')) {
          $homelandp.removeClass('container-invisible');
          $homelandp.addClass('animacao_white');
        } else {
          $homelandp.removeClass('container-invisible');
          $homelandp.addClass('animacao_red');
        }
      }, 200);
    }
  },
  { offset: '60%' }
);

// wecan help
const $wecanhelph2 = $('.wecanhelptext h1');
const $redblock = $('.wecanhelp .redblock');
$redblock.waypoint(
  function (direction) {
    if (direction === 'down') {
      $redblock.addClass('redblockscale');
      $wecanhelph2.removeClass('container-invisible');
      $wecanhelph2.addClass('animacao_red');
    }
  },
  { offset: '60%' }
);

// internet statment
const $internet = $('.internet-statement h1');
$internet.waypoint(
  function (direction) {
    if (direction === 'down') {
      $internet.removeClass('container-invisible');
      $internet.addClass('animacao');
    }
  },
  { offset: '60%' }
);

// Projects
function projectsvariables (article) {
  var projectname =
    '.projects' + ' ' + article + ' ' + 'article .card-resume .card-name';
  var projectstatement =
    '.projects' + ' ' + article + ' ' + 'article .card-resume h2';
  var projectdescription =
    '.projects' + ' ' + article + ' ' + 'article .card-resume .description';
  var projectdetail =
    '.projects' + ' ' + article + ' ' + 'article .card-resume .small';
  var projectimg = '.projects' + ' ' + article + ' ' + 'article .card-shot';

  $(projectname).removeClass('container-invisible');
  $(projectname).addClass('animacao');
  $(projectimg).removeClass('animatecontainer');
  setTimeout(function () {
    $(projectstatement).removeClass('container-invisible');
    $(projectstatement).addClass('animacao');
    setTimeout(function () {
      $(projectdescription).removeClass('container-invisible');
      $(projectdescription).addClass('animacao_grey');
      setTimeout(function () {
        $(projectdetail).removeClass('container-invisible');
        $(projectdetail).addClass('animacao_grey');
      }, 100);
    }, 100);
  }, 100);
}

// Project 1
$('.projects li:nth-child(1)').waypoint(
  function (direction) {
    if (direction === 'down') {
      projectsvariables('li:nth-child(1)');
    }
  },
  { offset: '60%' }
);

// Project 2
$('.projects li:nth-child(2)').waypoint(
  function (direction) {
    if (direction === 'down') {
      projectsvariables('li:nth-child(2)');
    }
  },
  { offset: '60%' }
);

// Project 3
$('.projects li:nth-child(3)').waypoint(
  function (direction) {
    if (direction === 'down') {
      projectsvariables('li:nth-child(3)');
    }
  },
  { offset: '60%' }
);

// Project 4
$('.projects li:nth-child(4)').waypoint(
  function (direction) {
    if (direction === 'down') {
      projectsvariables('li:nth-child(4)');
    }
  },
  { offset: '60%' }
);

// Project 5
$('.projects li:nth-child(5)').waypoint(
  function (direction) {
    if (direction === 'down') {
      projectsvariables('li:nth-child(5)');
    }
  },
  { offset: '60%' }
);

// Project 6
$('.projects li:nth-child(6)').waypoint(
  function (direction) {
    if (direction === 'down') {
      projectsvariables('li:nth-child(6)');
    }
  },
  { offset: '60%' }
);

// Project 7
$('.projects li:nth-child(7)').waypoint(
  function (direction) {
    if (direction === 'down') {
      projectsvariables('li:nth-child(7)');
    }
  },
  { offset: '60%' }
);

// END OF ANIMATIONS FOR TEXT AND IMAGES WHEN Scrollbar

// Variables for strokes animation
var $evenStripe = $('.stroke:nth-child(even)');
var $oddStripe = $('.stroke:nth-child(odd)');
var $logo = $('.logo');
var $strokes = $('.stroke');
var compensation = $(window).height() / 2;

function calcAnimationValues (section) {
  // Variables for strokes animation
  var a = $(section).offset().top - compensation;
  var b = $(document).scrollTop();
  var c = $(section).height();

  var percentage = parseInt(((b - a) / c) * 100);
  var strokeopacity = percentage / 25 - (percentage * percentage) / 2500;
  var strokescale =
    (2 * percentage) / 25 - (percentage * percentage) / 1250;
  return { percentage, strokeopacity, strokescale };
}


});

function scrollhomepage(){

  // calculate where the sections start
  // Homepage
  var landingpage = $('.landingpage').offset().top;
  var projects = $('.projects').offset().top - compensation * 1.5;
  var knowmore = $('.know-more-about').offset().top - compensation;

  // Apply text changes
  if (scrollPos >= projects && scrollPos < knowmore) {
    $('.section-title-underlay span').addClass('fadetext');
  } else {
    $('.section-title-underlay span').removeClass('fadetext');
  }

  // Strokes animation - we know the internet
  if (scrollPos >= landingpage && scrollPos < projects + compensation) {
    let { percentage, strokeopacity, strokescale } = calcAnimationValues(
      '.internet-statement'
    );
    if (percentage >= 0 && percentage <= 100) {
      $evenStripe.css('visibility', 'visible');
      $evenStripe.css('bottom', percentage * 1.5 + '%');
      $evenStripe.css(
        'transform',
        'scaleY(' + strokescale + ') translateY(100%)'
      );

      $oddStripe.css('visibility', 'visible');
      $oddStripe.css('top', percentage * 1.5 + '%');
      $oddStripe.css(
        'transform',
        'scaleY(' + strokescale + ') translateY(-100%)'
      );
      $strokes.css('opacity', strokeopacity);
    } else {
      $evenStripe.css('visibility', 'hidden');
      $oddStripe.css('visibility', 'hidden');
    }

    // Strokes animation - major logo
  } else if (scrollPos >= projects + compensation) {
    let { percentage, strokeopacity } = calcAnimationValues(
      '.know-more-about'
    );
    if (percentage >= 0 && percentage <= 45) {
      $('.know-more-about .logo:nth-child(1)').css(
        'top',
        0.0202 * (percentage * percentage) - 0.5051 + 5 + '%'
      );
      $('.know-more-about .logo:nth-child(3)').css(
        'top',
        0.03125 * (percentage * percentage) -
          0.625 * percentage +
          3.125 +
          5 +
          '%'
      );
      $('.know-more-about .logo:nth-child(5)').css(
        'top',
        0.008929 * (percentage * percentage) +
          0.4464 * percentage +
          5.357 +
          5 +
          '%'
      );
      $('.know-more-about .logo:nth-child(2)').css(
        'bottom',
        0.008929 * (percentage * percentage) +
          0.4464 * percentage +
          5.357 +
          5 +
          '%'
      );
      $('.know-more-about .logo:nth-child(4)').css(
        'bottom',
        (1 / 50) * (percentage * percentage) + 5 + '%'
      );
      $logo.css('opacity', strokeopacity);
    } else {
      $('.know-more-about .logo:nth-child(1)').css('top', '50%');
      $('.know-more-about .logo:nth-child(3)').css('top', '50%');
      $('.know-more-about .logo:nth-child(5)').css('top', '50%');
      $('.know-more-about .logo:nth-child(2)').css('bottom', '50%');
      $('.know-more-about .logo:nth-child(4)').css('bottom', '50%');
    }
  }
};
