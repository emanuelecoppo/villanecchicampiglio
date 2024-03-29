// DATE
const months = ["GEN","FEB","MAR","APR","MAG","GIU","LUG","AGO","SET","OTT","NOV","DIC"];
var time = new Date();
var current_datetime = new Date();
var formatted_date = current_datetime.getDate() + " " + months[current_datetime.getMonth()] + ", " + ("0" + time.getHours()).slice(-2) + ":" + ("0" + time.getMinutes()).slice(-2);
document.getElementById("date").innerHTML = formatted_date;

// NAV
$(".drop").hover(
  function () {
    $(this).find('.submenu').stop(true, false).slideDown('medium');
  },
  function () {
    $(this).find('.submenu').stop(true, false).slideUp('medium');
  }
);
$(".select").hover(
  function () {
    $(this).find('.select-content').stop(true, false).slideDown('medium');
  },
  function () {
    $(this).find('.select-content').stop(true, false).slideUp('medium');
  }
);

// SCROLL BOTTOM
function scrollBottom() {
  $("html, body").animate({ scrollTop: $(document).height()-720 }, 1000);
};

// HOME VERDE
 function vaso() {
   $('.home-verde').css('background-image','url(./img/home.jpeg)')
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
// var eventi1 = $('#eventi1').offset().top;
// var eventi2 = $('#eventi2').offset().top;
// $(window).scroll(function() {
//   var currentScroll = $(window).scrollTop();
//   if (currentScroll >= eventi1 && currentScroll < eventi2) {
//     $('.fixed').css({position:'fixed', top:'53px', left:'1096px', 'margin-top':'0'});
//   } else if (currentScroll >= eventi2) {
//     $('.fixed').css({position:'static', 'margin-top':'720px'});
//   } else {
//     $('.fixed').css({position:'static', 'margin-top':'0'});
//   }
// });
