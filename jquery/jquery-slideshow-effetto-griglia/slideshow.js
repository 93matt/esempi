var Slideshow = new function() {

	var slideshow = document.getElementById('slideshow'),
	    wrapper = $('#slideshow-wrapper', slideshow),
	    images = $('img', wrapper),
	    timer = null,
	    index = -1,
	    grid = $('#grid', slideshow);
	    
	var createGrid = function() {
	
		var i, len = 100, html = '';
		
		for(i = 0; i< len; i += 1) {
		
			html += '<div class="box"></div>';	
		
		}
		
		grid.html(html);
		
		$('div.box', grid).css('opacity', 0.6);
		
		$('div.box:nth-child(even)', grid).addClass('alt');	
	
	};
	
	var autoSlide = function() {
	
		timer = setInterval(function() {
		
			index++;
			
			if(index == (images.length - 1)) {
			
				index = -1;
			
			}
			
			wrapper.animate({
				left: - images.eq(index).position().left
			}, 1000, function() {
			
				grid.slideDown(1000, function() {
				
					$(this).slideUp(500);
				
				});
			
			});
		
		}, 2500);
	
	};
	
	this.init = function() {
	
		createGrid();
		
		autoSlide();
	
	};



}();

$(function() {

	Slideshow.init();

});