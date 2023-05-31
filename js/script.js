$(document).ready(function(){

  $('.slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.right-1').on('click', function(){
    $('.slider-1').slick('slickNext');
  });
  
  $('.left-1').on('click', function(){
    $('.slider-1').slick('slickPrev');
  });

  $('.right-2').on('click', function(){
    $('.slider-2').slick('slickNext');
  });
  
  $('.left-2').on('click', function(){
    $('.slider-2').slick('slickPrev');
  });

  function progress() {

    let currSlide = $('.slider-2').slick('slickCurrentSlide');
    let slides = $('.slider-2').slick('getSlick').slideCount;
    let slidesToShow = $('.slider-2').slick('slickGetOption', 'slidesToShow');
  
    let proggressWidth = slidesToShow / slides * 100;
    let step = currSlide * 1 / slides * 100;

    $('.progress-fill').css("width", proggressWidth + "%");
    $('.progress-fill').css("left", + step + "%");

  }

  progress();

  $('.caret').on('click', function() { 

    progress(); 

  });

  $('.slider-2').on('swipe', function() { progress(); });

});
			