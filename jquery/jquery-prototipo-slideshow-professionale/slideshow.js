/** @license Copyright (C) 2011 Gabriele Romanato
  *  You cannot reuse this code or any part of it
  *  without an explicit permission from the author. */
   

var Slideshow = new function() {

	var timer = null,
	    index = 0,
	    wrapper = $('#slideshow-wrapper', '#slideshow'),
	    slides = $('img', wrapper),
	    thumbs = $('a', '#slideshow-thumbs'),
	    previous = $('#previous', '#controls'),
	    next = $('#next', '#controls');
	    
	var getSlidePositions = function() {
	
		var positions = [];
		slides.each(function(i) {
		
			var left = $(this).position().left;
			
			positions[i] = left;
		
		});
		
		return positions;
	
	};
	
	var addOffsetsToImages = function() {
	
		slides.each(function() {
		
			$(this).attr('position', $(this).position().left);
		
		});
	
	};
	
	var autoSlide = function() {
	
		var offsets = getSlidePositions();
		timer = setInterval(function() {
		
		    index++;
		    
		    if(index == offsets.length) {
		    
		    	index = 0;
		    
		    }
		
			wrapper.animate({
				left: - offsets[index]
			}, 1000, function() {
			
				thumbs.eq(index).animate({
					opacity: 0.5
				}, 500, function() {
				
					$(this).animate({
						opacity: 1
					}, 500);
				
				});	
			
			});
		
		
		
		}, 2000);
		
	
	
	};
	
	var handleThumbLinks = function() {
	
		thumbs.each(function() {
		
			var $a = $(this);
			var imgId = $('#' + $a.attr('rel'));
			var $offset = imgId.attr('position');
			
			$a.click(function(event) {
			
				clearInterval(timer);
				
				wrapper.animate({
					left: - $offset
				}, 1000, function() {
				
					autoSlide();
				
				});
			
				event.preventDefault();
			
			});
		
		});
	
	};
	
	var handlePrevNextButtons = function() {
	
	    var offsets = getSlidePositions();
	
		previous.click(function(event) {
		    
		    clearInterval(timer);
		
		    index--;
		
			if(index == 0) {
			
				index = 0;
			
			}
			
			wrapper.animate({
				left: - offsets[index]
			}, 1000, function() {
			
				autoSlide();
			
			});
			
		
			event.preventDefault();
		
		});
		
		next.click(function(event) {
		    
		    clearInterval(timer);
		
		    index++;
		
			if(index == offsets.length) {
			
				index = 0;
			
			}
			
			wrapper.animate({
				left: - offsets[index]
			}, 1000, function() {
			
				autoSlide();
			
			});
			
		
			event.preventDefault();
		
		});

	
	
	};
	
	this.init = function() {
	
		addOffsetsToImages();
	
		autoSlide();
		
		handleThumbLinks();
		
		handlePrevNextButtons();
	
	};


}();

$(function() {

	Slideshow.init();

});