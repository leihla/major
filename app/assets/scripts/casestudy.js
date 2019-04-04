$(function() {
  if(!$('body.body-casestudy')) return;

  const sect = $('[data-animate]');
  sect.waypoint(function (direction) {
    const dataValue = $(this.element).data('animate');
    console.log(dataValue);
    $(this.element).css('background-color', 'red');

  }, {offset: '60%'});

});
