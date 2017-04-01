var Animation = new function() {

	
		var pieces = 25,
		    index = -1,
		    timer = null,
			pieceStyles = {
		
				width: 160,
				height: 100,
				'float': 'left',
				'backgroundColor': '#c30',
				opacity: 0.5
		
			};
		
	var createPieces = function() {
	
	
		$('<div id="wrapper"/>').appendTo('#image');
		
		for(var i = 0; i < pieces; i += 1) {
		
			$('<div/>').css(pieceStyles).appendTo('#wrapper').hide();
		
		
		}
	
	
	};
	
	var animate = function() {
	
		var blocks = $('div', '#wrapper');
		
		timer = setInterval(function() {
		
			index++;
			
			if(index == pieces) {
			
				index = -1;
			
			}
			
			var r = Math.floor(Math.random()*25);
			
			var block = blocks.eq(r);
			
			if(block.is(':hidden')) {
			
				block.fadeIn(500);
			
			} else {
			
				block.fadeOut(500);
			
			}
		
		
		}, 500);
	
	
	};
	
	this.init = function() {
	
		createPieces();
		
		$('#run').one('click', function(event) {
		
			animate();
		
			event.preventDefault();
		
		});
	
	
	
	};
		


}();

$(function() {

	Animation.init();

});