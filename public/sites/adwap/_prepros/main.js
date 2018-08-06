//@prepros-prepend animation.js

checkSize();
$(window).resize(checkSize);

//MOBILE MENU
$(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });

//MOBILE BUTTON
$( ".navbar-toggle" ).click(function() {
  $(this).toggleClass("xx yy");
});

///NAV COLLAPSE
//ON SCROLL
function screenBig() {
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        tl2.play();
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        tl2.reverse();

    }
});
}
function screenSmall() {
$(window).scroll(function() {
    if ($(".navbar").offset().top > 0) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        tl2.reverse();
    }
});
$(window).resize(function() {
    if ($(".navbar").offset().top > 0) {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        tl2.reverse();
    }
});
}


///SMOOTH SCROLL
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

///COUNTER
$(window).one("scroll",function(){
    if ($("#counter").offset().top > 50) {
        $('.input span').stop().animateNumber(
          {
            number: 1006375
          }, 1200
        );
    }
});

/// RADIO LIKE CHECKBOX
var allRadios = document.getElementsByName('select');
var booRadio;
var x = 0;
for (x = 0; x < allRadios.length; x++) {
  allRadios[x].onclick = function() {
    if (booRadio == this) {
      this.checked = false;
      booRadio = null;
    } else {
      booRadio = this;
    }
  };
}

//ON RESIZE
$(document).ready(function() {
    function doneResizing() {
        if(Modernizr.mq('screen and (min-width:768px)')) {
screenBig();
        }
        else if(Modernizr.mq('(min-width: 300px) and (max-width: 768px)')) {
screenSmall();
        }
    }
    var id;
    $(window).resize(function() {
        clearTimeout(id);
        id = setTimeout(doneResizing, 0);
    });
    doneResizing();
});

//

