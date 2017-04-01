(function($) {

	$.fn.gallery = function(options) {
	
		var that = this;
		
		var settings = {
		
			wrapper: $('#gallery-wrapper'),
			thumbs: $('#gallery-thumbs')
		
		};
	
		options = $.extend(settings, options);
		
		var Gallery = new function() {
		
			var timer = null,
				index = 0,
				images = $('img', options.wrapper),
				links = $('a', options.thumbs);
				
			var highlightCurrentItem = function(element) {
			
				element.addClass('active').siblings().removeClass('active');
			
			
			};
			
			var prepare = function() {
			
				images.not(':first').hide();
			
			};
			
			var autoRun = function() {
			
				timer = setInterval(function() {
				
					index++;
					
					if(index == images.length) {
					
						index = 0;
					
					}
					
					var img = images.eq(index);
					var link = links.eq(index);
					
					img.fadeIn(1500).siblings().hide();
					highlightCurrentItem(link);
				
				
				}, 1500);
			
			
			};
			
			this.init = function() {
			
				prepare();
				autoRun();
			
			
			};
		
		}();
		
		return that.each(function() {
		
			Gallery.init();
		
		});
	};


})(jQuery);

$(function() {

	$('#gallery').gallery();

});