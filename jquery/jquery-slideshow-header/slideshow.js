var Slideshow = function(id) {
	
	this.id = id || 'slideshow';
	
	var slideshow = document.getElementById(this.id),
		wrapper = $('#slideshow-wrapper', slideshow),
		images = $('img', slideshow),
		controls = $('a', '#slideshow-navigation'),
		index = 0,
		timer = null;
		
	var autoSlide = function() {
	
		timer = setInterval(function() {
		
			index++;
			
			if(index == images.length) {
			
				index = 0;
			
			}
			
			wrapper.animate({
				left: - images.eq(index).position().left
			}, 2000, function() {
			
				controls.eq(index).addClass('current').siblings().removeClass('current');
			
			});
		
		}, 2000);
	
	};
		
	this.init = function() {
	
		autoSlide();
	
	};	

};

$(function() {

	var slideshow = new Slideshow();
	slideshow.init();

});