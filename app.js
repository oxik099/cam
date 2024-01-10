

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
  
  var gotoSection = function(target) {
    $('html, body').animate({
        scrollTop: $('#' + target).offset().top
    }, 1000);
}

  $("#search-icon").click(function() {
    $(".nav").toggleClass("search");
    $(".nav").toggleClass("no-search");
    $(".search-input").toggleClass("search-active");
  });
  
  $('.menu-toggle').click(function(){
     $(".nav").toggleClass("mobile-nav");
     $(this).toggleClass("is-active");
  });
  












  (function($) {
 
    var SliceSlider = {
      
      /**
       * Settings Object
       */
      settings: {
        delta:              0,
        currentSlideIndex:  0,
        scrollThreshold:    40,
        slides:             $('.slide'),
        numSlides:          $('.slide').length,
        navPrev:            $('.js-prev'),
        navNext:            $('.js-next'),
      },
      
      /**
       * Init
       */
      init: function() {
        s = this.settings;
        this.bindEvents();
      },
      
      /**
       * Bind our click, scroll, key events
       */
      bindEvents: function(){
        
        // Scrollwheel & trackpad
        s.slides.on({
          'DOMMouseScroll mousewheel' : SliceSlider.handleScroll
        });
        // On click prev
        s.navPrev.on({
          'click' : SliceSlider.prevSlide
        });
        // On click next
        s.navNext.on({
          'click' : SliceSlider.nextSlide
        });
        // On Arrow keys
        $(document).keyup(function(e) {
          // Left or back arrows
          if ((e.which === 37) ||  (e.which === 38)){
            SliceSlider.prevSlide();
          }
          // Down or right
          if ((e.which === 39) ||  (e.which === 40)) {
            SliceSlider.nextSlide();
          }
        });
      },
      
      /** 
       * Interept scroll direction
       */
      handleScroll: function(e){
  
        // Scrolling up
        if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) { 
  
          s.delta--;
       
          if ( Math.abs(s.delta) >= s.scrollThreshold) {
            SliceSlider.prevSlide();
          }
        }
   
        // Scrolling Down
        else {
   
          s.delta++;
   
          if (s.delta >= s.scrollThreshold) {
            SliceSlider.nextSlide();
          }
        }
   
        // Prevent page from scrolling
        return false;
      },
  
      /**
       * Show Slide
       */
      showSlide: function(){ 
        // reset
        s.delta = 0;
        // Bail if we're already sliding
        if ($('body').hasClass('is-sliding')){
          return;
        }
        // Loop through our slides
        s.slides.each(function(i, slide) {
  
          // Toggle the is-active class to show slide
          $(slide).toggleClass('is-active', (i === s.currentSlideIndex)); 
          $(slide).toggleClass('is-prev', (i === s.currentSlideIndex - 1)); 
          $(slide).toggleClass('is-next', (i === s.currentSlideIndex + 1)); 
          
          // Add and remove is-sliding class
          $('body').addClass('is-sliding');
  
          setTimeout(function(){
              $('body').removeClass('is-sliding');
          }, 1000);
        });
      },
  
      /**
       * Previous Slide
       */
      prevSlide: function(){
        
        // If on first slide, loop to last
        if (s.currentSlideIndex <= 0) {
          s.currentSlideIndex = s.numSlides;
        }
        s.currentSlideIndex--;
        
        SliceSlider.showSlide();
      },
  
      /**
       * Next Slide
       */
      nextSlide: function(){
        
        s.currentSlideIndex++;
     
        // If on last slide, loop to first
        if (s.currentSlideIndex >= s.numSlides) { 
          s.currentSlideIndex = 0;
        }
   
        SliceSlider.showSlide();
      },
    };
    SliceSlider.init();
  })(jQuery);