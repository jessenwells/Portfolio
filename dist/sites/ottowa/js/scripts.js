

////////////////////PAGELOADS/


$(document).ready(function () {

$('#meter1').jqbar({ value: 25, label:'Hydro'});
		$('#meter2').jqbar({ value: 45, label:'Landfill'});
				$('#meter3').jqbar({ value: 30, label:'Solar'});


$('#smartgrid, #fleet, #hydro, #hydrodata, #landfill, #landfilldata, #solar, #solardata, #numbers, .meterinfo').delay(1000).animate({opacity:"1"});
  $('#sourcepulse').delay(1800).animate({opacity:"1"});
		$('.p7').delay(1000).animate({opacity:"1",marginTop:0});
			$('.p12').delay(1100).animate({opacity:"1",marginTop:0});
				$('.p6').delay(1200).animate({opacity:"1",marginTop:0});
					$('.p11').delay(1400).animate({opacity:"1",marginTop:0});
						$('.p9').delay(1600).animate({opacity:"1",marginTop:0});
							$('.p14, .p3, .p5').delay(1800).animate({opacity:"1",marginTop:0});
                $('.p4, .p1, .p2, .p8, .p15').delay(2000).animate({opacity:"1",marginTop:0});
                  $('.p10').delay(2100).animate({opacity:"1",marginTop:0});
                    $('.p13').delay(2200).animate({opacity:"1",marginTop:0});
          });


////////////////////SPIN/

$(document).ready(function(){
var angle = 0;
setInterval(function(){
angle+=0.8;
$(".spin").rotate(angle);
},50);
});

//

$(document).ready(function(){
var angle = 0;
setInterval(function(){
angle-=3;
$(".spin2").rotate(angle);
},50);
});

////////////////////BLINK/

$('.blink').bind('fade-cycle', function() {
    $(this).fadeOut( 80, function() {
        $(this).fadeIn( 80, function() {
            $(this).trigger('fade-cycle');
        });
    });
});

//

$('.blink').each(function(index, elem) {
    setTimeout(function() {
        $(elem).trigger('fade-cycle');
    }, index * 250);
});

////////////////////SCROLL/

var scrollSpeed = 40;

var current = 0;

var direction = 'h';

function bgscroll(){

current -= -1;

$('.scroll').css("backgroundPosition", (direction == 'h') ? current+"px 0" : "0 " + current+"px");}

setInterval(bgscroll, scrollSpeed);

////////////////////PULSE/

$(document).ready(function() {
var $pulse = $('.pulse');
function runIt() {
$pulse.animate({opacity:"0.8"}, 1800).animate({opacity:"0"}, 1800, function(){$pulse.removeAttr("style");
runIt();
});
}
runIt();
});

//

$(document).ready(function() {
var $pulse = $('.pulse2');
function runIt() {
$pulse.animate({opacity:"1"}, 1800).animate({opacity:"0"}, 1800, function(){$pulse.removeAttr("style");
runIt();
});
}
runIt();
});

//

$(document).ready(function() {
var $pulse = $('.pulse3');
function runIt() {
$pulse.animate({opacity:"0.5",margin:"-2px 0 0 0"}, 800).animate({opacity:"1",margin:"0px"}, 800, function(){$pulse.removeAttr("style");
runIt();
});
}
runIt();
});

//

$(document).ready(function() {
var $pulse = $('.pulse4');
function runIt() {
$pulse.animate({opacity:"1",margin:"172px 98px 26px 0px"}, 800).animate({opacity:"0.6",margin:"170px 98px 26px 0px"}, 800, function(){$pulse.removeAttr("style");
runIt();
});
}
runIt();
});

//

$(document).ready(function() {
var $pulse = $('.pulse5');
function runIt() {
$pulse.animate({opacity:"1"}, 450).delay(2700).animate({opacity:"0"}, 450, function(){$pulse.removeAttr("style");
runIt();
});
}
runIt();
});

//

$(document).ready(function() {
var $pulse = $('.pulse6');
function runIt() {
$pulse.delay(900).animate({opacity:"1"}, 1800).animate({opacity:"0"}, 900, function(){$pulse.removeAttr("style");
runIt();
});
}
runIt();
});

//

$(document).ready(function() {
var $pulse = $('.pulse7');
function runIt() {
$pulse.animate({opacity:"1"}, 450).animate({opacity:"0"}, 3150, function(){$pulse.removeAttr("style");
runIt();
});
}
runIt();
});

//

$(document).ready(function() {
var $pulse = $('.pulse8');
function runIt() {
$pulse.delay(1000).animate({opacity:"1"}, 1000).delay(1400).animate({opacity:"0"}, 600, function(){$pulse.removeAttr("style");
runIt();
});
}
runIt();
});

