var Slider = new function() {

	var wrapper = document.getElementById('slider-wrapper'),
		slides = $('div.slide', wrapper),
		controls = $('a', '#slider-controls');
		
		
	var prepare = function() {
	
		slides.each(function() {
		
			var slide = $(this);
			slide.append('<div class="overlay"/>');
			
			var overlay = $('div.overlay', slide);
			var title = slide.attr('title');
			
			overlay.append('<h2 class="title"/>');
			
			var $title = $('h2.title', overlay);
			$title.text(title);
			
			for(var i = 0; i < 100; i += 1) {
			
				overlay.append('<div class="box"/>');
			
			
			}
		
		
		});
	
	
	};
	
	
	var fade = function(slide) {
	
		var box = $('div.box', slide), b = 0;
		
		(function() {
		
		   		
		    $(box[b++] || []).animate({opacity: 0}, 10, arguments.callee);
		
		})();
	
	};
	
	var run = function() {
	
		controls.each(function() {
		
			var control = $(this);
			var slide = slides.eq(control.attr('rel'));
			
			control.click(function(event) {
			
				$('div.box', wrapper).animate({opacity: 1}, 0);
			
				$(wrapper).animate({
					left: - slide.position().left
				}, 2000, function() {
				
					fade(slide);
				
				});	
			
				event.preventDefault();
			
			});
		
		
		
		});
	
	
	};
	
	
	this.init = function() {
	
		prepare();
		run();
	
	};



}();

$(function() {

	Slider.init();

});