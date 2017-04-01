var Slideshow = new function() {

	var timer = null,
	    index = 0,
	    wrapper = $('#slideshow-wrapper', '#slideshow'),
	    slides = $('div.slide', wrapper),
	    thumbs = $('a', '#slideshow-nav'),
		cursor = $('#slideshow-nav-cursor', '#slideshow-nav');
		
	var prepare = function() {
	
		cursor.css('opacity', 0.8);
	
	};
	
	var reset = function() {
	
		$('img.animated', slides).hide();
	
	};
	
	var animateSlide = function(slide) {
	
		var img = $('img.animated', slide);
		var pos = slide.index();
		
		switch(pos) {
		
			case 0:
				img.effect('blind', {
					mode: 'show',
					direction: 'vertical'
				}, 1000);
				
				break;
				
			case 1:
				img.effect('drop', {
					mode: 'show',
					direction: 'left'
				}, 1000);
				
				break;
				
			case 2:
				img.fadeIn(1000);
				
				break;
				
			default:
			
				break;
		
		
		}
	
	
	};
	
	var getSlidePositions = function() {
	
		var positions = [];
		slides.each(function(i) {
		
			var left = $(this).position().left;
			
			positions[i] = left;
		
		});
		
		return positions;
	
	};
	
	var positionCursor = function(element) {
	
		cursor.css('display', 'block').animate({
			left: element.position().left
		}, 500);
	
	};
	
	
	var autoSlide = function() {
	
		var offsets = getSlidePositions();
		timer = setInterval(function() {
		
		    index++;
		    
		    if(index == offsets.length) {
		    
		    	index = 0;
				reset();
		    
		    }
		
			wrapper.animate({
				left: - offsets[index]
			}, 1000, function() {
			
				positionCursor(thumbs.eq(index));
				animateSlide(slides.eq(index));
			
			});
		
		
		}, 2500);
		
	
	
	};
	
	var handleThumbLinks = function() {
	
		thumbs.each(function() {
		
			var $a = $(this);
			var slideId = $($a.attr('href'));
			var $offset = slideId.position().left;
			
			$a.click(function(event) {
			
				clearInterval(timer);
				
				positionCursor($a);
				
				reset();
				
				wrapper.animate({
					left: - $offset
				}, 1000, function() {
				
					animateSlide(slides.eq(index));
					
					autoSlide();
				
				});
			
				event.preventDefault();
			
			});
		
		});
	
	};

	
	
	this.init = function() {
	
	    prepare();
	
		autoSlide();
		
		handleThumbLinks();
	
	};




		
		
}();


$(function() {

	Slideshow.init();

});