/*
$(document).ready(function clampLg(){
$('.cause').each(function(index, element) {$clamp(element, { clamp: 2, useNativeClamp: false});});
});
$(document).ready(function clampSm(){
$('.cause').each(function(index, element) {$clamp(element, { clamp: 1, useNativeClamp: false});});
});

function checkSize(){
    if ($("#break").css("display") == "block" ){
    clampLg();
    }
    else {
    clampSm();
    }
  }

*/
/// FOR MOBILE
function checkSize(){
    if ($("footer").css("display") == "none" ){

$( "#step.one .col-md-5.email" ).insertAfter($( "#step.one .col-md-5.lastname" ));

$( "#step.one a.nextstep" ).insertAfter($( "#step.one .col-md-5:last-of-type" ));

$( "#step.three .move" ).insertAfter($( "#step.three .col-md-6:last-child" ));

$( "#step.one a.nextstep .btn, #step.two a.nextstep .btn" ).text("next step");

$( ".featimage" ).insertAfter($( ".featdetails" ));

$( "#step.two .causehover .btn, #step.two .causehover h3, #step.two .modal-bg" ).click(function() {
  $( "#step.two .causehover, #step.two .modal-bg" ).hide();
});

$( "#step.two .allcause .carousel .col-md-3" ).click(function() {
  $( "#step.two .modal-bg" ).show();
});

//CAUSE BOX MODEL

$( "#step.two .allcause .carousel .page-1 .row:first-child .col-md-3:first-child" ).click(function() {
  $( "#step.two .causebox:first-child" ).show();
});

$( "#step.two .allcause .carousel .page-1 .row:first-child .col-md-3:nth-child(2)" ).click(function() {
  $( "#step.two .causebox:nth-child(2)" ).show();
});

$( "#step.two .allcause .carousel .page-1 .row:first-child .col-md-3:nth-child(3)" ).click(function() {
  $( "#step.two .causebox:nth-child(3)" ).show();
});

$( "#step.two .allcause .carousel .page-1 .row:first-child .col-md-3:nth-child(4)" ).click(function() {
  $( "#step.two .causebox:nth-child(4)" ).show();
});

$( "#step.two .allcause .carousel .page-1 .row:nth-child(2) .col-md-3:first-child" ).click(function() {
  $( "#step.two .causebox:nth-child(5)" ).show();
});

$( "#step.two .allcause .carousel .page-1 .row:nth-child(2) .col-md-3:nth-child(2)" ).click(function() {
  $( "#step.two .causebox:nth-child(6)" ).show();
});

$( "#step.two .allcause .carousel .page-1 .row:nth-child(2) .col-md-3:nth-child(3)" ).click(function() {
  $( "#step.two .causebox:nth-child(7)" ).show();
});

$( "#step.two .allcause .carousel .page-1 .row:nth-child(2) .col-md-3:nth-child(4)" ).click(function() {
  $( "#step.two .causebox:nth-child(8)" ).show();
});

$( "#step.two .allcause .carousel .page-2 .row:first-child .col-md-3:first-child" ).click(function() {
  $( "#step.two .causebox:nth-child(9)" ).show();
});

$( "#step.two .allcause .carousel .page-2 .row:first-child .col-md-3:nth-child(2)" ).click(function() {
  $( "#step.two .causebox:nth-child(10)" ).show();
});

$( "#step.two .allcause .carousel .page-2 .row:first-child .col-md-3:nth-child(3)" ).click(function() {
  $( "#step.two .causebox:nth-child(11)" ).show();
});

$( "#step.two .allcause .carousel .page-2 .row:first-child .col-md-3:nth-child(4)" ).click(function() {
  $( "#step.two .causebox:nth-child(12)" ).show();
});

$( "#step.two .allcause .carousel .page-2 .row:nth-child(2) .col-md-3:first-child" ).click(function() {
  $( "#step.two .causebox:nth-child(13)" ).show();
});

$( "#step.two .allcause .carousel .page-2 .row:nth-child(2) .col-md-3:nth-child(2)" ).click(function() {
  $( "#step.two .causebox:nth-child(14)" ).show();
});

$( "#step.two .allcause .carousel .page-2 .row:nth-child(2) .col-md-3:nth-child(3)" ).click(function() {
  $( "#step.two .causebox:nth-child(15)" ).show();
});

$( "#step.two .allcause .carousel .page-2 .row:nth-child(2) .col-md-3:nth-child(4)" ).click(function() {
  $( "#step.two .causebox:nth-child(16)" ).show();
});

  }
  else {
    $( ".featimage" ).insertBefore($( ".featdetails" ));
    $( "#step.one .col-md-5.email" ).insertAfter($( "#step.one .col-md-5.gender"));
  }
}

$( ".causebox .btn" ).text("select this cause");

$( "#step.two .causebox .btn, #step.two .causebox h3, #step.two .modal-bg" ).click(function() {
  $( "#step.two .causebox, #step.two .modal-bg" ).hide();
});

$( "#step.two .allcause .carousel .col-md-3 .causehover .learnmore" ).click(function() {
  $( "#step.two .modal-bg" ).show();
});

//CAUSE BOX MODEL

$( "#step.two .allcause .carousel .page-1 .row:first-child .col-md-3:first-child .causehover .learnmore" ).click(function() {
  $( "#step.two .causebox:first-child" ).show();
});

$( "#step.two .allcause .carousel .page-1 .row:first-child .col-md-3:nth-child(2) .causehover .learnmore" ).click(function() {
  $( "#step.two .causebox:nth-child(2)" ).show();
});

$( "#step.two .allcause .carousel .page-1 .row:first-child .col-md-3:nth-child(3) .causehover .learnmore" ).click(function() {
  $( "#step.two .causebox:nth-child(3)" ).show();
});

$( "#step.two .allcause .carousel .page-1 .row:first-child .col-md-3:nth-child(4) .causehover .learnmore" ).click(function() {
  $( "#step.two .causebox:nth-child(4)" ).show();
});

$( "#step.two .allcause .carousel .page-1 .row:nth-child(2) .col-md-3:first-child .causehover .learnmore" ).click(function() {
  $( "#step.two .causebox:nth-child(5)" ).show();
});

