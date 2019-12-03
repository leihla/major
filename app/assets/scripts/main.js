/* global $ */
'use strict';

require('./jquery.waypoints.min');
require('./casestudy');
require('./homepage');
require('./about');


function onPageLoad () {
  $(document).ready(function () {
    // Open and Close menu
    let windowPos = 0;
    $('.menu-icon, #contact').click(function () {
      $('.menu-icon').toggleClass('open');
      $('.overlay-menu').removeClass('no-animation');
      $('.overlay-menu').toggleClass('visible');
      $('.overlay-menu').toggleClass('closemenu', 1);

      if ($('.menu-icon').hasClass('open')) {
        windowPos = window.pageYOffset;
        setTimeout(() => {
          $('body').addClass('lock-scrol');
        }, 1000);
      } else {
        $('body').removeClass('lock-scrol');
        window.scrollTo(0, windowPos);
      }

      $('.overlay-menu svg').toggleClass('animatelogo');
      $('.body-about header .row nav .menu-icon rect').toggleClass('menudark');

      setTimeout(function () {
        $('.overlay-menu li:nth-child(1) a').toggleClass('container-invisible');
        $('.overlay-menu li:nth-child(1) a').toggleClass('animacao');
        $('.overlay-menu li:nth-child(1) a').toggleClass('animacao2');

        setTimeout(function () {
          $('.overlay-menu li:nth-child(2) a').toggleClass(
            'container-invisible'
          );
          $('.overlay-menu li:nth-child(2) a').toggleClass('animacao');
          $('.overlay-menu li:nth-child(2) a').toggleClass('animacao2');

          setTimeout(function () {
            $('.overlay-menu li:nth-child(3) a').toggleClass(
              'container-invisible'
            );
            $('.overlay-menu li:nth-child(3) a').toggleClass('animacao');
            $('.overlay-menu li:nth-child(3) a').toggleClass('animacao2');
          }, 300);
        }, 300);
      }, 500);
    });

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


    // Change section title on scroll
    $(document).scroll(function () {
      // calculate half the viewport
      var scrollPos = $(document).scrollTop();
      var footer = $('#page-footer').offset().top - compensation;
      var landingpage = $('.landingpage').offset().top;

      // Homepage %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

      if ($('body').is('.body-homepage')) {

        scrollhomepage();
      }

      // About  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
      else if ($('body').is('.body-about')) {
      scrollabout();
      }

      // Apply label guide disappear
      if (scrollPos > landingpage) {
        $('.label-guide ul').addClass('label-guide-animation');
      } else {
        $('.label-guide ul').removeClass('label-guide-animation');
      }
    }); // close scroll function

    $('header .row h1 a,.overlay-menu .menu li:not(:last-child) a').click(
      function (event) {
        event.preventDefault();
        var self = this;

        $('#page-transition-wrap').addClass('page-transition-wrap');
        $('#page-transition').addClass('page-transition');
        $('#page-transition').addClass('page-transition-animation');
        setTimeout(function () {
          window.location.replace(self);
        }, 1000);
      }
    );


  }); // close document ready
} // close onPageLoad function

// Loading Animation
function preloader () {
  document.getElementById('page-loader-wrap').scrollTop = 0;
  document.getElementById('page-loader-wrap').style.display = 'none';
  document.getElementById('page-loader-wrap').style.overflow = 'hidden';
  $('#page-transition').addClass('page-transition-animation-after');
  setTimeout(function () {
    // delays everything for the animation loading
    $('#page-transition').removeClass('page-transition-animation-after');
    $('#page-transition').removeClass('page-transition');
    $('#page-transition-wrap').removeClass('page-transition-wrap');
    onPageLoad();
  }, 400); // close transition loading
}

window.onload = preloader;
