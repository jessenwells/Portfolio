/////ANIMATION
///SVG LOGO
var easy = Power4.easeInOut;
var easyy = Power2.easeInOut;
//INTRO
function playIntro() {
tl = new TimelineMax();
tl.from('#logo1', 0,{y:9});
tl.from('#logo1', 0.5,{rotation:'90deg', ease:easy, delay:1});
tl.from('.logo2a, .logo2b', 0.5,{opacity:0, x:-50, ease:easy});
tl.from('#logo1', 0.5,{scale:1.6, y:9, ease:easy},'-=0.5');
tl.from('.logo3', 0.5,{opacity:0, ease:easy});
}
//COLLAPSE
tl2 = new TimelineMax({paused:true});
tl2.to('.logo2a, .logo2b', 0.25,{scale: 0.5, opacity:0, x:-20, ease:easy},0);
tl2.to('.logo3', 0.25,{scale: 0.5, opacity:0, x:-20, y:-10, ease:easy},0);
tl2.to('.svg-logo', 0.25,{height:'50px', ease:easy},0);

TweenMax.to('.svg-logo', 0.75,{opacity:1})
///ON SCROLL
//SET SECTIONS
var ctrl = new ScrollMagic.Controller();

var sectionOne = new TimelineMax()
.staggerFrom('#one .details h1,#one .details h2, #one .details .border', 1, {yPercent: '-100%', delay:1.5, opacity:0, ease: easyy},0.15,0)
.staggerFrom('#one .details button', 0.65,{opacity:0},0.35,2.5);

var sectionTwo = new TimelineMax()
.staggerFrom('#two .details > *', 0.25, {yPercent: '-80%', opacity:0, ease: easyy},0.15,0)
.from('#two button', 0.65,{opacity:0},'-=0.35');

var sectionThree = TweenMax.staggerFrom('#three .active img, #three button, #three p', 0.35, {scale: 1.1, opacity:0},0.15,0);

var sectionFour = new TimelineMax()
.from('#four img', 0.75, {yPercent: '100%', ease: easyy})
.from('#four img:not(:last-child)', 2.5, {opacity: 0, scale: 1.5, ease: Elastic.easeOut.config(2, 0.2)},'-=0.25')
.from('#four p', 0.35, {opacity:0, xPercent: '200%', ease: easyy},'-=2');

var sectionFive = new TimelineMax()
.staggerFrom('#five img', 0.75, {opacity: 0, rotation: '90deg', ease: easyy},0.15,0)
.staggerFrom('#five h4', 0.5, {opacity: 0, scale: 1.1, ease: easyy},0.15,'-=0.5')
.staggerFrom('#five p', 0.25, {opacity: 0, scale: 1.05, ease: easyy},0.15,'-=0.5')
.staggerFrom('#five .btn', 0.25, {opacity: 0, scale: 1.05, ease: easyy},0.15,'-=1.5');

var sectionSix = TweenMax.from('#six img:nth-child(2)', 0.5, {opacity:0});

//SET SCENES
var controller = new ScrollMagic.Controller();

var sceneOne = new  ScrollMagic.Scene({
  triggerElement: '#one'
})
.setTween(sectionOne);

var sceneTwo = new  ScrollMagic.Scene({
  triggerElement: '#two'
})
.setTween(sectionTwo);

var sceneThree = new  ScrollMagic.Scene({
  triggerElement: '#three'
})
.setTween(sectionThree);

var sceneFour = new  ScrollMagic.Scene({
  triggerElement: '#four'
})
.setTween(sectionFour);

var sceneFive = new  ScrollMagic.Scene({
  triggerElement: '#five'
})
.setTween(sectionFive);

var sceneSix = new  ScrollMagic.Scene({
  triggerElement: '#six'
})

.setTween(sectionSix);
controller.addScene([
  sceneOne,
  sceneTwo,
  sceneThree,
  sceneFour,
  sceneFive,
  sceneSix
]);
