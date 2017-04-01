var Slideshow = new function() {

	var slides = $('img', document.getElementById('slide-wrapper')),
		posts = $('li', document.getElementById('navigation')),
		index = -1,
		timer = null,
		wrapper = $('#slide-wrapper');
		
		
	var slideTo = function(i) {
	
		wrapper.animate({
			left: - slides.eq(i).position().left
		}, 2000, function() {
		
			highlight(i);
		
		});
	
	
	};
	
	var highlight = function(n) {
	
		posts.eq(n).addClass('highlight').
		siblings().removeClass('highlight');
	
	
	};
	
	var autoSlide = function() {
	
	
		timer = setInterval(function() {
		
			index++;
			
			if(index == (slides.length - 1)) {
			
				index = -1;
			
			
			}
			
			slideTo(index);
		
		
		
		}, 2000);
	
	
	
	};
	
	
	this.init = function() {
	
		autoSlide();
	
	
	};



}();



$(function() {

	Slideshow.init();
	
	
});