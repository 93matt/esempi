var Slideshow = new function() {

	var slideshow = document.getElementById('slideshow'),
		wrapper = $('#slideshow-wrapper', slideshow),
		slides = $('img', wrapper),
		controls = $('span', document.getElementById('pagination')),
		loader = $('#loading'),
		timer = null,
		index = -1;
		
	var reset = function() {
	
		slides.hide();
	
	};
		
	var showCurrentSlide = function(i) {
	
		controls.eq(i).addClass('active').
		siblings().removeClass('active');
	
	};
	
	var showSlideLoader = function(callback) {
	
		loader.fadeIn(1000, function() {
		
			setTimeout(function() {
			
				loader.fadeOut(1000, callback);
			
			}, 1000);
		
		});
	
	};
		
	var autoSlide = function() {
	
	
		timer = setInterval(function() {
		
			index++;
			
			if(index == (slides.length-1)) {
			
				index = -1;
				
				reset();
			
			}
			
			
			var slide = slides.eq(index);
			
			showCurrentSlide(index);
			
			slide.fadeIn(2000, function() {
			
				$(this).fadeOut(2000);
			  
			  	
			});
			 
		
		
		}, 4000);
		
	
	
	};		
	
	this.init = function() {
		
		showSlideLoader(function() {
			autoSlide();
		});
	};

}();

$(function() {

	Slideshow.init();

});