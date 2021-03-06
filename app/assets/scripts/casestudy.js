
$(function() {
  if(!$('body.body-casestudy')) return;

  $('header .row nav .menu-icon').addClass('menu-icon-white');
  if ($('.dark').length>0) {
  $('header .row nav .menu-icon').removeClass('menu-icon-white');
  }





  const sect = $('[data-animate]');
  sect.waypoint(function (direction) {
    // Element of current waypoint.
    const wEl = $(this.element);
    const dataValue = wEl.data('animate');
    //const sectioncolor = $(this.element).closest('section').css('background-color');
    const sectioncolor = getBackground($(this.element));
    //console.log(sectioncolor);


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
       else if(dataValue==="getcolor"){

         //white
         if (sectioncolor==="rgb(255, 255, 255)"){
           wEl.removeClass('container-invisible');
           wEl.addClass('animacao');
         }
         //grey
         else if (sectioncolor==="rgb(250, 249, 248)"){
           wEl.removeClass('container-invisible');
           wEl.addClass('animacao');

         }
         //red
         else if (sectioncolor==="rgb(248, 42, 84)"){
           wEl.removeClass('container-invisible');
           wEl.addClass('animacao');
         }

         else{
           wEl.removeClass('container-invisible');
           wEl.addClass('animacao');
         }
       }

}
    //wEl.css('background-color', 'red');

  }, {offset: '60%'});

});

function getBackground(jqueryElement) {
    // Is current element's background color set?
    var color = jqueryElement.css("background-color");

    if (color !== 'rgba(0, 0, 0, 0)') {
        // if so then return that color
        return color;
    }

    // if not: are you at the body element?
    if (jqueryElement.is("body")) {
        // return known 'false' value
        return false;
    } else {
        // call getBackground with parent item
        return getBackground(jqueryElement.parent());
    }
}
