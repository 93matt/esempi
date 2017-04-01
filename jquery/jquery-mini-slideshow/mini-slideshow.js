var MiniSlideshow = new function() {

	var timer = null,
	    index = 0,
	    slides = $('img', '#slideshow-wrapper'),
	    controls = $('a', '#slideshow-controls');
	    
	var prepare = function() {
	
		slides.not(':first').hide();
	
	};
	    
	var autoSlide = function() {
	
		timer = setInterval(function() {
		
			index++;
			
			if(index == slides.length) {
			
				index = 0;
				
				prepare();
			
			}
			
			slides.eq(index).
			fadeIn(1500).
			siblings().
			hide();
			
			controls.eq(index).
			addClass('active').
			siblings().
			removeClass('active');
			
					
		}, 1500);
	
	};
	
	var handleControls = function() {
	
		controls.each(function() {
		
			var $a = $(this);
			var href = $a.attr('href');
			var slide = $(href);
			
			$a.click(function(event) {
			
				clearInterval(timer);
				timer = null;
			
				slide.fadeIn(1500)
				.siblings()
				.hide();
				
				$a.addClass('active').
				siblings().
				removeClass('active');
				
				
				setTimeout(function() {
				
					autoSlide();
				
				}, 1500);
			
		
				event.preventDefault();
			
			});
		
		});
	
	};
	
	var pauseOnHover = function() {
	
		slides.hover(function() {
		
			clearInterval(timer);
			timer = null;
		
		
		}, function() {
		
			autoSlide();
		
		});
	
	};
	
	this.init = function() {
	
		prepare();
		autoSlide();
		handleControls();
		pauseOnHover();
	
	};


}();

$(function() {

	MiniSlideshow.init();

});