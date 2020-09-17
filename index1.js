

$(document).ready(function () {
  
  $(".i1").on({
    mouseenter: function () {$(".i1>a")[0].style.color = "red";},
    mouseleave: function () {$(".i1>a")[0].style.color = "rgb(142,116,116)";},
  });
  $(".i2").on({
    mouseenter: function () {$(".i2>a")[0].style.color = "red";},
    mouseleave: function () { $(".i2>a")[0].style.color = "rgb(142,116,116)";},
  });

  $(".i3").on({
    mouseenter: function () {$(".i3>a")[0].style.color = "red";},
    mouseleave: function () {$(".i3>a")[0].style.color = "rgb(142,116,116)";},
  });

  $(".i4").on({
    mouseenter: function () {$(".i4>a")[0].style.color = "red";},
    mouseleave: function () {$(".i4>a")[0].style.color = "rgb(142,116,116)";},
  });


  $(".i5").on({
    mouseenter: function () { $(".i5>a")[0].style.color = "red";},
    mouseleave: function () {$(".i5>a")[0].style.color = "rgb(142,116,116)";},
  });
  $(".i6").on({
    mouseenter: function () { $(".i6>a")[0].style.color = "red";},
    mouseleave: function () {$(".i6>a")[0].style.color = "rgb(142,116,116)";},
  });
  $("img[src='hamburger.svg']").click(function () {
    $(".sub_menu").slideToggle();
  });
  $(".sub1").click(function () {
    $(".hide1").slideToggle();
  });
  $(".sub2").click(function () {
    $(".hide2").slideToggle();
  });
  $(".sub3").click(function () {
    $(".hide3").slideToggle();
  });
let win = window;
document.body.onclick = function(e){
  
  console.log(e.target.tagName);
  if(e.target.tagName == 'A'){
    console.log("hello1",e.target.className)
    if(e.target.className === "check1" || e.target.className === 'check2'){
      console.log("hello2");
      let val1 = document.querySelector('.h3').getBoundingClientRect().y-100;
      console.log(val1);
          win.scrollBy(0,100);
          console.log("hello3");
 
        }
  }
}
$('a[href="#h23"]').click(()=>{
  window.scrollTo(0,658*3-190);
})
$('a[href="#h13"]').click(()=>{
  window.scrollTo(0,658);
})



//carasoul


 
  var slides = document.querySelectorAll(".carousel-item"),
    button = document.getElementById("button"),
    arrows = document.querySelectorAll(".lnr"),
    carouselCount = 0,
    scrollInterval,
    interval = 5000;

  arrows[0].addEventListener("click", function (e) {
    e = e || window.event;
    e.preventDefault();
    carouselCount -= 100;
    slider();
    if (e.type !== "autoClick") {
      clearInterval(scrollInterval);
      scrollInterval = setInterval(autoScroll, interval);
    }
  });
  arrows[1].addEventListener("click", sliderEvent);
  arrows[1].addEventListener("autoClick", sliderEvent);

  function sliderEvent(e) {
    e = e || window.event;
    e.preventDefault();
    carouselCount += 100;
    slider();
    if (e.type !== "autoClick") {
      clearInterval(scrollInterval);
      scrollInterval = setInterval(autoScroll, interval);
    }
  }

  function slider() {
    switch (carouselCount) {
      case -100:
        carouselCount = 0;
        break;
      case 300:
        carouselCount = 0;
        break;
      default:
        break;
    }
    // console.log(carouselCount);
    for (var i = 0; i < slides.length; i += 1) {
      slides[i].setAttribute(
        "style",
        "transform:translateX(-" + carouselCount + "%)"
      );
    }
  }

  // create new Event to dispatch click for auto scroll
  var autoClick = new Event("autoClick");
  function autoScroll() {
    arrows[1].dispatchEvent(autoClick);
  }

  // set timing of dispatch click events
  scrollInterval = setInterval(autoScroll, interval);

  
  console.log( document.querySelectorAll('.card'))
  document.querySelector('body').onscroll= function(e){
    // console.log(window.pageYOffset)
    // console.log(document.documentElement.clientHeight)
    document.querySelectorAll('.card').forEach(
      function(card){
        if(Math.floor(window.pageYOffset+card.clientHeight+280) > card.offsetTop ){
          $('.card').animate({
            top:"0px",
            opacity:1
            
          },1000);
            
          }
      })
    }
})

