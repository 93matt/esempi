var Slideshow = new function() {

	var slideshow = document.getElementById('slideshow'),
		wrapper = $('#slide-wrapper', slideshow),
		slides = $('figure', wrapper),
		index = -1,
		timer = null;
		
	var prepare = function() {
	
		slides.hide();
		$('figcaption', wrapper).hide();
	
	};
	
	var run = function() {
	
		timer = setInterval(function() {
		
			index++;
			
			if(index == (slides.length-1)) {
			
				prepare();
				
				index = -1;
			
			}
			
			var slide = slides.eq(index);
			
	
			
				slide.fadeIn(2000, function() {
				
					$('figcaption', slide).slideDown(2000);
				
				}).siblings().hide();
		
		
		}, 4000);
	
	};

	this.init = function() {
	
		prepare();
		run();
	
	};

}();

$(function() {

	Slideshow.init();

});