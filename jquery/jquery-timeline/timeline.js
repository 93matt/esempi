var Timeline = {

	cursor: $('#timecursor'),
	
	links: $('a', '#timeline'),
	
	move: function(reference) {
	
		var $cursor = this.cursor;
		
		$cursor.animate({
			top: reference.position().top
		}, 600);
	
	},
	
	slide: function() {
	
		var $links = this.links;
		
		$links.each(function() {
		
			var $a = $(this);
			var parent = $a.parent();
			var id = $($a.attr('href'));
			
			$a.mouseover(function() {
			
				Timeline.move(parent);
			
			
			});
			
			$a.click(function(e) {
			
				$('html,body').animate({
					scrollTop: id.offset().top - 200
				}, 900);
				
				
				e.preventDefault();
			
			
			});
		
		
		});
	
	
	},
	
	init: function() {
	
		this.slide();
	
	
	}

};

$(function() {

	Timeline.init();

});