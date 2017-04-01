var Slideshow = new function() {

	var slideshow = document.getElementById('slideshow'),
		images = $('img', slideshow),
		panelLeft = $('#panel-left', slideshow),
		panelRight = $('#panel-right', slideshow),
		index = -1,
		timer = null;
	
	var autoSlide = function() {
	
		timer = setInterval(function() {
		
			index++;
			
			if(index == (images.length - 1)) {
			
				index = -1;
				images.hide();
			
			}
			
			panelLeft.animate({
				left: 0
			}, 250);
			panelRight.animate({
				right: 0
			}, 250);
			panelLeft.animate({
				left: - 325
			}, 250);
			panelRight.animate({
				right: - 325
			}, 250);
			
			images.eq(index).fadeIn(1000).siblings('img').hide();
		
		
		}, 2000);
	
	};
	
	this.init = function() {
	
		autoSlide();
	
	};


}();

$(function() {

	Slideshow.init();

});