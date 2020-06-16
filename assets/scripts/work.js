
$(function() {
  if(!$('body.body-work')) return;

  $('.coming-soon').click(function(e) {
    e.preventDefault();
    //do other stuff when a click happens
  });

  const sect = $('[data-animate]');
  sect.waypoint(function (direction) {
    // Element of current waypoint.
    const wEl = $(this.element);
    const dataValue = wEl.data('animate');
    //const sectioncolor = $(this.element).closest('section').css('background-color');
    const sectioncolor = getBackground($(this.element));


if (direction === 'down') {
        if (dataValue==="img-animate"){
          wEl.removeClass('animatecontainer');
        }

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
           wEl.addClass('animacao_white');
         }
         //grey
         else if (sectioncolor==="rgb(250, 249, 248)"){
           wEl.removeClass('container-invisible');
           wEl.addClass('animacao_grey');

         }
         //red
         else if (sectioncolor==="rgb(248, 42, 84)"){
           wEl.removeClass('container-invisible');
           wEl.addClass('animacao_red');
         }

         else{
           return;
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
