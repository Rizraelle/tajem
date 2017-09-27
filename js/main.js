//Scrolling on page


$(document).ready(function(){
    $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
        e.preventDefault();
        var time = 1000;
        var go = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(go).offset().top }, time);
    });
});


//Navbar button function


function addClass() {
  document.getElementById("elem").classList.add("active");
};

function removeClass() {
  document.getElementById("elem").classList.remove("active");
};

function checkClass() {
  if (document.getElementById("elem").classList.contains("active")) {
    removeClass();
  } else {
    addClass();
  }
};



//Slider on first screen

var screen = [ 
  'slider_1', 
  'slider_2', 
  'slider_3',
  'slider_4'
];

var i = 0;

changeScreen();



var go;

function timeOutSlide() {
  rightArrow();
  setTimeout(timeOutSlide, 4000);
};


function slide() {
  go = setTimeout(timeOutSlide, 4000);
};

slide();



function leftArrow() {
  if (i>=screen.length-2) {
    i--;
  } else if (i<screen.length-2) {
    i = screen.length-1;
  };
  changeScreen();
};


function rightArrow() {
  if (i<=screen.length-2) {
    i++;
  } else if (i>screen.length-2) {
    i = 0;
  };
  changeScreen();
};


function sliderClick(direction) {
    clearTimeout(go);
  if (direction === 'left') {
    leftArrow();
  } else {
    rightArrow();
  }
  go = setTimeout(timeOutSlide, 4000);
};



function changeScreen() {
  document.getElementById('sliderBackground').innerHTML = '<div class="'+screen[i]+'"></div>';
};


//Slick slider


$(document).ready(function(){
  $('.photo-slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1
});
});
