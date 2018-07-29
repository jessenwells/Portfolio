// ON BROWSER RESIZE
checkSize();
  $(window).resize(checkSize);

// FADEIN
$( ".customize.image .select .carousel-inner, .customize.image .selected" ).delay(2500).animate({opacity:1},250);

// MOBILE BUTTON
$( ".navbar-toggle" ).click(function() {
  $(this).toggleClass("opened closed");
});

// LOGIN FORM BOX MODEL
$( ".navbar-nav > li:last-child, .mobile-signin" ).click(function() {
  $( "#box-model" ).delay(25).fadeIn(125);
});

$( "#box-model .bg, #box-model .close-x" ).click(function() {
  $( "#box-model" ).fadeOut(150);
});
// UPLOAD BOX MODEL
$( ".btn.upload" ).click(function() {
  $( "#box-model.upload" ).delay(25).fadeIn(125);
});

$( "#box-model .bg, #box-model .close-x, #box-model #btn-login" ).click(function() {
  $( "#box-model.upload" ).fadeOut(150);
  $("#box-model.upload input:checkbox").removeAttr('checked');
});
// CATEGORY BOX MODEL
$( "#cat-button" ).click(function() {
  $( "#box-model.category" ).delay(25).fadeIn(125);
});

$( "#box-model .bg, #box-model .close-x, #box-model #btn-login" ).click(function() {
  $( "#box-model.category" ).fadeOut(150);
  $("#box-model.category input:checkbox").removeAttr('checked');
});
//ZOOM BOX MODEL
$( "#box-model .bg, #box-model .close-x, #box-model #btn-login" ).click(function() {
  $( "#box-model.zoom" ).fadeOut(150);
});
// DELETE BOX MODEL
$( "#delete" ).click(function() {
  $( "#box-model.delete" ).delay(25).fadeIn(125);
});

$( "#box-model .bg, #box-model .close-x, #box-model #btn-login" ).click(function() {
  $( "#box-model.delete" ).fadeOut(150);
});
// PAGINATION
$( ".pagination li a" ).click(function() {
  $( ".pagination li a" ).removeClass('focus');
  $( this ).addClass('focus');
});
// QUOTE
$( ".customize.quote .pagination li a:even" ).click(function() {
  $( "#quote-content ul:first-child" ).removeClass('active');
  $( "#quote-content ul:nth-child(2)" ).addClass('active');
});
$( ".customize.quote .pagination li a:odd" ).click(function() {
  $( "#quote-content ul:nth-child(2)" ).removeClass('active');
  $( "#quote-content ul:first-child" ).addClass('active');
});
// IMAGE
$( ".choice" ).click(function() {
  $(".choice").css("outline","0")
  $(this).css("outline","solid 3px #79bbce");
});

$('.customize.image .choice img').click(function(){
    var src = $(this).attr('src');
    $('.customize.image .selected img').attr("src", src);
});

$('.customize.image .selected img').click(function(){
    var src = $(this).attr('src');
    $('#box-model.zoom #image-zoom').attr("src", src);
    $( "#box-model.zoom" ).delay(25).fadeIn(125);
});

$('.customize.image .left').hide();
$('.customize.image .right').click(function(){
$(this).fadeOut(200);
$('.customize.image .left').fadeIn(200);
});
$('.customize.image .left').click(function(){
$(this).fadeOut(200);
$('.customize.image .right').fadeIn(200);
});

$( ".customize.image .pagination li a:even" ).click(function() {
  $( ".customize.image .form-2 .select-image .row:first-child" ).removeClass('active');
  $( ".customize.image .form-2 .select-image .row:nth-child(2)" ).addClass('active');
});
$( ".customize.image .pagination li a:odd" ).click(function() {
  $( ".customize.image .form-2 .select-image .row:nth-child(2)" ).removeClass('active');
  $( ".customize.image .form-2 .select-image .row:first-child" ).addClass('active');
});

$(".customize.image .form-2 select").change(function() {
    if($(".customize.image .form-2 select option[value='2']").is(':selected')) {
  $( ".customize.image .form-2 .select-image .row:first-child" ).removeClass('active');
  $( ".customize.image .form-2 .select-image .row:nth-child(2)" ).addClass('active');
    }
    else {
  $( ".customize.image .form-2 .select-image .row:nth-child(2)" ).removeClass('active');
  $( ".customize.image .form-2 .select-image .row:first-child" ).addClass('active');
    }
});

