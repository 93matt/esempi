(function($) {


	$.fn.slotmachine = function(options) {
	
		var that = this;
		var settings = {
		
			up: $('#up', that),
			down: $('#down', that),
			wrapper: $('#slides', that),
			slides: $('div.slide', that),
			speed: 1000
		
		};
		
		options = $.extend(settings, options);
		
		var SlotMachine = new function() {
		
		    var current = -1,
		        len = options.slides.length;
		
			var move = function(element) {
			
				options.wrapper.animate({
					top: - element.position().top
				}, options.speed, 'easeOutBounce');
			
			
			};
			
			
			var controls = function() {
			
				options.up.click(function(e) {
				
					current++;
					
					if(current == len) {
					
						current = 0;
					
					}
					
					var slide = options.slides.eq(current);
					
					move(slide);
				
					e.preventDefault();
				
				});
				
				options.down.click(function(e) {
				
					current--;
					
					if(current == -1) {
					
						current = 0;
					
					}
					
					var slide = options.slides.eq(current);
					
					move(slide);
				
					e.preventDefault();
				
				});
			
			
			};
			
			this.init = function() {
			
				controls();
			
			
			};
		
		
		
		}();
		
		return that.each(function() {
		
		
			SlotMachine.init();
		
		
		});
	
	
	};



})(jQuery);

$(function() {

	$('#slideshow').slotmachine();

});