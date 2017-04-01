var Gallery = new function() {

	var gallery = document.getElementById('gallery'),
		images = $('img', gallery),
		firstSet = [images.eq(0), images.eq(1), images.eq(3), images.eq(5)],
		secondSet = [images.eq(2), images.eq(4), images.eq(6)],
		firstCursor = $('#cursor-one', gallery),
		secondCursor = $('#cursor-two', gallery),
		firstIndex = -1,
		secondIndex = -1;
		
	var prepare = function() {
	
		firstCursor.css('opacity', 0.7);
		secondCursor.css('opacity', 0.7);
	
	};
	
	var animateSet = function(set, cursor, index) {
	
		setInterval(function() {
		
			index++;
			
			if(index == set.length) {
			
				index = -1;
				
				cursor.fadeOut().css({top: 0, left: 0});
			
			}	
			
			var image = set[index];
			var top = image.position().top;
			var left = image.position().left;
			
			cursor.fadeIn().animate({
				top: top,
				left: left
			}, 1000);
			
			
		
		}, 1000);	
	
	};
	
	this.init = function() {
	
		prepare();
		animateSet(firstSet, firstCursor, firstIndex);
		animateSet(secondSet, secondCursor, secondIndex);
	
	};


}();

$(function() {

	Gallery.init();

});