// COLOR
$('.custom-form .customize.color .choice').click(function(){
    var src = $(this).css('backgroundColor');
    $('.custom-form .customize.color .selected').css("background",src);
});
// QUOTE
$( "#quote-content ul li" ).click(function() {
  $("#quote-content ul li").css("background","#ffffff");
  $(this).css("background","#cee4eb");
});
//// WYSIWYG
  $(function() {
    $('.editor').editable({
      inlineMode: false,
      toolbarFixed: true,
      minHeight: 200,
      placeholder: 'personalized message...',
      countCharacters: false,
      buttons: ['bold', 'italic', 'underline', 'strikeThrough','createLink', 'insertOrderedList', 'insertUnorderedList', 'outdent', 'indent']
    })
  });
  $(function() {
    $('.editor2').editable({
      inlineMode: false,
      toolbarFixed: true,
      minHeight: 200,
      placeholder: 'personalized quote...',
      countCharacters: false,
      buttons: ['bold', 'italic', 'underline', 'strikeThrough','createLink', 'insertOrderedList', 'insertUnorderedList', 'outdent', 'indent']
    })
  });

// FORM FOCUS
$(document).ready(function() {
  $(".froala-element").focus(function () {
    $(".froala-editor").css("border-color","#37474f");
    $(".froala-editor .fr-bttn i").css("color","#37474f");
  });
  $(".froala-element").blur(function () {
    $(".froala-editor").css("border-color","#cee4eb");
    $(".froala-editor .fr-bttn i").css("color","#cee4eb")
  });
  $('.fr-bttn[data-cmd="createLink"]')
    .on('click', function (e) {
      e.preventDefault()
      $('.froala-link-popup').css("display", "block");
  });
});

// CLEAR INPUT
$( ".close-x" ).click(function() {
$('.qs-sendto input').val("");
$('.qs-sendto input.hid').css("display","none");
});

// SELECT INPUT
$( ".row.qs-contact .form-1 select" ).change(function() {
  var str = "";
  $( ".row.qs-contact .form-1 select option:selected:not(:disabled)" ).each(function() {
  str += $( this ).text() + " ";

  /*$(".row.qs-contact .form-1 select option:selected:not(:disabled)").hide();*/


  $('.row.qs-contact .form-1 select').val('0').change();

  });


  if($('.qs-sendto input:first-of-type').val() && $('.qs-sendto input:nth-of-type(2)').val() ) {
      $('.qs-sendto input:nth-of-type(3)').val(str);
  }
  else if($('.qs-sendto input:first-of-type').val() && !$('.qs-sendto input:nth-of-type(2)').val() ) {
      $('.qs-sendto input:nth-of-type(2)').val(str);
  }
  else {
      $('.qs-sendto input:first-of-type').val(str);
  }

})
.trigger( "change" );

// MAILING LIST TEMP EXAMPLE
$( ".row.qs-contact .form-2 select" ).change(function() {
  $( ".row.qs-sendto input.hid" ).css( "display","block" );
});

$('.qs-sendto input:first-child').val("");

// EQUAL HEIGHT COLUMNS
equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0;
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

// PIE CHART
$.fn.peity.defaults.donut = {
  delimiter: null,
  fill: ["#325b6d", "#79bbce"],
  height: 180,
  innerRadius: 50,
  radius: 120,
  width: 180
};

$('.chart-data').peity('donut');

////// MOBILE / DESKTOP
function checkSize(){
//// MOBILE
if ($(".mobile-signin").css("display") == "block" ){
// CHANGE GRAPHIC SOURCE
$(".graphic .one img").attr("src","img/graphic-1-mobile.svg");
$(".graphic .two img").attr("src","img/graphic-2-mobile.svg");
$(".graphic .three img").attr("src","img/graphic-3-mobile.svg");
// ENABLE CAROUSEL
$('#homeCarousel').carousel('cycle');
$(".graphic .two, .graphic .three").removeClass('active');
}
//// DESKTOP
else {
// CHANGE GRAPHIC SOURCE
$(".graphic .one img").attr("src","img/graphic-1.svg");
$(".graphic .two img").attr("src","img/graphic-2.svg");
$(".graphic .three img").attr("src","img/graphic-3.svg");
// EQUAL HEIGHT COLUMNS
$(window).load(function() {
  equalheight('.blocks > div p');
});
$(window).resize(function(){
  equalheight('.blocks > div p');
});
// DISABLE CAROUSEL
$('#homeCarousel').carousel('pause');
$('.graphic > div').addClass('active');
}
// SITE INFO / COPYRIGHT FIX
if ($("footer span").css("text-align") == "center" ){
$('.siteinfo').html($('.siteinfo').html().replace("|",""));
$('.siteinfo span:nth-child(2)').html($('.siteinfo span:nth-child(2)').html().replace("|",""));
}
}

