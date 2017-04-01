var Slider = new function() {


	var slideshow = document.getElementById('slideshow'),
	    wrapper = $('#slideshow-wrapper', slideshow),
	    images = $('img', wrapper),
	    cursor = $('#slideshow-cursor', slideshow),
	    timer = null,
	    index = -1;
	    
	var prepare = function() {
	
		cursor.css('opacity', 0.5);
	
	};
	
	var autoSlide = function() {
	
		timer = setInterval(function() {
		
			index++;
			
			if(index == (images.length -1)) {
			
				index = -1;
			
			}
			
			var img = images.eq(index);
			
			
			img.show()
			.animate({
				width: 600
			}, 1500, function() {
			
				cursor.show().
			animate({
				left: 570
			}, 1500, 
			   function() {
			   
			   		$(this).hide().
			   		css('left', 0);
			   		
			   		img.hide().
					css('width', '0px');
			   
			});
			
					
			
			
			});
			
			
			
		
		
		}, 3000);
	
	};
	
	this.init = function() {
	
		prepare();
		autoSlide();
	
	};

}();

$(function() {

	Slider.init();

});
