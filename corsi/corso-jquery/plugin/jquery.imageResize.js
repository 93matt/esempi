(function($) {
	$.fn.imageResize = function(options) {
		if (!this.is('img')) {
			return;
		}
		var defaults = {
			width: 150,
			height: 150
		};
		options = $.extend(defaults, options);
		var _resize = function(img) {
				var maxWidth = options.width;
				var maxHeight = options.height;
				var ratio = 0;
				var width = $(img).width();
				var height = $(img).height();
				if (width > maxWidth) {
					ratio = maxWidth / width;
					$(img).css('width', maxWidth);
					$(img).css('height', height * ratio);
				}
				if (height > maxHeight) {
					ratio = maxHeight / height;
					$(img).css('height', maxHeight);
					$(img).css('width', width * ratio);
				}
			};
		return this.each(function() {
			_resize(this);
		});
	};
})(jQuery);