//

$(document).ready(function() {
var $pulse = $('.pulse9');
function runIt() {
$pulse.delay(1200).animate({opacity:"1"}, 1000).delay(1200).animate({opacity:"0"}, 600, function(){$pulse.removeAttr("style");
runIt();
});
}
runIt();
});

//

$(document).ready(function() {
var $pulse = $('.pulse10');
function runIt() {
$pulse.delay(1400).animate({opacity:"1"}, 1000).delay(1000).animate({opacity:"0"}, 600, function(){$pulse.removeAttr("style");
runIt();
});
}
runIt();
});

//

$(document).ready(function() {
var $pulse = $('.pulse11');
function runIt() {
$pulse.animate({opacity:"0.9",margin:"-3px 0 0 0"}, 800).animate({opacity:"1",margin:"0px"}, 800, function(){$pulse.removeAttr("style");
runIt();
});
}
runIt();
});

//

$(document).ready(function() {
var $pulse = $('.pulse12');
function runIt() {
$pulse.animate({opacity:"0.5",margin:"0"}, 800).animate({opacity:"0.3",margin:"-3px 0 0 0"}, 800, function(){$pulse.removeAttr("style");
runIt();
});
}
runIt();
});
//

$(document).ready(function() {
var $pulse = $('#pulsegrid .grid.eight.b');
function runIt() {
$pulse.animate({marginTop:"153px",opacity:"0"}, 1800).animate({marginTop:"263px",opacity:"0"}, 1800, function(){$pulse.removeAttr("style");
runIt();
});
}
runIt();
});

//

$(document).ready(function() {
var $pulse = $('#pulsegrid .grid.eleven.b');
function runIt() {
$pulse.animate({marginTop:"153px",opacity:"0"}, 1800).animate({marginTop:"0px",opacity:"0"}, 1800, function(){$pulse.removeAttr("style");
runIt();
});
}
runIt();
});

//

$(document).ready(function() {
var $pulse = $('#pulsegrid .grid.seven.b');
function runIt() {
$pulse.animate({margin:"221px 0 0 100px",opacity:"0"}, 1800).animate({margin: "297px 0 0 228px",opacity:"0"}, 1800, function(){$pulse.removeAttr("style");
runIt();
});
}
runIt();
});

//

$(document).ready(function() {
var $pulse = $('#pulsegrid .grid.nine.b');
function runIt() {
$pulse.animate({margin:"220px 0 0 130px",opacity:"0"}, 1800).animate({margin: "297px 0 0 0",opacity:"0"}, 1800, function(){$pulse.removeAttr("style");
runIt();
});
}
runIt();
});

//

$(document).ready(function() {
var $pulse = $('#pulsegrid .grid.ten.b');
function runIt() {
$pulse.animate({margin:"99px 0 0 80px",opacity:"0"}, 1800).animate({margin: "25px 0 0 213px",opacity:"0"}, 1800, function(){$pulse.removeAttr("style");
runIt();
});
}
runIt();
});

//

$(document).ready(function() {
var $pulse = $('#pulsegrid .grid.twelve.b');
function runIt() {
$pulse.animate({margin:"75px 0 0 136px",opacity:"0"}, 1800).animate({margin: "25px 0 0 0",opacity:"0"}, 1800, function(){$pulse.removeAttr("style");
runIt();
});
}
runIt();
});

//

$(document).ready(function() {
var $pulse = $('#pulsegrid .grid.ten.c');
function runIt() {
$pulse.animate({margin:"130px 0 0 157px",opacity:"0"}, 1800).animate({margin: "50px 0 0 235px",opacity:"0"}, 1800, function(){$pulse.removeAttr("style");
runIt();
});
}
runIt();
});

//

$(document).ready(function() {
var $pulse = $('#pulsegrid .grid.twelve.c');
function runIt() {
$pulse.animate({margin:"110px 0 0 90px",opacity:"0"}, 1800).animate({margin: "42px 0 0 0",opacity:"0"}, 1800, function(){$pulse.removeAttr("style");
runIt();
});
}
runIt();
});


////////////////////SOURCES PULSE/


$(document).ready(function() {
    var $pulse1 = $('#sourcepulse .grid.one.b'), $pulse2 = $('#sourcepulse .grid.two.b'), $pulse3 = $('#sourcepulse .grid.three.b');

function runIt1() {
        $pulse1.animate({margin:"70px 0 0 263px",opacity:"1"}, 900)
        .animate({margin: "100px 0 0 315px",opacity:"0"}, 1100, function(){
            $pulse1.removeAttr("style");
            runIt2();
        });
    }

    function runIt2() {
        $pulse2.css({margin:"130px 0 0 40px",opacity:"0"}).animate({margin: "190px 0 0 138px",opacity:"1"}, 1400).animate({opacity:"1"}, 500, function() {
        $(this).animate({opacity: 0},900, runIt3);
    }).dequeue()
    }
    function runIt3() {
        $pulse3.animate({margin:"357px 0 0 145px",opacity:"1"}, 900)
        .animate({margin: "392px 0 0 86px",opacity:"0"}, 1100, function(){
            $pulse3.removeAttr("style");
            runIt1();
        });
    }
    runIt1();
});