$( "#step.two .allcause .carousel .page-1 .row:nth-child(2) .col-md-3:nth-child(2) .causehover .learnmore" ).click(function() {
  $( "#step.two .causebox:nth-child(6)" ).show();
});

$( "#step.two .allcause .carousel .page-1 .row:nth-child(2) .col-md-3:nth-child(3) .causehover .learnmore" ).click(function() {
  $( "#step.two .causebox:nth-child(7)" ).show();
});

$( "#step.two .allcause .carousel .page-1 .row:nth-child(2) .col-md-3:nth-child(4) .causehover .learnmore" ).click(function() {
  $( "#step.two .causebox:nth-child(8)" ).show();
});

$( "#step.two .allcause .carousel .page-2 .row:first-child .col-md-3:first-child .causehover .learnmore" ).click(function() {
  $( "#step.two .causebox:nth-child(9)" ).show();
});

$( "#step.two .allcause .carousel .page-2 .row:first-child .col-md-3:nth-child(2) .causehover .learnmore" ).click(function() {
  $( "#step.two .causebox:nth-child(10)" ).show();
});

$( "#step.two .allcause .carousel .page-2 .row:first-child .col-md-3:nth-child(3) .causehover .learnmore" ).click(function() {
  $( "#step.two .causebox:nth-child(11)" ).show();
});

$( "#step.two .allcause .carousel .page-2 .row:first-child .col-md-3:nth-child(4) .causehover .learnmore" ).click(function() {
  $( "#step.two .causebox:nth-child(12)" ).show();
});

$( "#step.two .allcause .carousel .page-2 .row:nth-child(2) .col-md-3:first-child .causehover .learnmore" ).click(function() {
  $( "#step.two .causebox:nth-child(13)" ).show();
});

$( "#step.two .allcause .carousel .page-2 .row:nth-child(2) .col-md-3:nth-child(2) .causehover .learnmore" ).click(function() {
  $( "#step.two .causebox:nth-child(14)" ).show();
});

$( "#step.two .allcause .carousel .page-2 .row:nth-child(2) .col-md-3:nth-child(3) .causehover .learnmore" ).click(function() {
  $( "#step.two .causebox:nth-child(15)" ).show();
});

$( "#step.two .allcause .carousel .page-2 .row:nth-child(2) .col-md-3:nth-child(4) .causehover .learnmore" ).click(function() {
  $( "#step.two .causebox:nth-child(16)" ).show();
});

//ALLOW ONLY NUMBERS INPUT
$('#bd-month, #bd-day, #bd-year').keyup(function () {
    this.value = this.value.replace(/[^0-9\.]/g,'');
});

//FORM VALIDATION
$('#register').validate({ // initialize the plugin
    rules: {
        first: {
          required: true
        },
        last: {
          required: true
        },
        email: {
            required: true,
            email: true
        },
        year: {
          required: true,
          range: [1915, 2015],
          number: true
        },
        month: {
          required: true,
          range: [1, 12],
          number: true
        },
        day: {
          required: true,
          range: [1, 31],
          number: true
        },
        gender: {
          required: true
        },
        zipcode: {
          rangelength: [5, 5],
          required: true
        }

    },
    messages: {
        first: {
          required: "*Required field"
        },
        last: {
          required: "*Required field"
        },
        email: {
            email: "Enter Valid Email",
            required: "*Required field"
        },
        year: {
          range: "Enter Valid Year",
          required: "*Required field"
        },
        month: {
          range: "Enter Valid Month",
          required: "*Required field"
        },
        day: {
          range: "Enter Valid Day",
          required: "*Required field"
        },
          gender: {
            required: "*Required field"
        },
        zipcode: {
          rangelength: "Enter Valid Zipcode",
          required: "*Required field"
        }
      },

    submitHandler: function (form) {
window.location="registration-step-2.html"
    }
});
