//SCROLLIFY
$.scrollify({
  section : ".scroll",
  sectionName : "",
  interstitialSection : "",
  easing: "easeOutExpo",
  scrollSpeed: 1100,
  offset : 0,
  scrollbars: true,
  standardScrollElements: "",
  setHeights: false,
  overflowScroll: true,
  updateHash: false,
  touchScroll: true,
  before:function() {},
  after:function() {},
  afterResize:function() {},
  afterRender:function() {}
});

// HOME VERDE
 function vaso() {
   $('.home-verde').css('background-image','url(./img/vaso.jpg)')
 }
 $('.stanze').hover(function() {
   $('.home-verde').css('background-image','url(./img/stanze.jpg)')}, vaso);
 $('.giardino').hover(function() {
   $('.home-verde').css('background-image','url(./img/giardino.jpg)')}, vaso);
 $('.storia').hover(function() {
   $('.home-verde').css('background-image','url(./img/sorelle.jpg)')}, vaso);

// PISIS
$('.div2, .div3').hide();
$('.button').click(function() {
  if (!$(this).hasClass('active')) {
    $('.button').removeClass('active');
		$(this).addClass('active');
  }
    $('.targetDiv').hide();
    $('.div'+$(this).attr('target')).show();
});

// SWIPER
var swiper1 = new Swiper (".swiper-container", {
  direction: "horizontal",
  loop: true,
  speed: 1000,
  autoHeight: false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
  delay: 5000,
  disableOnInteraction: false,
  },
})

// EVENTI
var eventi1 = $('#eventi1').offset().top;
var eventi2 = $('#eventi2').offset().top;
$(window).scroll(function() {
  var currentScroll = $(window).scrollTop();
  if (currentScroll >= eventi1 && currentScroll < eventi2) {
    $('.fixed').css({position:'fixed', top:'53px', left:'1096px', 'margin-top':'0'});
  } else if (currentScroll >= eventi2) {
    $('.fixed').css({position:'static', 'margin-top':'720px'});
  } else {
    $('.fixed').css({position:'static', 'margin-top':'0'});
  }
});
