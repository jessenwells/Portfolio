

if ($(window).width() < 600) {
  $('.gridly').gridly({
    base: 480, // px 
    gutter: 0, // px
    columns: 1
  });
    eventFired = 1;
}
else {
  $('.gridly').gridly({
    base: 480, // px 
    gutter: 0, // px
    columns: 2
  });

}

$(window).on('resize', function() {
if ($(window).width() < 600) {
  $('.gridly').gridly({
    base: 480, // px 
    gutter: 0, // px
    columns: 1
  });
}
else {
  $('.gridly').gridly({
    base: 480, // px 
    gutter: 0, // px
    columns: 2
  });
}
  });

$("#time").append($("<p>").text(moment().format("MMM Do YYYY, h:mm a")));

$('body').css({opacity:"0"});
$('body').delay(1000).animate({opacity: "1"}, 800);

$(document).ready(function() {
var $pulse = $('.pulse');
function runIt() {
$pulse.animate({opacity:"0.9"}, 1800).animate({opacity:"0"}, 1800, function(){$pulse.removeAttr("style");
runIt();
});
}
runIt();
});

//

$(document).ready(function() {
var $pulse = $('.pulse2');
function runIt() {
$pulse.animate({opacity:"0"}, 1800).animate({opacity:"1"}, 1800, function(){$pulse.removeAttr("style");
runIt();
});
}
runIt();
});

//

$(document).ready(function() {
var $pulse = $('.pulse3');
function runIt() {
$pulse.animate({opacity:"0"}, 1800).animate({opacity:"1"}, 1800, function(){$pulse.removeAttr("style");
runIt();
});
}
runIt();
});



var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
$('.input').delay(1200).animateNumber(
  {
    number: 8645,
    numberStep: comma_separator_number_step
  }, 1600
);

var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
$('.input2').delay(1200).animateNumber(
  {
    number: 6389,
    numberStep: comma_separator_number_step
  }, 1200
);

var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
$('.input3').delay(1200).animateNumber(
  {
    number: 94,
    numberStep: comma_separator_number_step
  }, 800
);