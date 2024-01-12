

var mainSlider = new Swiper(".mySwiper2", {
	parallax: true,
	speed: 1200,
	effect: 'slide',
    direction: "vertical",
    autoplay: true,
	navigation: {
	  nextEl: '.upk-button-next',
	  prevEl: '.upk-button-prev',
	},
    pagination: {
         el: '.swiper-pagination',
         clickable: true,
         renderBullet: function(index, className) {
             return '<span class="' + className + ' swiper-pagination-bullet--svg-animation"><svg width="28" height="28" viewBox="0 0 28 28"><circle class="svg__circle" cx="14" cy="14" r="10" fill="none" stroke-width="2"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="2" stroke-width="3"></circle></svg></span>';
         },
     },
  });
  
  // ------------------------------
  // Initialize all timeline values
  // ------------------------------
  

  $("#search-icon").click(function() {
    $(".nav").toggleClass("search");
    $(".nav").toggleClass("no-search");
    $(".search-input").toggleClass("search-active");
  });
  
  $('.menu-toggle').click(function(){
     $(".nav").toggleClass("mobile-nav");
     $(this).toggleClass("is-active");
  });
  


        
   