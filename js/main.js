Site = {};

$(document).ready( function(){
  // root size

  if ($(window).width() > $(window).height()){
    root_size = '10.5vh';
  }else{
    root_size = '10.2vw';
  }
  $('html').css({ 'font-size': root_size });
  $(window).resize(changeRootFontSize);
  $(window).resize(backgroundDetectSetup);
  $(window).on('click', Site.slideshowClick);

  // $('.background_detect').on('mouseenter', function(){
  //   $('h1').addClass('under');
  // });

  // $('.background_detect').on('mouseleave', function(){
  //   $('h1').removeClass('under');
  // });

  $('.background_detect').on('click', function(){
    nextSlide();
    backgroundDetectSetup();
  });

  $('.background_detect2').on('click', function(){
    $('.over').toggleClass('hide');
  }); 

  $('.background_detect2').swipeleft(nextSlide);
  $('.background_detect2').swiperight(prevSlide);

  randomImageLoad();
  Site.set

  setTimeout(function(){
    backgroundDetectSetup()
  }, 250);
})

changeRootFontSize = function() {
  if ($(window).width() > $(window).height()){
    root_size = '10.5vh';
  }else{
    root_size = '10.2vw';
  }
  $('html').css({ 'font-size': root_size });
}

randomImageLoad = function(){
  Site.logo = $('.background_img');
  Site.logo_length = $('.background_img').length;
  Site.logo_choice = Math.floor((Math.random() * Site.logo_length) + 0);

  var logo_show = Site.logo[Site.logo_choice];
  $(logo_show).addClass('show');

  setupSlideShow();
}

setupSlideShow = function(){
  Site.slide_position = Site.logo_choice;
  Site.screen_width  = $(window).width() / 2;
}

Site.slideshowClick = function(e){

  if($(e.toElement).hasClass('click_ignore')){
    return
  } else{
    var mouse_position = e.clientX;
  }

  Site.screen_width
  console.log(mouse_position);

  if (mouse_position >= Site.screen_width){
    nextSlide();
  } else {
    prevSlide();
  }

}

nextSlide = function(){
  Site.slide_position = Site.slide_position + 1;
  if (Site.slide_position >= Site.logo_length){
    Site.slide_position = 0;
  }
  $('.background_img').removeClass('show');
  var logo_show = Site.logo[Site.slide_position];
  $(logo_show).addClass('show');
}

prevSlide = function(){
  Site.slide_position = Site.slide_position - 1;
  console.log(Site.slide_position)
  if (Site.slide_position < 0){
    console.log('hello');
    Site.slide_position = Site.logo_length - 1;
  }

  console.log(Site.slide_position)

  $('.background_img').removeClass('show');
  var logo_show = Site.logo[Site.slide_position];
  $(logo_show).addClass('show');
}

backgroundDetectSetup = function(){
  var background_width = $('.show img').width();
  $('.background_detect').css({ 'width': background_width });
}