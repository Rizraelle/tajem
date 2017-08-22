$(document).ready(function(){
    $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });
});


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
  clearTimeout(timeOutSlide);
};


function rightArrow() {
  if (i<=screen.length-2) {
    i++;
  } else if (i>screen.length-2) {
    i = 0;
  };
  changeScreen();
};



//setInterval(rightArrow, 1000);



function changeScreen() {
  document.getElementById('sliderBackground').innerHTML = '<div class="'+screen[i]+'"></div>';
};



$(document).ready(function(){
  $('.photo-slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1
});
});
