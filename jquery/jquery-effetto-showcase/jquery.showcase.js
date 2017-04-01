(function($) {

	$.fn.showcase = function(options) {
	
		var that = this;
		
		var settings = {
		
			wrapper: $('#showcase-wrapper'),
			slides:  $('div.slide'),
			menu: $('#showcase-menu'),
			caption: $('p.caption'),
			slidingSpeed: 1000,
			fadeSpeed: 1000
		
		};
		
		options = $.extend(settings, options);
		
		var navigate = function() {
		
			$('a', options.menu).each(function() {
			
				var $a = $(this);
				var slide = $($a.attr('rel'));
				
				$a.click(function(event) {
				
				    options.caption.hide();
				
					options.wrapper.animate({
						left: - slide.position().left
					}, options.slidingSpeed, function() {
					
						slide.find(options.caption).
						fadeIn(options.fadeSpeed);
					
					});
				
					event.preventDefault();
				
				});
			
			});
		
		};
		
		return that.each(function() {
		
			navigate();
		
		});
	
	};

})(jQuery);

$(function() {

	$('#showcase').showcase();

});