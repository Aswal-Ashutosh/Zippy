const selectedSlide = $('.selected-slide');
const slides = $('.slide-item');

const TOTAL_SLIDES = 7;
const TOTAL_VISIBLE_SLIDES = 6;
const LAST_VALID_START_IDX = TOTAL_SLIDES - TOTAL_VISIBLE_SLIDES + 1;
const slides_name = [
  'lifestyle-1.jpg',
  'lifestyle-2.jpg',
  'lifestyle-3.jpg',
  'lifestyle-4.jpg',
  'lifestyle-5.jpg',
  'lifestyle-6.jpg',
  'lifestyle-7.jpg',
  'lifestyle-8.jpg',
];

let start = 0;

//Set onClick => Make Slide as ActiveSlide
slides.click(function () {
  $('.slide-item.active').removeClass('active');
  selectedSlide.attr('src', $(this).attr('src'));
  $(this).addClass('active');
});


function updateSlidesAndSelectedSlide(){
  for(var i = 0; i < slides.length; ++i){
    slides[i].setAttribute("src", 'images/' + slides_name[(start + i) % TOTAL_SLIDES]);
  }
  //Setting the active slide to selected slide
  selectedSlide.attr('src', $('.slide-item.active').attr('src'));
}

//Set onClick => Make slides to move one step right
$('.arrow-btn-right').click(function(){
  start = (start + 1) % TOTAL_SLIDES;
  updateSlidesAndSelectedSlide();
});

//Set onClick => Make slides to move one step left
$('.arrow-btn-left').click(function(){
  start = start - 1 >= 0 ? start - 1 : start - 1 + TOTAL_SLIDES;
  updateSlidesAndSelectedSlide();
});