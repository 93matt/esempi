var Slideshow = new function() {

	var slideshow = document.getElementById('slideshow'),
		wrapper = $('#slideshow-wrapper', slideshow),
		slides = $('img', wrapper),
		controls = $('a', document.getElementById('slideshow-nav')),
		cursor = $('#slideshow-nav-cursor', slideshow),
		caption = $('#caption', slideshow),
		timer = null,
		index = 0;
		
	var prepare = function() {
	
		slides.each(function(i) {
		
			var slide = $(this);
			var id = 'slide-' + (i+1);
			
			slide.attr('id', id);
			
			controls.eq(i).
			attr('href', '#' + id);
		
		});
		
		slides.not(':first').hide();
	
	};
	
	var reset = function() {
	
		slides.not(':first').hide();
	
	};
	
	var moveCursor = function(link) {
	
		cursor.
		animate({
			left: link.position().left + cursor.width()
		}, 0, function() {

		
			$(this).fadeIn(0, function() {
			
				 link.addClass('active').siblings().removeClass('active');
				 
			
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
	
	var autoSlide = function() {
	
		timer = setInterval(function() {
		
			index++;
			
			if(index == slides.length) {
			
				index = 0;
				
				reset();
			
			}
			
			var slide = slides.eq(index);
			var text = slide.attr('alt');
			
			caption.hide();
			
			
			slide.fadeIn(1000).siblings().hide();
			
			caption.text(text).fadeIn(1000);
			
			moveCursor(controls.eq(index));
		
		
		}, 2000);
	
	};
	
	var handleControls = function() {
	
		controls.each(function() {
		
			var $a = $(this);
			var slideId = $($a.attr('href'));
			
			$a.click(function(event) {
			
			    clearInterval(timer);
			    timer = null;
			    
			    caption.hide();
			
				slideId.fadeIn(1000).siblings().hide();
				
				caption.text(slideId.attr('alt')).fadeIn(1000);
				
				moveCursor($a);
				
				setTimeout(function() {
				
					autoSlide();
				
				
				}, 2000);
				
				event.preventDefault();
			});
		
		
		});
	
	};
	
	this.init = function() {
	
		prepare();
		
		autoSlide();
		
		pauseOnHover();
		
		handleControls();
	
	};



}();

$(function() {

	Slideshow.init();

});