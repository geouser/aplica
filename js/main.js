// Global parameters
window.params = {
  widthFull: 750,
  maxRowHeight: 0,
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
};
/*
#############################
#   Main JS for ____________   #
#############################
*/

jQuery(document).ready(function($) {

$('.menu-button').on('click', function(event) {
  event.preventDefault();
  $(this).toggleClass('active');
  $(this).parent().parent('header').toggleClass('active');
});


$(function() { // add class on scroll
  var $document = $(document),
      $element = $('.menu-button'),
      $element2 = $('header'),
      className = 'hasScrolled';

  $document.scroll(function() {
    $element.toggleClass(className, $document.scrollTop() >= 20);
    $element2.toggleClass(className, $document.scrollTop() >= 1);
  });
});

/*-----------------------------------------------------------------*/  
  $('.magnific').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',
    modal: false,

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

$('.offerSlider').slick({
  dots: true,
  fade: true,
  speed: 600
});

$('.runSlider').click(function(event){
    event.preventDefault();
    $('.offerSlider').slick('slickNext').slick('slickPlay');
});

$('.offerSlider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  var slideIn = $(slick.$slides.get(currentSlide)).attr('data-slick-index');
  console.log(slideIn);
  if (slideIn == 0) {
    $('.offerSlider').slick('slickPause');
  }
});


});

// Switched to '.slick-slider' $(".slick-slider").slickNext(); 



