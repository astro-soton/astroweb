
/* ==============================================
Testimonial Slider
=============================================== */ 

$(document).ready(function() {
 
  $("#owl-testimonial").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});


$(document).ready(function() {
 
  $("#owl-testimonial2").owlCarousel({
 
      navigation : true, // Show next and prev buttons
    navigationText: [
      "<img src='img/arrow-l.png'>",
      "<img src='img/arrow-r.png'>"
      ],
    pagination: false,
      slideSpeed : 200,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay: true,
      stopOnHover : true,
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});


$(document).ready(function() {
 
  $("#owl-features").owlCarousel({
 
      navigation : true, // Show next and prev buttons
    navigationText: [
      "<img src='img/arrow-l.png'>",
      "<img src='img/arrow-r.png'>"
      ],
    pagination: false,
      slideSpeed : 200,
      paginationSpeed : 400,
      autoPlay: true,
      stopOnHover : true,
      items : 3, //10 items above 1000px browser width
      itemsDesktop : [1000,3], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,2], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});


$(document).ready(function() {
 
  $("#owl-how").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});


$(document).ready(function() {
 
  $("#owl-screenshots").owlCarousel({
 
      navigation : true, // Show next and prev buttons
    navigationText: [
      "<img src='img/arrow-l.png'>",
      "<img src='img/arrow-r.png'>"
      ],
    pagination: false,
    autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});

$(document).ready(function(){
$('#owl-screenshots a').nivoLightbox();
owl.nivoLightbox({
            effect: 'fadeScale',                             // The effect to use when showing the lightbox
        });
});

/* ==============================================
================= Smooth Scroll ==================
===============================================*/

smoothScroll.init({
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callbackBefore: function ( toggle, anchor ) {}, // Function to run before scrolling
    callbackAfter: function ( toggle, anchor ) {} // Function to run after scrolling
});



