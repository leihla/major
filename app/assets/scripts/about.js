$(function() {
  if(!$('body.body-about')) return;
// About the major_studio
const $abouttdescription = $('.about-the-studio .about-text p');
const $abouttitle = $('.about-the-studio .about-text h2');
const $studiofigure = $('.about-the-studio .row figure');
$studiofigure.waypoint(
  function (direction) {
    if (direction === 'down') {
      $studiofigure.removeClass('animatecontainer');
      $abouttitle.removeClass('container-invisible');
      $abouttitle.addClass('animacao');
      setTimeout(function () {
        $abouttdescription.removeClass('container-invisible');
        $abouttdescription.addClass('animacao_white');
      }, 100);
    }
  },
  { offset: '95%' }
);

// Studio philosophy
const $studiolongdescription = $(
  '.about-the-studio .studio-description h1'
);
$studiolongdescription.waypoint(
  function (direction) {
    if (direction === 'down') {
      $studiolongdescription.removeClass('container-invisible');
      $studiolongdescription.addClass('animacao_white');
    }
  },
  { offset: '60%' }
);

// Team
const $teamtitle = $('.team .team-text h1');
const $teamdescription = $('.team .team-text p');
const $teammembdesc1 = $('.team li:nth-child(1) .member-description');
const $teammembfoto1 = $('.team li:nth-child(1) figure');
const $teammembdesc2 = $('.team li:nth-child(2) .member-description');
const $teammembfoto2 = $('.team li:nth-child(2) figure');
const $teammembdesc3 = $('.team li:nth-child(3) .member-description');
const $teammembfoto3 = $('.team li:nth-child(3) figure');
const $teammembdesc4 = $('.team li:nth-child(4) .member-description');
const $teammembfoto4 = $('.team li:nth-child(4) figure');

$teamtitle.waypoint(
  function (direction) {
    if (direction === 'down') {
      $teamtitle.removeClass('container-invisible');
      $teamtitle.addClass('animacao');
      setTimeout(function () {
        $teamdescription.removeClass('container-invisible');
        $teamdescription.addClass('animacao_white');
        setTimeout(function () {
          $teammembdesc1.removeClass('container-invisible');
          $teammembdesc1.addClass('animacao_grey');
          setTimeout(function () {
            $teammembfoto1.removeClass('animatecontainer');
            setTimeout(function () {
              $teammembdesc2.removeClass('container-invisible');
              $teammembdesc2.addClass('animacao_grey');
              setTimeout(function () {
                $teammembfoto2.removeClass('animatecontainer');
                setTimeout(function () {
                  $teammembdesc3.removeClass('container-invisible');
                  $teammembdesc3.addClass('animacao_grey');
                  setTimeout(function () {
                    $teammembfoto3.removeClass('animatecontainer');
                    setTimeout(function () {
                      $teammembdesc4.removeClass('container-invisible');
                      $teammembdesc4.addClass('animacao_grey');
                      setTimeout(function () {
                        $teammembfoto4.removeClass('animatecontainer');
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
  },
  { offset: '60%' }
);

// services
const $servicestitle = $('.services h1');
const $servicesresearch = $('.services li:nth-child(1)');
const $servicesux = $('.services li:nth-child(2)');
const $servicesui = $('.services li:nth-child(3)');
const $servicesfe = $('.services li:nth-child(4)');
$servicestitle.waypoint(
  function (direction) {
    if (direction === 'down') {
      $servicestitle.removeClass('container-invisible');
      $servicestitle.addClass('animacao');
      setTimeout(function () {
        $servicesresearch.removeClass('animatecontainer'); // $abouttdescription.addClass('animacao');
        setTimeout(function () {
          $servicesux.removeClass('animatecontainer'); // $studiophoto1.addClass('animacao');
          setTimeout(function () {
            $servicesui.removeClass('animatecontainer'); // $studiophoto2.addClass('animacao');
            setTimeout(function () {
              $servicesfe.removeClass('animatecontainer'); // $studiophoto2.addClass('animacao');
            }, 200);
          }, 200);
        }, 200);
      }, 200);
    }
  },
  { offset: '60%' }
);

// process
const $processtitle = $('.process h1');
const $processdesc = $('.process p');
const $processfigure = $('.process figure');
$processtitle.waypoint(
  function (direction) {
    if (direction === 'down') {
      $processtitle.removeClass('container-invisible');
      $processtitle.addClass('animacao');
      setTimeout(function () {
        $processdesc.removeClass('container-invisible');
        $processdesc.addClass('animacao_grey');
        setTimeout(function () {
          $processfigure.removeClass('animatecontainer'); // $studiophoto1.addClass('animacao');
        }, 200);
      }, 200);
    }
  },
  { offset: '60%' }
);

// clients
const $clientstitle = $('.clients h1');
const clientsdesc = $('.clients p');
const $clientslogos = $('.clients ul');
$clientstitle.waypoint(
  function (direction) {
    if (direction === 'down') {
      $clientstitle.removeClass('container-invisible');
      $clientstitle.addClass('animacao');
      setTimeout(function () {
        clientsdesc.removeClass('container-invisible');
        clientsdesc.addClass('animacao_white');
        setTimeout(function () {
          $clientslogos.removeClass('animatecontainer'); // $studiophoto1.addClass('animacao');
        }, 200);
      }, 200);
    }
  },
  { offset: '60%' }
);

  // Team images HOVER
  if ($(window).width() > 800) {
    $(
      '.team ul li figure img, .team ul li .member-long-description'
    ).mouseover(function () {
      var index =
        $(this)
          .closest('li')
          .index() + 1;
      $('.team ul li:nth-child(' + index + ') .member-long-description').css(
        'visibility',
        'visible'
      );
      $(
        '.team ul li:nth-child(' + index + ') .member-long-description'
      ).addClass('animacao');
      $('.team ul li:nth-child(' + index + ') .smiling').css(
        'visibility',
        'visible'
      );
    });

    $(
      '.team ul li figure img, .team ul li .member-long-description'
    ).mouseout(function () {
      var index =
        $(this)
          .closest('li')
          .index() + 1;
      $('.team ul li:nth-child(' + index + ') .member-long-description').css(
        'visibility',
        'hidden'
      );
      $(
        '.team ul li:nth-child(' + index + ') .member-long-description'
      ).removeClass('animacao');
      $('.team ul li:nth-child(' + index + ') .smiling').css(
        'visibility',
        'hidden'
      );
    });
  }
  // Team images HOVER

  if ($(window).width() > 800) {
    $(
      '.team ul li figure img, .team ul li .member-long-description'
    ).mouseover(function () {
      var index =
        $(this)
          .closest('li')
          .index() + 1;
      $('.team ul li:nth-child(' + index + ') .member-long-description').css(
        'visibility',
        'visible'
      );
      $(
        '.team ul li:nth-child(' + index + ') .member-long-description'
      ).addClass('animacao');
      $('.team ul li:nth-child(' + index + ') .smiling').css(
        'visibility',
        'visible'
      );
    });

    $(
      '.team ul li figure img, .team ul li .member-long-description'
    ).mouseout(function () {
      var index =
        $(this)
          .closest('li')
          .index() + 1;
      $('.team ul li:nth-child(' + index + ') .member-long-description').css(
        'visibility',
        'hidden'
      );
      $(
        '.team ul li:nth-child(' + index + ') .member-long-description'
      ).removeClass('animacao');
      $('.team ul li:nth-child(' + index + ') .smiling').css(
        'visibility',
        'hidden'
      );
    });
  }

  window.scrollabout = function (){
    var compensationabout = $(window).height() / 2;
    var compensationtitle = $('.section-title-underlay ul li').height() / 2;
    var mission = $('.studio-description').offset().top - compensationabout;
    var team = $('.team').offset().top - compensationabout;
    var services = $('.services').offset().top - compensationabout;
    var processs = $('.process').offset().top - compensationabout;
    var clients = $('.clients').offset().top - compensationabout;
    var scrollPos = $(document).scrollTop();
    var footer = $('#page-footer').offset().top - compensationabout;

    if (scrollPos >= team && scrollPos < services - compensationtitle) {
      $('.section-title-underlay ul li:not(:nth-child(1))').removeClass(
        'fadetext'
      );
      $('.section-title-underlay ul li:nth-child(1)').addClass('fadetext');
    } else if (
      scrollPos >= services &&
      scrollPos < processs - compensationtitle
    ) {
      $('.section-title-underlay ul li:not(:nth-child(2))').removeClass(
        'fadetext'
      );
      $('.section-title-underlay ul li:nth-child(2)').addClass('fadetext');
    } else if (
      scrollPos >= processs &&
      scrollPos < clients - compensationtitle
    ) {
      $('.section-title-underlay ul li:not(:nth-child(3))').removeClass(
        'fadetext'
      );
      $('.section-title-underlay ul li:nth-child(3)').addClass('fadetext');
    } else if (
      scrollPos >= clients &&
      scrollPos < footer - compensationtitle
    ) {
      $('.section-title-underlay ul li:not(:nth-child(4))').removeClass(
        'fadetext'
      );
      $('.section-title-underlay ul li:nth-child(4)').addClass('fadetext');
    } else if (
      scrollPos >= mission &&
      scrollPos < team - compensationtitle
    ) {
      $('.section-title-underlay ul li:not(:nth-child(5))').removeClass(
        'fadetext'
      );
      $('.section-title-underlay ul li:nth-child(5)').addClass('fadetext');
    } else {
      $('.section-title-underlay ul li').removeClass('fadetext');
    }
  };

  });
