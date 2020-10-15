// function myFunction() {
//   var x = document.getElementById("projectNavigation");
//   if (x.className === "projectnavigation") {
//     x.className += " responsive";
//   } else {
//     x.className = "projectnavigation";
//   }
// }
//
// function onclick(event) {
//   plusSlides(-1)
// }
//
// function onclick(event) {
//   plusSlides(1)
// }
//
// var slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) { slideIndex = 1; }
//   if (n < 1) { slideIndex = slides.length; }
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
//
// function(e) {
//   e.preventDefault();
//   $brandGallery.eq(2).click();
// }

// function(e) {
  // Discard the second event of a jQuery.event.trigger() and
  // when an event is called after a page has unloaded
//   return typeof jQuery !== 'undefined' &&
//     jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
// }


var myButton = document.getElementById("btnScrollToTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// var slideIndex = 1;
// showSlides(slideIndex);
//
// Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
//
// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) { slideIndex = 1; }
//   if (n < 1) { slideIndex = slides.length; }
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
