


$(function() {
  if(!$('body.body-casestudy')) return;

  const sect = $('[data-animate]');
  sect.waypoint(function (direction) {
    // Element of current waypoint.
    const wEl = $(this.element);
     const dataValue = wEl.data('animate');

if (direction === 'down') {

       if (dataValue==="yellow"){
         wEl.removeClass('container-invisible');
         wEl.addClass('animacao');
       }
       else if(dataValue==="grey"){
         wEl.removeClass('container-invisible');
         wEl.addClass('animacao_grey');
       }
       else if(dataValue==="white"){
         wEl.removeClass('container-invisible');
         wEl.addClass('animacao_white');
       }
       else if(dataValue==="images"){
         wEl.removeClass('animatecontainer');

       }


}
    //wEl.css('background-color', 'red');

  }, {offset: '60%'});

});
