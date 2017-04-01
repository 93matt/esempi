(function($) {

	$(function() {
	
		var SiteTour = new function() {
		
			var mainMenu = $('#menu-main'),
				secMenu = $('#menu-utility-navigation'),
				wrapper = $('<div id="site-tour"/>').html('<a href="#" id="close-tour">Chiudi</a>'),
				layer = $('<div id="overlay"/>'),
				button = $('<a href="#" id="tour-button"/>').text('Tour del sito');
				
			var _populate = function() {
			
				button.appendTo('body');
			
				layer.css({
					width: $(document).width(),
					height: $(document).height(),
					opacity: 0.6
				}).appendTo('body');
				
				wrapper.css({
					top: ($(document).height() / 2) - 900,
					left: ($(document).width() / 2) - 450
				}).insertAfter('#overlay');
				
				var copyMainMenu = mainMenu.clone();
				var copySecMenu = secMenu.clone();
				
				copyMainMenu.attr({id: 'main', 'class': ''});
				copySecMenu.attr({id: 'categories', 'class': ''});
				
				copyMainMenu.appendTo('#site-tour');
				copySecMenu.appendTo('#site-tour');
			
			
			};
			
			var _handle = function() {
			
				$('#tour-button').click(function(event) {
				
					$('#overlay, #site-tour').slideDown(500);
				
					event.preventDefault();
				
				});
				
				$('#close-tour').click(function(event) {
				
					$('#overlay, #site-tour').slideUp(500);
				
					event.preventDefault();
				
				});

				
			
			
			};
			
			this.init = function() {
			
				_populate();
				_handle();
			
			};
				
		
		
		}();
	
		SiteTour.init();
	
	});



})(jQuery);