//SOLAR PAGE/


if($("#sourcepulse.slr").length > 0) {

$(document).ready(function() {
    var $pulse1 = $('#sourcepulse .grid.one.b'), $pulse2 = $('#sourcepulse .grid.two.c'), $pulse3 = $('#sourcepulse .grid.three.b');

    function runIt1() {
        $pulse1.animate({margin:"70px 0 0 263px",opacity:"1"}, 900)
        .animate({margin: "100px 0 0 315px",opacity:"0"}, 1100, function(){
            $pulse1.removeAttr("style");
            runIt2();
        });
    }

    function runIt2() {
        $pulse2.css({margin:"145px 0 0 70px",opacity:"0"}).animate({margin: "190px 0 0 138px",opacity:"1"}, 1600).animate({opacity:"1"}, 500, function() {
        $(this).animate({opacity: 0},1100, runIt3);
    }).dequeue()
    }
    function runIt3() {
        $pulse3.animate({margin:"357px 0 0 145px",opacity:"1"}, 900)
        .animate({margin: "392px 0 0 86px",opacity:"0"}, 1100, function(){
            $pulse3.removeAttr("style");
            runIt1();
        });
    }
    runIt1();
});

}


////////////////////UNITS PULSE/


$(document).ready(function() {
    var $pulse4 = $('.unitpulse');

    function runIt4() {
        $pulse4.css({left:"0", opacity:"0"}).animate({left:"700px",opacity:"1"}, 6000).animate({opacity:"1"}, 2500, function() {
        $(this).animate({opacity: 0},3500, runIt4);
    }).dequeue()
    }

    runIt4();
});


////////////////////CLICK/
////////////////////SOURCES/

$( ".plant-id.plant-1, .1" )
.click(function() {
$('.1').toggleClass('focus');
});


    $( ".plant-id.plant-1" )
      .mouseenter(function() {
        $('.1').stop().addClass('hover');
      })
      .mouseleave(function() {
        $('.1').stop().removeClass('hover');
      });

$( ".plant-id.plant-2, .2" )
.click(function() {
$('.2').toggleClass('focus');
});

    $( ".plant-id.plant-2" )
      .mouseenter(function() {
        $('.2').stop().addClass('hover');
      })
      .mouseleave(function() {
        $('.2').stop().removeClass('hover');
      });

$( ".plant-id.plant-3, .3" )
.click(function() {
$('.3').toggleClass('focus');
});

    $( ".plant-id.plant-3" )
      .mouseenter(function() {
        $('.3').stop().addClass('hover');
      })
      .mouseleave(function() {
        $('.3').stop().removeClass('hover');
      });

$( ".plant-id.plant-4, .4" )
.click(function() {
$('.4').toggleClass('focus');
});

    $( ".plant-id.plant-4" )
      .mouseenter(function() {
        $('.4').stop().addClass('hover');
      })
      .mouseleave(function() {
        $('.4').stop().removeClass('hover');
      });

$( ".plant-id.plant-5, .5" )
.click(function() {
$('.5').toggleClass('focus');
});

    $( ".plant-id.plant-5" )
      .mouseenter(function() {
        $('.5').stop().addClass('hover');
      })
      .mouseleave(function() {
        $('.5').stop().removeClass('hover');
      });

$( ".plant-id.plant-6, .6" )
.click(function() {
$('.6').toggleClass('focus');
});

    $( ".plant-id.plant-6" )
      .mouseenter(function() {
        $('.6').stop().addClass('hover');
      })
      .mouseleave(function() {
        $('.6').stop().removeClass('hover');
      });


////////////////////CLICK/
////////////////////FLEET/

