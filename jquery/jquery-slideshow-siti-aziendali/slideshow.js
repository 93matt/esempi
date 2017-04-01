var Slideshow = {

	timer: null,
	
	index: 0,
	
	wrapper: $('#slideshow-wrapper'),
	
	slides: $('div.slide'),
	
	buttons: $('span', '#slideshow-buttons'),
	
	current: function(i) {
	
		var btns = this.buttons;
		
		btns.eq(i).addClass('active').
		siblings().removeClass('active');
	
	},
	
	pause: function() {
	
		this.slides.hover(function() {
		
			clearInterval(Slideshow.timer);
			Slideshow.timer = null;
		
		
		}, function() {
		
			Slideshow.slide();
		
		
		});
	
	
	},
	
	slide: function() {
	
		var $slides = this.slides;
		var $wrapper = this.wrapper;
		
		Slideshow.timer = setInterval(function() {
		
			Slideshow.index++;
			
			if(Slideshow.index == $slides.length) {
			
				Slideshow.index = 0;
			
			}
			
			var slide = $slides.eq(Slideshow.index);
			
			$wrapper.animate({
				left: - slide.position().left
			}, 2000);
			
			Slideshow.current(Slideshow.index);
		
		
		
		}, 2000);
		
	
	
	},
	
	init: function() {
	
		this.slide();
		this.pause();
	
	
	}


};

$(function() {

	Slideshow.init();

});