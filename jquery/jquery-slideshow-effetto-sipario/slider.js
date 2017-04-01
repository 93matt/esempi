var Slider = new function() {

	var slider = document.getElementById('slider'),
		slides = $('div.slide', slider),
		wrapper = $('#slider-wrapper', slider),
		leftPanel = $('#slider-panel-left', slider),
		rightPanel = $('#slider-panel-right', slider),
		index = -1,
		timer = null;
		
	var reset = function() {
	
		leftPanel.width(250);
		rightPanel.width(250);
	
	
	};
		
	var slidePanels = function() {
	
		leftPanel.animate({
			width: 0
		}, 1000, 'easeOutBounce');
		
		rightPanel.animate({
			width: 0
		}, 1000, 'easeOutBounce');
	
	
	
	};
	
	var autoSlide = function() {
	
		timer = setInterval(function() {
		
			index++;
			
			reset();
			
			if(index == (slides.length -1)) {
			
				index = -1;
			
			
			}
		
			var slide = slides.eq(index);
			
			wrapper.animate({
				left: - slide.position().left
			}, 0, function() {
			
				slidePanels();
			
			
			});
		
		
		}, 2000);
	
	
	
	};
	
	this.init = function() {
	
		autoSlide();
	
	
	};


}();


$(function() {

	Slider.init();


});