if($("#fleet").length > 0) {

$( ".1, .2, .3, .4, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15" ).hide();

$( ".showall" ).click(function() {
$( this ).hide();
$( ".hideall" ).show();
$( ".1, .2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15" ).fadeIn();
$('html, body').animate({scrollTop:$(document).height()}, 'slow');
});


$( ".hideall" ).click(function() {
$( this ).hide();
$( ".showall" ).show();
$( ".1, .2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15" ).fadeOut();
});

$( ".1, .2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15, .p1, .p2, .p3, .p4, .p5, .p6, .p7, .p8, .p9, .p10, .p11, .p12, .p13, .p14, .p15" ).click(function() {
$( ".showall" ).show();
});

$( ".1" ).click(function() {
$( ".p1" ).click();
});

$( ".p1" ).click(function() {
$( ".1" ).show();
$( ".2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15" ).hide();
});

$( ".2" ).click(function() {
$( ".p2" ).click();
});

$( ".p2" ).click(function() {
$( ".2" ).show();
$( ".1, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15" ).hide();
});

$( ".3" ).click(function() {
$( ".p3" ).click();
});

$( ".p3" ).click(function() {
$( ".3" ).show();
$( ".1, .2, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15" ).hide();
});

$( ".4" ).click(function() {
$( ".p4" ).click();
});

$( ".p4" ).click(function() {
$( ".4" ).show();
$( ".1, .2, .3, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15" ).hide();
});

$( ".5" ).click(function() {
$( ".p5" ).click();
});

$( ".p5" ).click(function() {
$( ".5" ).show();
$( ".1, .2, .3, .4, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15" ).hide();
});

$( ".6" ).click(function() {
$( ".p6" ).click();
});

$( ".p6" ).click(function() {
$( ".6" ).show();
$( ".1, .2, .3, .4, .5, .7, .8, .9, .10, .11, .12, .13, .14, .15" ).hide();
});

//

$( ".7" ).click(function() {
$( ".p7" ).click();
});

$( ".p7" ).click(function() {
$( ".7" ).show();
$( ".1, .2, .3, .4, .5, .6, .8, .9, .10, .11, .12, .13, .14, .15" ).hide();
});

$( ".8" ).click(function() {
$( ".p8" ).click();
});

$( ".p8" ).click(function() {
$( ".8" ).show();
$( ".1, .2, .3, .4, .5, .6, .7, .9, .10, .11, .12, .13, .14, .15" ).hide();
});

$( ".9" ).click(function() {
$( ".p9" ).click();
});

$( ".p9" ).click(function() {
$( ".9" ).show();
$( ".1, .2, .3, .4, .5, .6, .7, .8, .10, .11, .12, .13, .14, .15" ).hide();
});

$( ".10" ).click(function() {
$( ".p10" ).click();
});

$( ".p10" ).click(function() {
$( ".10" ).show();
$( ".1, .2, .3, .4, .5, .6, .7, .8, .9, .11, .12, .13, .14, .15" ).hide();
});

$( ".11" ).click(function() {
$( ".p11" ).click();
});

$( ".p11" ).click(function() {
$( ".11" ).show();
$( ".1, .2, .3, .4, .5, .6, .7, .8, .9, .10, .12, .13, .14, .15" ).hide();
});

$( ".12" ).click(function() {
$( ".p12" ).click();
});

$( ".p12" ).click(function() {
$( ".12" ).show();
$( ".1, .2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .13, .14, .15" ).hide();
});

$( ".13" ).click(function() {
$( ".p13" ).click();
});

$( ".p13" ).click(function() {
$( ".13" ).show();
$( ".1, .2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .14, .15" ).hide();
});

$( ".14" ).click(function() {
$( ".p14" ).click();
});

$( ".p14" ).click(function() {
$( ".14" ).show();
$( ".1, .2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .15" ).hide();
});

$( ".15" ).click(function() {
$( ".p15" ).click();
});

$( ".p15" ).click(function() {
$( ".15" ).show();
$( ".1, .2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14" ).hide();
});

$( ".legend .hydro" ).click(function() {
$( ".marker.hydro" ).animate({opacity:"0.4"});
$( ".marker.hydro" ).animate({opacity:"1"});
});

$( ".legend .solar" ).click(function() {
$( ".marker.solar" ).animate({opacity:"0.4"});
$( ".marker.solar" ).animate({opacity:"1"});
});

$( ".legend .landfill" ).click(function() {
$( ".marker.landfill" ).animate({opacity:"0.4"});
$( ".marker.landfill" ).animate({opacity:"1"});
});

////////////////////TOOL-TIP/

$(document).ready(function()
{
$('.marker').each(function() {
$(this).qtip({
content: {text: $(this).next('.pop')},
show: {event: 'click'},
hide: {event: 'unfocus'},
style: {classes: 'qtip-dark qtip-shadow',tip: {width: 26,height: 10}},
position: {my: 'bottom center'}
});
});
});

//

setTimeout(function () {
   $(".marker.hydro.p5").trigger('click');
}, 2600);

}

//

$( "#drop" )
.click(function() {
$('#drop ul,#drop ul li:hover ul').toggleClass('dropdown');
});

//

$(document).ready(function () {
        $('img').each(function () {
            $(this).attr("border", "0");
        });
    });