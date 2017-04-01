var Gallery = {

	prepare: function() {
	
		$('img', '#gallery-inner').
		not(':first').
		hide();
		
		$('<div id="ribbon"/>').appendTo('#gallery');
	
	},
	
	run: function() {
	
		$('a', '#gallery-nav').each(function() {
		
			var $a = $(this);
			var rel = $a.attr('rel');
			var $img = $('img', '#gallery-inner').eq(rel);
			
			$a.click(function(event) {
			
				switch(rel) {
				
					case '0':
					case '3':
					
				
					
					  $img.fadeIn(1000).siblings().hide();
					
					
					
					
					break;
					
					case '1':
					
					
					
					  $img.slideDown(1000).siblings().hide();
					
					
				
					
					break;
					
					case '2':
					
									
					  $img.show(1000).siblings().hide();
					
					
					
					break;
				
				
				}
			
				event.preventDefault();
			
			});
		
		});
	
	},
	
	init: function() {
	
		this.prepare();
		this.run();
	
	
	}


};

$(function() {

	Gallery.init();

});