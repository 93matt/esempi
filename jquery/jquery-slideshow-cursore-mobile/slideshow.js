var Slideshow = new function() {

	var slideshow = document.getElementById('slideshow'),
		slides = $('div.slide', slideshow),
		cursor = $('div', document.getElementById('slideshow-cursor')),
		images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg'],
		index = 0,
		timer = null;
		
	this.preload = function() {
	
		var i, len = images.length;
		
		for(i = 0; i < len; i++) {
		
			var img = document.createElement('img');
			var path = images[i];
			img.src = path;
		
		
		}
	
	
	};
	
	var prepare = function() {
	
		slides.not(':first').hide();
	
	
	};
	
	var slideIn = function() {
	
		timer = setInterval(function() {
		
			index++;
			
			if(index == slides.length) {
			
				cursor.animate({left: 0}, 0);
				$('div.caption', slideshow).animate({bottom: - 100}, 0);
				
				index = 0;
			
			
			}
			
			var slide = slides.eq(index);
			
			
			slide.fadeIn(2000, function() {
			
				var $slide = $(this);
				
				
				
					$('div.caption', $slide).animate({
						bottom: 0
					}, 1000, function() {
					
						cursor.animate({
							left: '+=140px'
						}, 1000);
					
					
					});
				
				
			
			
			}).siblings().hide();
		
		
		
		}, 4000);
	
	
	
	};
	
	this.init = function() {
	
		prepare();
	
		slideIn();
	
	};


}();

$(window).load(function() {

	Slideshow.preload();
	
	
	$(function() {
	
		Slideshow.init();
	
	
	});



});