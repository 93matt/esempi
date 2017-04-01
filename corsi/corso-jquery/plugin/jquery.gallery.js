(function($) {

	$.fn.gallery = function(options) {
	
	    var that = this;
	
		var settings = {
		
			slide: $('img', that),
			navigation: $('.gallery-nav', that)
		
		};
		
		options = $.extend(settings, options);
		
		
		$.fn.gallery.actionOnNavigation = function(callback) {
		
			options.slide.on('click', callback);			
		
		};
		
		return this.each(function() {
		
		
			$('a', options.navigation).on('click', function(e) {
			
				e.preventDefault();
			
				var $a = $(this);
				var $slide = options.slide.eq($a.data('img'));
				
				$slide.fadeIn(1000).siblings().hide();
			
			
			});
			
			
		
		});
	
	
	};



})(jQuery);